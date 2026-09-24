import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG =
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";

const images = [
  "/gallery/audi-r8-gt3/01_99_cola_moncini_vanberlo_401-XL.jpg",
  "/gallery/audi-r8-gt3/02_IMG_7335.jpg",
  "/gallery/audi-r8-gt3/03_IMG_7337.jpg",
  "/gallery/audi-r8-gt3/04_IMG_9608.jpg",
  "/gallery/audi-r8-gt3/05_IMG_9609.jpg",
  "/gallery/audi-r8-gt3/06_IMG_9606.1.jpg",
  "/gallery/audi-r8-gt3/07_IMG_9610.1.jpg",
  "/gallery/audi-r8-gt3/08_IMG_0929.jpg",
  "/gallery/audi-r8-gt3/09_IMG_0927.jpg",
  "/gallery/audi-r8-gt3/10_IMG_0932.1.jpg",
  "/gallery/audi-r8-gt3/11_IMG_8166.jpg",
  "/gallery/audi-r8-gt3/12_IMG_8388.jpg",
  "/gallery/audi-r8-gt3/13_IMG_0923.jpg",
  "/gallery/audi-r8-gt3/14_IMG_0924.jpg",
  "/gallery/audi-r8-gt3/15_IMG_0925.jpg",
  "/gallery/audi-r8-gt3/16_IMG_0926.jpg",
  "/gallery/audi-r8-gt3/17_IMG_0928.jpg",
  "/gallery/audi-r8-gt3/18_IMG_0930.jpg",
  "/gallery/audi-r8-gt3/19_IMG_0931.jpg",
  "/gallery/audi-r8-gt3/20_IMG_0939.jpg",
  "/gallery/audi-r8-gt3/21_IMG_0940.jpg",
  "/gallery/audi-r8-gt3/22_IMG_0941.jpg",
  "/gallery/audi-r8-gt3/23_IMG_0942.jpg",
  "/gallery/audi-r8-gt3/24_IMG_0943.jpg",
  "/gallery/audi-r8-gt3/25_IMG_0944.jpg",
  "/gallery/audi-r8-gt3/26_IMG_0945.jpg",
  "/gallery/audi-r8-gt3/27_IMG_0946.jpg",
  "/gallery/audi-r8-gt3/28_IMG_0947.jpg",
  "/gallery/audi-r8-gt3/29_IMG_0948.jpg",
  "/gallery/audi-r8-gt3/30_IMG_0949.jpg",
  "/gallery/audi-r8-gt3/31_IMG_0950.jpg",
  "/gallery/audi-r8-gt3/32_IMG_1161.jpg",
  "/gallery/audi-r8-gt3/33_IMG_8013.1.jpg",
  "/gallery/audi-r8-gt3/34_IMG_8014.1.jpg",
  "/gallery/audi-r8-gt3/35_IMG_8384.jpg",
  "/gallery/audi-r8-gt3/36_IMG_8385.jpg",
  "/gallery/audi-r8-gt3/37_IMG_8386.jpg",
  "/gallery/audi-r8-gt3/38_IMG_8387.jpg",
  "/gallery/audi-r8-gt3/39_IMG_8478.jpg",
  "/gallery/audi-r8-gt3/40_IMG_8506.jpg",
  "/gallery/audi-r8-gt3/41_IMG_8720.jpg",
  "/gallery/audi-r8-gt3/42_IMG_8721.jpg",
  "/gallery/audi-r8-gt3/43_IMG_8722.jpg",
  "/gallery/audi-r8-gt3/44_IMG_8727.jpg",
  "/gallery/audi-r8-gt3/45_IMG_1162.jpg",
  "/gallery/audi-r8-gt3/46_IMG_9082.2.jpg",
  "/gallery/audi-r8-gt3/47_CA78CEEF-CBFA-44DB-856F-DE279F439A0E.jpeg",
  "/gallery/audi-r8-gt3/48_8D4D771F-D89E-4960-8C98-E8E693018E81.jpeg",
  "/gallery/audi-r8-gt3/49_A74285D1-8755-4EA0-8A62-323FF757EB08.jpeg",
  "/gallery/audi-r8-gt3/50_C2F17421-44E8-4E14-9DD4-3E462C611191.jpeg",
  "/gallery/audi-r8-gt3/51_C332BDB2-DD39-43C9-B1FC-0028568F67A3.jpeg",
  "/gallery/audi-r8-gt3/52_4F0073C7-2096-49DF-B926-FF1C2E3CC3D4.jpeg",
  "/gallery/audi-r8-gt3/53_AA40FA1A-C6C6-4F97-8845-2FE37902396C.jpg",
  "/gallery/wolf/01_E4908A99-9B76-447B-88D2-B18DE4A469F3.jpeg",
  "/gallery/wolf/02_4018ABFF-E0BD-430A-8856-8D2CBB3D9F7D.jpg",
  "/gallery/wolf/03_4E1022B5-1F61-4122-A53D-6F91CB5A5404.jpeg",
  "/gallery/wolf/04_A720F08E-FA9A-4483-99D8-F4C4A54BFA43.jpeg",
  "/gallery/wolf/05_B55A19DE-7CC0-4335-AFC3-2FF90843E259.jpeg",
  "/gallery/wolf/06_1D6BA27A-51ED-4D5B-B552-805E4589744B.2.jpg",
  "/gallery/wolf/07_5B30270F-7D56-4582-A1A8-8A7362DC1069.1.jpg",
  "/gallery/wolf/09_34C2DC9A-8FD6-4489-ADD2-C85812BA9BF6.jpeg",
  "/gallery/clio-cup/01_IMG_1653.jpeg",
  "/gallery/clio-cup/02_IMG_1652.jpeg",
  "/gallery/clio-cup/03_IMG_1654.jpeg",
  "/gallery/clio-cup/04_IMG_1651.jpeg",
  "/gallery/clio-cup/05_IMG_3647.jpeg",
  "/gallery/clio-cup/06_IMG_5044.jpeg",
  "/gallery/cupra-tcr/01_IMG_1676.jpeg",
  "/gallery/cupra-tcr/02_IMG_1715.jpeg",
  "/gallery/cupra-tcr/03_IMG_1617.jpeg",
  "/gallery/kart/01_IMG_6982.jpeg",
  "/gallery/kart/02_IMG_6991.jpeg",
  "/gallery/kart/03_IMG_1378.jpeg",
  "/gallery/kart/04_IMG_0946.jpeg",
  "/gallery/kart/05_IMG_0030.jpeg"
] as const;

