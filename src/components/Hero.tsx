import React from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "51996067472";

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0A2540] text-white overflow-hidden">
      {/* Subtle luxury architectural background glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-slate-400/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean editorial kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Alavancagem Comercial & Presença Digital · Sul do Brasil</span>
            </div>

            {/* Headline with tagline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-['Outfit'] leading-[1.12] text-balance-header">
              Onde negócios começam e relacionamentos permanecem.
            </h1>

            {/* Official Triad Badge Line */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/90 font-['Outfit']">
              <span>Estratégia</span>
              <span className="text-slate-500">·</span>
              <span>Relacionamento</span>
              <span className="text-slate-500">·</span>
              <span>Resultados</span>
            </div>

            {/* Sub-headline focused on real commercial revenue for SMEs */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              A Prospecta X constrói a máquina comercial e os ativos digitais da sua empresa. Transformamos potencial de vendas em lucro real para pequenas e médias empresas através de reuniões qualificadas, tráfego assertivo e sites de alta conversão.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mapeamento de processos & jornada do cliente</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Oportunidades que viram receita real no caixa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Sites modernos desenvolvidos para converter</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Atendimento próximo e pós-vendas contínuo</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contato"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 rounded-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] group whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Solicitar Projeto Personalizado</span>
                <ArrowRight className="ml-2.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={formatWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  "Olá! Gostaria de conversar com um especialista da Prospecta X sobre o crescimento da minha empresa."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-md transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Pilares Estratégicos Oficiais (Sem métricas fictícias) */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm font-bold text-white font-['Outfit']">
                  Estratégia
                </p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Que conecta sua empresa aos decisores certos.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm font-bold text-white font-['Outfit']">
                  Processos
                </p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Que geram resultados, performance e escala comercial.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm font-bold text-white font-['Outfit']">
                  Relacionamentos
                </p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Que constroem valor contínuo e fidelizam no pós-venda.
                </p>
              </div>
            </div>

          </div>

          {/* Visual Column: Executive Meeting Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Brand Floating Seal */}
            <div className="hidden sm:flex absolute -top-7 -right-6 bg-white p-3 rounded-xl shadow-2xl border border-slate-200/90 z-20 items-center gap-3 animate-in fade-in zoom-in-95 duration-500 hover:scale-105 transition-transform">
              <Logo imgStyle={{ width: "60px", height: "60px" }} />
              <div className="pr-3 text-left">
                <p className="text-sm font-bold text-[#0A2540] font-['Outfit']">Prospecta X</p>
                <p className="text-[10px] text-slate-500 font-medium">Estratégia · Relacionamento · Resultados</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/images/hero-meeting.jpg"
                alt="Reunião executiva de alavancagem comercial na Prospecta X"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Resilient fallback container if image fails
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add("flex", "items-center", "justify-center", "p-8", "bg-slate-800");
                  }
                }}
              />
              {/* Subtle luxury vignette */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-black/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating trust badge at the bottom of the card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A2540]/95 backdrop-blur-md border border-white/20 rounded-md p-3.5 flex items-center justify-between text-xs text-slate-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                    <Logo imgStyle={{ width: "40px", height: "25px" }} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">Prospecta X em Operação</p>
                    <p className="text-[10px] text-amber-300 font-medium tracking-wider uppercase">
                      Estratégia · Relacionamento · Resultados
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-right">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-mono text-[11px] tabular-nums">Ativo no Sul</span>
                </div>
              </div>
            </div>

            {/* Ambient luxury accent element */}
            <div 
              className="hidden lg:block absolute -bottom-5 -right-5 w-32 h-32 border border-sky-400/20 rounded-lg -z-10" 
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
