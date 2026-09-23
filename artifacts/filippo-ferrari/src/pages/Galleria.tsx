import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const BASE = "https://yourbrand-18274.kxcdn.com/lib/dadcg8/";
const HERO_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";
const proxyImage = (url: string) => `/api/gallery-image?url=${encodeURIComponent(url)}`;

const images = [
  { src: "https://yourbrand-18274.kxcdn.com/files/dynamicContent/sites/dadcg8/images/it/webpage_25/mm3aqfhw/element_657/0/IMG_8727-mky6kak2.webp", full: "https://yourbrand-18274.kxcdn.com/lib/dadcg8/IMG_8727-mky6kak2-mkymhyxu.jpeg" },
  { src: BASE + "99_cola-moncini_2011-XL-mkuapq9i.jpg", full: BASE + "99_cola-moncini_2011-XL-mkuapq9i.jpg" },
  { src: BASE + "99_cola_moncini_vanberlo_105-XL-mkuaru43.jpg", full: BASE + "99_cola_moncini_vanberlo_105-XL-mkuaru43.jpg" },
  { src: BASE + "99_moncini-cola-vanberlo_402-XL-mkuar7pp.jpg", full: BASE + "99_moncini-cola-vanberlo_402-XL-mkuar7pp.jpg" },
  { src: BASE + "99_moncini-cola-vanberlo_001-XL-mkubc66z.jpg", full: BASE + "99_moncini-cola-vanberlo_001-XL-mkubc66z.jpg" },
  { src: BASE + "99_cola_moncini_vanberlo_401-XL-mkubenqb.jpg", full: BASE + "99_cola_moncini_vanberlo_401-XL-mkubenqb.jpg" },
  { src: BASE + "99_cola_moncini_vanberlo_712-XL-mkuxxoo2.jpg", full: BASE + "99_cola_moncini_vanberlo_712-XL-mkuxxoo2.jpg" },
  { src: BASE + "99_Cola_A_Moncini_L_003-XL-mkuyd8tk.jpg", full: BASE + "99_Cola_A_Moncini_L_003-XL-mkuyd8tk.jpg" },
  { src: BASE + "99_Cola_A_Moncini_L_003_-XL-mkv3l91m.jpg", full: BASE + "99_Cola_A_Moncini_L_003_-XL-mkv3l91m.jpg" },
  { src: BASE + "99_Cola_A_Moncini_L__V_188-5K-mkv3kpcu.jpg", full: BASE + "99_Cola_A_Moncini_L__V_188-5K-mkv3kpcu.jpg" },
  { src: BASE + "90747509-96b8-4f90-b34b-66b2eec703a7-mky6clz9.JPG", full: BASE + "90747509-96b8-4f90-b34b-66b2eec703a7-mky6clz9.JPG" },
  { src: BASE + "99_cola-moncini-vanberlo_701-XL-mkv3wfny.jpg", full: BASE + "99_cola-moncini-vanberlo_701-XL-mkv3wfny.jpg" },
  { src: BASE + "IMG_8013-mkv40u9s.JPG", full: BASE + "IMG_8013-mkv40u9s.JPG" },
  { src: BASE + "IMG_5399-mky6glpy.jpeg", full: BASE + "IMG_5399-mky6glpy.jpeg" },
  { src: BASE + "99_Cola_A_Moncini_L__V_188-5K-mkv3kpcu-mkv3mxdb.jpg", full: BASE + "99_Cola_A_Moncini_L__V_188-5K-mkv3kpcu-mkv3mxdb.jpg" },
  { src: BASE + "IMG_5441-mky6hrfj.jpeg", full: BASE + "IMG_5441-mky6hrfj.jpeg" },
  { src: BASE + "IMG_5432-mky6hgfy.jpeg", full: BASE + "IMG_5432-mky6hgfy.jpeg" },
  { src: BASE + "IMG_5447-mky6i299.jpeg", full: BASE + "IMG_5447-mky6i299.jpeg" },
  { src: BASE + "99_Cola_A_Moncini_L_002_-XL-mkv3top6.jpg", full: BASE + "99_Cola_A_Moncini_L_002_-XL-mkv3top6.jpg" },
  { src: BASE + "IMG_5420-mky6h5ht.jpeg", full: BASE + "IMG_5420-mky6h5ht.jpeg" },
  { src: BASE + "IMG_5410-mky6gssn.jpeg", full: BASE + "IMG_5410-mky6gssn.jpeg" },
  { src: BASE + "IMG_5474-mky6ivu9.jpeg", full: BASE + "IMG_5474-mky6ivu9.jpeg" },
  { src: BASE + "IMG_5461-mky6id6u.jpeg", full: BASE + "IMG_5461-mky6id6u.jpeg" },
  { src: BASE + "IMG_5469-mky6iktg.jpeg", full: BASE + "IMG_5469-mky6iktg.jpeg" },
  { src: BASE + "IMG_2667-mky6efef.jpeg", full: BASE + "IMG_2667-mky6efef.jpeg" },
  { src: BASE + "IMG_2687-mky6emjj.jpeg", full: BASE + "IMG_2687-mky6emjj.jpeg" },
  { src: BASE + "B867CEE7-3526-4506-B3E9-F21206A87A1F-mky6cvqx.JPG", full: BASE + "B867CEE7-3526-4506-B3E9-F21206A87A1F-mky6cvqx.JPG" },
  { src: BASE + "3B725AD5-1966-4D1E-B958-77B993208D59-mky6bzdp.JPG", full: BASE + "3B725AD5-1966-4D1E-B958-77B993208D59-mky6bzdp.JPG" },
  { src: BASE + "IMG_0030-mky6d002.JPG", full: BASE + "IMG_0030-mky6d002.JPG" },
  { src: BASE + "A2B5FE72-1008-4C2A-8B25-4CACF5560781-mky6cocb.JPEG", full: BASE + "A2B5FE72-1008-4C2A-8B25-4CACF5560781-mky6cocb.JPEG" },
  { src: BASE + "IMG_1650-mkv41drm.jpg", full: BASE + "IMG_1650-mkv41drm.jpg" },
  { src: BASE + "4018ABFF-E0BD-430A-8856-8D2CBB3D9F7D-mky6cglg.JPG", full: BASE + "4018ABFF-E0BD-430A-8856-8D2CBB3D9F7D-mky6cglg.JPG" },
  { src: BASE + "IMG_1378-mky6d6k1.JPG", full: BASE + "IMG_1378-mky6d6k1.JPG" },
  { src: BASE + "IMG_1617-mky6djcp.jpeg", full: BASE + "IMG_1617-mky6djcp.jpeg" },
  { src: BASE + "IMG_8060-mky6j7ec.jpeg", full: BASE + "IMG_8060-mky6j7ec.jpeg" },
  { src: BASE + "IMG_0946-mky6d3mw.JPG", full: BASE + "IMG_0946-mky6d3mw.JPG" },
  { src: BASE + "6467715c-568a-4c6a-8603-b0222b19b85d-mky6cic4.JPG", full: BASE + "6467715c-568a-4c6a-8603-b0222b19b85d-mky6cic4.JPG" },
  { src: BASE + "09300524-c3c6-4a63-8f70-f18d5ab37d0f-mky6cjwl.JPG", full: BASE + "09300524-c3c6-4a63-8f70-f18d5ab37d0f-mky6cjwl.JPG" },
  { src: BASE + "IMG_8066-mky6jilm.jpeg", full: BASE + "IMG_8066-mky6jilm.jpeg" },
  { src: BASE + "IMG_0200-mky6d1kz.JPG", full: BASE + "IMG_0200-mky6d1kz.JPG" },
  { src: BASE + "IMG_2581-mky6duxm.jpeg", full: BASE + "IMG_2581-mky6duxm.jpeg" },
  { src: BASE + "IMG_8123-mky6k4al.jpeg", full: BASE + "IMG_8123-mky6k4al.jpeg" },
  { src: BASE + "IMG_2582-mky6e6rc.jpeg", full: BASE + "IMG_2582-mky6e6rc.jpeg" },
];

