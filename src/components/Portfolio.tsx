import React from "react";
import { ArrowRight, CheckCircle2, Laptop, TrendingUp, ShieldCheck } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";

const WHATSAPP_NUMBER = "51996067472";

interface SolutionModel {
  id: string;
  category: string;
  title: string;
  targetProfile: string;
  image: string;
  description: string;
  deliverables: string[];
  scopeHighlight: string;
}

const solutionModels: SolutionModel[] = [
  {
    id: "portal-institucional-b2b",
    category: "Presença Digital & Ativos Corporativos",
    title: "Portais Institucionais & Catálogos Digitais B2B",
    targetProfile: "Indústrias, Distribuidores e Empresas B2B",
    image: "/images/portfolio-industrial.jpg",
    scopeHighlight: "Autoridade Visual & Captação Direta",
    description:
      "Desenvolvimento de plataformas web que traduzem a solidez e a infraestrutura física da sua empresa para o ambiente digital. O portal é calibrado para apresentar soluções complexas de forma clara e converter visitas de diretores e compradores em solicitações de orçamento.",
    deliverables: [
      "Design corporativo refinado com carregamento ultrarrápido",
      "Estrutura para apresentação de catálogo técnico ou serviços",
      "Otimização completa de SEO técnico para termos comerciais no Google",
      "Integração nativa com WhatsApp comercial e formulários de cotação",
      "Arquitetura 100% responsiva (Mobile, Tablet e Desktop)",
    ],
  },
  {
    id: "plataforma-conversao-trafego",
    category: "Geração de Demanda & Campanhas",
    title: "Landing Pages de Alta Conversão & Esteira de Tráfego",
    targetProfile: "Empresas de Serviços, Tecnologia e PMEs Comerciais",
    image: "/images/portfolio-tech.jpg",
    scopeHighlight: "Performance & Qualificação de Leads",
    description:
      "Páginas de vendas objetivas e persuasivas, desenhadas para receber o fluxo de campanhas no Google Ads, Meta Ads e LinkedIn. Cada elemento do layout e da redação elimina distrações e conduz o decisor diretamente ao contato comercial.",
    deliverables: [
      "Copywriting comercial persuasivo orientado a quebra de objeções",
      "Tagueamento de conversões com Google Tag Manager e Meta Pixel",
      "Formulário com perguntas-chave para qualificação do perfil do lead",
      "Layout leve com foco total em velocidade e taxa de resposta",
      "Direcionamento ágil para equipe comercial ou SDR",
    ],
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#FAFAFB] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-900 mb-3">
            <span>Modelos de Solução</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">Presença & Vendas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] font-['Outfit'] leading-tight text-balance-header">
            Ativos digitais e estruturas comerciais construídas sob medida.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça os formatos de plataformas, páginas e processos que a Prospecta X projeta para acelerar a captação e o fechamento de contratos para o seu negócio.
          </p>
        </div>

        {/* Real Solution Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {solutionModels.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0A2540]/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-[#0A2540]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-md border border-white/10 shadow-lg text-xs font-semibold">
                  <span>{item.scopeHighlight}</span>
                </div>

                {/* Tag Info */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-semibold text-[#0A2540] border border-slate-200 shadow-sm">
                  <span>{item.targetProfile}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                    {item.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-['Outfit'] leading-snug group-hover:text-sky-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Estrutura & Recursos Inclusos:
                  </p>
                  <div className="space-y-2">
                    {item.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-slate-100 hover:bg-[#0A2540] hover:text-white rounded-md transition-all duration-200 shadow-sm group/btn"
                  >
                    <span>Quero uma estrutura assim</span>
                    <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <a
                    href={formatWhatsAppUrl(
                      WHATSAPP_NUMBER,
                      `Olá! Gostaria de entender mais sobre o modelo de ${item.title} da Prospecta X.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
                  >
                    Tirar dúvidas no WhatsApp
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Quality Commitment Footer Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-800 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0A2540] font-['Outfit']">
                Compromisso com Entregas Reais & Transparência
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Cada projeto é desenvolvido com escopo definido, prazos acordados em contrato e foco estrito no que gera retorno e autoridade para o seu negócio no Sul do Brasil.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#143A61] rounded-md transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Iniciar Meu Projeto
          </a>
        </div>

      </div>
    </section>
  );
};
