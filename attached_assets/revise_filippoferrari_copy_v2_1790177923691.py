#!/usr/bin/env python3
from pathlib import Path
import subprocess, sys

ROOT = Path.cwd()
remote = subprocess.run(["git","remote","-v"], cwd=ROOT, text=True, capture_output=True).stdout
if "filippo-ferrari-official" in remote:
    print("ERRORE: sei nel repository originale. Non applico modifiche."); sys.exit(1)
if "pippoferrari488-alt/filippo-ferrari" not in remote:
    print("ERRORE: repository nuovo non riconosciuto."); print(remote); sys.exit(1)

BASE = ROOT/"artifacts"/"filippo-ferrari"

def rep(rel, old, new, all_=False):
    p = BASE/rel
    s = p.read_text(encoding="utf-8")
    c = s.count(old)
    if c < 1 or (not all_ and c != 1):
        print(f"ERRORE {rel}: cercavo {'>=1' if all_ else '1'} occorrenza, trovate {c}")
        print(old[:260]); sys.exit(1)
    p.write_text(s.replace(old,new) if all_ else s.replace(old,new,1), encoding="utf-8")
    print("✓", rel)

print("Revisione completa testi del NUOVO sito...\n")

H="src/pages/Home.tsx"
home_repls=[
('{ label: "Percorso", value: "Kart → GT" },','{ label: "Percorso", value: "Kart → Turismo → GT" },'),
('text: "Inizio del percorso sportivo a sette anni, con esperienza nelle categorie 60 Mini, 125 monomarcia e KZ.",','text: "A sette anni inizia con il karting, passando nel tempo dalle categorie 60 Mini alle 125 monomarcia e KZ.",'),
('text: "Debutto nelle competizioni automobilistiche e primo passaggio strutturato dalle monoposto kart alle vetture turismo.",','text: "Debutto nelle competizioni automobilistiche con una Clio Cup: il primo capitolo del passaggio dal kart alle vetture da corsa.",'),
('text: "Esperienza nel turismo ad alte prestazioni, con ulteriore crescita nella gestione della vettura e del weekend di gara.",','text: "Prosegue il percorso nelle vetture turismo con la Cupra TCR, ampliando l’esperienza su auto più potenti e complesse.",'),
('text: "Esperienza/test con Audi R8 GT3 di Tresor Audi Sport Italia: un primo contatto concreto con il mondo GT.",','text: "Test con Audi R8 GT3 di Tresor Audi Sport Italia: il primo confronto con una vettura della categoria GT3.",'),
('title: "Performance",\n    text: "Preparazione, metodo e continuità: ogni sessione viene affrontata come un passaggio di crescita.",','title: "Preparazione",\n    text: "Arrivare in pista pronti significa curare ogni dettaglio, dal lavoro personale alla comprensione del programma e della vettura.",'),
('title: "Data approach",\n    text: "Un approccio orientato all\'analisi e al confronto, per trasformare sensazioni e dati in indicazioni utili.",','title: "Adattamento",\n    text: "Ogni vettura richiede riferimenti diversi. Capire rapidamente cosa cambia e adattare la guida è parte del lavoro del pilota.",'),
('title: "Technical feedback",\n    text: "Comunicazione chiara con il team e attenzione al feedback tecnico come parte del lavoro di sviluppo.",','title: "Feedback",\n    text: "Descrivere con precisione ciò che succede in pista rende più efficace il confronto con tecnici e ingegneri.",'),
('title: "Team integration",\n    text: "Il risultato nasce dal lavoro con ingegneri, tecnici e struttura: il pilota è una parte del sistema, non un elemento isolato.",','title: "Squadra",\n    text: "Il pilota lavora dentro un team: comunicazione, fiducia e rispetto dei ruoli contano quanto ciò che accade sul cronometro.",'),
('title: "Brand Exposure",\n    text: "Presenza del marchio nel contesto motorsport e nei contenuti legati all\'attività sportiva.",','title: "Brand Visibility",\n    text: "Presenza del brand sugli asset disponibili del programma sportivo e nei contenuti collegati all’attività in pista.",'),
('text: "Esperienze, relazioni e occasioni di contatto da costruire intorno al progetto sportivo.",','text: "Momenti dedicati, quando previsti dal programma, per clienti, ospiti, stakeholder e relazioni aziendali.",'),
('title: "Digital Content",\n    text: "Contenuti e storytelling pensati per valorizzare la partnership anche fuori dal circuito.",','title: "Content & Storytelling",\n    text: "Contenuti costruiti insieme al partner per dare continuità alla collaborazione anche oltre il weekend di gara.",'),
('title: "Customer Activation",\n    text: "Attivazioni misurabili e iniziative dedicate, anche tramite Scan The Race e soluzioni QR concordate con il partner.",','title: "Brand Activation",\n    text: "Iniziative dedicate per creare un contatto concreto con pubblico e clienti, anche attraverso Scan The Race.",'),
('GT Racing Driver · Italy','Racing Driver · Italy'),
('Performance. Progress. Partnership.','Passione, professionalità e voglia di vincere.'),
("Un percorso costruito dal karting alle vetture GT, con l'obiettivo di trasformare ogni esperienza in valore sportivo, tecnico e professionale.","Dal karting alle vetture turismo e GT: una passione iniziata da bambino e cresciuta gara dopo gara, con l’ambizione di continuare a competere, migliorare e cogliere il prossimo passo nel motorsport."),
('href="#programme-2027"','href="#next-chapter"'),
('2027 Programme','The Next Chapter'),
('Racing Profile','La mia storia'),
('Costruire il pilota,\n              <br />\n              non soltanto il giro veloce.','Una passione nata presto.\n              <br />\n              Una storia ancora da scrivere.'),
("Filippo Ferrari nasce a Roma nel 2005 e inizia il proprio percorso nel motorsport a sette anni. Dal karting passa alle competizioni automobilistiche con Clio Cup e Cupra TCR, fino all'esperienza con Audi R8 GT3 nel 2024.","Filippo Ferrari nasce a Roma nel 2005 e sale su un kart per la prima volta a sette anni. Dopo gli anni nel karting, il percorso prosegue con Clio Cup e Cupra TCR, fino al test con Audi R8 GT3 di Tresor Audi Sport Italia nel 2024."),
("Il prossimo passo è costruire un percorso GT sempre più strutturato: esperienza, metodo, preparazione e capacità di lavorare all'interno di un team sono al centro del progetto.","Oggi l’obiettivo è continuare a crescere come pilota, confrontandosi con programmi sempre più competitivi e mantenendo aperte le opportunità che possono rappresentare il passo giusto."),
('<div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Approach</div>','<div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Mindset</div>'),
('Professionalità dentro e fuori dalla pista.','Serietà, preparazione e determinazione.'),
('Un percorso in evoluzione.','Le tappe del percorso.'),
('Beyond the lap time','Il lavoro del pilota'),
('Essere veloci è solo una parte del lavoro.','La velocità non basta.'),
('Un progetto professionale richiede metodo, comunicazione, capacità di integrarsi nel team e rappresentare correttamente chi sceglie di farne parte.','Guidare forte è solo una parte. Preparazione, adattamento, feedback e lavoro di squadra diventano decisivi quando il livello si alza.'),
('id="programme-2027"','id="next-chapter"'),
('2027.\n              <br />\n              Il prossimo passo.','Il prossimo passo.'),
("L'obiettivo è costruire un programma GT3 strutturato, credibile e sostenibile, come passaggio verso un percorso sempre più competitivo nel GT e nell'endurance internazionale.","Continuare a crescere, confrontarmi con programmi sempre più competitivi e trovare le opportunità giuste per portare avanti il mio percorso nel motorsport."),
('Non un traguardo isolato, ma un progetto da sviluppare con team, partner e realtà che condividano una visione di medio-lungo periodo.','Ogni scelta dovrà avere un senso sportivo: categoria, team e programma saranno valutati in funzione della crescita e delle opportunità concrete.'),
('Parliamo del progetto','Parliamo del prossimo passo'),
('Partnership Platform','Partnership'),
('Oltre il logo sulla vettura.','Il motorsport può diventare una piattaforma per il brand.'),
("Una partnership motorsport può diventare uno strumento di relazione, contenuto e attivazione. L'obiettivo è costruire proposte coerenti con il business del partner, non semplice esposizione passiva.","Una collaborazione può unire presenza del brand, contenuti, hospitality, relazioni e attivazioni. L’obiettivo è costruire qualcosa di coerente con l’azienda e con il programma sportivo, non limitarsi a esporre un logo."),
("Un'attivazione tramite QR pensata per collegare il pubblico alle aziende partner e alle iniziative promozionali definite da ciascun brand, trasformando la presenza nel motorsport in un punto di contatto concreto.","Durante gli eventi selezionati, un QR code può indirizzare il pubblico a una pagina dedicata ai partner del progetto. Ogni azienda può presentare un’offerta, un codice sconto o un contenuto concordato, trasformando la visibilità in un punto di contatto concreto."),
('Costruiamo il prossimo capitolo.','Il prossimo capitolo si costruisce in pista e fuori.'),
]
for a,b in home_repls: rep(H,a,b)

