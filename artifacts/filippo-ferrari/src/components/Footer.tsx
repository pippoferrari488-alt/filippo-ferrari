import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.imgur.com/1TSIWDC.png"
                alt="Logo"
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <div className="text-white font-bold">
                  Filippo <span className="text-red-500">Ferrari</span>
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Pilota ACI Sport</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Passione, professionalità e voglia di vincere. Ogni gara è un'occasione per crescere.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Menu</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/chi-sono", label: "Chi Sono" },
                { href: "/partner", label: "Diventa Partner" },
                { href: "/galleria", label: "Galleria" },
                { href: "/contatti", label: "Contatti" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-gray-500 hover:text-red-400 text-sm transition-colors cursor-pointer">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:3318975195" className="flex items-center gap-2 text-gray-500 hover:text-red-400 text-sm transition-colors">
                  <Phone size={14} className="text-red-500 shrink-0" />
                  +39 331 897 5195
                </a>
              </li>
              <li>
                <a href="mailto:filippoferrariofficial@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-red-400 text-sm transition-colors">
                  <Mail size={14} className="text-red-500 shrink-0" />
                  filippoferrariofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} className="text-red-500 shrink-0" />
                Piazza G. Agnelli 10, Roma, 00144
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Seguimi</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/__filippo.ferrari__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@fili.ferrari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.71a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <Link href="/contatti">
                <span className="inline-block px-5 py-2.5 btn-red rounded text-sm font-semibold cursor-pointer">
                  Contattami
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Filippo Ferrari. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-xs">
            Pilota tesserato ACI Sport · Campionato Italiano Gran Turismo
          </p>
        </div>
      </div>
    </footer>
  );
}
