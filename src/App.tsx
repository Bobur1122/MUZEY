import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ExhibitionHall } from './components/ExhibitionHall';
import { DigitalArchive } from './components/DigitalArchive';
import { TimelineCorridor } from './components/TimelineCorridor';
import { MediaRoom } from './components/MediaRoom';
import { QuotesRoom } from './components/QuotesRoom';
import { ResearchLab } from './components/ResearchLab';
import { MuseumFooter } from './components/MuseumFooter';
export function App() {
  return (
    <main className="min-h-screen w-full bg-[#f5f0eb] text-[#1a1a1a] selection:bg-[#d4af37] selection:text-white">
      <HeroSection />
      <ExhibitionHall />
      <DigitalArchive />
      <TimelineCorridor />
      <MediaRoom />
      <QuotesRoom />
      <ResearchLab />
      <MuseumFooter />
    </main>);

}
