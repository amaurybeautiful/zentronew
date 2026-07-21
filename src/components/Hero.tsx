import React from 'react';
import { Play, Tv, Zap, ShieldCheck, CheckCircle2, Sparkles, MessageCircle, Layers, Monitor, Award } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeroProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenTrialModal }) => {
  return (
    <div className="relative overflow-hidden bg-[#020205] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10">
      
      {/* AMBIENT GLOWS - RUBY CRIMSON AMBIENCE */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - HEADLINE & CALL TO ACTIONS */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300 backdrop-blur-md shadow-[0_0_15px_rgba(225,29,72,0.2)]">
              <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>Sinal Ultra Estável • Tecnologia Anti-Trava 2026</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight text-white leading-none">
              O Seu <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                Próximo Nível
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Canais, filmes e séries em FHD e 4K. Estabilidade garantida para Smart TV, TV Box, Android e iOS. Assine agora o melhor IPTV com a tecnologia <strong className="text-white font-bold">ZentroPlay</strong>.
            </p>

            {/* HIGHLIGHT CHECKLIST */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Até 2 Telas FHD/4K</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Smart TV, Box & Mobile</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ativação Instantânea</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-trial-btn"
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Solicitar Teste Grátis no WhatsApp</span>
              </button>

              <button
                id="hero-plans-btn"
                onClick={() => onNavigate('planos')}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-slate-200 bg-white/5 hover:bg-white/10 border border-rose-500/30 hover:border-rose-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-rose-400" />
                <span>Planos a partir de R$ 30</span>
              </button>
            </div>

            {/* TRUST FOOTER */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs uppercase font-bold text-slate-400 tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-400" /> Sem Fidelidade
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-rose-400" /> Suporte 24/7
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-rose-400" /> PIX Automático
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN - VISUAL MOCKUP & CAROUSEL CARD */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* CARD GLOW */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* CARD CONTENT */}
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-md">
                
                {/* CARD HEADER */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="ZentroPlay" className="h-7 w-auto object-contain" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-200">
                      Transmissão 4K
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-black uppercase rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    SINAL AO VIVO
                  </span>
                </div>

                {/* TV SCREEN SIMULATION */}
                <div className="my-5 relative rounded-xl overflow-hidden aspect-video bg-black border border-white/10 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80"
                    alt="Transmissão ZentroPlay"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  
                  {/* OVERLAY PLAY BADGE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-4">
                    <div className="w-full flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block">
                          ⚽ Esportes 60 FPS
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Brasileirão & Champions League
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-rose-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.6)]">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* HIGHLIGHT METRICS */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                      <Monitor className="w-3.5 h-3.5 text-rose-400" />
                      <span>Qualidades</span>
                    </div>
                    <div className="text-sm font-black text-white">
                      Full HD & Ultra 4K
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                      <Layers className="w-3.5 h-3.5 text-rose-400" />
                      <span>Telas Conectadas</span>
                    </div>
                    <div className="text-sm font-black text-rose-300">
                      1 a 2 Telas
                    </div>
                  </div>
                </div>

                {/* QUICK TRIAL PROMPT */}
                <button
                  onClick={onOpenTrialModal}
                  className="w-full mt-4 py-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Pedir Teste de 4 Horas sem Compromisso</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

