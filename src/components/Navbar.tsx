import React, { useState } from 'react';
import { Play, Tv, ShieldCheck, HelpCircle, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenTrialModal: () => void;
  customLogoUrl?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenTrialModal,
  customLogoUrl
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = customLogoUrl || '/logo.png';

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#020205]/90 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND LOGO */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={logoSrc} 
                  alt="ZentroPlay Logo" 
                  className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-bold uppercase tracking-widest">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeTab === 'home'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Início
            </button>

            <button
              id="nav-plans-btn"
              onClick={() => handleNavClick('planos')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeTab === 'planos'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Planos & Preços
            </button>

            <button
              id="nav-channels-btn"
              onClick={() => handleNavClick('canais')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeTab === 'canais'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Canais & Filmes
            </button>

            <button
              id="nav-devices-btn"
              onClick={() => handleNavClick('dispositivos')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeTab === 'dispositivos'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Dispositivos
            </button>

            <div className="h-4 w-px bg-white/10 mx-1"></div>

            {/* LEGAL LINKS */}
            <button
              id="nav-policy-use-btn"
              onClick={() => handleNavClick('politica-uso')}
              className={`px-3 py-2 rounded-lg text-[11px] transition-all ${
                activeTab === 'politica-uso'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Política
            </button>

            <button
              id="nav-policy-privacy-btn"
              onClick={() => handleNavClick('politica-privacidade')}
              className={`px-3 py-2 rounded-lg text-[11px] transition-all ${
                activeTab === 'politica-privacidade'
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Privacidade
            </button>
          </nav>

          {/* ACTION CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-trial-cta-btn"
              onClick={onOpenTrialModal}
              className="px-6 py-2.5 border border-red-500/60 bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current text-white" />
              <span>Teste Grátis</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-trial-cta-btn"
              onClick={onOpenTrialModal}
              className="px-3.5 py-1.5 text-xs font-black text-white bg-gradient-to-r from-red-600 to-rose-500 rounded-full shadow-[0_0_12px_rgba(225,29,72,0.4)] uppercase tracking-wider"
            >
              Teste Grátis
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020205] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 font-medium flex items-center justify-between uppercase tracking-wider text-xs"
          >
            <span>Início</span>
            <Play className="w-4 h-4 text-rose-500" />
          </button>
          <button
            onClick={() => handleNavClick('planos')}
            className="w-full text-left px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 font-medium flex items-center justify-between uppercase tracking-wider text-xs"
          >
            <span>Planos & Preços</span>
            <span className="text-[10px] font-extrabold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">A partir de R$ 30</span>
          </button>
          <button
            onClick={() => handleNavClick('canais')}
            className="w-full text-left px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 font-medium flex items-center justify-between uppercase tracking-wider text-xs"
          >
            <span>Canais & Filmes</span>
            <Tv className="w-4 h-4 text-rose-500" />
          </button>
          <button
            onClick={() => handleNavClick('dispositivos')}
            className="w-full text-left px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 font-medium uppercase tracking-wider text-xs"
          >
            Dispositivos Compatíveis
          </button>

          <div className="pt-2 border-t border-white/10 space-y-1">
            <button
              onClick={() => handleNavClick('politica-uso')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5"
            >
              Política de Uso
            </button>
            <button
              onClick={() => handleNavClick('politica-privacidade')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5"
            >
              Política de Privacidade
            </button>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                onOpenTrialModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl font-black text-center text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20 uppercase tracking-widest text-xs"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Solicitar Teste Grátis no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

