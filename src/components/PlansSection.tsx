import React, { useState } from 'react';
import { Check, Tv, Sparkles, MessageCircle, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { PLANS_DATA } from '../data/plans';
import { Plan } from '../types';

interface PlansSectionProps {
  onSelectPlan: (plan: Plan) => void;
  whatsappNumber?: string;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan, whatsappNumber = '5571991113787' }) => {
  const [periodFilter, setPeriodFilter] = useState<'todos' | 'mensal' | 'semestral'>('mensal');

  const filteredPlans = PLANS_DATA.filter((p) => {
    if (periodFilter === 'todos') return true;
    return p.period === periodFilter;
  });

  const handleWhatsAppBuy = (plan: Plan) => {
    const periodText = plan.period === 'mensal' ? 'Mensal' : 'Semestral (6 Meses)';
    const text = encodeURIComponent(
      `Olá! Gostaria de assinar o *${plan.name}* (${periodText}) por *R$ ${plan.price.toFixed(2).replace('.', ',')}*.\n- Qualidade: ${plan.quality}\n- Telas: ${plan.screens} Tela(s)\nComo faço para ativar?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="planos" className="py-16 lg:py-24 bg-[#020205] relative border-b border-white/10">
      
      {/* AMBIENT LIGHTING */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Zap className="w-3.5 h-3.5 text-rose-400" />
            <span>Tabela Oficial de Preços ZentroPlay</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic text-white tracking-tight">
            Planos Transparentes para Todos os Perfis
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Escolha entre nossos <strong className="text-white font-bold">Planos Mensais</strong> sem fidelidade ou economize com nossos <strong className="text-rose-300 font-bold">Planos Semestrais com Desconto Especial</strong>.
          </p>

          {/* PERIOD SELECTOR TOGGLE */}
          <div className="pt-6 flex justify-center">
            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 inline-flex items-center gap-1 shadow-xl backdrop-blur-md">
              <button
                id="filter-mensal-btn"
                onClick={() => setPeriodFilter('mensal')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  periodFilter === 'mensal'
                    ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Planos Mensais
              </button>

              <button
                id="filter-semestral-btn"
                onClick={() => setPeriodFilter('semestral')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  periodFilter === 'semestral'
                    ? 'bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Planos Semestrais</span>
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  Desconto
                </span>
              </button>

              <button
                id="filter-todos-btn"
                onClick={() => setPeriodFilter('todos')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  periodFilter === 'todos'
                    ? 'bg-white/10 text-white border border-white/15'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ver Todos
              </button>
            </div>
          </div>

        </div>

        {/* PRICING CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPlans.map((plan) => {
            const isSemestral = plan.period === 'semestral';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-rose-500/50 ${
                  plan.popular
                    ? 'bg-rose-500/10 border border-rose-500/40 shadow-[0_0_30px_rgba(225,29,72,0.15)]'
                    : 'bg-white/5 border border-white/10 backdrop-blur-sm'
                }`}
              >
                {/* POPULAR OR DISCOUNT BADGE */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white text-[9px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(225,29,72,0.5)] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>Popular • 4K</span>
                  </div>
                )}

                {plan.discountBadge && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-emerald-400 text-slate-950 text-[9px] font-black uppercase tracking-widest shadow-md">
                    🔥 {plan.discountBadge}
                  </div>
                )}

                <div>
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                        {plan.period === 'mensal' ? 'Básico / Mensal' : 'Semestral (6 Meses)'}
                      </span>
                      <h3 className="text-xl font-bold uppercase text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        plan.quality.includes('4K')
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-white/10 text-slate-300 border border-white/10'
                      }`}>
                        {plan.quality}
                      </span>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Tv className="w-3.5 h-3.5 text-rose-400" />
                        {plan.screens} {plan.screens === 1 ? 'Tela' : 'Telas'}
                      </span>
                    </div>
                  </div>

                  {/* PRICE DISPLAY */}
                  <div className="py-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-rose-400">
                        R$ {plan.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-slate-500 italic mb-1">
                        /{plan.period === 'mensal' ? 'mês' : '6 meses'}
                      </span>
                    </div>

                    {/* EQUIVALENT MONTHLY FOR SEMIANNUAL */}
                    {plan.equivalentMonthlyPrice && (
                      <p className="mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30 inline-block">
                        Equivale a apenas <strong>R$ {plan.equivalentMonthlyPrice.toFixed(2).replace('.', ',')}/mês</strong>
                      </p>
                    )}
                  </div>

                  {/* FEATURES LIST */}
                  <ul className="space-y-2.5 pt-2 pb-6 border-t border-white/10 text-xs text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={idx === 0 || idx === 1 ? 'font-bold text-white' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CARD CTA BUTTON */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    id={`plan-buy-btn-${plan.id}`}
                    onClick={() => handleWhatsAppBuy(plan)}
                    className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-500/40 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Assinar via WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* PRICING FOOTNOTE */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-white">Precisa de um plano personalizado ou teste antes de pagar?</h4>
              <p className="text-xs text-slate-400">Solicite um teste gratuito de 4 horas pelo WhatsApp sem cadastrar cartão.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan(PLANS_DATA[1])}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(225,29,72,0.4)] whitespace-nowrap"
          >
            Pedir Teste Grátis
          </button>
        </div>

      </div>
    </section>
  );
};

