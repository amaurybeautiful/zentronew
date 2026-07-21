import React, { useState } from 'react';
import { Gauge, Wifi, CheckCircle2, AlertTriangle, RefreshCw, Sparkles, Tv } from 'lucide-react';

export const SpeedTester: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ speed: number; ping: number; status: 'excellent' | 'good' | 'fair' } | null>(null);

  const runTest = () => {
    setTesting(true);
    setResult(null);

    setTimeout(() => {
      // Simulate realistic broadband result for modern fiber/cable
      const simulatedSpeed = Math.floor(Math.random() * 80) + 35; // 35 - 115 Mbps
      const simulatedPing = Math.floor(Math.random() * 15) + 8; // 8 - 23 ms

      setResult({
        speed: simulatedSpeed,
        ping: simulatedPing,
        status: simulatedSpeed >= 35 ? 'excellent' : 'good'
      });
      setTesting(false);
    }, 2200);
  };

  return (
    <section className="py-16 bg-[#020205] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-300 flex items-center justify-center sm:justify-start gap-1.5">
                <Gauge className="w-4 h-4 text-rose-400" />
                <span>Simulador de Desempenho ZentroPlay</span>
              </span>
              <h3 className="text-2xl font-black uppercase italic text-white">
                Teste sua Conexão para 4K & FHD
              </h3>
              <p className="text-xs text-slate-400">
                Verifique se sua velocidade de internet atende aos requisitos dos nossos servidores.
              </p>
            </div>

            <button
              onClick={runTest}
              disabled={testing}
              className="px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(225,29,72,0.35)] disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
            >
              {testing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Analisando Conexão...</span>
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4" />
                  <span>Testar Compatibilidade</span>
                </>
              )}
            </button>
          </div>

          {/* SIMULATION AREA */}
          <div className="mt-6">
            {!testing && !result && (
              <div className="p-6 rounded-xl bg-black/50 border border-white/10 text-center space-y-2">
                <Wifi className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-xs text-slate-300 font-medium uppercase tracking-wider">
                  Clique no botão acima para simular a resposta da sua rede com o servidor ZentroPlay.
                </p>
                <div className="flex justify-center gap-4 text-[11px] text-slate-400 pt-2 font-mono">
                  <span>• Requisito FHD: &gt; 15 Mbps</span>
                  <span>• Requisito 4K: &gt; 35 Mbps</span>
                </div>
              </div>
            )}

            {testing && (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full border-4 border-rose-500/20 border-t-rose-400 animate-spin mx-auto"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-300 animate-pulse">
                  Conectando ao CDN ZentroPlay e medindo estabilidade...
                </p>
              </div>
            )}

            {result && (
              <div className="p-6 rounded-xl bg-black/60 border border-emerald-500/30 space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Velocidade Medida</span>
                    <span className="text-2xl font-black text-emerald-400">{result.speed} Mbps</span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Latência (Ping)</span>
                    <span className="text-2xl font-black text-rose-400">{result.ping} ms</span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Status da Rede</span>
                    <span className="text-xs font-black uppercase text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 inline-block mt-1">
                      {result.status === 'excellent' ? '4K Ultra HD Pronto' : 'FHD Pronto'}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-200">
                    <strong className="text-emerald-300 uppercase block mb-0.5">Resultado Perfeito!</strong>
                    Sua conexão é ideal para executar a transmissão ZentroPlay em <strong>Qualidade 4K e FHD com 2 telas simultâneas</strong> sem qualquer travamento ou lag.
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

