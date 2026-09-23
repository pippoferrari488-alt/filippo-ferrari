import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/partner", label: "Partner" },
  { href: "/galleria", label: "Galleria" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                src="https://i.imgur.com/1TSIWDC.png"
                alt="Filippo Ferrari Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg tracking-wide">
                  Filippo <span className="text-red-500">Ferrari</span>
                </span>
                <div className="text-xs text-gray-400 tracking-widest uppercase">
                  Pilota
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <span
                  className={`px-4 py-2 rounded text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    location === l.href
                      ? "text-red-400 bg-red-950/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
            <Link href="/partner">
              <span className="ml-4 px-5 py-2 btn-red rounded text-sm font-semibold cursor-pointer">
                Diventa Partner
              </span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mobile-menu-enter nav-glass border-t border-white/10">
          <nav className="px-4 pt-2 pb-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <span
                  className={`block px-4 py-3 rounded text-sm font-medium transition-all cursor-pointer ${
                    location === l.href
                      ? "text-red-400 bg-red-950/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
            <Link href="/partner">
              <span className="block mt-2 px-4 py-3 btn-red rounded text-sm font-semibold text-center cursor-pointer">
                Diventa Partner
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
