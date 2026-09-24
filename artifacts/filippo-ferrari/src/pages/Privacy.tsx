import { Mail } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <section className="pt-32 pb-14 border-b border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.22em] text-red-400 font-semibold mb-4">
            Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Informazioni sul trattamento dei dati personali inviati attraverso questo sito.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Titolare del trattamento</h2>
            <p className="text-gray-400 leading-relaxed">
              Il titolare del trattamento è Filippo Ferrari. Per richieste relative alla privacy è possibile scrivere a{" "}
              <a href="mailto:filippoferrariofficial@gmail.com" className="text-red-400 hover:text-red-300">
                filippoferrariofficial@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Dati trattati</h2>
            <p className="text-gray-400 leading-relaxed">
              Attraverso il modulo di contatto possono essere raccolti nome, indirizzo email,
              contenuto del messaggio e le informazioni che l'utente sceglie volontariamente di inserire.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Finalità</h2>
            <p className="text-gray-400 leading-relaxed">
              I dati vengono utilizzati per ricevere, gestire e rispondere alle richieste relative
              a opportunità sportive, partnership, media e collaborazioni professionali.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Modulo di contatto</h2>
            <p className="text-gray-400 leading-relaxed">
              Il modulo utilizza un servizio tecnico esterno per la trasmissione dei messaggi.
              I dati inseriti vengono trattati nella misura necessaria a recapitare e gestire la richiesta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Conservazione</h2>
            <p className="text-gray-400 leading-relaxed">
              I dati vengono conservati per il tempo necessario alla gestione della richiesta
              e degli eventuali rapporti che ne derivano, fatti salvi gli obblighi previsti
              dalla normativa applicabile.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Diritti dell'interessato</h2>
            <p className="text-gray-400 leading-relaxed">
              Nei casi previsti dalla normativa applicabile è possibile richiedere accesso,
              rettifica, cancellazione o limitazione del trattamento ed esercitare gli altri
              diritti riconosciuti dal Regolamento UE 2016/679. È inoltre possibile rivolgersi
              all'autorità di controllo competente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Dati tecnici</h2>
            <p className="text-gray-400 leading-relaxed">
              Il sito e i servizi tecnici utilizzati per la sua erogazione possono trattare
              informazioni necessarie al funzionamento e alla sicurezza, come indirizzo IP,
              informazioni sul browser e log tecnici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex gap-3 items-start">
              <Mail size={19} className="text-red-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-white font-semibold mb-1">Contatto privacy</div>
                <a href="mailto:filippoferrariofficial@gmail.com" className="text-gray-400 hover:text-red-400">
                  filippoferrariofficial@gmail.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-xs">
            Ultimo aggiornamento: settembre 2026.
          </p>

        </div>
      </section>
    </>
  );
}
