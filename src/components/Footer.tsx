import React from 'react';
import { Play, ShieldCheck, FileText, MessageCircle, Heart, Lock } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  customLogoUrl?: string | null;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  customLogoUrl
}) => {
  return (
    <footer className="bg-[#020205] text-slate-400 text-xs border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <img src="/logo.png" alt="ZentroPlay" className="h-9 w-auto object-contain" />
              <span className="text-xl font-black text-white uppercase tracking-tighter">
                Zentro<span className="text-rose-500">Play</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Sua melhor plataforma de entretenimento digital. Milhares de canais ao vivo, filmes, séries e esportes em alta definição 4K e Full HD.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                Servidores Online CDN 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                🔒 Conexão Segura SSL
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-rose-400 transition-colors uppercase text-[11px] font-medium">Início</button>
              </li>
              <li>
                <button onClick={() => onNavigate('planos')} className="hover:text-rose-400 transition-colors uppercase text-[11px] font-medium">Planos & Preços</button>
              </li>
              <li>
                <button onClick={() => onNavigate('canais')} className="hover:text-rose-400 transition-colors uppercase text-[11px] font-medium">Canais & Filmes</button>
              </li>
              <li>
                <button onClick={() => onNavigate('dispositivos')} className="hover:text-rose-400 transition-colors uppercase text-[11px] font-medium">Dispositivos Compatíveis</button>
              </li>
            </ul>
          </div>

          {/* LEGAL DOCUMENTS */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Termos & Políticas</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('politica-uso')} 
                  className="hover:text-rose-400 transition-colors flex items-center gap-1.5 uppercase text-[11px] font-medium"
                >
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  <span>Política de Uso</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('politica-privacidade')} 
                  className="hover:text-rose-400 transition-colors flex items-center gap-1.5 uppercase text-[11px] font-medium"
                >
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Atendimento</h4>
            <p className="text-slate-400 text-xs">
              Atendimento e liberação de testes 24/7 via WhatsApp.
            </p>
            <a
              href="https://wa.me/5571991113787?text=Olá!%20Gostaria%20de%20falar%20com%20o%20suporte%20ZentroPlay."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 text-rose-300 border border-rose-500/30 font-extrabold hover:bg-rose-500 hover:text-white transition-all uppercase text-[11px] tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Suporte no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[10px] uppercase font-bold text-slate-500 tracking-widest">
          <p>© 2026 ZENTROPLAY ENTERTAINMENT. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Smart TV</span>
            <span>Android</span>
            <span>iOS</span>
            <span>Web</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

