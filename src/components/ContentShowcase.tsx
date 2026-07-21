import React, { useState } from 'react';
import { Search, Tv, Film, Flame, Sparkles, Shield, Play } from 'lucide-react';
import { CONTENT_CATEGORIES } from '../data/content';

interface ContentShowcaseProps {
  onOpenTrialModal: () => void;
}

export const ContentShowcase: React.FC<ContentShowcaseProps> = ({ onOpenTrialModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = CONTENT_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchTerm.trim()) return true;
    
    const query = searchTerm.toLowerCase();
    const titleMatch = cat.title.toLowerCase().includes(query);
    const itemMatch = cat.items.some(item => item.name.toLowerCase().includes(query));
    return titleMatch || itemMatch;
  });

  return (
    <section id="canais" className="py-16 lg:py-24 bg-[#020205] relative border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300">
              <Film className="w-3.5 h-3.5 text-rose-400" />
              <span>Catálogo Completo em Alta Definição</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white tracking-tight">
              Tudo o que Você Ama Assistir em Um Só Lugar
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Explore nossa grade com mais de 3.500 canais ao vivo e 80.000 títulos sob demanda (VOD) atualizados todos os dias.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar canal ou filme..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
            />
          </div>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="flex items-center gap-2 pt-6 pb-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Todos os Conteúdos
          </button>
          {CONTENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* CATEGORY CARDS */}
        <div className="mt-8 space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold uppercase text-white">
                      {category.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {category.description}
                  </p>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:block">
                  {category.count}
                </span>
              </div>

              {/* GALLERY GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md transition-all duration-300 hover:border-rose-500/50"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                      {item.tag && (
                        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-black uppercase bg-black/90 text-rose-300 border border-rose-500/30 backdrop-blur-sm">
                          {item.tag}
                        </span>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-rose-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.5)] transform scale-75 group-hover:scale-100 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5">
                      <h4 className="text-xs font-bold uppercase text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                        Transmissão ZentroPlay
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="mt-14 p-8 rounded-2xl bg-white/5 border border-rose-500/30 text-center space-y-4 backdrop-blur-md">
          <h3 className="text-2xl font-black uppercase italic text-white">
            Quer conferir a lista completa de canais no seu dispositivo?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Libere agora mesmo um teste totalmente sem compromisso para conferir a qualidade e estabilidade dos nossos servidores 4K e FHD.
          </p>
          <button
            onClick={onOpenTrialModal}
            className="px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all"
          >
            Solicitar Teste Grátis Instantâneo
          </button>
        </div>

      </div>
    </section>
  );
};

