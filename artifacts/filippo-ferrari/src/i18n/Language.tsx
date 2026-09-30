import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "it" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const IT_TO_EN: Record<string, string> = {
  // Navigation / footer
  "Chi Sono": "About Me",
  "Galleria": "Gallery",
  "Contatti": "Contact",
  "Diventa Partner": "Become a Partner",
  "Contattami": "Contact me",
  "Contattami Ora": "Contact me now",
  "Seguimi": "Follow me",
  "Roma, Italia": "Rome, Italy",
  "FIA Silver Driver · Roma, Italia": "FIA Silver Driver · Rome, Italy",
  "Filippo Ferrari. Tutti i diritti riservati.":
    "Filippo Ferrari. All rights reserved.",
  "Motorsport, crescita e partnership costruite con serietà dentro e fuori dalla pista.":
    "Motorsport, growth and partnerships built with professionalism on and off the track.",

  // Home — stats / timeline
  "Anno di nascita": "Year of birth",
  "Anni al primo kart": "Age at first kart",
  "Primo kart 60 Mini": "First 60 Mini kart",
  "A soli sette anni sale per la prima volta su un kart":
    "At just seven years old, he gets behind the wheel of a kart for the first time",
  "Debutto nelle competizioni automobilistiche a 16 anni":
    "Car-racing debut at age 16",
  "Esperienza con la Cupra TCR, proseguendo il percorso nelle vetture turismo":
    "Experience with the Cupra TCR, continuing his development in touring cars",
  "Test con l'Audi R8 GT3 di Tresor Audi Sport Italia, primo confronto diretto con una vettura GT3":
    "Test with Tresor Audi Sport Italia's Audi R8 GT3, his first direct experience in a GT3 car",
  "Selezione per il contest di Wolf Racing Cars, in collaborazione con ACI Sport":
    "Selected for the Wolf Racing Cars contest, in collaboration with ACI Sport",

  // Home — hero
  "Allacciate le cinture. Il motorsport è competizione, crescita ed emozione.":
    "Buckle up. Motorsport is competition, growth and emotion.",
  "Ogni curva aggiunge qualcosa al percorso, per chi la corre e per chi sceglie di viverla insieme.":
    "Every corner adds something to the journey, for those who race it and those who choose to share it.",
  "Scopri di più": "Discover more",
  "Scorri": "Scroll",

  // Home — about
  "Filippo Ferrari in pista": "Filippo Ferrari on track",
  "Una storia nata": "A story born",
  "a tutta velocità": "at full speed",
  "nasce a Roma nel 2005, cresce in una famiglia di sportivi e appassionati di motori. Sin da bambino, influenzato dal padre pilota di moto che ha corso anche la":
    "was born in Rome in 2005 and grew up in a family of athletes and motorsport enthusiasts. From an early age, influenced by his motorcycle-racing father, who also competed in the",
  ", sviluppa una profonda passione per la velocità.":
    ", he developed a deep passion for speed.",
  "A soli sette anni inizia con i kart e, dopo anni di esperienza nelle categorie":
    "At just seven years old he began karting and, after years of experience in the",
  ", debutta a 16 anni nella":
    ", he made his car-racing debut at 16 in the",
  ", proseguendo nel turismo con la":
    ", continuing in touring cars with the",
  "e, nel 2024, con un test sull'":
    "and, in 2024, with a test in the",
  "Nel 2025 viene selezionato per il contest":
    "In 2025 he was selected for the",
  ", in collaborazione con": ", in collaboration with",
  "Scopri di più su di me": "Discover more about me",
  "Il Percorso di": "The",
  "Carriera": "Career Journey",

  // Home — partners
  "Partner nella nostra corsa al successo...":
    "Partners in our race to success...",
  "Collaborare con Filippo": "Partnering with Filippo",
  "significa entrare nel mondo del motorsport con":
    "means entering the world of motorsport with",
  "visibilità": "visibility",
  "energia": "energy",
  "attivazioni": "activations",
  "costruite su misura.": "tailored to the brand.",
  "\"I miei": "\"My",
  "non sono semplici": "are not just",
  ", ma": ", but",
  "parte del mio team": "part of my team",
  ": insieme affrontiamo ogni curva con determinazione e costruiamo un percorso condiviso dentro e fuori dalla pista.\"":
    ": together we face every corner with determination and build a shared journey on and off the track.\"",

  // About
  "Chi": "About",
  "Sono": "Me",
  "Una passione iniziata a sette anni e cresciuta attraverso karting, vetture turismo e GT.":
    "A passion that began at age seven and grew through karting, touring cars and GT racing.",
  "Profilo": "Profile",
  "Filippo Ferrari, Roma, 4 dicembre 2005":
    "Filippo Ferrari, Rome, 4 December 2005",
  "Cresce in una famiglia legata allo sport e appassionata di motori. Il padre, pilota delle due ruote, prende parte a competizioni di enduro e rally fino alla":
    "He grew up in a family closely connected to sport and passionate about motorsport. His father competed on two wheels in enduro and rally events, including the",
  "È in questo ambiente che nasce la passione di Filippo per le corse.":
    "It was in this environment that Filippo's passion for racing began.",
  "sette anni": "seven years old",
  "sale per la prima volta su un kart 60 Mini. Dopo gli anni nelle categorie":
    "he got behind the wheel of a 60 Mini kart for the first time. After several years in the",
  ", a 16 anni debutta nelle competizioni automobilistiche con una":
    ", at 16 he made his car-racing debut in a",
  ", iniziando il passaggio dalle gare in kart alle vetture turismo.":
    ", beginning the transition from karting to touring cars.",
  "prosegue con la": "he continued with the",
  "arriva il primo confronto con una vettura GT3, attraverso il test con l'":
    "came his first experience in a GT3 car, through a test in the",
  "viene selezionato per il": "he was selected for the",
  "Per Filippo il motorsport è competizione, ma anche":
    "For Filippo, motorsport is competition, but also",
  "disciplina, preparazione e confronto":
    "discipline, preparation and continuous learning",
  ". Ogni vettura e ogni esperienza richiedono capacità di adattarsi, ascoltare il team e continuare a costruire il proprio bagaglio da pilota.":
    ". Every car and every experience require adaptability, teamwork and the ability to keep developing as a driver.",
  "L'obiettivo è continuare a crescere attraverso opportunità sportive sempre più significative, senza legare il percorso a una sola categoria. Lo stesso approccio guida il rapporto con team, partner e professionisti:":
    "The goal is to continue growing through increasingly meaningful racing opportunities, without tying the journey to a single category. The same approach guides relationships with teams, partners and professionals:",
  "serietà, disponibilità e rispetto del lavoro comune":
    "professionalism, availability and respect for the work of the whole team",

  "Il Karting": "Karting",
  "A sette anni sale per la prima volta su un kart 60 Mini. Negli anni successivi prosegue nelle categorie 125 monomarcia e KZ, costruendo le basi tecniche e sportive del proprio percorso.":
    "At seven years old he got behind the wheel of a 60 Mini kart for the first time. In the following years he progressed through the 125 single-speed and KZ categories, building the technical and sporting foundations of his career.",
  "Il Debutto in Auto": "Car-Racing Debut",
  "A 16 anni debutta nelle competizioni automobilistiche con una Clio Cup, affrontando il passaggio dal kart alle vetture turismo.":
    "At 16 he made his car-racing debut in a Clio Cup, making the transition from karting to touring cars.",
  "Prosegue il percorso nelle vetture turismo con la Cupra TCR, ampliando l'esperienza su una vettura più potente e complessa.":
    "He continued his development in touring cars with the Cupra TCR, gaining experience in a more powerful and complex car.",
  "Testa l'Audi R8 GT3 di Tresor Audi Sport Italia: il primo confronto diretto con una vettura della categoria GT3.":
    "He tested Tresor Audi Sport Italia's Audi R8 GT3, his first direct experience with a GT3 car.",
  "Viene selezionato per il contest Steering Wheel Super Salita di Wolf Racing Cars, in collaborazione con ACI Sport.":
    "He was selected for the Steering Wheel Super Salita contest by Wolf Racing Cars, in collaboration with ACI Sport.",
  "Le tappe del": "Milestones in the",
  "percorso": "journey",
  "Il prossimo passo nasce dalle opportunità giuste.":
    "The next step begins with the right opportunities.",
  "Per programmi sportivi, collaborazioni professionali e partnership nel motorsport.":
    "For racing programmes, professional collaborations and motorsport partnerships.",
  "Le": "The",
  "vetture": "cars",
  "del percorso": "in the journey",
  "Vai alla Galleria": "View Gallery",

  // Partner
  "Perché diventare": "Why become a",
  "Il motorsport è molto più di una":
    "Motorsport is much more than a",
  "disciplina sportiva": "sporting discipline",
  "È un": "It is an",
  "ecosistema di innovazione, performance e comunicazione":
    "ecosystem of innovation, performance and communication",
  ". I weekend di gara uniscono pista, pubblico, contenuti digitali e relazioni in un contesto legato a valori come":
    ". Race weekends bring together the track, spectators, digital content and relationships in a context built around values such as",
  "passione, tecnologia, precisione e ambizione":
    "passion, technology, precision and ambition",
  "Sostenere la carriera di un pilota come":
    "Supporting the career of a driver like",
  ", significa": "means",
  "legare il proprio brand": "connecting your brand",
  "a questi valori e a un": "to these values and to a",
  "progetto giovane, serio e in continua crescita":
    "young, professional and continuously evolving project",
  "Chi sceglie di affiancarlo entra in un":
    "Those who choose to join him become part of a",
  "progetto condiviso": "shared project",
  ", nel quale obiettivi sportivi e comunicazione vengono costruiti insieme con":
    ", where sporting goals and communication are developed together with",
  "chiarezza, continuità e attenzione al valore per il brand":
    "clarity, continuity and a strong focus on value for the brand",

  "Cosa può includere una": "What a",
  "Ogni collaborazione viene costruita su misura. Visibilità, contenuti e attivazioni vengono definiti in base al programma sportivo, agli obiettivi del partner e alle opportunità realmente disponibili.":
    "Every collaboration is tailored. Visibility, content and activations are defined according to the racing programme, the partner's objectives and the opportunities actually available.",
  "Visibilità in pista definita in base al programma sportivo, agli spazi disponibili e agli accordi: vettura, abbigliamento e materiali dedicati.":
    "On-track visibility defined according to the racing programme, available spaces and agreements: car, racing apparel and dedicated materials.",
  "Presenza digitale attraverso contenuti, social e comunicazione concordati con il partner.":
    "Digital presence through content, social media and communication agreed with the partner.",
  "Attività di co-branding: contenuti, video e iniziative costruite insieme al brand.":
    "Co-branding activities: content, videos and initiatives developed together with the brand.",
  "Attivazioni dedicate: quando previste dal programma, hospitality, eventi aziendali ed esperienze collegate al motorsport.":
    "Dedicated activations: when included in the programme, hospitality, corporate events and motorsport-related experiences.",
  "Valorizzazione dell'immagine aziendale attraverso un contesto legato a performance, precisione, tecnologia e competizione.":
    "Brand positioning within a context associated with performance, precision, technology and competition.",
  "Networking e relazioni: possibilità di entrare in contatto con team, professionisti, aziende e realtà presenti nel motorsport.":
    "Networking and relationships: opportunities to connect with teams, professionals, companies and organisations within motorsport.",

  // Scan The Race
  "Dalla visibilità": "From visibility",
  "all'interazione concreta.": "to real interaction.",
  "Scan The Race nasce per trasformare la presenza di un partner nel motorsport in un punto di contatto diretto con il pubblico.":
    "Scan The Race was created to turn a partner's presence in motorsport into a direct point of contact with the audience.",
  "Durante gli eventi selezionati, un QR code collegato al progetto conduce a una pagina dedicata alle aziende partner. Da lì, chi scansiona può scegliere il brand di interesse e accedere all'iniziativa che l'azienda ha deciso di mettere in evidenza.":
    "During selected events, a QR code connected to the project leads to a page dedicated to participating partner companies. From there, users can select a brand and access the initiative the company has chosen to highlight.",
  "Può essere un codice sconto, un'offerta, un prodotto, un servizio o un contenuto dedicato: l'attivazione viene definita insieme al partner.":
    "It can be a discount code, an offer, a product, a service or dedicated content: the activation is defined together with the partner.",
  "Parliamo di Scan The Race": "Let's talk about Scan The Race",
  "Vedi la demo": "View the demo",
  "Piccola demo illustrativa": "Illustrative demo",
  "Il flusso partner-publico in tre passaggi.":
    "The partner-to-audience journey in three steps.",
  "Scansiona": "Scan",
  "Il QR di Scan The Race può essere presente sulla vettura e sui touchpoint collegati al progetto durante gli eventi selezionati.":
    "The Scan The Race QR code can appear on the car and across project touchpoints during selected events.",
  "Scegli il partner": "Choose a partner",
  "La scansione apre una pagina dedicata alle aziende che partecipano all'iniziativa, rendendo immediato scoprire i partner.":
    "The scan opens a page dedicated to participating companies, making it easy to discover the partners.",
  "Attiva l'offerta": "Activate the offer",
  "Ogni azienda può mettere in evidenza un codice sconto, un'offerta, un servizio, un prodotto o un contenuto dedicato.":
    "Each company can highlight a discount code, an offer, a service, a product or dedicated content.",
  "Esempio di pagina partner": "Example partner page",
  "Partner presenti": "Featured partners",
  "Scopri l'iniziativa": "Discover the activation",
  "Offerta dedicata": "Dedicated offer",
  "Codice promo": "Promo code",
  "Contenuto speciale": "Special content",
  "Esempio attivazione": "Activation example",
  "Offerta o contenuto scelto dall'azienda.":
    "Offer or content selected by the company.",
  "Codice": "Code",
  "Demo illustrativa: formato, presenza del QR e contenuti vengono definiti in funzione dell'evento e della partnership.":
    "Illustrative demo: format, QR placement and content are defined according to the event and partnership.",

  // Commercial / fiscal
  "Aspetti commerciali e": "Commercial and",
  "fiscali": "tax considerations",
  "Una sponsorizzazione motorsport è una collaborazione commerciale basata su attività e prestazioni di comunicazione definite tra le parti, non una semplice donazione.":
    "A motorsport sponsorship is a commercial collaboration based on communication activities and deliverables agreed between the parties, not a simple donation.",
  "Il trattamento fiscale, la deducibilità dei costi e l'IVA dipendono dalla struttura dell'accordo e dalla situazione dell'azienda. Per questo gli aspetti fiscali vanno verificati dal partner con il proprio consulente.":
    "Tax treatment, cost deductibility and VAT depend on the structure of the agreement and the company's circumstances. The partner should therefore verify tax matters with its own adviser.",
  "In pratica": "In practice",
  "Accordo commerciale e prestazioni di comunicazione definite con chiarezza.":
    "A clearly defined commercial agreement and communication deliverables.",
  "Attività e deliverable concordati in funzione del programma sportivo.":
    "Activities and deliverables agreed according to the racing programme.",
  "Possibilità di integrare la partnership nelle strategie marketing e commerciali dell'azienda.":
    "Opportunity to integrate the partnership into the company's marketing and commercial strategies.",

  // Values
  "I": "The",
  "valori": "values",
  "del progetto": "of the project",
  "Nel motorsport": "In motorsport",
  "nessun pilota vince da solo": "no driver wins alone",
  ". Dietro ogni risultato ci sono persone, aziende e partner che condividono la stessa visione:":
    ". Behind every result are people, companies and partners who share the same vision:",
  "progredire costantemente": "keep progressing",
  "e affrontare ogni sfida con determinazione.":
    "and face every challenge with determination.",
  "Insieme": "Together",
  "si può dare vita a un": "we can build an",
  "progetto ambizioso e duraturo": "ambitious and lasting project",
  ", in cui la tua azienda non è un semplice sponsor, ma una parte attiva della squadra.":
    ", where your company is not simply a sponsor but an active part of the team.",
  "Affiancare un giovane pilota significa unire passione, competenza, serietà e impegno in un percorso comune fatto di":
    "Supporting a young driver means bringing together passion, expertise, professionalism and commitment in a shared journey built around",
  "visibilità, contenuti e attivazioni condivise":
    "visibility, content and shared activations",
  "Professionalità": "Professionalism",
  "Un approccio serio e strutturato a ogni aspetto della carriera, in pista e fuori.":
    "A professional and structured approach to every aspect of the career, on and off the track.",
  "Miglioramento Continuo": "Continuous Improvement",
  "Ogni gara è un'opportunità di crescita tecnica e umana.":
    "Every race is an opportunity for technical and personal growth.",
  "Trasparenza": "Transparency",
  "Rapporti basati sulla fiducia reciproca con partner e team.":
    "Relationships built on mutual trust with partners and teams.",
  "Spirito di Squadra": "Team Spirit",
  "Nessun pilota vince da solo: il successo è condiviso.":
    "No driver wins alone: success is shared.",
  "Diventa": "Become a",
  "Protagonista": "Key Partner",
  "Contattami per scoprire le opportunità di partnership su misura per la tua azienda.":
    "Contact me to discover partnership opportunities tailored to your company.",
  "Ogni traguardo raggiunto è una conquista condivisa.":
    "Every milestone reached is a shared achievement.",

  // Gallery
  "Immagini dal percorso sportivo, dalle esperienze più recenti fino alle origini nel karting.":
    "Images from the racing journey, from the most recent experiences back to the early days in karting.",
  "Momenti dal": "Moments from the",
  "Una selezione continua di immagini dal percorso in pista.":
    "A continuous selection of images from the journey on track.",
  "Apri": "Open",
  "Visualizzazione foto": "Photo viewer",
  "Chiudi foto": "Close photo",
  "Foto precedente": "Previous photo",
  "Foto successiva": "Next photo",

  // Contact
  "Parliamone": "Let's talk",
  "Per opportunità sportive, partnership, media e collaborazioni professionali.":
    "For racing opportunities, partnerships, media and professional collaborations.",
  "Messaggio inviato!": "Message sent!",
  "Grazie per il messaggio. Ti risponderò appena possibile.":
    "Thank you for your message. I will get back to you as soon as possible.",
  "Nome *": "Name *",
  "Il tuo nome": "Your name",
  "Messaggio *": "Message *",
  "Scrivi il tuo messaggio...": "Write your message...",
  "Ho letto l'": "I have read the ",
  "informativa privacy": "privacy notice",
  "e acconsento all'invio dei dati necessari alla gestione della mia richiesta. *":
    "and I consent to the submission of the data required to handle my request. *",
  "Si prega di compilare tutti i campi obbligatori!":
    "Please complete all required fields!",
  "Invia": "Send",
  "diretti": "details",
  "Telefono, email e canali social per contatti diretti.":
    "Phone, email and social channels for direct contact.",
  "Telefono": "Phone",
  "Base": "Base",
  "FAQ — Domande": "FAQ — Frequently asked",
  "frequenti": "questions",

  "Come posso seguire Filippo Ferrari?":
    "How can I follow Filippo Ferrari?",
  "Il sito raccoglie il profilo e le principali tappe del percorso; per gli aggiornamenti più frequenti puoi seguire i canali Instagram e TikTok.":
    "The website presents Filippo's profile and the main stages of his career; for more frequent updates, you can follow his Instagram and TikTok channels.",
  "Qual è il prossimo programma sportivo?":
    "What is the next racing programme?",
  "I programmi futuri vengono comunicati solo quando sono definiti. Il sito racconta il percorso e le opportunità senza presentare come confermati programmi non ancora ufficializzati.":
    "Future programmes are communicated only once they are defined. The website presents the journey and opportunities without describing unconfirmed programmes as official.",
  "Come posso proporre una partnership?":
    "How can I propose a partnership?",
  "Puoi utilizzare il form o i contatti diretti indicando azienda, obiettivi e tipo di collaborazione che vorresti valutare.":
    "You can use the form or direct contact details, specifying your company, objectives and the type of collaboration you would like to explore.",
  "Per quali richieste posso contattare Filippo?":
    "What can I contact Filippo about?",
  "Opportunità sportive, partnership commerciali, richieste media e collaborazioni professionali.":
    "Racing opportunities, commercial partnerships, media enquiries and professional collaborations.",

  // Privacy
  "Informazioni sul trattamento dei dati personali inviati attraverso questo sito.":
    "Information on the processing of personal data submitted through this website.",
  "Titolare del trattamento": "Data controller",
  "Il titolare del trattamento è Filippo Ferrari. Per richieste relative alla privacy è possibile scrivere a":
    "The data controller is Filippo Ferrari. For privacy-related requests, you can write to",
  "Dati trattati": "Data processed",
  "Attraverso il modulo di contatto possono essere raccolti nome, indirizzo email, contenuto del messaggio e le informazioni che l'utente sceglie volontariamente di inserire.":
    "The contact form may collect your name, email address, message content and any information you voluntarily choose to provide.",
  "Finalità": "Purpose",
  "I dati vengono utilizzati per ricevere, gestire e rispondere alle richieste relative a opportunità sportive, partnership, media e collaborazioni professionali.":
    "The data is used to receive, manage and respond to enquiries relating to racing opportunities, partnerships, media and professional collaborations.",
  "Modulo di contatto": "Contact form",
  "Il modulo utilizza un servizio tecnico esterno per la trasmissione dei messaggi. I dati inseriti vengono trattati nella misura necessaria a recapitare e gestire la richiesta.":
    "The form uses an external technical service to transmit messages. The submitted data is processed only as necessary to deliver and manage the request.",
  "Conservazione": "Data retention",
  "I dati vengono conservati per il tempo necessario alla gestione della richiesta e degli eventuali rapporti che ne derivano, fatti salvi gli obblighi previsti dalla normativa applicabile.":
    "Data is retained for the time necessary to handle the request and any resulting relationship, subject to applicable legal obligations.",
  "Diritti dell'interessato": "Data subject rights",
  "Nei casi previsti dalla normativa applicabile è possibile richiedere accesso, rettifica, cancellazione o limitazione del trattamento ed esercitare gli altri diritti riconosciuti dal Regolamento UE 2016/679. È inoltre possibile rivolgersi all'autorità di controllo competente.":
    "Where provided by applicable law, you may request access, rectification, deletion or restriction of processing and exercise the other rights recognised under EU Regulation 2016/679. You may also contact the competent supervisory authority.",
  "Dati tecnici": "Technical data",
  "Il sito e i servizi tecnici utilizzati per la sua erogazione possono trattare informazioni necessarie al funzionamento e alla sicurezza, come indirizzo IP, informazioni sul browser e log tecnici.":
    "The website and the technical services used to provide it may process information necessary for operation and security, such as IP address, browser information and technical logs.",
  "Contatto privacy": "Privacy contact",
  "Ultimo aggiornamento: settembre 2026.":
    "Last updated: September 2026.",

  // Small fragments used around highlighted text
  "A": "At",
  "Nel": "In",
  "e": "and",
  "di": "by",
};

