import React from "react";
import { MessageSquare, ArrowUp, Instagram, Mail, MapPin } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "51996067472";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#061729] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center p-2.5 bg-white rounded-xl shadow-md border border-white/20">
              <Logo size="md" />
            </div>
            
            <p className="text-sm italic font-serif text-slate-300 pt-1">
              "Onde negócios começam e relacionamentos permanecem."
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Agência especializada em alavancagem de vendas, criação de sites de alto padrão e geração de reuniões qualificadas para pequenas e médias empresas no Sul do Brasil.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/prospecta.x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white transition-colors flex items-center justify-center text-slate-300"
                aria-label="Instagram da Prospecta X"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={formatWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  "Olá! Gostaria de conversar com a Prospecta X."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white transition-colors flex items-center justify-center text-slate-300"
                aria-label="WhatsApp da Prospecta X"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Prospecta X
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Oferecidos
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Projetos & Soluções
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Metodologia de Vendas
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos para PMEs
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Solicitar Projeto Personalizado
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento Regional
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Atuação comercial em todo o Brasil com foco no Sul</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Atendimento Comercial</p>
                  <p className="text-[11px] text-slate-400">Proposta de Projeto & Novos Negócios</p>
                  <a
                    href={formatWhatsAppUrl(WHATSAPP_NUMBER, "Olá! Gostaria de conversar com a Prospecta X.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-mono text-xs block mt-0.5"
                  >
                    (51) 99606-7472
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://instagram.com/prospecta.x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @prospecta.x
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                Horário comercial: Seg a Sex · 08:30 às 18:30
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Prospecta X. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-500">LGPD & Privacidade</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
