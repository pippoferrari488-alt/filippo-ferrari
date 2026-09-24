import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "/gallery/audi-r8-gt3/09_IMG_0927.jpg";
const ABOUT_IMG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_24/mm3aqfui/element_623/rwdMode_1/576x756/IMG_5399.webp";
const PARTNER_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_24/mm3aqfui/element_751/0/rwdMode_1/2400x490/99_cola_moncini_vanberlo_105-XL.jpg";

const stats = [
  { value: "2005", label: "Anno di nascita" },
  { value: "7", label: "Anni al primo kart" },
  { value: "2024", label: "Audi R8 GT3 · Test" },
  { value: "2025", label: "ACI Sport Contest" },
];

const career = [
  { year: "2012", event: "Primo kart 60 Mini", desc: "A soli sette anni sale per la prima volta su un kart" },
  { year: "2021", event: "Clio Cup", desc: "Debutto nelle competizioni automobilistiche a 16 anni" },
  { year: "2023", event: "Cupra TCR", desc: "Esperienza con la Cupra TCR, proseguendo il percorso nelle vetture turismo" },
  { year: "2024", event: "Audi R8 GT3", desc: "Test con l'Audi R8 GT3 di Tresor Audi Sport Italia, primo confronto diretto con una vettura GT3" },
  { year: "2025", event: "ACI Sport Contest", desc: "Selezione per Steering Wheel Super Salita di Wolf Racing Cars" },
];

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, visible } = useIntersection();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center opacity-0 ${visible ? "animate-fadeInUp" : ""} delay-${delay}`}
    >
      <div className="text-5xl md:text-6xl font-black text-gradient mb-2">{value}</div>
      <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useIntersection();
  const statsRef = useIntersection();
  const careerRef = useIntersection();
  const partnerRef = useIntersection();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[94vh] flex items-end overflow-hidden" ref={heroRef}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            transform: `translateY(${Math.min(scrollY * 0.18, 90)}px) scale(1.04)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-32">
          <div className="max-w-4xl">
            <div className="animate-fadeIn mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/15 bg-black/35 backdrop-blur text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase rounded-full text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Italian Racing Driver
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                ACI Sport licensed
              </span>
            </div>

            <h1 className="animate-fadeInUp text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.05em] leading-[0.88] mb-7">
              FILIPPO
              <br />
              <span className="text-gradient">FERRARI</span>
            </h1>

            <p className="animate-fadeInUp delay-100 text-xl md:text-2xl text-white max-w-3xl leading-snug font-semibold mb-4">
              Allacciate le cinture. Il motorsport è competizione, crescita ed emozione.
            </p>
            <p className="animate-fadeInUp delay-200 text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-9">
              Ogni curva aggiunge qualcosa al percorso, per chi la corre e per chi sceglie di viverla insieme.
            </p>

            <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/chi-sono">
                <span className="inline-flex items-center justify-center px-7 py-3.5 btn-red rounded font-semibold cursor-pointer">
                  Scopri di più
                </span>
              </Link>
              <Link href="/partner">
                <span className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded font-semibold cursor-pointer transition-all">
                  Partnership
                </span>
              </Link>
              <a
                href="/partner#scan-the-race"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-black/35 border border-red-500/35 hover:border-red-400/70 hover:bg-red-950/20 text-white rounded font-semibold transition-all"
              >
                Scan The Race
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute z-20 bottom-5 right-5 md:right-10 text-gray-400 hover:text-white transition-colors"
          aria-label="Scorri"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </section>

      {/* Stats */}
      <section
        id="about"
        ref={statsRef.ref as React.RefObject<HTMLElement>}
        className="py-16 bg-black border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} delay={(i + 1) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div
              ref={aboutRef.ref as React.RefObject<HTMLDivElement>}
              className={`relative opacity-0 ${aboutRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <div className="relative rounded-2xl overflow-hidden red-glow">
                <img
                  src={ABOUT_IMG}
                  alt="Filippo Ferrari in pista"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", maxHeight: "600px", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg">
                About me
              </div>
            </div>

            {/* Text */}
            <div
              className={`opacity-0 ${aboutRef.visible ? "animate-slideInRight" : ""} delay-200`}
            >
              <div className="divider-red mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Una storia nata<br />
                <span className="text-gradient">a tutta velocità</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Filippo Ferrari</strong> nasce a Roma nel 2005,
                  cresce in una famiglia di sportivi e appassionati di motori. Sin da bambino,
                  influenzato dal padre pilota di moto che ha corso anche la{" "}
                  <strong className="text-red-400">Parigi-Dakar</strong>, sviluppa una profonda
                  passione per la velocità.
                </p>
                <p>
                  A soli sette anni inizia con i kart e, dopo anni di esperienza nelle categorie{" "}
                  <strong className="text-white">125 monomarcia e KZ</strong>, debutta a 16 anni
                  nella <strong className="text-red-400">Clio Cup</strong>, proseguendo nel turismo
                  con la <strong className="text-white">Cupra TCR</strong> e, nel 2024, con un test sull'
                  <strong className="text-red-400">Audi R8 GT3</strong> di{" "}
                  <strong className="text-white">Tresor Audi Sport Italia</strong>.
                </p>
                <p>
                  Nel 2025 viene selezionato per il contest{" "}
                  <strong className="text-red-400">Steering Wheel Super Salita</strong> di{" "}
                  <strong className="text-white">Wolf Racing Cars</strong> con il supporto dell'{" "}
                  <strong className="text-white">ACI Sport</strong>.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/chi-sono">
                  <span className="inline-block px-6 py-3 btn-red rounded font-semibold cursor-pointer">
                    Scopri di più su di me
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section
        ref={careerRef.ref as React.RefObject<HTMLElement>}
        className="py-20 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 opacity-0 ${careerRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Il Percorso di{" "}
              <span className="text-gradient">Carriera</span>
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="timeline-line" />
            <div className="space-y-8">
              {career.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative pl-14 opacity-0 ${
                    careerRef.visible ? "animate-slideInRight" : ""
                  } delay-${(i + 1) * 100}`}
                >
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-red-900/40">
                    {item.year.slice(2)}
                  </div>
                  <div className="card-hover bg-[hsl(0_0%_8%)] border border-white/5 rounded-xl p-5">
                    <div className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.event}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section
        ref={partnerRef.ref as React.RefObject<HTMLElement>}
        className="relative py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${PARTNER_BG})`,
            backgroundPosition: "center 58%",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`opacity-0 ${partnerRef.visible ? "animate-fadeInUp" : ""}`}
          >
            <div className="divider-red mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Partners in Success
            </h2>
            <p className="text-xl text-red-400 font-semibold mb-6">
              Partner nella nostra corsa al successo...
            </p>
            <div className="text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
              <p>
                <strong className="text-white">Collaborare con Filippo</strong> significa
                entrare nel mondo del motorsport con{" "}
                <strong className="text-red-400">visibilità</strong>,{" "}
                <strong className="text-red-400">energia</strong> e{" "}
                <strong className="text-red-400">attivazioni</strong> costruite su misura.
              </p>
            </div>
            <blockquote className="border-l-4 border-red-500 pl-6 text-left my-8 max-w-2xl mx-auto">
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "I miei <strong className="text-white">partner</strong> non sono semplici{" "}
                <strong className="text-white">sponsor</strong>, ma{" "}
                <strong className="text-red-400">parte del mio team</strong>: insieme affrontiamo
                ogni curva con determinazione e costruiamo un percorso condiviso dentro e fuori dalla pista."
              </p>
            </blockquote>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-8">
              <Link href="/partner">
                <span className="inline-block px-8 py-4 btn-red rounded font-semibold text-base cursor-pointer">
                  Diventa Partner
                </span>
              </Link>
              <a
                href="/partner#scan-the-race"
                className="inline-block px-8 py-4 bg-red-950/25 border border-red-500/35 hover:border-red-400/70 hover:bg-red-950/40 text-white rounded font-semibold text-base transition-all"
              >
                Scan The Race
              </a>
              <Link href="/contatti">
                <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded font-semibold text-base cursor-pointer transition-all">
                  Contattami Ora
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
