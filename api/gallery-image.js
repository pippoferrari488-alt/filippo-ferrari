module.exports = async function handler(req, res) {
  const raw = Array.isArray(req.query?.url) ? req.query.url[0] : req.query?.url;

  if (!raw) {
    return res.status(400).send("Missing image URL");
  }

  let url;
  try {
    url = new URL(raw);
  } catch {
    return res.status(400).send("Invalid URL");
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== "yourbrand-18274.kxcdn.com"
  ) {
    return res.status(403).send("Image host not allowed");
  }

  const referrers = [
    "https://filippo-ferrari-official.vercel.app/",
    "https://dadcg8.webwave.dev/",
    null,
  ];

  let upstream = null;

  for (const referer of referrers) {
    try {
      const headers = {
        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0",
      };

      if (referer) headers.Referer = referer;

      const r = await fetch(url.toString(), {
        headers,
        redirect: "follow",
      });

      if (r.ok) {
        upstream = r;
        break;
      }
    } catch {}
  }

  if (!upstream) {
    return res.status(404).send("Image unavailable");
  }

  const type = upstream.headers.get("content-type") || "image/jpeg";

  if (!type.startsWith("image/")) {
    return res.status(502).send("Invalid upstream content");
  }

  const buffer = Buffer.from(await upstream.arrayBuffer());

  res.setHeader("Content-Type", type);
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800"
  );

  return res.status(200).send(buffer);
};
