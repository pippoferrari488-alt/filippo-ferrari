import { Link } from "wouter";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";
const BANNER_IMG = "https://i.imgur.com/uxCD3UP.jpeg";

const topImages = [
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_833/rwdMode_1/308x282/IMG_3647.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_832/rwdMode_1/369x348/IMG_5469.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_829/rwdMode_1/492x273/IMG_0030.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_834/rwdMode_1/582x309/4018ABFF-E0BD-430A-8856-8D2CBB3D9F7D.webp",
];

const carImages = [
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_818/IMG_2687.jpeg",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_819/6467715c-568a-4c6a-8603-b0222b19b85d.JPG",
  "https://i.imgur.com/w9OEbdU.jpeg",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_821/IMG_1650.jpg",
];

const phases = [
  {
    period: "2012 — 2020",
    title: "Il Karting",
    desc: "A soli sette anni sale per la prima volta su un kart 60 Mini. Dopo anni di impegno e risultati costanti nelle categorie karting 125 monomarcia e KZ, getta le basi di una carriera solida.",
  },
  {
    period: "2021",
    title: "Il Debutto in Auto",
    desc: "A 16 anni debutta nelle competizioni automobilistiche con una Clio Cup, dimostrando velocità e maturità sorprendenti per la sua età.",
  },
  {
    period: "2023",
    title: "Cupra TCR",
    desc: "Continua nel turismo con la Cupra TCR, con la quale consolida esperienza e performance stagione dopo stagione.",
  },
  {
    period: "2024",
    title: "Audi R8 GT3",
    desc: "Momento chiave della carriera: testa l'Audi R8 GT3 di Tresor Audi Sport Italia. Un'esperienza che segna il tanto desiderato passaggio verso il mondo Gran Turismo.",
  },
  {
    period: "2025",
    title: "ACI Sport Contest",
    desc: "Viene selezionato per il contest Steering Wheel Super Salita organizzato da Wolf Racing Cars con il supporto dell'ACI Sport, un riconoscimento importante del percorso di crescita.",
  },
];

