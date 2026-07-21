import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

interface FAQSectionProps {
  onOpenTrialModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenTrialModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#020205] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300">
            <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white tracking-tight">
            Perguntas Frequentes sobre o ZentroPlay
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Respostas diretas para as dúvidas mais comuns sobre instalação, planos e compatibilidade.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all backdrop-blur-md"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left font-extrabold text-white text-xs sm:text-sm uppercase tracking-wide flex items-center justify-between gap-4 hover:text-rose-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-rose-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-white/10 leading-relaxed animate-fadeIn font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS BANNER */}
        <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 backdrop-blur-md">
          <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">
            Ficou com alguma dúvida específica sobre a sua Smart TV ou aplicativo?
          </p>
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com Atendimento no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

