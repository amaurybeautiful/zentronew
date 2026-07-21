import React, { useState } from 'react';
import { ShieldCheck, FileText, Search, Copy, Check, Printer, ArrowLeft, Lock } from 'lucide-react';
import { POLITICA_DE_USO_TEXT, POLITICA_DE_PRIVACIDADE_TEXT } from '../data/content';

interface LegalModalProps {
  initialTab?: 'uso' | 'privacidade';
  onBackToHome?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  initialTab = 'uso',
  onBackToHome
}) => {
  const [activeTab, setActiveTab] = useState<'uso' | 'privacidade'>(initialTab);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const currentDoc = activeTab === 'uso' ? POLITICA_DE_USO_TEXT : POLITICA_DE_PRIVACIDADE_TEXT;

  const handleCopyText = () => {
    const fullText = `${currentDoc.title}\nÚltima atualização: ${currentDoc.updatedAt}\n\n${currentDoc.intro}\n\n` +
      currentDoc.sections.map(s => `${s.number}. ${s.title}\n${s.content}`).join('\n\n');
    
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = currentDoc.sections.filter(sec => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return sec.title.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#020205] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* TOP BAR NAV */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Início</span>
            </button>
          )}

          {/* DOCUMENT SELECTOR TABS */}
          <div className="bg-white/5 p-1 rounded-2xl border border-white/10 inline-flex items-center gap-1 backdrop-blur-md">
            <button
              onClick={() => { setActiveTab('uso'); setSearchTerm(''); }}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'uso'
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Política de Uso</span>
            </button>

            <button
              onClick={() => { setActiveTab('privacidade'); setSearchTerm(''); }}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'privacidade'
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Política de Privacidade</span>
            </button>
          </div>

          {/* ACTION TOOLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              title="Copiar texto completo"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* DOCUMENT CONTAINER */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-md">
          
          {/* HEADER INFO */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest border border-cyan-500/30">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Documento Legal Oficial ZentroPlay</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black uppercase italic text-white">
              {currentDoc.title}
            </h1>

            <p className="text-xs font-mono font-bold text-slate-400">
              Última atualização: {currentDoc.updatedAt}
            </p>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs text-slate-300 leading-relaxed whitespace-pre-line">
              {currentDoc.intro}
            </div>
          </div>

          {/* SEARCH INSIDE POLICY */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar cláusula ou palavra-chave..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* SECTIONS LIST */}
          <div className="space-y-8">
            {filteredSections.map((sec) => (
              <div key={sec.number} className="space-y-2 group">
                <h3 className="text-base font-black uppercase text-cyan-300 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                    {sec.number}
                  </span>
                  <span>{sec.title}</span>
                </h3>

                <div className="pl-9 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </div>
              </div>
            ))}

            {filteredSections.length === 0 && (
              <p className="text-center py-8 text-xs font-bold uppercase text-slate-500">
                Nenhum termo encontrado para "{searchTerm}".
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