export default function Galleria() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headerRef = useIntersection();

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  useEffect(() => {
    if (lightbox === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") {
        setLightbox((l) =>
          l !== null ? (l - 1 + images.length) % images.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightbox((l) =>
          l !== null ? (l + 1) % images.length : null
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div
          ref={headerRef.ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-14 opacity-0 ${
            headerRef.visible ? "animate-fadeInUp" : ""
          }`}
        >
          <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
            Media
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            <span className="text-gradient">Galleria</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Una selezione di immagini dal percorso sportivo, tra pista, paddock e momenti vissuti nel motorsport.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-12">
            <div className="divider-red mb-4" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
              Photo Selection
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white">
              Momenti dal <span className="text-gradient">percorso</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
              Apri un'immagine per visualizzarla a pieno formato e scorrere l'intera selezione.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => open(i)}
                aria-label={`Apri foto ${i + 1}`}
                className="gallery-item group relative rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-red-500/35 hover:-translate-y-1"
                style={{ aspectRatio: i % 9 === 0 ? "4/5" : "1/1" }}
              >
                <img
                  src={img.src}
                  alt={`Filippo Ferrari - immagine ${i + 1}`}
                  className="img-cover"
                  loading={i < 6 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    if (el.dataset.proxy !== "1") {
                      el.dataset.proxy = "1";
                      el.src = proxyImage(img.src);
                    } else {
                      el.closest("button")!.style.display = "none";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-3 bottom-3 text-[10px] font-semibold tracking-[0.16em] uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Apri
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 lightbox flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizzazione foto"
        >
          <button
            onClick={close}
            aria-label="Chiudi foto"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto precedente"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={images[lightbox].full}
            alt={`Foto ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              const step = el.dataset.proxyStep || "0";

              if (step === "0") {
                el.dataset.proxyStep = "1";
                el.src = proxyImage(images[lightbox].full);
              } else if (step === "1") {
                el.dataset.proxyStep = "2";
                el.src = proxyImage(images[lightbox].src);
              }
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Foto successiva"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/55 border border-white/10 text-gray-300 text-xs tracking-wider">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
