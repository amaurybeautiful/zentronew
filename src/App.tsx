/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, Plan } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlansSection } from './components/PlansSection';
import { ContentShowcase } from './components/ContentShowcase';
import { DeviceGuide } from './components/DeviceGuide';
import { SpeedTester } from './components/SpeedTester';
import { FreeTrialModal } from './components/FreeTrialModal';
import { LegalModal } from './components/LegalModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-rose-500 selection:text-white">
      
      {/* NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        customLogoUrl={customLogoUrl}
      />

      {/* MAIN VIEW SWITCHER */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
            <PlansSection
              onSelectPlan={handleSelectPlan}
            />
            <ContentShowcase
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
            <DeviceGuide
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
            <SpeedTester />
            <FAQSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
          </>
        )}

        {activeTab === 'planos' && (
          <div className="py-6">
            <PlansSection
              onSelectPlan={handleSelectPlan}
            />
            <FAQSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'canais' && (
          <div className="py-6">
            <ContentShowcase
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'dispositivos' && (
          <div className="py-6">
            <DeviceGuide
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />
            <SpeedTester />
          </div>
        )}

        {activeTab === 'politica-uso' && (
          <LegalModal
            initialTab="uso"
            onBackToHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'politica-privacidade' && (
          <LegalModal
            initialTab="privacidade"
            onBackToHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        customLogoUrl={customLogoUrl}
      />

      {/* FLOATING WHATSAPP CTA */}
      <WhatsAppFloat
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* FREE TRIAL MODAL */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

    </div>
  );
}
