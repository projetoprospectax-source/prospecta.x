import React from "react";
import { Search, PenTool, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

interface Step {
  stepNumber: string;
  title: string;
  timeframe: string;
  description: string;
  activities: string[];
}

const steps: Step[] = [
  {
    stepNumber: "01",
    title: "Mapeamento de Processos & Jornada do Cliente",
    timeframe: "Semana 1",
    description:
      "Mapeamos detalhadamente onde a jornada do cliente acontece dentro da sua empresa: identificamos pontos de atrito, desenhamos fluxos entre setores e auditamos processos para eliminar gargalos e acelerar conversões.",
    activities: [
      "Mapeamento visual da jornada do cliente ponta a ponta",
      "Auditoria de processos operacionais e alinhamento entre setores",
      "Definição da matriz de ICP e metas de tração sustentável",
    ],
  },
  {
    stepNumber: "02",
    title: "Desenvolvimento dos Ativos & Engenharia de Conversão",
    timeframe: "Semanas 2 a 3",
    description:
      "Construímos ou modernizamos os pontos de contato da sua marca: landing pages de alta conversão, portais institucionais velozes, copy de prospecção persuasiva e integrações automáticas com CRM.",
    activities: [
      "Criação de site/landing page de alto padrão",
      "Elaboração de cadências de mensagens e roteiros de abordagem",
      "Configuração de pixels, analytics e automações de atendimento",
    ],
  },
  {
    stepNumber: "03",
    title: "Ativação de Canais & Geração de Reuniões",
    timeframe: "A partir da Semana 3",
    description:
      "Início da esteira ativa: campanhas de tráfego pago ultra-segmentadas entram no ar simultaneamente às cadências de prospecção direta com diretores e decisores de compras.",
    activities: [
      "Veiculação de anúncios no Google e Meta focados em ROI",
      "Prospecção multicanal conduzida por equipe especializada",
      "Agendamento das primeiras reuniões comerciais qualificadas",
    ],
  },
  {
    stepNumber: "04",
    title: "Acompanhamento de Fechamentos & Retenção Contínua",
    timeframe: "Recorrente",
    description:
      "Acompanhamos de perto o feedback das reuniões para calibrar a qualificação e implementamos protocolos de pós-venda para transformar clientes novos em defensores fiéis da sua marca.",
    activities: [
      "Reuniões semanais de alinhamento de pipeline",
      "Otimização contínua de CAC e taxa de fechamento",
      "Estratégia de retenção e expansão de clientes (LTV)",
    ],
  },
];

export const WorkProcess: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-[#FAFAFB] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-900 mb-3">
            <span>Metodologia Validada</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">Passo a Passo Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] font-['Outfit'] leading-tight text-balance-header">
            Como construímos a sua máquina previsível de vendas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nada de improviso. Cada fase é pensada para reduzir o ciclo de vendas e gerar receita consistente para pequenas e médias empresas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0A2540]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <span className="text-2xl font-black text-[#0A2540] font-['Outfit'] tabular-nums">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0A2540] font-['Outfit'] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Entregas-chave:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {step.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-sky-600 font-bold">›</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0A2540] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-['Outfit']">
              Pronto para aplicar essa metodologia no seu negócio?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Inicie com o diagnóstico gratuito da sua estrutura comercial atual.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 rounded-md transition-all whitespace-nowrap shadow-sm"
          >
            <span>Iniciar Diagnóstico</span>
            <ArrowRight className="ml-2 w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
