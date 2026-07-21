import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Tv, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5571991113787'
}) => {
  const [name, setName] = useState('');
  const [device, setDevice] = useState('Smart TV');
  const [quality, setQuality] = useState('4K Premium');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Olá! Meu nome é *${name || 'Cliente'}* e gostaria de solicitar um *Teste Grátis do ZentroPlay*.\n- Dispositivo: *${device}*\n- Qualidade Desejada: *${quality}*\nPoderia liberar os dados de acesso?`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-lg bg-[#020205] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Teste Grátis sem Compromisso</span>
          </div>

          <h3 className="text-2xl font-black uppercase italic text-white">
            Solicite seu Teste no ZentroPlay
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed">
            Preencha os dados abaixo e você será redirecionado para o nosso WhatsApp com o seu pedido formatado.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
              Seu Nome
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Silva"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-rose-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
              Onde você vai assistir?
            </label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0a10] border border-white/10 text-xs text-white focus:outline-none focus:border-rose-400 transition-colors"
            >
              <option value="Smart TV Samsung / LG">Smart TV Samsung / LG</option>
              <option value="Smart TV Android / Google TV">Smart TV Android / Google TV</option>
              <option value="TV Box / Amazon Firestick">TV Box / Amazon Firestick</option>
              <option value="Smartphone Android">Smartphone Android</option>
              <option value="iPhone (iOS) / iPad">iPhone (iOS) / iPad</option>
              <option value="Computador / Notebook (Web)">Computador / Notebook (Web)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
              Qualidade de Preferência
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setQuality('FHD (1080p)')}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                  quality === 'FHD (1080p)'
                    ? 'bg-rose-500 text-white border-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Qualidade FHD
              </button>

              <button
                type="button"
                onClick={() => setQuality('4K Premium')}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                  quality === '4K Premium'
                    ? 'bg-rose-500 text-white border-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                4K Premium Ultra HD
              </button>
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Liberação imediata pelo suporte no WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sem necessidade de dados bancários ou cartão</span>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Gerar Teste Grátis no WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};

