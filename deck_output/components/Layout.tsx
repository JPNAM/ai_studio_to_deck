import React from 'react';
import { THEME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  slideNumber: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, slideNumber }) => {
  return (
    <div className="w-full max-w-[1280px] aspect-video bg-[#F4F5F7] relative overflow-hidden flex flex-col shadow-2xl mx-auto my-4 lg:my-8 rounded-sm">
      {/* Background Visuals */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(200, 16, 46, 0.05) 0%, rgba(11, 31, 63, 0.05) 100%)`
        }}
      />
      <div 
        className="absolute top-0 right-0 w-4 h-full z-10"
        style={{ backgroundColor: THEME.englandRed }}
      />
      <div className="absolute -bottom-12 -right-12 text-[400px] leading-none font-extrabold text-[#0B1F3F] opacity-[0.03] select-none pointer-events-none font-heading z-0">
        ORIGIN
      </div>

      {/* Header */}
      <header className="px-12 pt-10 pb-5 z-20 border-b border-black/5 bg-white/80 backdrop-blur-sm flex justify-between items-center relative">
        <div>
          <div className="text-lg font-semibold uppercase tracking-widest mb-1" style={{ color: THEME.englandRed }}>
            {subtitle}
          </div>
          <h1 className="text-4xl font-bold uppercase tracking-tighter max-w-4xl" style={{ color: THEME.navy }}>
            {title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow px-12 py-8 z-20 relative flex flex-col justify-center overflow-y-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-12 text-sm font-medium text-gray-400 z-20 uppercase tracking-widest">
        PROJECT ORIGIN // {slideNumber.toString().padStart(2, '0')}
      </footer>
    </div>
  );
};