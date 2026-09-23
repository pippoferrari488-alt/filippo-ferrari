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
  { label: "Percorso", value: "Kart → Turismo → GT" },
];

const experience = [
  {
    year: "2012",
    title: "Karting",
    text: "A sette anni inizia con il karting, passando nel tempo dalle categorie 60 Mini alle 125 monomarcia e KZ.",
  },
  {
    year: "2021",
    title: "Clio Cup",
    text: "Debutto nelle competizioni automobilistiche con una Clio Cup: il primo capitolo del passaggio dal kart alle vetture da corsa.",
  },
  {
    year: "2023",
    title: "Cupra TCR",
    text: "Prosegue il percorso nelle vetture turismo con la Cupra TCR, ampliando l’esperienza su auto più potenti e complesse.",
  },
  {
    year: "2024",
    title: "Audi R8 GT3",
    text: "Test con Audi R8 GT3 di Tresor Audi Sport Italia: il primo confronto con una vettura della categoria GT3.",
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
    title: "Preparazione",
    text: "Arrivare in pista pronti significa curare ogni dettaglio, dal lavoro personale alla comprensione del programma e della vettura.",
  },
  {
    icon: BarChart3,
    title: "Adattamento",
    text: "Ogni vettura richiede riferimenti diversi. Capire rapidamente cosa cambia e adattare la guida è parte del lavoro del pilota.",
  },
  {
    icon: MessageSquareText,
    title: "Feedback",
    text: "Descrivere con precisione ciò che succede in pista rende più efficace il confronto con tecnici e ingegneri.",
  },
  {
    icon: Users,
    title: "Squadra",
    text: "Il pilota lavora dentro un team: comunicazione, fiducia e rispetto dei ruoli contano quanto ciò che accade sul cronometro.",
  },
];

const partnershipAreas = [
  {
    icon: Flag,
    title: "Brand Visibility",
    text: "Presenza del brand sugli asset disponibili del programma sportivo e nei contenuti collegati all’attività in pista.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Hospitality & B2B",
    text: "Momenti dedicati, quando previsti dal programma, per clienti, ospiti, stakeholder e relazioni aziendali.",
  },
  {
    icon: Users,
    title: "Content & Storytelling",
    text: "Contenuti costruiti insieme al partner per dare continuità alla collaborazione anche oltre il weekend di gara.",
  },
  {
    icon: Target,
    title: "Brand Activation",
    text: "Iniziative dedicate per creare un contatto concreto con pubblico e clienti, anche attraverso Scan The Race.",
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
                Racing Driver · Italy
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
              Passione, professionalità e voglia di vincere.
            </p>
            <p className="animate-fadeInUp delay-200 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-9">
              Dal karting alle vetture turismo e GT: una passione iniziata da bambino e cresciuta gara dopo gara, con l’ambizione di continuare a competere, migliorare e cogliere il prossimo passo nel motorsport.
            </p>

            <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row gap-3">
              <Link href="/chi-sono">
                <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                  Driver Profile <ArrowRight size={17} />
                </span>
              </Link>
              <a
                href="#next-chapter"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/8 border border-white/15 hover:bg-white/12 text-white rounded font-semibold transition-all"
              >
                The Next Chapter
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

      <nav className="quick-nav" aria-label="Navigazione rapida della homepage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max py-2.5">
            <a href="#racing-profile" className="quick-nav-link">Profilo</a>
            <a href="#career" className="quick-nav-link">Percorso</a>
            <a href="#approach" className="quick-nav-link">Approccio</a>
            <a href="#next-chapter" className="quick-nav-link">The Next Chapter</a>
            <a href="#partnership" className="quick-nav-link">Partnership</a>
          </div>
        </div>
      </nav>

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
              La mia storia
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[0.98] mb-7">
              Una passione nata presto.
              <br />
              Una storia ancora da scrivere.
            </h2>
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Filippo Ferrari nasce a Roma nel 2005 e sale su un kart per la prima volta a sette anni. Dopo gli anni nel karting, il percorso prosegue con Clio Cup e Cupra TCR, fino al test con Audi R8 GT3 di Tresor Audi Sport Italia nel 2024.
              </p>
              <p>
                Oggi l’obiettivo è continuare a crescere come pilota, confrontandosi con programmi sempre più competitivi e mantenendo aperte le opportunità che possono rappresentare il passo giusto.
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
                <div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Mindset</div>
                <div className="text-xl md:text-2xl text-white font-bold">
                  Serietà, preparazione e determinazione.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="career"
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
              Le tappe del percorso.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 border border-white/8 rounded-2xl overflow-hidden bg-black/30">
            {experience.map((item, index) => (
              <div
                key={item.year}
                className={`card-hover p-6 md:p-7 min-h-[250px] flex flex-col border-white/8 ${
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
        id="approach"
        ref={professionalRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mb-14 opacity-0 ${professionalRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mb-5" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
              Il lavoro del pilota
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              La velocità non basta.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Guidare forte è solo una parte. Preparazione, adattamento, feedback e lavoro di squadra diventano decisivi quando il livello si alza.
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
        id="next-chapter"
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
              Il prossimo passo.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-5">
              Continuare a crescere, confrontarmi con programmi sempre più competitivi e trovare le opportunità giuste per portare avanti il mio percorso nel motorsport.
            </p>
            <p className="text-gray-400 leading-relaxed mb-9">
              Ogni scelta dovrà avere un senso sportivo: categoria, team e programma saranno valutati in funzione della crescita e delle opportunità concrete.
            </p>
            <Link href="/contatti">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                Parliamo del prossimo passo <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="partnership"
        ref={partnerRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-28 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start opacity-0 ${partnerRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="lg:sticky lg:top-28">
              <div className="divider-red mb-5" />
              <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">
                Partnership
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Il motorsport può diventare una piattaforma per il brand.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Una collaborazione può unire presenza del brand, contenuti, hospitality, relazioni e attivazioni. L’obiettivo è costruire qualcosa di coerente con l’azienda e con il programma sportivo, non limitarsi a esporre un logo.
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
                <div key={title} className="card-hover rounded-2xl bg-black/40 border border-white/8 p-6 md:p-7">
                  <Icon size={22} className="text-red-400 mb-8" />
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
              <div className="card-hover sm:col-span-2 rounded-2xl border border-red-500/20 bg-red-950/10 p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.18em] text-red-400 font-semibold mb-3">
                  Scan The Race
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Durante gli eventi selezionati, un QR code può indirizzare il pubblico a una pagina dedicata ai partner del progetto. Ogni azienda può presentare un’offerta, un codice sconto o un contenuto concordato, trasformando la visibilità in un punto di contatto concreto.
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
            Il prossimo capitolo si costruisce in pista e fuori.
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
