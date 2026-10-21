import React, { useState } from "react";
import { Check, ArrowRight, Star, ShieldCheck, Download, PhoneCall, Sparkles, FileText, Globe, Smartphone, Laptop } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";

const WHATSAPP_NUMBER = "51996067472";

interface OptionalAddOn {
  badge?: string;
  title: string;
  description: string;
}

interface InvestmentPlan {
  id: string;
  name: string;
  category: string;
  badge?: string;
  isPopular?: boolean;
  investmentAmount: string;
  investmentPeriod: string;
  commissionDetails?: string[];
  optionalAddOn?: OptionalAddOn;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
}

const investmentPlans: InvestmentPlan[] = [
  {
    id: "criacao-sites",
    name: "Criação de Sites",
    category: "Presença Digital & Conversão",
    badge: "Pacote Promocional",
    investmentAmount: "R$ 499,00",
    investmentPeriod: "Investimento único · Entrega ágil",
    optionalAddOn: {
      badge: "Adicional Opcional",
      title: "Hospedagem & Manutenção Contínua",
      description: "Servidores rápidos com SSL ativo, backups periódicos de segurança, suporte técnico para dúvidas e atualizações contínuas para manter seu site sempre no ar.",
    },
    idealFor: "Ideal para empresas, comércios e profissionais que precisam de uma presença digital moderna, veloz e profissional para atrair e converter clientes.",
    deliverables: [
      "Site profissional e 100% responsivo (desktop, tablet e mobile)",
      "Design moderno e personalizado com a identidade da sua marca",
      "Botão flutuante e integração nativa com WhatsApp comercial",
      "Otimização básica para os mecanismos de busca (SEO)",
      "Formulário de contato e captação de orçamentos integrado",
      "Estrutura otimizada para alta velocidade de carregamento",
      "Serviço de manutenção e hospedagem disponível como adicional opcional",
    ],
    ctaText: "Contratar Criação de Site",
  },
  {
    id: "site-aplicativo",
    name: "Pacote Site + Aplicativo",
    category: "Ecossistema Digital Completo",
    badge: "Melhor Custo-Benefício",
    isPopular: true,
    investmentAmount: "R$ 699,00",
    investmentPeriod: "Investimento único · Solução integrada",
    optionalAddOn: {
      badge: "Adicional Opcional",
      title: "Hospedagem & Manutenção (Site + App)",
      description: "Infraestrutura dedicada de hospedagem para o site e sincronização do app/PWA, monitoramento de estabilidade, backups de segurança e suporte contínuo.",
    },
    idealFor: "Perfeito para negócios que buscam autoridade máxima: site de alta conversão aliado a um aplicativo instalável no smartphone para engajamento e retenção de clientes.",
    deliverables: [
      "Site corporativo completo com páginas institucionais e comerciais",
      "Aplicativo integrado (Web App/PWA instalável no celular do cliente)",
      "Acesso direto com ícone exclusivo na tela inicial do cliente",
      "Integração nativa com WhatsApp, catálogo e formulários",
      "Painel intuitivo para gerenciamento ágil de conteúdo",
      "Certificado de segurança SSL incluso e máxima performance",
      "Serviço de manutenção e hospedagem disponível como adicional opcional",
    ],
    ctaText: "Contratar Site + Aplicativo",
  },
  {
    id: "outbound-performance",
    name: "Outbound Performance",
    category: "Prospecção Modelo I",
    badge: "Leads Qualificados Sem Reuniões",
    investmentAmount: "R$ 3.000,00 / mês",
    investmentPeriod: "Investimento mensal · Contrato de 90 dias",
    commissionDetails: [
      "Entrega direta de leads qualificados (sem agendamento de reuniões)",
      "Comissionamento acordado por venda fechada",
    ],
    idealFor: "Empresas que possuem equipe comercial própria e precisam de um fluxo contínuo de leads altamente qualificados no perfil ideal (ICP), sem agendamento de reuniões.",
    deliverables: [
      "Prospecção estratégica outbound focada no seu perfil ideal (ICP)",
      "Entrega de leads qualificados e validados para seu time fechar",
      "Sem agendamento de reuniões: entrega direta dos contatos de decisores",
      "Aplicação de questionário diagnóstico para validação de interesse",
      "Definição de metas e oportunidades de escalonamento",
      "Relatórios de pipeline e acompanhamento constante",
    ],
    ctaText: "Selecionar Outbound Performance",
  },
  {
    id: "outbound-start",
    name: "Outbound Start",
    category: "Prospecção Modelo II",
    badge: "Mais Procurado B2B",
    investmentAmount: "R$ 6.000,00 / mês",
    investmentPeriod: "Investimento mensal fixo · Contrato de 90 dias",
    commissionDetails: [
      "Sem comissionamento sobre reuniões",
      "Sem taxa percentual sobre vendas fechadas",
    ],
    idealFor: "Empresas que preferem previsibilidade orçamentária total de investimento mensal fixo, retendo 100% da margem das vendas.",
    deliverables: [
      "Qualificação aprofundada de leads B2B",
      "Gestão completa da operação de outbound",
      "Agendamento estratégico com decisores e diretores",
      "Relatórios periódicos de acompanhamento e indicadores",
      "Otimização contínua das cadências de abordagem",
    ],
    ctaText: "Selecionar Outbound Start",
  },
  {
    id: "consultoria-processos-jornada",
    name: "Consultoria em Processos & Jornada",
    category: "Mapeamento de Processos & Jornada",
    badge: "Jornada do Cliente & Processos",
    investmentAmount: "R$ 5.000,00",
    investmentPeriod: "Ciclo de 30 dias com reavaliação",
    idealFor: "Negócios que precisam mapear onde a jornada do cliente acontece, estruturar processos de ponta a ponta e eliminar falhas entre setores.",
    deliverables: [
      "Mapeamento detalhado e visual de toda a jornada do cliente (atração, conversão e retenção)",
      "Atuação integrada transversal: marketing, vendas, operação e pós-vendas",
      "Diagnóstico e mapeamento de processos para eliminar gargalos e retrabalho",
      "Padronização de procedimentos operacionais e definição clara de SLAs",
      "Reuniões estratégicas online e visitas técnicas com entrega de laudo executivo",
      "Plano tático de ação e acompanhamento prático da implementação",
    ],
    ctaText: "Selecionar Consultoria em Processos",
  },
  {
    id: "customer-experience",
    name: "Customer Experience",
    category: "Atendimento & Pós-Vendas",
    badge: "Fidelização & LTV",
    investmentAmount: "R$ 4.000,00",
    investmentPeriod: "Investimento mensal contínuo",
    idealFor: "Empresas que entendem que o relacionamento no pós-venda é a chave para retenção, recompra e recomendação de clientes.",
    deliverables: [
      "Estruturação de atendimento humanizado e focado na experiência do cliente",
      "Desenvolvimento de scripts personalizados para a realidade da empresa",
      "Criação de fluxos de atendimento e direcionamento eficiente entre setores",
      "Treinamento prático da equipe de atendimento e suporte",
      "Acompanhamento e monitoramento de indicadores de satisfação",
    ],
    ctaText: "Selecionar Atendimento & Pós-Vendas",
  },
];

