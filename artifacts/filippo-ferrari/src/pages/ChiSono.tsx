import { Link } from "wouter";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";
const BANNER_IMG = "https://i.imgur.com/uxCD3UP.jpeg";

const topImages = [
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_829/rwdMode_1/492x273/IMG_0030.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_833/rwdMode_1/308x282/IMG_3647.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_834/rwdMode_1/582x309/4018ABFF-E0BD-430A-8856-8D2CBB3D9F7D.webp",
  "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_832/rwdMode_1/369x348/IMG_5469.webp",
];

const carImages = [
  "/gallery/kart/03_IMG_1378.jpeg",
  "/gallery/clio-cup/01_IMG_1653.jpeg",
  "/gallery/wolf/01_E4908A99-9B76-447B-88D2-B18DE4A469F3.jpeg",
  "/gallery/audi-r8-gt3/01_99_cola_moncini_vanberlo_401-XL.jpg",
];

const phases = [
  {
    period: "2012 — 2020",
    title: "Il Karting",
    desc: "A sette anni sale per la prima volta su un kart 60 Mini. Negli anni successivi prosegue nelle categorie 125 monomarcia e KZ, costruendo le basi tecniche e sportive del proprio percorso.",
  },
  {
    period: "2021",
    title: "Il Debutto in Auto",
    desc: "A 16 anni debutta nelle competizioni automobilistiche con una Clio Cup, affrontando il passaggio dal kart alle vetture turismo.",
  },
  {
    period: "2023",
    title: "Cupra TCR",
    desc: "Prosegue il percorso nelle vetture turismo con la Cupra TCR, ampliando l'esperienza su una vettura più potente e complessa.",
  },
  {
    period: "2024",
    title: "Audi R8 GT3",
    desc: "Testa l'Audi R8 GT3 di Tresor Audi Sport Italia: il primo confronto diretto con una vettura della categoria GT3.",
  },
  {
    period: "2025",
    title: "ACI Sport Contest",
    desc: "Viene selezionato per il contest Steering Wheel Super Salita organizzato da Wolf Racing Cars con il supporto di ACI Sport.",
  },
];

export default function ChiSono() {
  const introRef = useIntersection();
  const phasesRef = useIntersection();
  const galleryCarsRef = useIntersection();

  return (
    <>
      <section className="relative h-[48vh] min-h-[320px] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-14 animate-fadeInUp">
          <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">Italian Racing Driver</div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">Chi <span className="text-gradient">Sono</span></h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">Una passione iniziata a sette anni e cresciuta attraverso karting, vetture turismo e GT.</p>
        </div>
      </section>

      <section ref={introRef.ref as React.RefObject<HTMLElement>} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 opacity-0 ${introRef.visible ? "animate-scaleIn" : ""}`}>
            {topImages.map((src, i) => (
              <div key={i} className="gallery-item rounded-xl overflow-hidden aspect-square border border-white/5">
                <img src={src} alt={`Filippo Ferrari ${i + 1}`} className="img-cover" onError={(e) => {(e.target as HTMLImageElement).closest(".gallery-item")!.remove();}} />
              </div>
            ))}
          </div>

          <div className={`opacity-0 ${introRef.visible ? "animate-fadeInUp delay-200" : ""}`}>
            <div className="divider-red mb-5" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">Profilo</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Filippo Ferrari, <span className="text-gradient">Roma, 4 dicembre 2005</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-5">
            <div className={`space-y-5 text-gray-300 leading-relaxed opacity-0 ${introRef.visible ? "animate-slideInLeft delay-300" : ""}`}>
              <p>Cresce in una famiglia legata allo sport e appassionata di motori. Il padre, pilota delle due ruote, prende parte a competizioni di enduro e rally fino alla <strong className="text-white">Parigi-Dakar</strong>. È in questo ambiente che nasce la passione di Filippo per le corse.</p>
              <p>A <strong className="text-white">sette anni</strong> sale per la prima volta su un kart 60 Mini. Dopo gli anni nelle categorie <strong className="text-white">125 monomarcia e KZ</strong>, a 16 anni debutta nelle competizioni automobilistiche con una <strong className="text-red-400">Clio Cup</strong>, iniziando il passaggio dalle gare in kart alle vetture turismo.</p>
              <p>Nel <strong className="text-white">2023</strong> prosegue con la <strong className="text-red-400">Cupra TCR</strong>. Nel <strong className="text-white">2024</strong> arriva il primo confronto con una vettura GT3, attraverso il test con l'<strong className="text-red-400">Audi R8 GT3</strong> di <strong className="text-white">Tresor Audi Sport Italia</strong>.</p>
            </div>

            <div className={`space-y-5 text-gray-300 leading-relaxed opacity-0 ${introRef.visible ? "animate-slideInRight delay-400" : ""}`}>
              <p>Nel <strong className="text-white">2025</strong> viene selezionato per il <strong className="text-red-400">contest Steering Wheel Super Salita</strong> organizzato da <strong className="text-white">Wolf Racing Cars</strong> con il supporto di <strong className="text-white">ACI Sport</strong>.</p>
              <p>Per Filippo il motorsport è competizione, ma anche <strong className="text-white">disciplina, preparazione e confronto</strong>. Ogni vettura e ogni esperienza richiedono capacità di adattarsi, ascoltare il team e continuare a costruire il proprio bagaglio da pilota.</p>
              <p>L'obiettivo è continuare a crescere attraverso opportunità sportive sempre più significative, senza legare il percorso a una sola categoria. Lo stesso approccio guida il rapporto con team, partner e professionisti: <strong className="text-red-400">serietà, disponibilità e rispetto del lavoro comune</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={phasesRef.ref as React.RefObject<HTMLElement>} className="py-20 bg-[hsl(0_0%_6%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 opacity-0 ${phasesRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mx-auto mb-4" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">Racing Career</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Le tappe del <span className="text-gradient">percorso</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div key={phase.period} className={`card-hover bg-[hsl(0_0%_8%)] border border-white/5 rounded-2xl p-6 opacity-0 ${phasesRef.visible ? "animate-fadeInUp" : ""} delay-${(i + 1) * 100}`}>
                <div className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-2">{phase.period}</div>
                <h3 className="text-white font-bold text-xl mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={BANNER_IMG} alt="Filippo in pista" className="img-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/80 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">Opportunities</div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">Il prossimo passo nasce dalle opportunità giuste.</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Per programmi sportivi, collaborazioni professionali e partnership nel motorsport.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contatti"><span className="inline-block px-7 py-3 btn-red rounded font-semibold cursor-pointer text-center">Contatti</span></Link>
                <Link href="/partner"><span className="inline-block px-7 py-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded font-semibold cursor-pointer transition-all text-center">Partnership</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={galleryCarsRef.ref as React.RefObject<HTMLElement>} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 opacity-0 ${galleryCarsRef.visible ? "animate-fadeInUp" : ""}`}>
            <div className="divider-red mx-auto mb-4" />
            <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-3">Cars</div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Le <span className="text-gradient">vetture</span> del percorso</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carImages.map((src, i) => (
              <div key={i} className={`gallery-item rounded-xl overflow-hidden border border-white/5 opacity-0 ${galleryCarsRef.visible ? "animate-scaleIn" : ""} delay-${(i + 1) * 100}`} style={{ aspectRatio: "4/3" }}>
                <img src={src} alt={`Vettura ${i + 1}`} className="img-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galleria"><span className="inline-block px-8 py-3 btn-red rounded font-semibold cursor-pointer">Vai alla Galleria</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
