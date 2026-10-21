import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { formatWhatsAppUrl } from "../lib/utils";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "51996067472";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  const defaultMsg =
    "Olá! Gostaria de solicitar um projeto personalizado para minha empresa com a equipe da Prospecta X.";

  const handleSend = () => {
    const textToSend = userMsg.trim() || defaultMsg;
    const url = formatWhatsAppUrl(WHATSAPP_NUMBER, textToSend);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-88 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-modal="false"
          aria-label="Atendimento rápido Prospecta X"
        >
          {/* Header */}
          <div className="bg-[#0A2540] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-400 flex items-center justify-center p-0.5 overflow-hidden shadow-sm">
                  <Logo size="sm" className="w-full h-full" imgClassName="w-full h-full object-contain" showContainerOnDark={false} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0A2540] rounded-full" />
              </div>
              <div>
                <p className="text-sm font-bold font-['Outfit'] leading-tight">
                  Prospecta X Oficial
                </p>
                <p className="text-[11px] text-emerald-400 font-medium">
                  Atendimento Comercial · Online
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Fechar janela de chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-[#0A2540] mb-1">
                Olá! Seja bem-vindo à Prospecta X.
              </p>
              <p>
                Como podemos apoiar o crescimento da sua empresa? Podemos alinhar uma proposta personalizada de Outbound, Consultoria em Processos & Jornada do Cliente, ou Ativos Digitais.
              </p>
              <span className="block mt-1 text-[10px] text-slate-400 text-right">
                Proposta Oficial Prospecta X
              </span>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="quick-wa-input" className="block text-[11px] font-medium text-slate-600">
                Sua mensagem direta:
              </label>
              <textarea
                id="quick-wa-input"
                rows={2}
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Ex: Quero um orçamento de site e reuniões B2B..."
                className="w-full p-2.5 bg-white border border-slate-300 rounded-md text-xs text-slate-800 outline-none focus:border-[#0A2540] resize-none"
              />
            </div>
          </div>

          {/* Action button */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
            <span className="text-[10px] text-slate-400 font-mono">
              (51) 99606-7472
            </span>
            <button
              onClick={handleSend}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-md transition-colors shadow-sm"
            >
              <span>Iniciar conversa</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#0A2540] hover:bg-[#143A61] text-white rounded-full shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label={isOpen ? "Fechar WhatsApp flutuante" : "Falar no WhatsApp com a Prospecta X"}
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#0A2540] animate-ping" />
        </div>
        
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white font-['Outfit']">
            Fale Conosco
          </span>
          <span className="text-[10px] text-emerald-300 font-medium">
            WhatsApp Online
          </span>
        </div>
      </button>

    </aside>
  );
};
