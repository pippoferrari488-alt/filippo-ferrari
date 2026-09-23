import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const BASE = "https://yourbrand-18274.kxcdn.com/lib/dadcg8/";

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
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const headerRef = useIntersection();

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
        <div
          ref={headerRef.ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 text-center opacity-0 ${headerRef.visible ? "animate-fadeInUp" : ""}`}
        >
          <div className="divider-red mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            <span className="text-gradient">Galleria</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Momenti, emozioni e adrenalina catturati in pista. Clicca su una foto per ingrandirla.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => open(i)}
                className="gallery-item rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={img.src}
                  alt={`Filippo Ferrari ${i + 1}`}
                  className="img-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).closest("button")!.style.display = "none";
                  }}
                />
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
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={images[lightbox].full}
            alt={`Foto ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              // fall back to thumbnail
              (e.target as HTMLImageElement).src = images[lightbox].src;
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
