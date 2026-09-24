#!/usr/bin/env python3
from pathlib import Path
import subprocess
import sys

ROOT = Path.cwd()
BASE = ROOT / "artifacts" / "filippo-ferrari"
OLD_REPO = "https://github.com/pippoferrari488-alt/filippo-ferrari-official.git"


def run(cmd, capture=False, check=True):
    return subprocess.run(cmd, cwd=ROOT, text=True, capture_output=capture, check=check)


remote = run(["git", "remote", "-v"], capture=True, check=False).stdout
if "filippo-ferrari-official" in remote:
    print("ERRORE: sei nel repository originale. Non applico modifiche.")
    sys.exit(1)
if "pippoferrari488-alt/filippo-ferrari" not in remote:
    print("ERRORE: non riconosco il nuovo repository filippo-ferrari.")
    print(remote)
    sys.exit(1)

print("Recupero la base del sito originale...")
fetch = run(["git", "fetch", "--quiet", OLD_REPO, "main"], check=False)
if fetch.returncode != 0:
    print("ERRORE: non riesco a leggere il repository originale.")
    sys.exit(fetch.returncode)

OLD_REF = "FETCH_HEAD"


def old_file(path):
    result = run(["git", "show", f"{OLD_REF}:{path}"], capture=True, check=False)
    if result.returncode != 0:
        print(f"ERRORE: non riesco a recuperare {path} dal sito originale.")
        sys.exit(result.returncode)
    return result.stdout


def write(rel, content):
    path = BASE / rel
    path.write_text(content, encoding="utf-8")
    print(f"✓ {rel}")


# HOME: resto del sito originale, nuova apertura premium.
home = old_file("artifacts/filippo-ferrari/src/pages/Home.tsx")
hero_start = home.index("      {/* Hero */}")
stats_start = home.index("      {/* Stats */}")

new_hero = r'''      {/* Hero */}
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

'''

home = home[:hero_start] + new_hero + home[stats_start:]

old_buttons = r'''            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/partner">
                <span className="inline-block px-8 py-4 btn-red rounded font-semibold text-base cursor-pointer">
                  Diventa Partner
                </span>
              </Link>
              <Link href="/contatti">
                <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded font-semibold text-base cursor-pointer transition-all">
                  Contattami Ora
                </span>
              </Link>
            </div>'''

new_buttons = r'''            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-8">
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
            </div>'''

if old_buttons not in home:
    print("ERRORE: blocco pulsanti homepage originale non trovato.")
    sys.exit(1)
home = home.replace(old_buttons, new_buttons, 1)
write("src/pages/Home.tsx", home)

# Navbar e Footer originali, con dicitura aggiornata.
navbar = old_file("artifacts/filippo-ferrari/src/components/Navbar.tsx")
navbar = navbar.replace("GT Racing Driver", "Italian Racing Driver")
write("src/components/Navbar.tsx", navbar)

footer = old_file("artifacts/filippo-ferrari/src/components/Footer.tsx")
footer = footer.replace("GT Racing Driver", "Italian Racing Driver")
footer = footer.replace("Racing Driver · Italy", "Italian Racing Driver")
write("src/components/Footer.tsx", footer)

# Ripristino pagine che erano state ritoccate ma che devono restare vicine all'originale.
write("src/pages/ChiSono.tsx", old_file("artifacts/filippo-ferrari/src/pages/ChiSono.tsx"))
write("src/pages/Galleria.tsx", old_file("artifacts/filippo-ferrari/src/pages/Galleria.tsx"))

# PARTNERSHIP: base originale + Scan The Race + fiscalità formulata correttamente.
partner = old_file("artifacts/filippo-ferrari/src/pages/Partner.tsx")
partner = partner.replace(
    'import { CheckCircle } from "lucide-react";',
    'import { ArrowRight, CheckCircle, QrCode } from "lucide-react";',
    1,
)

partner = partner.replace(
'''const fiscalBenefits = [
  "Deduzione fiscale totale delle spese di sponsorizzazione.",
  "Ritorno d'immagine e comunicazione misurabile.",
  "Possibilità di integrare l'investimento in strategie di marketing già esistenti.",
];''',
'''const fiscalBenefits = [
  "Accordo commerciale e prestazioni di comunicazione definite con chiarezza.",
  "Attività e deliverable concordati in funzione del programma sportivo.",
  "Possibilità di integrare la partnership nelle strategie marketing e commerciali dell'azienda.",
];

const scanSteps = [
  {
    number: "01",
    title: "Il QR",
    text: "Durante gli eventi selezionati, il QR di Scan The Race può essere utilizzato sulla vettura e sui canali collegati al progetto.",
  },
  {
    number: "02",
    title: "La pagina partner",
    text: "La scansione apre una pagina dedicata alle aziende che partecipano all'iniziativa, rendendo semplice scoprire i partner.",
  },
  {
    number: "03",
    title: "L'attivazione",
    text: "Ogni azienda può mettere in evidenza un codice sconto, un'offerta, un servizio, un prodotto o un contenuto concordato.",
  },
];''',
    1,
)

partner = partner.replace(
'''  const benefitsRef = useIntersection();
  const fiscalRef = useIntersection();''',
'''  const benefitsRef = useIntersection();
  const scanRef = useIntersection();
  const fiscalRef = useIntersection();''',
    1,
)

