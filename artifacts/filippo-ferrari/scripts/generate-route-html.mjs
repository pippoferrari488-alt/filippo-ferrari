import fs from "node:fs";
import path from "node:path";

const dist=path.resolve("dist/public");
const base=fs.readFileSync(path.join(dist,"index.html"),"utf8");
const B="https://filippo-ferrari.vercel.app";

const pages={
 "chi-sono":[
   "Filippo Ferrari | Profilo e percorso",
   "Profilo e percorso sportivo di Filippo Ferrari: dal karting alle vetture turismo, fino alle esperienze con Audi R8 GT3 e Wolf Racing Cars."
 ],
 "partner":[
   "Filippo Ferrari | Partnership Motorsport",
   "Partnership motorsport con Filippo Ferrari: comunicazione, attivazioni su misura e il concept Scan The Race."
 ],
 "galleria":[
   "Filippo Ferrari | Galleria Motorsport",
   "Galleria fotografica del percorso di Filippo Ferrari: Audi R8 GT3, Wolf Racing Cars, Clio Cup, Cupra TCR e karting."
 ],
 "contatti":[
   "Filippo Ferrari | Contatti",
   "Contatti ufficiali di Filippo Ferrari per opportunità sportive, partnership, media e collaborazioni professionali."
 ],
 "privacy":[
   "Filippo Ferrari | Privacy Policy",
   "Informativa sul trattamento dei dati personali inviati attraverso il sito ufficiale di Filippo Ferrari."
 ]
};

const esc=v=>v
 .replaceAll("&","&amp;")
 .replaceAll('"',"&quot;")
 .replaceAll("<","&lt;")
 .replaceAll(">","&gt;");

const meta=(html,attr,key,val)=>
 html.replace(
   new RegExp(`<meta(?=[^>]*${attr}="${key}")[^>]*>`,"i"),
   `<meta ${attr}="${key}" content="${esc(val)}" />`
 );

for(const [route,[title,desc]] of Object.entries(pages)){
  const url=`${B}/${route}`;
  let html=base;

  html=html.replace(
    /<title>[\s\S]*?<\/title>/i,
    "<title>Filippo Ferrari</title>"
  );

  html=meta(html,"name","description",desc);
  html=meta(html,"property","og:title",title);
  html=meta(html,"property","og:description",desc);
  html=meta(html,"property","og:url",url);
  html=meta(html,"name","twitter:title",title);
  html=meta(html,"name","twitter:description",desc);

  html=html.replace(
    /<link(?=[^>]*rel="canonical")[^>]*>/i,
    `<link rel="canonical" href="${url}" />`
  );

  const dir=path.join(dist,route);

  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(
    path.join(dir,"index.html"),
    html
  );
}

console.log("✓ HTML SEO specifici generati");
