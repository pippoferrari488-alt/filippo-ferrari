import { useEffect } from "react";
import { useLocation } from "wouter";

const BASE_URL = "https://filippo-ferrari.vercel.app";

const pages: Record<string,{title:string;description:string}> = {
  "/": {
    title:"Filippo Ferrari | Italian Racing Driver",
    description:"Sito ufficiale di Filippo Ferrari, racing driver italiano. Profilo, percorso nel motorsport, media, partnership e contatti."
  },
  "/chi-sono": {
    title:"Filippo Ferrari | Profilo e percorso",
    description:"Profilo e percorso sportivo di Filippo Ferrari: dal karting alle vetture turismo, fino alle esperienze con Audi R8 GT3 e Wolf Racing Cars."
  },
  "/partner": {
    title:"Filippo Ferrari | Partnership Motorsport",
    description:"Partnership motorsport con Filippo Ferrari: comunicazione, attivazioni su misura e il concept Scan The Race."
  },
  "/galleria": {
    title:"Filippo Ferrari | Galleria Motorsport",
    description:"Galleria fotografica del percorso di Filippo Ferrari: Audi R8 GT3, Wolf Racing Cars, Clio Cup, Cupra TCR e karting."
  },
  "/contatti": {
    title:"Filippo Ferrari | Contatti",
    description:"Contatti ufficiali di Filippo Ferrari per opportunità sportive, partnership, media e collaborazioni professionali."
  },
  "/privacy": {
    title:"Filippo Ferrari | Privacy Policy",
    description:"Informativa sul trattamento dei dati personali inviati attraverso il sito ufficiale di Filippo Ferrari."
  },
};

function meta(selector:string,content:string){
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content",content);
}

export default function SeoManager(){
  const [location]=useLocation();

  useEffect(()=>{
    const path=location.split("#")[0].replace(/\/+$/,"")||"/";
    const page=pages[path]??pages["/"];
    const canonical=path==="/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;

    document.title="Filippo Ferrari";

    meta('meta[name="description"]',page.description);
    meta('meta[property="og:title"]',page.title);
    meta('meta[property="og:description"]',page.description);
    meta('meta[property="og:url"]',canonical);
    meta('meta[name="twitter:title"]',page.title);
    meta('meta[name="twitter:description"]',page.description);

    const link=document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if(link) link.href=canonical;

  },[location]);

  return null;
}
