import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, QrCode } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "/site-assets/internal-hero.webp";
const IMG1 = "/site-assets/partner-main.jpg";
const IMG2 = "/site-assets/partner-grid.webp";
const IMG3 = "/site-assets/partner-podium.webp";
const IMG4 = "/site-assets/partner-track.jpeg";
const IMG5 = "/site-assets/partner-commercial.webp";
const IMG6 = "/site-assets/partner-values.webp";

const benefits = [
  "Visibilità in pista definita in base al programma sportivo, agli spazi disponibili e agli accordi: vettura, abbigliamento e materiali dedicati.",
  "Presenza digitale attraverso contenuti, social e comunicazione concordati con il partner.",
  "Attività di co-branding: contenuti, video e iniziative costruite insieme al brand.",
  "Attivazioni dedicate: quando previste dal programma, hospitality, eventi aziendali ed esperienze collegate al motorsport.",
  "Valorizzazione dell'immagine aziendale attraverso un contesto legato a performance, precisione, tecnologia e competizione.",
  "Networking e relazioni: possibilità di entrare in contatto con team, professionisti, aziende e realtà presenti nel motorsport.",
];

const fiscalBenefits = [
  "Accordo commerciale e prestazioni di comunicazione definite con chiarezza.",
  "Attività e deliverable concordati in funzione del programma sportivo.",
  "Possibilità di integrare la partnership nelle strategie marketing e commerciali dell'azienda.",
];

const values = [
  { title: "Professionalità", desc: "Un approccio serio e strutturato a ogni aspetto della carriera, in pista e fuori." },
  { title: "Miglioramento Continuo", desc: "Ogni gara è un'opportunità di crescita tecnica e umana." },
  { title: "Trasparenza", desc: "Rapporti basati sulla fiducia reciproca con partner e team." },
  { title: "Spirito di Squadra", desc: "Nessun pilota vince da solo: il successo è condiviso." },
];

const scanSteps = [
  {
    number: "01",
    title: "Scansiona",
    text: "Il QR di Scan The Race può essere presente sulla vettura e sui touchpoint collegati al progetto durante gli eventi selezionati.",
  },
  {
    number: "02",
    title: "Scegli il partner",
    text: "La scansione apre una pagina dedicata alle aziende che partecipano all'iniziativa, rendendo immediato scoprire i partner.",
  },
  {
    number: "03",
    title: "Attiva l'offerta",
    text: "Ogni azienda può mettere in evidenza un codice sconto, un'offerta, un servizio, un prodotto o un contenuto dedicato.",
  },
];