scan_section = r'''
      {/* Scan The Race */}
      <section
        id="scan-the-race"
        ref={scanRef.ref as React.RefObject<HTMLElement>}
        className="py-20 md:py-24 bg-black border-y border-white/5 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start opacity-0 ${scanRef.visible ? "animate-fadeInUp" : ""}`}>
            <div>
              <div className="divider-red mb-5" />
              <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
                Scan The Race
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                Dalla visibilità
                <br />
                <span className="text-gradient">all'interazione.</span>
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

              <Link href="/contatti">
                <span className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 btn-red rounded font-semibold cursor-pointer">
                  Parliamo di Scan The Race <ArrowRight size={17} />
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/25 flex items-center justify-center">
                  <QrCode size={24} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Come funziona</div>
                  <div className="text-gray-500 text-sm">
                    Un percorso semplice, pensato per il pubblico e per il partner.
                  </div>
                </div>
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

              <p className="text-gray-500 text-xs leading-relaxed mt-6">
                Formato, presenza del QR e contenuti vengono definiti in funzione dell'evento e della partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

'''

marker = "      {/* Fiscal benefits */}"
if marker not in partner:
    print("ERRORE: punto di inserimento Scan The Race non trovato.")
    sys.exit(1)
partner = partner.replace(marker, scan_section + marker, 1)

partner = partner.replace(
'''                Vantaggi fiscali per le{" "}
                <span className="text-gradient">aziende</span>''',
'''                Aspetti commerciali e{" "}
                <span className="text-gradient">fiscali</span>''',
    1,
)
partner = partner.replace(
'''                Sponsorizzare un pilota o un team nel motorsport non è una donazione, ma un vero{" "}
                <strong className="text-white">investimento pubblicitario deducibile</strong>.''',
'''                Una sponsorizzazione motorsport è una collaborazione commerciale basata su attività
                e prestazioni di comunicazione definite tra le parti, non una semplice donazione.''',
    1,
)
partner = partner.replace(
'''                In base alla normativa italiana, i costi di sponsorizzazione sono considerati{" "}
                <strong className="text-white">spese di pubblicità e promozione</strong>, quindi{" "}
                <strong className="text-red-400">deducibili al 100%</strong>, purché
                l'investimento abbia finalità di promozione del marchio o dei prodotti aziendali.''',
'''                Il trattamento fiscale, la deducibilità dei costi e l'IVA dipendono dalla struttura
                dell'accordo e dalla situazione dell'azienda. Per questo gli aspetti fiscali vanno
                verificati dal partner con il proprio consulente.''',
    1,
)
partner = partner.replace("                  In sintesi", "                  In pratica", 1)
write("src/pages/Partner.tsx", partner)

# SEO senza categoria GT e senza riferimenti a stagioni future.
index_path = BASE / "index.html"
index = index_path.read_text(encoding="utf-8")
index = index.replace("Filippo Ferrari | GT Racing Driver", "Filippo Ferrari | Italian Racing Driver")
index = index.replace("Filippo Ferrari | Racing Driver", "Filippo Ferrari | Italian Racing Driver")
index = index.replace("progetto 2027, ", "")
index = index.replace("progetto 2027 e ", "")
write("index.html", index)

# Controlli minimi prima del build.
home_check = (BASE / "src/pages/Home.tsx").read_text(encoding="utf-8")
partner_check = (BASE / "src/pages/Partner.tsx").read_text(encoding="utf-8")
for value in [
    "Italian Racing Driver",
    "Allacciate le cinture. Il motorsport è competizione, crescita ed emozione.",
    "Ogni curva aggiunge qualcosa al percorso, per chi la corre e per chi sceglie di viverla insieme.",
    '/partner#scan-the-race',
]:
    if value not in home_check:
        print("ERRORE controllo homepage:", value)
        sys.exit(1)

for value in ['id="scan-the-race"', "Dalla visibilità", "scanSteps"]:
    if value not in partner_check:
        print("ERRORE controllo Partnership:", value)
        sys.exit(1)

print("\nEseguo il build di controllo...\n")
build = run(["pnpm", "--filter", "@workspace/filippo-ferrari", "run", "build"], check=False)
if build.returncode != 0:
    print("\nERRORE: il build non è riuscito. Non faccio commit.")
    sys.exit(build.returncode)

print("\n✓ Build riuscito.")

paths = [
    "artifacts/filippo-ferrari/src/pages/Home.tsx",
    "artifacts/filippo-ferrari/src/pages/Partner.tsx",
    "artifacts/filippo-ferrari/src/pages/ChiSono.tsx",
    "artifacts/filippo-ferrari/src/pages/Galleria.tsx",
    "artifacts/filippo-ferrari/src/components/Navbar.tsx",
    "artifacts/filippo-ferrari/src/components/Footer.tsx",
    "artifacts/filippo-ferrari/index.html",
]
run(["git", "add", *paths])

status = run(["git", "status", "--short"], capture=True).stdout
print("\nModifiche pronte:")
print(status)

commit = run(["git", "commit", "-m", "Restore original site feel and add Scan The Race"], check=False)
if commit.returncode != 0:
    print("\nNessun nuovo commit creato oppure commit non riuscito.")
    sys.exit(commit.returncode)

push = run(["git", "push", "origin", "main"], check=False)
if push.returncode != 0:
    print("\nIl commit è stato creato, ma il push non è riuscito.")
    print("Esegui manualmente: git push origin main")
    sys.exit(push.returncode)

print("\n✓ Push completato.")
print("Vercel avvierà automaticamente il nuovo deploy.")
print("Sito: https://filippo-ferrari.vercel.app/")
