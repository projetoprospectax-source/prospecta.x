import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "51996067472";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Metodologia", href: "#processo" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-2.5"
          : "bg-white border-b border-slate-200/60 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Official Logo (Unaltered, sitting seamlessly on white header) */}
        <a
          href="#"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/40 rounded transition-transform hover:scale-[1.02]"
          aria-label="Prospecta X - Início"
        >
          <Logo imgStyle={{ width: "140px", height: "105px" }} />
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-[#0A2540] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0A2540] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://instagram.com/prospecta.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#0A2540] transition-colors flex items-center gap-1 font-semibold"
            aria-label="Instagram da Prospecta X"
          >
            <span>@prospecta.x</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, "#contato")}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#143A61] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#0A2540]"
          >
            Solicitar Projeto
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-[#0A2540] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] rounded"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-700 hover:text-[#0A2540] px-2 py-1.5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="w-full text-center px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#143A61] rounded-md shadow-sm"
            >
              Solicitar Projeto Personalizado
            </a>
            <a
              href={formatWhatsAppUrl(
                WHATSAPP_NUMBER,
                "Olá! Gostaria de conversar com a equipe da Prospecta X sobre soluções de vendas."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direto (51) 99606-7472</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
