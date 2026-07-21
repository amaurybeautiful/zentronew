import React, { useState } from 'react';
import { MessageCircle, Sparkles, X, ChevronUp } from 'lucide-react';

interface WhatsAppFloatProps {
  onOpenTrialModal: () => void;
  whatsappNumber?: string;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  onOpenTrialModal,
  whatsappNumber = '5571991113787'
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleDirectChat = () => {
    const text = encodeURIComponent('Olá! Vim pelo site ZentroPlay e gostaria de mais informações.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* EXPANDED MENU OPTIONS */}
      {expanded && (
        <div className="bg-[#020205] border border-white/10 rounded-2xl p-3 shadow-2xl space-y-2 w-64 animate-fadeIn backdrop-blur-md">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2 pb-1 border-b border-white/10">
            Atendimento ZentroPlay
          </div>

          <button
            onClick={() => {
              onOpenTrialModal();
              setExpanded(false);
            }}
            className="w-full p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs uppercase tracking-wider flex items-center justify-between text-left transition-colors"
          >
            <span>Pedir Teste Grátis</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </button>

          <button
            onClick={handleDirectChat}
            className="w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-between text-left transition-colors"
          >
            <span>Falar com Atendente</span>
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        id="whatsapp-float-btn"
        onClick={() => setExpanded(!expanded)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Atendimento WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-slate-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-300 border-2 border-slate-950 animate-ping"></span>
        </div>
        <span className="hidden sm:inline">WhatsApp Ao Vivo</span>
      </button>

    </div>
  );
};
