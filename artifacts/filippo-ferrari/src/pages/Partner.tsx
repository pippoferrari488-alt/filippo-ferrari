import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";
const IMG1 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_776/99_cola_moncini_vanberlo_105-XL.jpg";
const IMG2 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_839/rwdMode_1/426x291/00_grid_119-S.webp";
const IMG3 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_719/rwdMode_1/563x450/podio_1013-X2.webp";
const IMG4 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_783/IMG_5474.jpeg";
const IMG5 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_840/rwdMode_1/526x357/99_cola-moncini_2011-XL.webp";
const IMG6 = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_29/mm3aqdb1/element_722/rwdMode_1/550x460/IMG_5420.webp";

const benefits = [
  "Branding su vettura, equipaggiamento e materiali quando previsto dal programma sportivo e dagli spazi disponibili.",
  "Presenza nei contenuti digitali e nello storytelling collegato all’attività in pista.",
  "Contenuti e iniziative co-branded costruiti in funzione degli obiettivi del partner.",
  "Hospitality, guest experience ed eventi quando disponibili all’interno del programma.",
  "Attivazioni dedicate, anche attraverso Scan The Race e soluzioni QR concordate con l’azienda.",
  "Opportunità di relazione e networking con ospiti, clienti e stakeholder nel contesto motorsport.",
];

const fiscalBenefits = [
  "Accordo e prestazioni di comunicazione definiti con chiarezza.",
  "Attività e materiali concordati in funzione del programma sportivo.",
  "Possibilità di integrare la partnership nelle iniziative marketing e commerciali dell’azienda.",
];

const values = [
  { title: "Professionalità", desc: "Serietà nella preparazione, nella comunicazione e nella rappresentazione del partner." },
  { title: "Chiarezza", desc: "Obiettivi, attività e aspettative definiti in modo trasparente fin dall’inizio." },
  { title: "Continuità", desc: "Una collaborazione acquista valore quando vive anche oltre il singolo evento." },
  { title: "Squadra", desc: "Pilota, team e partner lavorano meglio quando condividono direzione e responsabilità." },
];

export default function Partner() {
  const introRef = useIntersection();
  const benefitsRef = useIntersection();
  const fiscalRef = useIntersection();
  const valuesRef = useIntersection();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 pb-12 animate-fadeInUp">
          <div className="divider-red mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Partnership{" "}
            <span className="text-gradient">Motorsport</span>
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
                Il motorsport come{" "}
                <span className="text-gradient">piattaforma di comunicazione</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Una partnership nel motorsport può unire presenza del brand, contenuti,
                  relazioni e hospitality in un contesto ad alto coinvolgimento. Il valore non
                  sta soltanto nello spazio per un logo, ma in ciò che si costruisce attorno
                  al progetto sportivo.
                </p>
                <p>
                  Con <strong className="text-white">Filippo Ferrari</strong>, ogni proposta
                  viene pensata in funzione del partner: obiettivi, pubblico, attivazioni e
                  asset disponibili vengono definiti con chiarezza, senza formule standard.
                </p>
                <p>
                  L’obiettivo è creare una collaborazione <strong className="text-red-400">
                  credibile e utile per entrambe le parti</strong>, coerente con il percorso
                  sportivo e con la comunicazione dell’azienda.
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
                Una partnership{" "}
                <span className="text-gradient">costruita su misura</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ogni collaborazione viene definita in base al programma sportivo e agli obiettivi dell’azienda, con attività e deliverable chiari fin dall’inizio.
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
                Una partnership,{" "}
                <span className="text-gradient">non una donazione</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Una sponsorizzazione è una collaborazione commerciale basata su prestazioni di comunicazione definite e documentate.
              </p>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Aspetti fiscali, IVA e deducibilità dipendono dalla struttura dell’accordo e dalla situazione dell’azienda. Per questo vanno verificati con il proprio consulente fiscale, evitando promesse generiche e impostando correttamente il rapporto commerciale.
              </p>
              <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6">
                <div className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  In sintesi
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
                I nostri <span className="text-gradient">valori</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Una partnership funziona quando entrambe le parti sanno cosa stanno
                  costruendo. Per questo il rapporto deve partire da obiettivi realistici,
                  comunicazione chiara e rispetto degli impegni.
                </p>
                <p>
                  Il partner non è un logo da applicare: è una realtà da rappresentare con
                  attenzione, dentro e fuori dalla pista.
                </p>
                <p>
                  Quando esistono le condizioni giuste, il motorsport può diventare un punto
                  d’incontro tra sport, clienti, contenuti e relazioni aziendali.
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
          style={{ backgroundImage: `url(https://i.imgur.com/pQq4QNY.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="divider-red mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Costruiamo una <span className="text-gradient">partnership concreta</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Parliamo degli obiettivi della tua azienda e delle opportunità realmente disponibili nel programma sportivo.
            <br className="hidden md:block" />
            Da lì possiamo costruire una proposta coerente per entrambe le parti.
          </p>
          <Link href="/contatti">
            <span className="inline-block px-12 py-4 btn-red rounded font-semibold text-lg cursor-pointer">
              Contattami
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
