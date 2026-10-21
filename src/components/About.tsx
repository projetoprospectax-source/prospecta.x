import React from "react";
import { 
  Users2, 
  Target, 
  MessageSquare, 
  LineChart, 
  Sliders, 
  CheckCircle, 
  PhoneCall, 
  FileText 
} from "lucide-react";
import { Logo } from "./Logo";
import { formatWhatsAppUrl } from "../lib/utils";

const WHATSAPP_NUMBER = "51996067472";

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAFAFB] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-900 mb-3">
            <span>Nossa Empresa</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">Prospecta X</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] font-['Outfit'] leading-tight text-balance-header">
            Estratégias comerciais focadas em crescimento e relacionamento duradouro.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A <strong>Prospecta X</strong> atua no desenvolvimento de estratégias de alto impacto focadas em crescimento, geração de oportunidades e fortalecimento de relacionamento com clientes. Na nossa frente de consultoria, <strong>não olhamos apenas para o time comercial isoladamente</strong>: atuamos diretamente <strong>onde todo o processo da jornada do cliente acontece</strong>, realizando o <strong>mapeamento detalhado de processos operacionais</strong>, alinhando atendimento, vendas e pós-vendas para eliminar gargalos e acelerar conversões sustentáveis.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Asset & Corporate Card Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-white aspect-[4/3]">
              <img
                src="/images/about-team.jpg"
                alt="Planejamento estratégico e mapeamento de processos da Prospecta X"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm p-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0A2540]">Mapeamento de Processos & Jornada</span>
                <span className="text-slate-500">Atuação Especializada</span>
              </div>
            </div>

            {/* Official Brand Seal & Company Commitment Box */}
            <div className="mt-6 p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-20 h-20 sm:w-24 sm:h-24 p-1 bg-slate-50 rounded-xl border border-slate-200/80 shrink-0 flex items-center justify-center shadow-sm">
                  <Logo size="md" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-[#0A2540] font-['Outfit']">
                    Prospecta X
                  </h4>
                  <p className="text-xs text-amber-600 font-semibold tracking-wide uppercase">
                    Estratégia · Relacionamento · Resultados
                  </p>
                </div>
              </div>
              <p className="text-sm italic text-slate-700 leading-relaxed font-serif">
                “Esta proposta foi desenvolvida para apresentar uma estrutura comercial eficiente, com foco em crescimento sustentável e fortalecimento do relacionamento com clientes.”
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <span className="font-semibold text-slate-700">Estrutura Comercial & Vendas</span>
                <a
                  href={formatWhatsAppUrl(
                    WHATSAPP_NUMBER,
                    "Olá! Gostaria de conversar sobre a proposta comercial da Prospecta X para a minha empresa."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-md font-medium text-xs border border-emerald-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>(51) 99606-7472</span>
                </a>
              </div>
            </div>
          </div>

          {/* Pillars & Differential Column (From Page 4 of PDF) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0A2540] font-['Outfit']">
                Diferenciais da Prospecta X
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Nossos pilares de entrega foram construídos para solucionar a dor real das empresas: a falta de previsibilidade comercial e o distanciamento no pós-venda.
              </p>
            </div>

            {/* The 5 Official Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:border-[#0A2540]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] mb-3">
                  <Users2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0A2540] mb-1 font-['Outfit']">
                  Atendimento Humanizado e Estratégico
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sem abordagens robóticas ou genéricas. Cada contato é conduzido com inteligência relacional para gerar empatia e confiança imediata.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:border-[#0A2540]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0A2540] mb-1 font-['Outfit']">
                  Foco em Relacionamento e Conversão
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Não buscamos apenas agendamentos vazios; construímos a ponte que transforma reuniões em contratos assinados e parcerias longas.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:border-[#0A2540]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0A2540] mb-1 font-['Outfit']">
                  Comunicação Ativa com Clientes e Leads
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cadência proativa multicanal. Mantemos seus prospects aquecidos e seus clientes atendidos com rapidez e excelência.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:border-[#0A2540]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] mb-3">
                  <LineChart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0A2540] mb-1 font-['Outfit']">
                  Acompanhamento de Indicadores Comerciais
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Acompanhamento contínuo de métricas reais: taxas de resposta, qualificação de decisores, pipeline ativo e conversão em vendas.
                </p>
              </div>

            </div>

            {/* Differential #5: Full Width Card */}
            <div className="p-5 rounded-lg bg-gradient-to-r from-white to-sky-50/50 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0A2540] mb-1 font-['Outfit']">
                  Flexibilidade para Adaptação Conforme Necessidade da Empresa
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cada negócio possui seu próprio ritmo, ticket médio e complexidade operacional. Adaptamos roteiros, canais e modelos contratuais para a realidade da sua empresa.
                </p>
              </div>
            </div>

            {/* Official Proposal Callout */}
            <div className="p-4 rounded-md bg-[#0A2540]/5 border-l-4 border-[#0A2540] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#0A2540] shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Proposta de Projeto Disponível:</strong> Consulte os modelos de atuação, escopo detalhado e investimentos sugeridos.
                </p>
              </div>
              <a
                href="#planos"
                className="text-xs font-bold text-[#0A2540] hover:text-[#143A61] uppercase tracking-wider underline shrink-0 whitespace-nowrap"
              >
                Ver Planos
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