rep("src/components/Navbar.tsx","GT Racing Driver","Racing Driver",True)
rep("src/components/Footer.tsx","GT Racing Driver","Racing Driver",True)
rep("src/components/Footer.tsx","Motorsport, crescita professionale e partnership costruite con una visione di lungo periodo.","Passione, professionalità e voglia di vincere. In pista, un capitolo alla volta.")

C="src/pages/ChiSono.tsx"
chi_repls=[
("A soli sette anni sale per la prima volta su un kart 60 Mini. Dopo anni di impegno e risultati costanti nelle categorie karting 125 monomarcia e KZ, getta le basi di una carriera solida.","A sette anni sale per la prima volta su un kart 60 Mini. Gli anni successivi nelle categorie 125 monomarcia e KZ costruiscono le basi del suo percorso sportivo."),
("A 16 anni debutta nelle competizioni automobilistiche con una Clio Cup, dimostrando velocità e maturità sorprendenti per la sua età.","A 16 anni debutta nelle competizioni automobilistiche con una Clio Cup, affrontando il passaggio dal kart alle vetture da corsa."),
("Continua nel turismo con la Cupra TCR, con la quale consolida esperienza e performance stagione dopo stagione.","Prosegue nelle vetture turismo con la Cupra TCR, ampliando l’esperienza su auto più potenti e complesse."),
("Momento chiave della carriera: testa l'Audi R8 GT3 di Tresor Audi Sport Italia. Un'esperienza che segna il tanto desiderato passaggio verso il mondo Gran Turismo.","Testa l’Audi R8 GT3 di Tresor Audi Sport Italia: il primo confronto con una vettura GT3 e un passaggio importante nel suo percorso."),
("Viene selezionato per il contest Steering Wheel Super Salita organizzato da Wolf Racing Cars con il supporto dell'ACI Sport, un riconoscimento importante del percorso di crescita.","Viene selezionato per il contest Steering Wheel Super Salita organizzato da Wolf Racing Cars con il supporto di ACI Sport."),
("famiglia di sportivi d'alto livello e appassionati di motori","famiglia legata allo sport e appassionata di motori"),
("ha partecipato e vinto in","ha corso in"),
(": è proprio da lì che nasce\n                la sua passione per le corse.",": un ambiente che alimenta fin da subito\n                la sua passione per le corse."),
('da quel momento capisce che la{" "}\n                <strong className="text-red-400">velocità</strong> sarà parte della sua vita.','da quel momento il motorsport diventa una parte centrale del suo percorso.'),
("consolidando esperienza e\n                performance.","proseguendo il proprio percorso nelle vetture turismo."),
("segnando il\n                passaggio verso il mondo Gran Turismo.","confrontandosi per la prima volta con una vettura GT3."),
("un\n                riconoscimento importante del percorso di crescita che sta costruendo passo dopo\n                passo.","un’esperienza che aggiunge un nuovo capitolo al suo percorso sportivo."),
('Il suo obiettivo è{" "}\n                <strong className="text-white">trasmettere la passione</strong>, la dedizione e i\n                valori che lo guidano a più persone possibili, perché crede che il motorsport non\n                sia solo velocità, ma anche{" "}\n                <strong className="text-red-400">\n                  crescita personale, sacrificio e condivisione\n                </strong>\n                .','Per Filippo il motorsport è competizione, ma anche disciplina, preparazione e responsabilità verso il team e verso le persone che rendono possibile ogni progetto.'),
('Vuoi supportarmi?{" "}\n              <span className="text-gradient">Contattami!</span>','Parliamo del{" "}\n              <span className="text-gradient">prossimo passo.</span>'),
('Le <span className="text-gradient">auto</span> in gara','Le <span className="text-gradient">vetture</span> del percorso'),
]
for a,b in chi_repls: rep(C,a,b)