export default function Partner() {
  const introRef = useIntersection();
  const benefitsRef = useIntersection();
  const scanRef = useIntersection();
  const fiscalRef = useIntersection();
  const valuesRef = useIntersection();

  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash !== "#scan-the-race") return;
      document.getElementById("scan-the-race")?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    };

    scrollToHash();
    const first = window.setTimeout(scrollToHash, 80);
    const second = window.setTimeout(scrollToHash, 320);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(first);
      window.clearTimeout(second);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundPosition: "38% 69%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 pb-12 animate-fadeInUp">
          <div className="divider-red mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Perché diventare{" "}
            <span className="text-gradient">Partner</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section
        ref={introRef.ref as React.RefObject<HTMLElement>}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`opacity-0 ${introRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <img
                src={IMG1}
                alt="Filippo Ferrari in pista"
                className="rounded-2xl w-full object-cover red-glow"
                style={{ maxHeight: "420px", objectFit: "cover" }}
              />
            </div>
            <div
              className={`opacity-0 ${introRef.visible ? "animate-slideInRight delay-200" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                Il motorsport è molto più di una{" "}
                <span className="text-gradient">disciplina sportiva</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  È un <strong className="text-red-400">ecosistema di innovazione, performance
                  e comunicazione</strong>. I weekend di gara uniscono pista, pubblico,
                  contenuti digitali e relazioni in un contesto legato a valori come{" "}
                  <strong className="text-white">passione, tecnologia, precisione e ambizione</strong>.
                </p>
                <p>
                  Sostenere la carriera di un pilota come{" "}
                  <strong className="text-white">Filippo Ferrari</strong>, significa{" "}
                  <strong className="text-red-400">legare il proprio brand</strong> a questi
                  valori e a un{" "}
                  <strong className="text-white">
                    progetto giovane, serio e in continua crescita
                  </strong>
                  .
                </p>
                <p>
                  Chi sceglie di affiancarlo entra in un <strong className="text-red-400">progetto condiviso</strong>,
                  nel quale obiettivi sportivi e comunicazione vengono costruiti insieme con{" "}
                  <strong className="text-white">chiarezza, continuità e attenzione al valore per il brand</strong>.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contatti">
                  <span className="inline-block px-6 py-3 btn-red rounded font-semibold cursor-pointer">
                    Contattami
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        ref={benefitsRef.ref as React.RefObject<HTMLElement>}
        className="py-20 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`opacity-0 ${benefitsRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-3">
                Cosa può includere una{" "}
                <span className="text-gradient">partnership</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ogni collaborazione viene costruita su misura. Visibilità, contenuti e attivazioni vengono definiti in base al programma sportivo, agli obiettivi del partner e alle opportunità realmente disponibili.
              </p>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 opacity-0 ${
                      benefitsRef.visible ? "animate-slideInLeft" : ""
                    } delay-${(i + 1) * 100}`}
                  >
                    <CheckCircle
                      size={18}
                      className="text-red-500 shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`opacity-0 ${benefitsRef.visible ? "animate-slideInRight delay-200" : ""}`}
            >
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={IMG2}
                  alt="In griglia"
                  className="rounded-xl w-full object-cover"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
                <img
                  src={IMG3}
                  alt="Sul podio"
                  className="rounded-xl w-full object-cover"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
                <img
                  src={IMG4}
                  alt="Filippo in pista"
                  className="rounded-xl w-full object-cover col-span-2"
                  style={{ aspectRatio: "16/6", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan The Race */}
      <section
        id="scan-the-race"
        ref={scanRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-24 bg-black border-y border-white/5 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-start opacity-0 ${scanRef.visible ? "animate-fadeInUp" : ""}`}>
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-red-500/20 bg-red-950/15 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/20 flex items-center justify-center">
                  <QrCode size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white font-black tracking-[0.16em] text-sm md:text-base">SCAN THE RACE</div>
                  <div className="text-gray-500 text-[11px] uppercase tracking-[0.18em]">Partner activation concept</div>
                </div>
              </div>

              <div className="divider-red mb-5" />
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                Dalla visibilità
                <br />
                <span className="text-gradient">all'interazione concreta.</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Scan The Race nasce per trasformare la presenza di un partner nel motorsport
                  in un punto di contatto diretto con il pubblico.
                </p>
                <p>
                  Durante gli eventi selezionati, un QR code collegato al progetto conduce a una
                  pagina dedicata alle aziende partner. Da lì, chi scansiona può scegliere il brand
                  di interesse e accedere all'iniziativa che l'azienda ha deciso di mettere in evidenza.
                </p>
                <p>
                  Può essere un codice sconto, un'offerta, un prodotto, un servizio o un contenuto
                  dedicato: l'attivazione viene definita insieme al partner.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contatti">
                  <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                    Parliamo di Scan The Race <ArrowRight size={17} />
                  </span>
                </Link>
                <a
                  href="#scan-demo"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 border border-white/15 hover:bg-white/15 text-white rounded font-semibold transition-all"
                >
                  Vedi la demo
                </a>
              </div>
            </div>

            <div id="scan-demo" className="space-y-5">
              <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="text-white font-bold text-lg">Piccola demo illustrativa</div>
                    <div className="text-gray-500 text-sm">Il flusso partner-publico in tre passaggi.</div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-semibold">Demo</div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {scanSteps.map((step) => (
                    <div
                      key={step.number}
                      className="card-hover rounded-xl border border-white/8 bg-black/35 p-5"
                    >
                      <div className="text-red-400 text-xs font-black tracking-[0.18em] mb-5">
                        {step.number}
                      </div>
                      <h3 className="text-white font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-[hsl(0_0%_7%)] overflow-hidden">
                <div className="h-10 border-b border-white/8 bg-white/5 flex items-center px-4 gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 text-xs text-gray-500 tracking-wide">scantherace.partner-demo</div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/25 flex items-center justify-center">
                      <QrCode size={22} className="text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-black tracking-[0.12em]">SCAN THE RACE</div>
                      <div className="text-gray-500 text-xs">Esempio di pagina partner</div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-4">
                    <div className="rounded-xl border border-white/8 bg-black/35 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-3">Partner presenti</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg border border-red-500/20 bg-red-950/10 p-4 text-center">
                          <div className="text-white font-semibold text-sm">Brand A</div>
                          <div className="text-gray-500 text-xs mt-1">Scopri l'iniziativa</div>
                        </div>
                        <div className="rounded-lg border border-white/8 bg-white/5 p-4 text-center">
                          <div className="text-white font-semibold text-sm">Brand B</div>
                          <div className="text-gray-500 text-xs mt-1">Offerta dedicata</div>
                        </div>
                        <div className="rounded-lg border border-white/8 bg-white/5 p-4 text-center">
                          <div className="text-white font-semibold text-sm">Brand C</div>
                          <div className="text-gray-500 text-xs mt-1">Codice promo</div>
                        </div>
                        <div className="rounded-lg border border-white/8 bg-white/5 p-4 text-center">
                          <div className="text-white font-semibold text-sm">Brand D</div>
                          <div className="text-gray-500 text-xs mt-1">Contenuto speciale</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-red-500/18 bg-red-950/10 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-red-400 mb-3">Esempio attivazione</div>
                      <div className="text-white font-bold text-lg mb-1">Brand A</div>
                      <div className="text-gray-400 text-sm mb-4">Offerta o contenuto scelto dall'azienda.</div>
                      <div className="rounded-lg border border-white/10 bg-black/35 p-4 mb-4">
                        <div className="text-gray-500 text-xs uppercase tracking-[0.16em] mb-1">Codice</div>
                        <div className="text-white font-black tracking-[0.14em] text-lg">FILIPPO10</div>
                      </div>
                      <div className="w-full rounded-lg bg-red-600 hover:bg-red-500 transition-colors text-center py-3 text-sm font-semibold text-white">
                        Attiva l'offerta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs leading-relaxed">
                Demo illustrativa: formato, presenza del QR e contenuti vengono definiti in funzione dell'evento e della partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal benefits */}
      <section
        ref={fiscalRef.ref as React.RefObject<HTMLElement>}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`opacity-0 ${fiscalRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <img
                src={IMG5}
                alt="Pista"
                className="rounded-2xl w-full object-cover"
                style={{ maxHeight: "380px", objectFit: "cover" }}
              />
            </div>
            <div
              className={`opacity-0 ${fiscalRef.visible ? "animate-slideInRight delay-200" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-3">
                Aspetti commerciali e{" "}
                <span className="text-gradient">fiscali</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Una sponsorizzazione motorsport è una collaborazione commerciale basata su attività
                e prestazioni di comunicazione definite tra le parti, non una semplice donazione.
              </p>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Il trattamento fiscale, la deducibilità dei costi e l'IVA dipendono dalla struttura
                dell'accordo e dalla situazione dell'azienda. Per questo gli aspetti fiscali vanno
                verificati dal partner con il proprio consulente.
              </p>
              <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6">
                <div className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  In pratica
                </div>
                <ul className="space-y-3">
                  {fiscalBenefits.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef.ref as React.RefObject<HTMLElement>}
        className="py-20 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <div
              className={`opacity-0 ${valuesRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-4">
                I <span className="text-gradient">valori</span> del progetto
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nel motorsport <strong className="text-white">nessun pilota vince da solo</strong>
                  . Dietro ogni risultato ci sono persone, aziende e partner che condividono la
                  stessa visione: <strong className="text-red-400">progredire costantemente</strong>{" "}
                  e affrontare ogni sfida con determinazione.
                </p>
                <p>
                  <strong className="text-white">Insieme</strong> si può dare vita a un{" "}
                  <strong className="text-red-400">progetto ambizioso e duraturo</strong>, in cui
                  la tua azienda non è un semplice sponsor, ma una parte attiva della squadra.
                </p>
                <p>
                  Affiancare un giovane pilota significa unire passione, competenza, serietà
                  e impegno in un percorso comune fatto di{" "}
                  <strong className="text-white">visibilità, contenuti e attivazioni condivise</strong>.
                </p>
              </div>
            </div>
            <div
              className={`opacity-0 ${valuesRef.visible ? "animate-slideInRight delay-200" : ""}`}
            >
              <img
                src={IMG6}
                alt="Filippo in pista"
                className="rounded-2xl w-full object-cover red-glow"
                style={{ maxHeight: "380px", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`card-hover bg-[hsl(0_0%_8%)] border border-white/5 rounded-2xl p-6 opacity-0 ${
                  valuesRef.visible ? "animate-fadeInUp" : ""
                } delay-${(i + 1) * 100}`}
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center mb-4">
                  <span className="text-red-400 font-black text-sm">{i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with photo background */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/site-assets/partner-cta.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="divider-red mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Diventa <span className="text-gradient">Protagonista</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Contattami per scoprire le opportunità di partnership su misura per la tua azienda.
            <br className="hidden md:block" />
            Ogni traguardo raggiunto è una conquista condivisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti">
              <span className="inline-block px-12 py-4 btn-red rounded font-semibold text-lg cursor-pointer">
                Contattami
              </span>
            </Link>
            <a
              href="#scan-the-race"
              className="inline-flex items-center justify-center px-12 py-4 bg-white/10 border border-white/20 hover:border-red-500/50 hover:bg-white/15 text-white rounded font-semibold text-lg transition-all"
            >
              Scan The Race
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
