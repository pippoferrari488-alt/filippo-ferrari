import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  Flag,
  Gauge,
  MessageSquareText,
  Target,
  Users,
} from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG =
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_24/mm3aqfui/element_620/rwdMode_1/2400x700/99_cola_moncini_vanberlo_401-XL.webp";
const PROFILE_IMG =
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_24/mm3aqfui/element_623/rwdMode_1/576x756/IMG_5399.webp";
const PROGRAMME_BG =
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_24/mm3aqfui/element_751/0/rwdMode_1/2400x490/99_cola_moncini_vanberlo_105-XL.jpg";

const profile = [
  { label: "Nazionalità", value: "ITA" },
  { label: "Anno di nascita", value: "2005" },
  { label: "Licenza", value: "ACI Sport" },
  { label: "Percorso", value: "Kart → GT" },
];

const experience = [
  {
    year: "2012",
    title: "Karting",
    text: "Inizio del percorso sportivo a sette anni, con esperienza nelle categorie 60 Mini, 125 monomarcia e KZ.",
  },
  {
    year: "2021",
    title: "Clio Cup",
    text: "Debutto nelle competizioni automobilistiche e primo passaggio strutturato dalle monoposto kart alle vetture turismo.",
  },
  {
    year: "2023",
    title: "Cupra TCR",
    text: "Esperienza nel turismo ad alte prestazioni, con ulteriore crescita nella gestione della vettura e del weekend di gara.",
  },
  {
    year: "2024",
    title: "Audi R8 GT3",
    text: "Esperienza/test con Audi R8 GT3 di Tresor Audi Sport Italia: un primo contatto concreto con il mondo GT.",
  },
  {
    year: "2025",
    title: "ACI Sport Contest",
    text: "Selezione per Steering Wheel Super Salita di Wolf Racing Cars con il supporto di ACI Sport.",
  },
];

const professionalPillars = [
  {
    icon: Gauge,
    title: "Performance",
    text: "Preparazione, metodo e continuità: ogni sessione viene affrontata come un passaggio di crescita.",
  },
  {
    icon: BarChart3,
    title: "Data approach",
    text: "Un approccio orientato all'analisi e al confronto, per trasformare sensazioni e dati in indicazioni utili.",
  },
  {
    icon: MessageSquareText,
    title: "Technical feedback",
    text: "Comunicazione chiara con il team e attenzione al feedback tecnico come parte del lavoro di sviluppo.",
  },
  {
    icon: Users,
    title: "Team integration",
    text: "Il risultato nasce dal lavoro con ingegneri, tecnici e struttura: il pilota è una parte del sistema, non un elemento isolato.",
  },
];

