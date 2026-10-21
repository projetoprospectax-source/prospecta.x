import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, AlertCircle, ArrowRight } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";

const WHATSAPP_NUMBER = "51996067472";

interface FormData {
  fullName: string;
  corporateEmail: string;
  phone: string;
  companyName: string;
  primaryService: string;
  monthlyRevenue: string;
  projectDetails: string;
}

const initialForm: FormData = {
  fullName: "",
  corporateEmail: "",
  phone: "",
  companyName: "",
  primaryService: "Criação de Sites e Aplicativos",
  monthlyRevenue: "R$ 30 mil a R$ 100 mil/mês",
  projectDetails: "",
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Por favor, informe seu nome completo.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.corporateEmail.trim()) {
      newErrors.corporateEmail = "Por favor, informe seu e-mail corporativo.";
    } else if (!emailRegex.test(formData.corporateEmail)) {
      newErrors.corporateEmail = "Insira um endereço de e-mail válido.";
    }

    const phoneClean = formData.phone.replace(/\D/g, "");
    if (!phoneClean) {
      newErrors.phone = "Por favor, informe seu WhatsApp com DDD.";
    } else if (phoneClean.length < 10) {
      newErrors.phone = "Informe o DDD + número de telefone (mínimo 10 dígitos).";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Por favor, informe o nome da sua empresa.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable transmission to CRM/Dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const getWhatsAppSummaryUrl = () => {
    const message = `Olá equipe Prospecta X! Acabei de solicitar um projeto personalizado pelo site.
*Nome:* ${formData.fullName}
*Empresa:* ${formData.companyName}
*Serviço de interesse:* ${formData.primaryService}
*Faturamento:* ${formData.monthlyRevenue}
*Detalhes:* ${formData.projectDetails || "Gostaria de agendar uma reunião de diagnóstico."}`;

    return formatWhatsAppUrl(WHATSAPP_NUMBER, message);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0A2540] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400">
              <span>Etapa Principal</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-300">Diagnóstico Exclusivo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Outfit'] leading-tight text-balance-header">
              Solicite um projeto personalizado para sua empresa.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Preencha o formulário para receber uma proposta comercial sob medida. Analisamos seu mercado, os concorrentes da sua região e desenhamos a esteira exata para alavancar suas vendas.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Atendimento rápido:</strong> Retorno em até 2 horas úteis por um consultor sênior.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Plano customizado:</strong> Sem pacotes engessados. Adequado ao porte da sua PME.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Privacidade assegurada:</strong> Seus dados de mercado são tratados com total sigilo.
                </span>
              </div>
            </div>

            {/* Direct Contact with Commercial Team */}
            <div className="p-5 rounded-lg bg-slate-900 border border-white/15">
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1">
                Atendimento Direto com a Equipe Comercial
              </p>
              <p className="text-sm font-bold text-white mb-0.5">
                Prospecta X
              </p>
              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                Converse diretamente via WhatsApp corporativo para alinhamento da proposta de projeto personalizada.
              </p>
              <a
                href={formatWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  "Olá! Gostaria de falar sobre a Proposta de Projeto da Prospecta X para minha empresa."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com a Prospecta X no WhatsApp (51) 99606-7472</span>
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-[#0A2540] font-['Outfit']">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Obrigado, <strong>{formData.fullName}</strong>. Um consultor comercial da Prospecta X já está analisando o perfil da <strong>{formData.companyName}</strong> e entrará em contato em breve.
                    </p>
                  </div>

                  <div className="p-4 bg-sky-50 rounded-lg border border-sky-100 max-w-md mx-auto text-left text-xs text-sky-900 space-y-1">
                    <p className="font-semibold">Resumo da solicitação:</p>
                    <p>• Serviço: {formData.primaryService}</p>
                    <p>• E-mail: {formData.corporateEmail}</p>
                    <p>• Telefone: {formData.phone}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={getWhatsAppSummaryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar atendimento via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData(initialForm);
                      }}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#0A2540] font-['Outfit']">
                      Formulário de Projeto Personalizado
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Preencha os campos abaixo com os dados da sua empresa.
                    </p>
                  </div>

                  {/* Nome e Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Roberto Silva"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                          errors.fullName ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                        } outline-none transition-all`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ex: Silva & Associados"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                          errors.companyName ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                        } outline-none transition-all`}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? "companyName-error" : undefined}
                      />
                      {errors.companyName && (
                        <p id="companyName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* E-mail e WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="corporateEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="corporateEmail"
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                        placeholder="roberto@empresa.com.br"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                          errors.corporateEmail ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                        } outline-none transition-all`}
                        aria-invalid={!!errors.corporateEmail}
                        aria-describedby={errors.corporateEmail ? "email-error" : undefined}
                      />
                      {errors.corporateEmail && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.corporateEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(51) 99999-9999"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                          errors.phone ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                        } outline-none transition-all`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Serviço e Faturamento */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Serviço Principal Desejado
                      </label>
                      <select
                        id="service-select"
                        value={formData.primaryService}
                        onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-800 outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all"
                      >
                        <option value="Criação de Sites (R$ 499,00)">Criação de Sites — R$ 499,00</option>
                        <option value="Pacote Site + Aplicativo (R$ 699,00)">Pacote Site + Aplicativo — R$ 699,00</option>
                        <option value="Criação de Sites + Manutenção e Hospedagem">Criação de Sites + Manutenção & Hospedagem (Opcional)</option>
                        <option value="Pacote Site + Aplicativo + Manutenção e Hospedagem">Pacote Site + Aplicativo + Manutenção & Hospedagem (Opcional)</option>
                        <option value="Geração de Reuniões Qualificadas B2B">Geração de Reuniões Qualificadas B2B (Outbound)</option>
                        <option value="Consultoria em Processos & Jornada do Cliente">Consultoria em Processos & Jornada do Cliente (Mapeamento & Estruturação)</option>
                        <option value="Atendimento ao Cliente e Pós-Vendas">Atendimento ao Cliente e Pós-Vendas (CX)</option>
                        <option value="Pacotes de Leads Personalizados">Pacotes de Leads Personalizados</option>
                        <option value="Tráfego Pago">Tráfego Pago (Google, Meta, LinkedIn)</option>
                        <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                        <option value="Soluções Comerciais Completas (Escopo 360°)">Soluções Comerciais Completas (Escopo 360°)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthlyRevenue" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Faturamento Médio Mensal
                      </label>
                      <select
                        id="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-800 outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all"
                      >
                        <option value="Até R$ 30 mil/mês">Até R$ 30 mil/mês</option>
                        <option value="R$ 30 mil a R$ 100 mil/mês">R$ 30 mil a R$ 100 mil/mês</option>
                        <option value="R$ 100 mil a R$ 300 mil/mês">R$ 100 mil a R$ 300 mil/mês</option>
                        <option value="R$ 300 mil a R$ 1 milhão/mês">R$ 300 mil a R$ 1 milhão/mês</option>
                        <option value="Acima de R$ 1 milhão/mês">Acima de R$ 1 milhão/mês</option>
                      </select>
                    </div>
                  </div>

                  {/* Detalhes do Projeto */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Conte um pouco sobre o momento e meta da sua empresa (opcional)
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Ex: Precisamos renovar nosso site institucional e começar a prospectar indústrias no RS e SC com mais reuniões comerciais..."
                      className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#143A61] rounded-md transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      {isSubmitting ? (
                        <span>Processando solicitação...</span>
                      ) : (
                        <>
                          <span>Solicitar Projeto Personalizado</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Sem compromisso inicial. Resposta rápida garantida para PMEs.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