export const PricingPlans: React.FC = () => {
  const handleSelectPlan = (planName: string) => {
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const select = document.getElementById("service-select") as HTMLSelectElement | null;
      if (select) {
        if (planName.includes("Site + Aplicativo")) {
          select.value = "Pacote Site + Aplicativo (R$ 699,00)";
        } else if (planName.includes("Criação de Sites") || planName.includes("Site")) {
          select.value = "Criação de Sites (R$ 499,00)";
        } else if (planName.includes("Outbound Performance")) {
          select.value = "Pacotes de Leads Personalizados";
        } else if (planName.includes("Outbound")) {
          select.value = "Geração de Reuniões Qualificadas B2B";
        } else if (planName.includes("Consultoria") || planName.includes("Processos") || planName.includes("Jornada")) {
          select.value = "Consultoria em Processos & Jornada do Cliente";
        } else {
          select.value = "Atendimento ao Cliente e Pós-Vendas";
        }
      }
    }
  };

  return (
    <section id="planos" className="py-20 md:py-28 bg-[#0A2540] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
            <span>Tipos de Investimentos</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-300">Proposta Oficial Prospecta X</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Outfit'] leading-tight text-balance-header">
            Formatos de contratação objetivos e transparentes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Pacotes acessíveis para presença digital completa e modelos estratégicos para estruturação e aceleração comercial contínua.
          </p>
        </div>

        {/* 6 Investment Cards Grid: New digital packages first, then corporate plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {investmentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                plan.isPopular
                  ? "bg-slate-900 border-amber-400/90 shadow-2xl ring-2 ring-amber-400/40 lg:-translate-y-2"
                  : plan.id === "criacao-sites"
                  ? "bg-slate-900/90 border-sky-400/60 shadow-xl ring-1 ring-sky-400/20"
                  : "bg-slate-900/70 border-white/10 hover:border-white/25 shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${
                      plan.isPopular
                        ? "bg-amber-400 text-[#0A2540]"
                        : plan.id === "criacao-sites"
                        ? "bg-sky-400 text-[#0A2540]"
                        : "bg-white/10 text-slate-200 border border-white/15"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Category & Title */}
                <p className={`text-[11px] font-semibold uppercase tracking-wider ${
                  plan.id === "criacao-sites" || plan.id === "site-aplicativo" ? "text-amber-300" : "text-sky-400"
                }`}>
                  {plan.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-1 leading-snug">
                  {plan.name}
                </h3>

                {/* Price block */}
                <div className="mt-5 pb-5 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400 font-medium">Investimento</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tabular-nums tracking-tight mt-0.5">
                    {plan.investmentAmount}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1 font-medium leading-relaxed">
                    {plan.investmentPeriod}
                  </p>

                  {/* Commission Details if applicable */}
                  {plan.commissionDetails && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
                      {plan.commissionDetails.map((com, cIdx) => (
                        <p key={cIdx} className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{com}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ideal for summary */}
                <p className="text-xs text-slate-300 leading-relaxed mt-4 mb-5">
                  {plan.idealFor}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Escopo Incluso:
                  </p>
                  <ul className="space-y-2">
                    {plan.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.isPopular ? "text-amber-400" : "text-emerald-400"
                        }`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Add-on Box */}
                {plan.optionalAddOn && (
                  <div className="mb-6 p-3.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-left space-y-1.5 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {plan.optionalAddOn.badge || "Adicional Opcional"}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-white">
                      {plan.optionalAddOn.title}
                    </p>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {plan.optionalAddOn.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3 px-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group ${
                    plan.isPopular
                      ? "bg-amber-400 text-[#0A2540] hover:bg-amber-300 font-bold shadow-md hover:shadow-amber-400/20"
                      : plan.id === "criacao-sites"
                      ? "bg-white text-[#0A2540] hover:bg-slate-100 font-bold"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Official Proposal Download & Commercial Contact Banner */}
        <div className="mt-14 p-7 sm:p-8 rounded-xl bg-slate-900/90 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <FileText className="w-4 h-4" />
              <span>Proposta de Projeto Personalizada</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
              Precisa de um modelo adaptado ou escopo integrado com criação de site e aplicativo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              A Prospecta X permanece à disposição para alinhamentos e personalizações conforme a necessidade específica da sua empresa. Converse diretamente com nossa equipe de atendimento comercial.
            </p>
            <p className="text-xs text-slate-400 pt-1">
              Contato Oficial: <strong className="text-white">Prospecta X</strong> · WhatsApp Corporativo (51) 99606-7472
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={formatWhatsAppUrl(
                WHATSAPP_NUMBER,
                "Olá! Analisei a Proposta de Projetos da Prospecta X e tenho interesse nos pacotes de criação de sites/aplicativos ou alavancagem de vendas."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 rounded-md transition-all shadow-md gap-2 whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/25 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
            >
              Enviar Formulário
            </a>
          </div>
        </div>

        {/* Guarantee Callout */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Atendimento comercial humanizado, processos comerciais eficientes e acompanhamento contínuo.</span>
        </div>

      </div>
    </section>
  );
};