const partnershipAreas = [
  {
    icon: Flag,
    title: "Brand Exposure",
    text: "Presenza del marchio nel contesto motorsport e nei contenuti legati all'attività sportiva.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Hospitality & B2B",
    text: "Esperienze, relazioni e occasioni di contatto da costruire intorno al progetto sportivo.",
  },
  {
    icon: Users,
    title: "Digital Content",
    text: "Contenuti e storytelling pensati per valorizzare la partnership anche fuori dal circuito.",
  },
  {
    icon: Target,
    title: "Customer Activation",
    text: "Attivazioni misurabili e iniziative dedicate, anche tramite Scan The Race e soluzioni QR concordate con il partner.",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const profileRef = useIntersection();
  const experienceRef = useIntersection();
  const professionalRef = useIntersection();
  const programmeRef = useIntersection();
  const partnerRef = useIntersection();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-[94vh] flex items-end overflow-hidden">
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
                GT Racing Driver · Italy
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

            <p className="animate-fadeInUp delay-100 text-xl md:text-2xl text-white max-w-2xl leading-snug font-medium mb-4">
              Performance. Progress. Partnership.
            </p>
            <p className="animate-fadeInUp delay-200 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-9">
              Un percorso costruito dal karting alle vetture GT, con l'obiettivo di trasformare ogni esperienza in valore sportivo, tecnico e professionale.
            </p>

            <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row gap-3">
              <Link href="/chi-sono">
                <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                  Driver Profile <ArrowRight size={17} />
                </span>
              </Link>
              <a
                href="#programme-2027"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/8 border border-white/15 hover:bg-white/12 text-white rounded font-semibold transition-all"
              >
                2027 Programme
              </a>
              <Link href="/partner">
                <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/30 border border-white/15 hover:border-red-500/50 text-white rounded font-semibold cursor-pointer transition-all">
                  Partnership
                </span>
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#racing-profile"
          className="absolute z-20 bottom-5 right-5 md:right-10 text-gray-400 hover:text-white transition-colors"
          aria-label="Scorri"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </section>

      <section className="bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
          {profile.map((item, index) => (
            <div
              key={item.label}
              className={`py-6 md:py-8 ${index % 2 === 0 ? "border-r" : ""} lg:border-r lg:last:border-r-0 border-white/5 px-4 md:px-6`}
            >
              <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">
                {item.label}
              </div>
              <div className="text-lg md:text-2xl font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="racing-profile"
        ref={profileRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-[hsl(0_0%_4%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <div className={`opacity-0 ${profileRef.visible ? "animate-slideInLeft" : ""}`}>
            <div className="divider-red mb-5" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
              Racing Profile
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[0.98] mb-7">
              Costruire il pilota,
              <br />
              non soltanto il giro veloce.
            </h2>
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Filippo Ferrari nasce a Roma nel 2005 e inizia il proprio percorso nel motorsport a sette anni. Dal karting passa alle competizioni automobilistiche con Clio Cup e Cupra TCR, fino all'esperienza con Audi R8 GT3 nel 2024.
              </p>
              <p>
                Il prossimo passo è costruire un percorso GT sempre più strutturato: esperienza, metodo, preparazione e capacità di lavorare all'interno di un team sono al centro del progetto.
              </p>
            </div>
            <Link href="/chi-sono">
              <span className="mt-8 inline-flex items-center gap-2 text-white font-semibold cursor-pointer group">
                Profilo completo
                <ArrowRight size={17} className="text-red-500 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div className={`relative opacity-0 ${profileRef.visible ? "animate-slideInRight" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={PROFILE_IMG}
                alt="Filippo Ferrari"
                className="w-full h-[520px] md:h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Approach</div>
                <div className="text-xl md:text-2xl text-white font-bold">
                  Professionalità dentro e fuori dalla pista.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={experienceRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-[hsl(0_0%_7%)] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 md:mb-16 opacity-0 ${experienceRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mb-5" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
              Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Un percorso in evoluzione.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 border border-white/8 rounded-2xl overflow-hidden bg-black/30">
            {experience.map((item, index) => (
              <div
                key={item.year}
                className={`p-6 md:p-7 min-h-[250px] flex flex-col border-white/8 ${
                  index < experience.length - 1 ? "xl:border-r" : ""
                } ${index < experience.length - 1 ? "border-b xl:border-b-0" : ""}`}
              >
                <div className="text-red-400 font-black text-2xl mb-8">{item.year}</div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={professionalRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mb-14 opacity-0 ${professionalRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mb-5" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
              Beyond the lap time
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Essere veloci è solo una parte del lavoro.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Un progetto professionale richiede metodo, comunicazione, capacità di integrarsi nel team e rappresentare correttamente chi sceglie di farne parte.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {professionalPillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-hover rounded-2xl border border-white/8 bg-white/[0.025] p-6 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8">
                  <Icon size={21} className="text-red-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="programme-2027"
        ref={programmeRef.ref as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PROGRAMME_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl opacity-0 ${programmeRef.visible ? "animate-slideInLeft" : ""}`}>
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
              The Next Chapter
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.98] mb-7">
              2027.
              <br />
              Il prossimo passo.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-5">
              L'obiettivo è costruire un programma GT3 strutturato, credibile e sostenibile, come passaggio verso un percorso sempre più competitivo nel GT e nell'endurance internazionale.
            </p>
            <p className="text-gray-400 leading-relaxed mb-9">
              Non un traguardo isolato, ma un progetto da sviluppare con team, partner e realtà che condividano una visione di medio-lungo periodo.
            </p>
            <Link href="/contatti">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                Parliamo del progetto <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={partnerRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start opacity-0 ${partnerRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="lg:sticky lg:top-28">
              <div className="divider-red mb-5" />
              <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
                Partnership Platform
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Oltre il logo sulla vettura.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Una partnership motorsport può diventare uno strumento di relazione, contenuto e attivazione. L'obiettivo è costruire proposte coerenti con il business del partner, non semplice esposizione passiva.
              </p>
              <Link href="/partner">
                <span className="inline-flex items-center gap-2 text-white font-semibold cursor-pointer group">
                  Scopri le opportunità
                  <ArrowRight size={17} className="text-red-500 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {partnershipAreas.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-black/40 border border-white/8 p-6 md:p-7">
                  <Icon size={22} className="text-red-400 mb-8" />
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-red-500/20 bg-red-950/10 p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.18em] text-red-400 font-semibold mb-3">
                  Scan The Race
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Un'attivazione tramite QR pensata per collegare il pubblico alle aziende partner e alle iniziative promozionali definite da ciascun brand, trasformando la presenza nel motorsport in un punto di contatto concreto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
            Motorsport · Brand · Partnership
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Costruiamo il prossimo capitolo.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-9">
            Per opportunità sportive, partnership commerciali e collaborazioni professionali.
          </p>
          <Link href="/contatti">
            <span className="inline-flex items-center gap-2 px-7 py-4 btn-red rounded font-semibold cursor-pointer">
              Contatti <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