P="src/pages/Partner.tsx"
rep(P,'''const benefits = [
  "Visibilità diretta in pista: logo sull'auto, sulla tuta, sul casco e sui materiali ufficiali.",
  "Presenza sui media digitali: sito web, social network, comunicati stampa e contenuti dedicati.",
  "Attività di co-branding: post, video e campagne condivise con il brand.",
  "Esperienze esclusive: giornate in pista, eventi aziendali, hospitality nei weekend di gara.",
  "Valorizzazione dell'immagine aziendale: il motorsport è sinonimo di eccellenza, performance e determinazione.",
  "Networking e relazioni: accesso a un ambiente professionale e internazionale, dove le collaborazioni possono estendersi oltre il mondo delle corse.",
];''','''const benefits = [
  "Branding su vettura, equipaggiamento e materiali quando previsto dal programma sportivo e dagli spazi disponibili.",
  "Presenza nei contenuti digitali e nello storytelling collegato all’attività in pista.",
  "Contenuti e iniziative co-branded costruiti in funzione degli obiettivi del partner.",
  "Hospitality, guest experience ed eventi quando disponibili all’interno del programma.",
  "Attivazioni dedicate, anche attraverso Scan The Race e soluzioni QR concordate con l’azienda.",
  "Opportunità di relazione e networking con ospiti, clienti e stakeholder nel contesto motorsport.",
];''')
rep(P,'''const fiscalBenefits = [
  "Deduzione fiscale totale delle spese di sponsorizzazione.",
  "Ritorno d'immagine e comunicazione misurabile.",
  "Possibilità di integrare l'investimento in strategie di marketing già esistenti.",
];''','''const fiscalBenefits = [
  "Accordo e prestazioni di comunicazione definiti con chiarezza.",
  "Attività e materiali concordati in funzione del programma sportivo.",
  "Possibilità di integrare la partnership nelle iniziative marketing e commerciali dell’azienda.",
];''')
rep(P,'''const values = [
  { title: "Professionalità", desc: "Un approccio serio e strutturato a ogni aspetto della carriera, in pista e fuori." },
  { title: "Miglioramento Continuo", desc: "Ogni gara è un'opportunità di crescita tecnica e umana." },
  { title: "Trasparenza", desc: "Rapporti basati sulla fiducia reciproca con partner e team." },
  { title: "Spirito di Squadra", desc: "Nessun pilota vince da solo: il successo è condiviso." },
];''','''const values = [
  { title: "Professionalità", desc: "Serietà nella preparazione, nella comunicazione e nella rappresentazione del partner." },
  { title: "Chiarezza", desc: "Obiettivi, attività e aspettative definiti in modo trasparente fin dall’inizio." },
  { title: "Continuità", desc: "Una collaborazione acquista valore quando vive anche oltre il singolo evento." },
  { title: "Squadra", desc: "Pilota, team e partner lavorano meglio quando condividono direzione e responsabilità." },
];''')
rep(P,'Perché diventare{" "}\n            <span className="text-gradient">Partner</span>','Partnership{" "}\n            <span className="text-gradient">Motorsport</span>')
rep(P,'Il motorsport è molto più di una{" "}\n                <span className="text-gradient">disciplina sportiva</span>','Il motorsport come{" "}\n                <span className="text-gradient">piattaforma di comunicazione</span>')
rep(P,'''              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  È un <strong className="text-red-400">ecosistema di innovazione, performance
                  e comunicazione</strong>. Ogni gara è un evento mediatico, con pubblico,
                  stampa, social e un'immagine fortemente legata a valori positivi:{" "}
                  <strong className="text-white">passione, tecnologia, precisione, ambizione
                  e successo</strong>.
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
                  Chi sceglie di affiancarlo non fa solo pubblicità, ma entra a far parte di
                  una <strong className="text-red-400">squadra</strong> che condivide obiettivi
                  comuni: <strong className="text-white">vincere, crescere e distinguersi</strong>.
                </p>
              </div>''','''              <div className="space-y-4 text-gray-300 leading-relaxed">
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
              </div>''')