const originalText = new WeakMap<Text, string>();
const originalAttrs = new WeakMap<Element, Map<string, string>>();

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function dynamicTranslation(value: string): string | null {
  let match = value.match(/^Apri foto (\d+)$/);
  if (match) return `Open photo ${match[1]}`;

  match = value.match(/^Filippo Ferrari - immagine (\d+)$/);
  if (match) return `Filippo Ferrari - image ${match[1]}`;

  match = value.match(/^Vettura (\d+)$/);
  if (match) return `Car ${match[1]}`;

  return null;
}

function translateItalian(raw: string) {
  const leading = raw.match(/^\s*/)?.[0] ?? "";
  const trailing = raw.match(/\s*$/)?.[0] ?? "";
  const coreEnd = raw.length - trailing.length;
  const core = raw.slice(leading.length, coreEnd);

  if (!core.trim()) return raw;

  const key = normalize(core);
  const translated = IT_TO_EN[key] ?? dynamicTranslation(key);

  if (!translated) return raw;
  return `${leading}${translated}${trailing}`;
}

function processTextNode(node: Text, language: Language) {
  if (!originalText.has(node)) {
    originalText.set(node, node.nodeValue ?? "");
  }

  const original = originalText.get(node) ?? "";

  const next =
    language === "en"
      ? translateItalian(original)
      : original;

  if (node.nodeValue !== next) {
    node.nodeValue = next;
  }
}