export default function Galleria() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headerRef = useIntersection();

  const open = (index: number) => setLightbox(index);
  const close = () => setLightbox(null);

  const prev = () =>
    setLightbox((current) =>
      current !== null ? (current - 1 + images.length) % images.length : null,
    );

  const next = () =>
    setLightbox((current) =>
      current !== null ? (current + 1) % images.length : null,
    );

  useEffect(() => {
    if (lightbox === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
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
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundPosition: "38% 66%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

        <div
          ref={headerRef.ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 opacity-0 ${
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
            Immagini dal percorso sportivo, dalle esperienze più recenti fino alle origini nel karting.
          </p>
        </div>
      </section>

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
              Una selezione continua di immagini dal percorso in pista.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((src, index) => {
              const featured = index % 13 === 0;

              return (
                <button
                  key={src}
                  onClick={() => open(index)}
                  aria-label={`Apri foto ${index + 1}`}
                  className="gallery-item group relative rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-red-500/35 hover:-translate-y-1"
                  style={{ aspectRatio: featured ? "4/5" : "1/1" }}
                >
                  <img
                    src={src}
                    alt={`Filippo Ferrari - immagine ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute left-3 bottom-3 text-[10px] font-semibold tracking-[0.16em] uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Apri
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
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
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="Foto precedente"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>

          <img
            src={images[lightbox]}
            alt={`Filippo Ferrari - immagine ${lightbox + 1}`}
            className="max-w-full max-h-[84vh] object-contain rounded-lg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Foto successiva"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 border border-white/10 text-xs text-gray-300">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