rep(P,'Cosa offro ai{" "}\n                <span className="text-gradient">miei partner</span>','Una partnership{" "}\n                <span className="text-gradient">costruita su misura</span>')
rep(P,"Ogni collaborazione è costruita su misura: non c'è una semplice esposizione del\n                marchio, ma una vera sinergia di visibilità e valore.","Ogni collaborazione viene definita in base al programma sportivo e agli obiettivi dell’azienda, con attività e deliverable chiari fin dall’inizio.")
rep(P,'Vantaggi fiscali per le{" "}\n                <span className="text-gradient">aziende</span>','Una partnership,{" "}\n                <span className="text-gradient">non una donazione</span>')
rep(P,'Sponsorizzare un pilota o un team nel motorsport non è una donazione, ma un vero{" "}\n                <strong className="text-white">investimento pubblicitario deducibile</strong>.','Una sponsorizzazione è una collaborazione commerciale basata su prestazioni di comunicazione definite e documentate.')
rep(P,'In base alla normativa italiana, i costi di sponsorizzazione sono considerati{" "}\n                <strong className="text-white">spese di pubblicità e promozione</strong>, quindi{" "}\n                <strong className="text-red-400">deducibili al 100%</strong>, purché\n                l\'investimento abbia finalità di promozione del marchio o dei prodotti aziendali.','Aspetti fiscali, IVA e deducibilità dipendono dalla struttura dell’accordo e dalla situazione dell’azienda. Per questo vanno verificati con il proprio consulente fiscale, evitando promesse generiche e impostando correttamente il rapporto commerciale.')
rep(P,'''              <div className="space-y-4 text-gray-300 leading-relaxed">
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
                  Sostenere la carriera di una giovane promessa significa unire passione,
                  competenza, serietà e impegno in un percorso comune di{" "}
                  <strong className="text-white">visibilità, crescita e risultati concreti</strong>.
                </p>
              </div>''','''              <div className="space-y-4 text-gray-300 leading-relaxed">
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
              </div>''')
