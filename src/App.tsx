/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { HighlightsSection } from './components/HighlightsSection';
import { LocationSection } from './components/LocationSection';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
