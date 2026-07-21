import React, { useState } from 'react';
import { Tv, Smartphone, Monitor, Apple, Box, CheckCircle, ChevronRight, Download, HelpCircle } from 'lucide-react';
import { DEVICE_LIST } from '../data/content';
import { DeviceInfo } from '../types';

interface DeviceGuideProps {
  onOpenTrialModal: () => void;
}

export const DeviceGuide: React.FC<DeviceGuideProps> = ({ onOpenTrialModal }) => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceInfo>(DEVICE_LIST[0]);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Tv': return <Tv className="w-6 h-6" />;
      case 'Box': return <Box className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Apple': return <Apple className="w-6 h-6" />;
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      default: return <Tv className="w-6 h-6" />;
    }
  };

  return (
    <section id="dispositivos" className="py-16 lg:py-24 bg-[#020205] relative border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Tv className="w-3.5 h-3.5 text-rose-400" />
            <span>Compatibilidade Ampla 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white tracking-tight">
            Assista Onde Quiser, Quando Quiser
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Nossa plataforma é compatível com praticamente qualquer tela inteligente, smartphone, computador ou TV Box.
          </p>
        </div>

        {/* DEVICE SELECTOR TABS */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DEVICE_LIST.map((device) => {
            const isSelected = selectedDevice.id === device.id;

            return (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-rose-500/10 border-rose-400 text-white shadow-[0_0_20px_rgba(225,29,72,0.25)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-[0_0_10px_rgba(225,29,72,0.4)]' : 'bg-white/10 text-slate-300'}`}>
                  {renderIcon(device.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider line-clamp-2">
                  {device.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE DEVICE DETAIL CARD */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT DETAILS */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase tracking-widest border border-rose-500/30">
                Instruções de Configuração
              </div>

              <h3 className="text-2xl font-black uppercase text-white">
                {selectedDevice.name}
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed">
                {selectedDevice.description}
              </p>

              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  Aplicativos Recomendados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDevice.apps.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-white/10 text-rose-300 text-xs font-bold uppercase tracking-wider border border-white/10"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-500 hover:to-amber-500 shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Pedir Ajuda para Instalar no WhatsApp</span>
                </button>
              </div>
            </div>

            {/* RIGHT STEPS */}
            <div className="lg:col-span-7 bg-black/60 p-6 rounded-xl border border-white/10 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-rose-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-400" />
                <span>Passo a Passo Rápido</span>
              </h4>

              <div className="space-y-3">
                {selectedDevice.setupSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded bg-rose-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-200 leading-normal">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

