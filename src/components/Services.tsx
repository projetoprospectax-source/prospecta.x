import React, { useState } from "react";
import {
  CalendarCheck2,
  Compass,
  Headphones,
  Users2,
  Flame,
  Share2,
  Laptop,
  ArrowRight,
  Check,
  TrendingUp,
  Sparkles,
  Layers,
  MessageSquare,
  Workflow,
} from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";

const WHATSAPP_NUMBER = "51996067472";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  deliverables: string[];
  badgeBanner?: string;
  tagline: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "reunioes-b2b",
    number: "01",
    title: "Geração de Reuniões Qualificadas B2B",
    subtitle: "Conectamos sua empresa aos decisores certos.",
    icon: CalendarCheck2,
    tagline: "PROSPECÇÃO • CONSULTORIA • RESULTADOS",
    deliverables: [
      "Prospecção estratégica outbound focada em empresas com alto potencial de conversão",
      "Agendamento de reuniões qualificadas com tomadores de decisão",
      "Aplicação de questionário diagnóstico para entendimento das necessidades do cliente",
      "Definição de expectativas, metas e oportunidades de escalonamento comercial",
      "Modelos de atuação por comissionamento ou prestação de serviço personalizada",
    ],
  },
  {
    id: "consultoria-processos-jornada",
    number: "02",
    title: "Consultoria em Processos & Jornada do Cliente",
    subtitle: "Onde o processo da jornada do cliente acontece: mapeamento de processos e fluxos integrados para gerar escala.",
    icon: Workflow,
    tagline: "MAPEAMENTO DE PROCESSOS • JORNADA DO CLIENTE • ESCALA PREVISÍVEL",
    deliverables: [
      "Mapeamento detalhado e ponta a ponta de toda a jornada do cliente (da captação ao pós-venda)",
      "Atuação ampla e transversal: não apenas para o time comercial, mas onde todo o processo da experiência do cliente acontece",
      "Diagnóstico operacional e mapeamento de processos para eliminar gargalos, retrabalho e atritos entre setores",
      "Padronização de fluxogramas operacionais, definição de SLAs e alinhamento integrado entre marketing, vendas e atendimento",
      "Reuniões estratégicas online e visitas presenciais com avaliação técnica e entrega de laudo estratégico",
    ],
  },
  {
    id: "atendimento-pos-vendas",
    number: "03",
    title: "Atendimento ao Cliente e Pós-Vendas",
    subtitle: "Experiência do cliente que fideliza e gera valor.",
    icon: Headphones,
    tagline: "RELACIONAMENTOS QUE CONSTROEM VALOR",
    deliverables: [
      "Estruturação de atendimento humanizado e focado na experiência do cliente",
      "Desenvolvimento de scripts personalizados conforme a necessidade da empresa",
      "Criação de fluxos de atendimento e direcionamento eficiente entre setores",
      "Comunicação clara, ágil e alinhada para garantir satisfação e retenção",
    ],
  },
  {
    id: "pacotes-leads",
    number: "04",
    title: "Pacotes de Leads Personalizados",
    subtitle: "Leads qualificados prontos para impulsionar seus resultados com mais previsibilidade.",
    icon: Users2,
    tagline: "LEADS REAIS. OPORTUNIDADES REAIS.",
    deliverables: [
      "Leads segmentados de acordo com o perfil do seu cliente ideal",
      "Validação e qualificação de leads para maior conversão",
      "Envio rápido e contínuo conforme a necessidade do seu negócio",
      "Relatórios de desempenho e qualidade dos leads",
      "Personalização por setor, região e ticket médio",
    ],
  },
  {
    id: "trafego-pago",
    number: "05",
    title: "Tráfego Pago",
    subtitle: "Campanhas estratégicas que atraem, engajam e convertem na medida certa.",
    icon: Flame,
    tagline: "MAIS VISIBILIDADE. MAIS CONVERSÕES. MELHORES RESULTADOS.",
    deliverables: [
      "Gestão de campanhas no Google, Meta, LinkedIn e outras plataformas",
      "Segmentação inteligente para redução de custo por resultado",
      "Criação de anúncios de alta performance",
      "Otimização contínua para máximo ROI",
      "Relatórios detalhados com análise de métricas e insights",
    ],
  },
  {
    id: "redes-sociais",
    number: "06",
    title: "Gestão de Redes Sociais",
    subtitle: "Presença estratégica e conteúdo que conecta sua marca ao seu público.",
    icon: Share2,
    tagline: "CONTEÚDO QUE CONECTA. RESULTADOS QUE CRESCEM.",
    deliverables: [
      "Planejamento de conteúdo alinhado aos objetivos do negócio",
      "Criação de posts, legendas e artes profissionais",
      "Gestão completa de Instagram, Facebook, LinkedIn e mais",
      "Interação com seguidores e fortalecimento da marca",
      "Relatórios de engajamento e crescimento",
    ],
  },
  {
    id: "sites-aplicativos",
    number: "07",
    title: "Criação de Sites e Aplicativos",
    subtitle: "Ativos digitais de alta conversão. Pacotes a partir de R$ 499 (Site) e R$ 699 (Site + Aplicativo).",
    icon: Laptop,
    tagline: "PRESENÇA DIGITAL DE ALTO PADRÃO A PARTIR DE R$ 499",
    deliverables: [
      "Pacote Criação de Sites por apenas R$ 499,00 (responsivo, moderno e integrado ao WhatsApp)",
      "Pacote Site + Aplicativo por apenas R$ 699,00 (solução completa com ícone na tela inicial)",
      "Serviço de manutenção técnica e hospedagem disponível como adicional opcional",
      "Landing pages institucionais e páginas de vendas com copywriting persuasivo",
      "Integração nativa com WhatsApp comercial e CRM de vendas",
      "Otimização técnica para busca orgânica no Google (SEO)",
      "Estrutura focada em transformar visitantes em orçamentos reais",
    ],
  },
];

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>("reunioes-b2b");

  const selectedService =
    servicesList.find((s) => s.id === activeServiceId) || servicesList[0];

  const handleContactForService = (serviceTitle: string) => {
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.getElementById("service-select") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = serviceTitle;
      }
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0A2540] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header - Nosso Escopo */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">
            <span>Nosso Escopo</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-300">Prospecta X</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Outfit'] leading-tight text-balance-header">
            Soluções Comerciais para empresas que querem crescer com previsibilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Conheça os serviços especializados da Prospecta X. Da prospecção ativa até a retenção no pós-venda e o desenvolvimento de ativos digitais, atuamos onde sua empresa gera lucro real.
          </p>
        </div>

        {/* 3 Core Pillars Strip (from official post) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 pb-8 border-b border-white/10">
          <div className="p-4 rounded-lg bg-slate-900/80 border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Pilar 01</p>
              <p className="text-sm font-bold text-white font-['Outfit']">Estratégia que conecta</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Pilar 02</p>
              <p className="text-sm font-bold text-white font-['Outfit']">Processos que geram resultados</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Pilar 03</p>
              <p className="text-sm font-bold text-white font-['Outfit']">Relacionamentos que constroem valor</p>
            </div>
          </div>
        </div>

        {/* Master-Detail Interactive Service Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selector Navigation (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Selecione o serviço para detalhes:
            </p>
            {servicesList.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-white text-[#0A2540] border-white shadow-xl"
                      : "bg-slate-900/60 text-slate-200 border-white/10 hover:bg-slate-900 hover:border-white/25"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <span
                      className={`text-xs font-mono font-bold tabular-nums px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-sky-100 text-[#0A2540]"
                          : "bg-white/10 text-sky-300"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate font-['Outfit']">
                        {service.title}
                      </p>
                      <p
                        className={`text-xs truncate ${
                          isActive ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? "text-[#0A2540] scale-110" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-white/15 rounded-xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-1">
                    <span>MÓDULO {selectedService.number}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400 font-sans uppercase tracking-wider text-[11px]">
                      {selectedService.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-sky-200 mt-1 font-medium">
                    {selectedService.subtitle}
                  </p>
                </div>
                
                <div className="w-14 h-14 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-amber-300">
                  <selectedService.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Exact Checklist Deliverables from the Post */}
              <div className="space-y-4 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Escopo e Entregas Inclusas:
                </p>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-md bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Tagline Highlight Box */}
              <div className="p-4 rounded-lg bg-[#061729] border border-amber-400/20 flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    Posicionamento Oficial
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white font-['Outfit'] mt-0.5">
                    {selectedService.tagline}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                  Prospecta X
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleContactForService(selectedService.title)}
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 rounded-md transition-all duration-200 shadow-sm active:scale-[0.98] group whitespace-nowrap"
                >
                  <span>Solicitar este serviço</span>
                  <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={formatWhatsAppUrl(
                    WHATSAPP_NUMBER,
                    `Olá! Gostaria de entender mais sobre o serviço de ${selectedService.title} da Prospecta X.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dúvidas no WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Dual Callout Cards from the post */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-white/15 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-amber-300 font-['Outfit']">
                Princípio de Crescimento
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                “Empresas crescem quando comercial, atendimento e estratégia trabalham juntos.”
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider font-bold text-sky-300 font-['Outfit']">
                Próximo Passo
              </p>
              <p className="text-sm sm:text-base font-bold text-white">
                Sua operação está preparada para escalar?
              </p>
              <p className="text-xs text-slate-300">
                Vamos conversar e desenhar seu plano personalizado.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 rounded-md transition-all whitespace-nowrap shadow-sm shrink-0"
            >
              Vamos conversar
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