const TRANSLATABLE_ATTRIBUTES = [
  "placeholder",
  "aria-label",
  "alt",
  "title",
];

function processElement(element: Element, language: Language) {
  let stored = originalAttrs.get(element);

  if (!stored) {
    stored = new Map<string, string>();
    originalAttrs.set(element, stored);
  }

  for (const attr of TRANSLATABLE_ATTRIBUTES) {
    if (!element.hasAttribute(attr)) continue;

    if (!stored.has(attr)) {
      stored.set(attr, element.getAttribute(attr) ?? "");
    }

    const original = stored.get(attr) ?? "";
    const next =
      language === "en"
        ? translateItalian(original)
        : original;

    if (element.getAttribute(attr) !== next) {
      element.setAttribute(attr, next);
    }
  }
}

function processTree(root: Node, language: Language) {
  if (root.nodeType === Node.TEXT_NODE) {
    processTextNode(root as Text, language);
    return;
  }

  if (root.nodeType === Node.ELEMENT_NODE) {
    processElement(root as Element, language);
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
  );

  let current = walker.nextNode();

  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      processTextNode(current as Text, language);
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      processElement(current as Element, language);
    }

    current = walker.nextNode();
  }
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "it";
    return localStorage.getItem("filippo-site-language") === "en"
      ? "en"
      : "it";
  });

  const setLanguage = (next: Language) => {
    setLanguageState(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("filippo-site-language", language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function TranslationLayer() {
  const { language } = useLanguage();

  useEffect(() => {
    processTree(document.body, language);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          processTree(node, language);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [language]);

  return null;
}
