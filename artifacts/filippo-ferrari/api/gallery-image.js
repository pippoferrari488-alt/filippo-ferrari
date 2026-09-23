export default async function handler(req, res) {
  try {
    const requestUrl = new URL(req.url, "https://filippo-ferrari.vercel.app");
    const raw = requestUrl.searchParams.get("url");

    if (!raw) {
      res.statusCode = 400;
      return res.end("Missing image URL");
    }

    let imageUrl;
    try {
      imageUrl = new URL(raw);
    } catch {
      res.statusCode = 400;
      return res.end("Invalid URL");
    }

    if (
      imageUrl.protocol !== "https:" ||
      imageUrl.hostname !== "yourbrand-18274.kxcdn.com"
    ) {
      res.statusCode = 403;
      return res.end("Image host not allowed");
    }

    const attempts = [
      {},
      { Referer: "https://filippo-ferrari-official.vercel.app/" },
      { Referer: "https://dadcg8.webwave.dev/" },
    ];

    let lastStatus = 0;

    for (const extraHeaders of attempts) {
      const response = await fetch(imageUrl.toString(), {
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          ...extraHeaders,
        },
      });

      lastStatus = response.status;

      if (!response.ok) continue;

      const type = response.headers.get("content-type") || "image/jpeg";

      if (!type.startsWith("image/")) continue;

      const bytes = Buffer.from(await response.arrayBuffer());

      res.statusCode = 200;
      res.setHeader("Content-Type", type);
      res.setHeader(
        "Cache-Control",
        "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800"
      );

      return res.end(bytes);
    }

    res.statusCode = 502;
    return res.end(`Upstream image unavailable (${lastStatus})`);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    return res.end(
      `Gallery proxy error: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
