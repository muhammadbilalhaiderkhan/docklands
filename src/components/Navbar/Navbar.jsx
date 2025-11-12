import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import docklandslogo from '../../assets/docklandslogo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-white backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        <a
          href="#"
          className="relative z-10 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={docklandslogo}
            alt="Docklands Logo"
            className={`h-auto object-contain transition-all duration-300 ${
              scrolled ? 'w-32' : 'w-36'
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-[#003366] font-medium text-[15px] tracking-wide group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0099cc]">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0099cc] to-[#00ccff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0099cc] to-[#00b8e6] hover:from-[#007fa3] hover:to-[#0099cc] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#0099cc]/30 hover:shadow-xl hover:shadow-[#0099cc]/40 hover:-translate-y-0.5 group"
        >
          <span>Book Now</span>
          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <button
          className="lg:hidden relative z-10 text-[#003366] p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
          <div className="flex flex-col px-6 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#003366] font-medium text-base py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-[#0099cc] transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setOpen(false)}
                style={{
                  animation: open ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0099cc] to-[#00b8e6] text-white text-center py-3.5 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#0099cc]/30 hover:shadow-xl hover:shadow-[#0099cc]/40 mt-4 group"
              onClick={() => setOpen(false)}
              style={{
                animation: open ? `slideIn 0.3s ease-out ${navLinks.length * 0.05}s forwards` : 'none',
                opacity: 0,
              }}
            >
              <span>Book Now</span>
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
