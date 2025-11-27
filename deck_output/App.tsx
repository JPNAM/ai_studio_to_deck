import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Slide1, Slide2, Slide3, Slide4 } from './components/Slides';
import { Slide5, Slide6, Slide7, Slide9 } from './components/SlidesPart2';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { component: Slide1, title: 'English Rugby’s Economics are Upside-Down', subtitle: 'The Problem' },
  { component: Slide2, title: 'Origin: The Return of the Divisions', subtitle: 'The Concept' },
  { component: Slide3, title: 'The Heritage of the Divisions', subtitle: 'The Teams' },
  { component: Slide4, title: 'The Calendar Roadmap', subtitle: 'Operational Detail' },
  { component: Slide5, title: 'The Business Case', subtitle: 'Financial Mechanics' },
  { component: Slide6, title: 'Creating a Professional Middle Class', subtitle: 'Strategic Impact' },
  { component: Slide7, title: 'The "National Interest" Opportunity', subtitle: 'Deep Dive: P&L' },
  { component: Slide9, title: 'One Property, Four Winners', subtitle: 'Summary' },
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = SLIDES[currentSlideIndex].component;

  return (
    <div className="min-h-screen bg-[#2c2c2c] flex flex-col items-center justify-center p-4">
      <Layout 
        title={SLIDES[currentSlideIndex].title}
        subtitle={SLIDES[currentSlideIndex].subtitle}
        slideNumber={currentSlideIndex + 1}
      >
        <CurrentSlideComponent />
      </Layout>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-4 z-50 pointer-events-none">
         <div className="bg-white/10 backdrop-blur-md p-2 rounded-full flex gap-2 pointer-events-auto border border-white/20">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2 text-white hover:bg-white/20 rounded-full disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="flex items-center text-white font-mono text-sm px-2">
              {currentSlideIndex + 1} / {SLIDES.length}
            </span>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === SLIDES.length - 1}
              className="p-2 text-white hover:bg-white/20 rounded-full disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
         </div>
      </div>
    </div>
  );
}