rep(P,'Diventa <span className="text-gradient">Protagonista</span>','Costruiamo una <span className="text-gradient">partnership concreta</span>')
rep(P,'Contattami per scoprire le opportunità di partnership su misura per la tua azienda.\n            <br className="hidden md:block" />\n            Ogni traguardo raggiunto è una conquista condivisa.','Parliamo degli obiettivi della tua azienda e delle opportunità realmente disponibili nel programma sportivo.\n            <br className="hidden md:block" />\n            Da lì possiamo costruire una proposta coerente per entrambe le parti.')

CT="src/pages/Contatti.tsx"
rep(CT,'''const faqs = [
  { q: "Come posso seguire la carriera di Filippo Ferrari?", a: "Puoi accedere a contenuti esclusivi sui social." },
  { q: "Quali sono i vantaggi di diventare uno sponsor?", a: "Avrai visibilità e un approccio professionale." },
  { q: "In quali competizioni partecipa Filippo Ferrari?", a: "Filippo Ferrari è un pilota GT3 attivo nel Campionato Italiano Gran Turismo." },
  { q: "Qual è l approccio di Filippo Ferrari alla carriera?", a: "Approccio professionale con mentalità orientata alla vittoria." },
];''','''const faqs = [
  { q: "Come posso seguire Filippo Ferrari?", a: "Il sito raccoglie il profilo e le principali tappe del percorso; per gli aggiornamenti più frequenti puoi seguire i canali Instagram e TikTok." },
  { q: "Qual è il prossimo programma sportivo?", a: "I programmi futuri vengono comunicati solo quando sono definiti. La sezione The Next Chapter racconta la direzione del percorso senza legarla a una stagione specifica." },
  { q: "Come posso proporre una partnership?", a: "Puoi utilizzare il form o i contatti diretti indicando azienda, obiettivi e tipo di collaborazione che vorresti valutare." },
  { q: "Per quali richieste posso contattare Filippo?", a: "Opportunità sportive, partnership commerciali, richieste media e collaborazioni professionali." },
];''')
for a,b in [
('Hai altre domande? <span className="text-gradient">Contattami!</span>','Parliamone<span className="text-gradient">.</span>'),
('Compila il form e ti risponderò il prima possibile.','Per opportunità sportive, partnership, media e collaborazioni professionali.'),
('Grazie! Ti risponderò presto.','Grazie per il messaggio. Ti risponderò appena possibile.'),
('così che possano rispondere alla mia richiesta.','così che possa essere gestita la mia richiesta.'),
('Come <span className="text-gradient">trovarmi</span>','Contatti <span className="text-gradient">diretti</span>'),
('<div><div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Indirizzo</div><span className="text-white font-semibold">Piazza G. Agnelli 10</span><div className="text-gray-400 text-sm">Roma, 00144</div></div>','<div><div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Base</div><span className="text-white font-semibold">Roma, Italia</span></div>')
]: rep(CT,a,b)