export default function ChiSono() {
  const introRef = useIntersection();
  const phasesRef = useIntersection();
  const valuesRef = useIntersection();
  const galleryCarsRef = useIntersection();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 pb-12 animate-fadeInUp">
          <div className="divider-red mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Chi <span className="text-gradient">Sono</span>
          </h1>
        </div>
      </section>

      {/* Photo grid + bio */}
      <section
        ref={introRef.ref as React.RefObject<HTMLElement>}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo mosaic */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 opacity-0 ${
              introRef.visible ? "animate-scaleIn" : ""
            }`}
          >
            {topImages.map((src, i) => (
              <div key={i} className="gallery-item rounded-xl overflow-hidden aspect-square">
                <img
                  src={src}
                  alt={`Filippo Ferrari ${i + 1}`}
                  className="img-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).closest(".gallery-item")!.remove();
                  }}
                />
              </div>
            ))}
          </div>

          {/* Main bio */}
          <div
            className={`opacity-0 ${introRef.visible ? "animate-fadeInUp delay-200" : ""}`}
          >
            <div className="divider-red mb-5" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Filippo Ferrari,{" "}
              <span className="text-gradient">Roma, 4 dicembre 2005</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-5">
            <div
              className={`space-y-5 text-gray-300 leading-relaxed opacity-0 ${introRef.visible ? "animate-slideInLeft delay-300" : ""}`}
            >
              <p>
                Cresce in una{" "}
                <strong className="text-white">
                  famiglia di sportivi d'alto livello e appassionati di motori
                </strong>
                . Suo padre, anche lui pilota delle due ruote, ha partecipato e vinto in{" "}
                <strong className="text-red-400">
                  competizioni di enduro e rally italiane ed europee
                </strong>
                , prendendo parte anche alla leggendaria{" "}
                <strong className="text-white">Parigi-Dakar</strong>: è proprio da lì che nasce
                la sua passione per le corse.
              </p>
              <p>
                A soli <strong className="text-white">sette anni</strong> sale per la prima volta
                su un kart 60 Mini, e da quel momento capisce che la{" "}
                <strong className="text-red-400">velocità</strong> sarà parte della sua vita.
                Dopo anni di impegno nelle categorie <strong className="text-white">125 monomarcia e KZ</strong>,
                a 16 anni debutta nelle competizioni automobilistiche con una{" "}
                <strong className="text-red-400">Clio Cup</strong>.
              </p>
              <p>
                Nel <strong className="text-white">2023</strong> prosegue con la{" "}
                <strong className="text-red-400">Cupra TCR</strong>, consolidando esperienza e
                performance. Nel <strong className="text-white">2024</strong> vive il momento
                chiave della carriera testando l'{" "}
                <strong className="text-red-400">Audi R8 GT3</strong> di{" "}
                <strong className="text-white">Tresor Audi Sport Italia</strong>, segnando il
                passaggio verso il mondo Gran Turismo.
              </p>
            </div>
            <div
              className={`space-y-5 text-gray-300 leading-relaxed opacity-0 ${introRef.visible ? "animate-slideInRight delay-400" : ""}`}
            >
              <p>
                Nel <strong className="text-white">2025</strong> viene selezionato per il{" "}
                <strong className="text-red-400">contest Steering Wheel Super Salita</strong>{" "}
                organizzato da <strong className="text-white">Wolf Racing Cars</strong> con il
                supporto dell' <strong className="text-white">ACI Sport</strong>: un
                riconoscimento importante del percorso di crescita che sta costruendo passo dopo
                passo.
              </p>
              <p>
                <strong className="text-white">Filippo</strong> è innanzitutto un ragazzo{" "}
                <strong className="text-red-400">determinato</strong>,{" "}
                <strong className="text-red-400">appassionato</strong> e con un{" "}
                <strong className="text-white">approccio professionale</strong> non solo allo
                sport, ma anche alla vita: mette il massimo impegno in ogni progetto, dentro e
                fuori dalla pista.
              </p>
              <p>
                Il suo obiettivo è{" "}
                <strong className="text-white">trasmettere la passione</strong>, la dedizione e i
                valori che lo guidano a più persone possibili, perché crede che il motorsport non
                sia solo velocità, ma anche{" "}
                <strong className="text-red-400">
                  crescita personale, sacrificio e condivisione
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career phases */}
      <section
        ref={phasesRef.ref as React.RefObject<HTMLElement>}
        className="py-20 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-14 opacity-0 ${
              phasesRef.visible ? "animate-fadeInUp" : ""
            }`}
          >
            <div className="divider-red mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Nel corso degli <span className="text-gradient">anni</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div
                key={phase.period}
                className={`card-hover bg-[hsl(0_0%_8%)] border border-white/5 rounded-2xl p-6 opacity-0 ${
                  phasesRef.visible ? "animate-fadeInUp" : ""
                } delay-${(i + 1) * 100}`}
              >
                <div className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-2">
                  {phase.period}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={BANNER_IMG} alt="Filippo in pista" className="img-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Vuoi supportarmi?{" "}
              <span className="text-gradient">Contattami!</span>
            </h3>
            <Link href="/contatti">
              <span className="inline-block px-8 py-3 btn-red rounded font-semibold cursor-pointer">
                Contatta
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Car gallery */}
      <section
        ref={galleryCarsRef.ref as React.RefObject<HTMLElement>}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 opacity-0 ${
              galleryCarsRef.visible ? "animate-fadeInUp" : ""
            }`}
          >
            <div className="divider-red mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Le <span className="text-gradient">auto</span> in gara
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carImages.map((src, i) => (
              <div
                key={i}
                className={`gallery-item rounded-xl overflow-hidden opacity-0 ${
                  galleryCarsRef.visible ? "animate-scaleIn" : ""
                } delay-${(i + 1) * 100}`}
                style={{ aspectRatio: "4/3" }}
              >
                <img src={src} alt={`Auto ${i + 1}`} className="img-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galleria">
              <span className="inline-block px-8 py-3 btn-red rounded font-semibold cursor-pointer">
                Vai alla Galleria
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
