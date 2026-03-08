import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EventHighlights } from './components/EventHighlights';
import { NextSteps } from './components/NextSteps';
import { FeaturedSpeakers } from './components/FeaturedSpeakers';
import { Attendees } from './components/Attendees';
import { Outcomes } from './components/Outcomes';
import { Gallery } from './components/Gallery';
import { GradientText } from './components/ui/gradient-text';
import shifuLogo from 'figma:asset/2b3d157428ec03eb03e606d63edbe1a5aa832d31.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      <Header />
      
      <main className="w-full">
        <HeroSection />
        <EventHighlights />
        <NextSteps />
        <FeaturedSpeakers />
        <Attendees />
        {/* <Outcomes /> */}
        <Gallery />
      </main>
      
      <footer className="bg-white border-t border-zinc-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="mb-6">
            <img src={shifuLogo} alt="Shifu Ventures" className="h-10 w-auto" />
          </div>
          <p className="text-base font-medium text-zinc-900 mb-2 tracking-tight">Backed By Alumni</p>
          <p className="text-sm text-zinc-500 font-normal">An invite-only gathering. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}