rep("src/pages/Galleria.tsx","Momenti, emozioni e adrenalina catturati in pista. Clicca su una foto per ingrandirla.","Una selezione di immagini dal percorso in pista, tra karting, vetture turismo e GT. Clicca su una foto per ingrandirla.")

I="index.html"
for a,b in [
("Filippo Ferrari | GT Racing Driver","Filippo Ferrari | Racing Driver"),
("Sito ufficiale di Filippo Ferrari, racing driver italiano. Profilo sportivo, percorso nel motorsport, progetto 2027, partnership e contatti.","Sito ufficiale di Filippo Ferrari, racing driver italiano. Profilo, percorso nel motorsport, media, partnership e contatti."),
("Filippo Ferrari, racing driver, pilota automobilistico, motorsport, GT racing, partnership motorsport","Filippo Ferrari, racing driver, pilota automobilistico, motorsport, racing, partnership motorsport"),
("Profilo ufficiale di Filippo Ferrari: motorsport, percorso sportivo, progetto 2027 e partnership.","Profilo ufficiale di Filippo Ferrari: percorso nel motorsport, media, partnership e contatti."),
("Motorsport, percorso sportivo, progetto 2027 e partnership.","Motorsport, percorso sportivo, media e partnership.")
]: rep(I,a,b,True)

trigger=BASE/".vercel-trigger"
if trigger.exists():
    trigger.unlink(); print("✓ rimosso .vercel-trigger")

check_files=[
BASE/H, BASE/C, BASE/P, BASE/CT, BASE/"src/pages/Galleria.tsx",
BASE/"src/components/Navbar.tsx", BASE/"src/components/Footer.tsx", BASE/I
]
combined="\n".join(p.read_text(encoding="utf-8") for p in check_files)
for bad in ["GT Racing Driver","progetto 2027","programme-2027","2027 Programme"]:
    if bad in combined:
        print("ERRORE: riferimento rimasto:", bad); sys.exit(1)

print("\nBuild di controllo...\n")
b=subprocess.run(["pnpm","--filter","@workspace/filippo-ferrari","run","build"],cwd=ROOT)
if b.returncode:
    print("\nERRORE: build fallito. Nessun commit."); sys.exit(b.returncode)

print("\n✓ Build riuscito.")
subprocess.run(["git","add","-A","artifacts/filippo-ferrari"],cwd=ROOT,check=True)
print(subprocess.run(["git","status","--short"],cwd=ROOT,text=True,capture_output=True).stdout)

c=subprocess.run(["git","commit","-m","Refine site copy and timeless driver positioning"],cwd=ROOT)
if c.returncode:
    print("Commit non riuscito."); sys.exit(c.returncode)
p=subprocess.run(["git","push","origin","main"],cwd=ROOT)
if p.returncode:
    print("Push non riuscito. Esegui: git push origin main"); sys.exit(p.returncode)

print("\n✓ Push completato. Vercel dovrebbe avviare il deploy.")
print("https://filippo-ferrari.vercel.app/")
