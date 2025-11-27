import React from 'react';
import { Zap, Scissors, CreditCard, TowerControl, Flower, Users, ArrowRight, Plus } from 'lucide-react';

// --- SLIDE 5: HIGH LEVEL FINANCIAL SUMMARY ---
export const Slide5: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-4">
      {/* Flow Container */}
      <div className="flex items-stretch justify-between gap-4 h-[420px]">
        
        {/* Step 1: The Reset */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border-t-[6px] border-[#2E7D32] p-6 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-4 right-4 text-gray-100 group-hover:text-green-50 transition-colors"><Scissors size={48} /></div>
          <div className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider mb-2">Lever 1</div>
          <h3 className="text-[#0B1F3F] font-heading font-bold text-2xl mb-2">The Reset</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">Aligning cost base with reality by halving the Salary Cap.</p>
          
          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                <span>Current Cap</span>
                <span className="line-through decoration-red-400 decoration-2">£6.4m</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#0B1F3F] uppercase border-b border-gray-100 pb-4">
                <span>New Cap</span>
                <span>£3.2m</span>
            </div>
            
            <div className="bg-green-50 p-4 rounded text-center border border-green-100">
                <div className="text-4xl font-extrabold text-[#2E7D32]">£32.0m</div>
                <div className="text-[10px] font-bold text-[#2E7D32] uppercase tracking-wider mt-1">Aggregate Saving</div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col justify-center items-center text-gray-300 gap-2">
            <div className="h-10 w-[2px] bg-gray-200"></div>
            <div className="bg-white rounded-full p-2 shadow-sm border border-gray-100">
                <Plus size={20} className="text-gray-400" />
            </div>
            <div className="h-10 w-[2px] bg-gray-200"></div>
        </div>

        {/* Step 2: The Growth */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border-t-[6px] border-[#C5B358] p-6 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-4 right-4 text-gray-100 group-hover:text-yellow-50 transition-colors"><Zap size={48} /></div>
          <div className="text-xs font-bold text-[#C5B358] uppercase tracking-wider mb-2">Lever 2</div>
          <h3 className="text-[#0B1F3F] font-heading font-bold text-2xl mb-2">The Growth</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">Launching 'Origin' to capture "National Interest" revenue.</p>
          
          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                <span>Total Surplus</span>
                <span>£38.2m</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#0B1F3F] uppercase border-b border-gray-100 pb-4">
                <span>PRL Share (50%)</span>
                <span>£19.1m</span>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded text-center border border-yellow-100">
                <div className="text-4xl font-extrabold text-[#b3a14d]">£19.1m</div>
                <div className="text-[10px] font-bold text-[#b3a14d] uppercase tracking-wider mt-1">New Injection</div>
            </div>
          </div>
        </div>

         {/* Connector */}
        <div className="flex flex-col justify-center items-center text-[#0B1F3F] gap-2">
            <ArrowRight size={32} />
        </div>

        {/* Step 3: The Result (Hero) */}
        <div className="flex-[1.3] bg-[#0B1F3F] text-white rounded-lg shadow-2xl p-8 flex flex-col relative overflow-hidden ring-1 ring-white/10">
            <div className="absolute -top-10 -right-10 p-8 opacity-[0.05] text-white"><CreditCard size={250} /></div>
            
            <div className="relative z-10 border-b border-white/10 pb-4 mb-6">
                <h3 className="text-[#C5B358] font-heading font-bold text-2xl uppercase tracking-widest">
                    PRL Net Position
                </h3>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Annual Financial Impact</p>
            </div>
            
            <div className="space-y-4 mb-8 text-sm relative z-10 flex-grow">
                <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-white transition-colors">Operational Savings</span>
                    <span className="font-bold text-lg">£32.0m</span>
                </div>
                <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-white transition-colors">Origin Income (PRL Share)</span>
                    <span className="font-bold text-lg text-[#C5B358]">£19.1m</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/5 group">
                    <span className="text-gray-500 text-xs uppercase">Less: Lost Cup Revenue</span>
                    <span className="font-bold text-red-400">(£4.0m)</span>
                </div>
            </div>

            <div className="mt-auto bg-white/5 p-6 rounded-lg backdrop-blur-md border border-white/10 text-center relative z-10">
                <div className="text-6xl font-heading font-extrabold text-white mb-2 tracking-tight">£47.1m</div>
                <div className="text-xs font-bold text-[#C5B358] uppercase tracking-[0.2em] mb-6">Total Net Improvement</div>
                
                <div className="inline-flex items-center gap-3 bg-[#C5B358] text-[#0B1F3F] px-6 py-3 rounded shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform">
                    <span className="text-xl font-extrabold">+£4.7m</span>
                    <span className="text-xs font-bold uppercase border-l border-[#0B1F3F]/20 pl-3">Per Club / Year</span>
                </div>
            </div>
        </div>
      </div>

      {/* Footer Note */}
       <div className="mt-8 flex justify-between items-center text-[11px] text-gray-400 px-2 border-t border-gray-200 pt-4">
            <div className="italic">*Assuming "National Interest" media valuation (See Slide 07 for P&L detail)</div>
            <div className="flex gap-6 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>Solves Insolvency</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5B358]"></span>Funds Growth</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3F]"></span>Zero Debt Required</span>
            </div>
       </div>
    </div>
  );
};

// --- SLIDE 6: "CREATING A MIDDLE CLASS" ---
export const Slide6: React.FC = () => {
  return (
    <div className="h-full w-full flex gap-4 overflow-hidden relative">
        
        {/* --- LEFT COLUMN: MEN'S GAME --- */}
        <div className="flex-1 flex flex-col bg-white/50 rounded-lg p-4 border border-gray-100">
            <div className="mb-2 border-b border-gray-200 pb-2 flex justify-between items-end">
                <div>
                    <h3 className="text-[#0B1F3F] font-heading font-bold text-lg uppercase">Men's Game</h3>
                    <p className="text-gray-500 text-[10px]">Impact on annual earnings</p>
                </div>
                <div className="flex gap-3 text-[10px] font-bold uppercase">
                     <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-gray-300 rounded-sm"></div> Current</div>
                     <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#0B1F3F] rounded-sm"></div> New System</div>
                </div>
            </div>

            <div className="flex justify-around items-end flex-grow relative pt-12">
                
                {/* 1. Test Starter (Men) */}
                <div className="flex flex-col items-center w-1/2 h-full justify-end">
                    
                    <div className="flex items-end gap-2 justify-center h-full max-h-[400px]">
                        {/* CURRENT (£400k) ~320px */}
                        <div className="w-20 flex flex-col-reverse opacity-80">
                            <div className="text-[10px] font-bold text-gray-400 text-center mb-1">£400k</div>
                            <div className="h-[80px] bg-gray-300 w-full rounded-t-sm flex items-center justify-center border-b border-white/20 text-[10px] font-bold text-gray-600">Eng</div>
                            <div className="h-[240px] bg-gray-400 w-full rounded-b-sm flex items-center justify-center text-[10px] font-bold text-white">Club</div>
                        </div>
                        
                        {/* NEW (£450k) ~360px */}
                        <div className="w-20 flex flex-col-reverse relative">
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-1 rounded whitespace-nowrap z-20">Maintained</div>
                             <div className="text-[11px] font-bold text-[#0B1F3F] text-center mb-1">£450k</div>
                             <div className="h-[60px] bg-white border-2 border-[#0B1F3F] w-full rounded-t-sm flex items-center justify-center text-[10px] font-bold text-[#0B1F3F] z-20">Eng</div>
                             <div className="h-[60px] bg-[#C5B358] w-full flex items-center justify-center text-[10px] font-bold text-[#0B1F3F] z-10 border-x border-[#C5B358]">Origin</div>
                             <div className="h-[240px] bg-[#0B1F3F] w-full rounded-b-sm flex items-center justify-center text-[10px] font-bold text-white z-0">Club</div>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <div className="font-bold text-[#0B1F3F] text-xs uppercase">Test Starter</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Elite</div>
                    </div>
                </div>

                {/* 2. Prem Regular (Men) */}
                <div className="flex flex-col items-center w-1/2 h-full justify-end">
                    
                    <div className="flex items-end gap-2 justify-center h-full max-h-[400px]">
                        {/* CURRENT (£150k) ~120px */}
                        <div className="w-20 flex flex-col-reverse opacity-80">
                            <div className="text-[10px] font-bold text-gray-400 text-center mb-1">£150k</div>
                            <div className="h-[120px] bg-gray-400 w-full rounded-sm flex items-center justify-center text-[10px] font-bold text-white">Club</div>
                        </div>
                        
                        {/* NEW (£250k) ~200px */}
                        <div className="w-20 flex flex-col-reverse relative">
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-1 rounded whitespace-nowrap z-20">+66%</div>
                             <div className="text-[11px] font-bold text-[#0B1F3F] text-center mb-1">£250k</div>
                             <div className="h-[80px] bg-[#C5B358] w-full rounded-t-sm flex items-center justify-center text-[10px] font-bold text-[#0B1F3F] z-10">Origin</div>
                             <div className="h-[120px] bg-[#0B1F3F] w-full rounded-b-sm flex items-center justify-center text-[10px] font-bold text-white z-0">Club</div>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <div className="font-bold text-[#0B1F3F] text-xs uppercase">Prem Regular</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Middle</div>
                    </div>
                </div>

            </div>
        </div>


        {/* --- CENTER COLUMN: BROADENING THE BASE --- */}
        <div className="w-[340px] shrink-0 bg-[#0B1F3F] text-white rounded-lg p-4 flex flex-col border border-white/10 relative z-20 my-0">
            <div className="text-center mb-4 border-b border-white/10 pb-3">
                <h3 className="text-[#C5B358] font-heading font-bold text-xl uppercase tracking-wide">Broadening the Base</h3>
                <p className="text-gray-400 text-[10px] mt-1">Centrally funded professional contracts</p>
                <div className="mt-2 text-5xl font-extrabold text-white leading-none tracking-tighter">156</div>
                <div className="text-[9px] text-gray-400 uppercase font-bold tracking-[0.2em] mt-1">Total Players</div>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center gap-6">
                
                {/* CURRENT */}
                <div className="w-full">
                    <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wide px-1">
                        <span>Current (55)</span>
                        <span>Narrow Elite</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-2 opacity-30 justify-center bg-black/20 p-3 rounded-md border border-white/5">
                         {Array.from({ length: 55 }).map((_, i) => (
                            <div key={i} className={`w-3 h-3 rounded-full ${i < 25 ? 'bg-white' : 'bg-red-400'}`} />
                        ))}
                    </div>
                </div>

                <div className="text-[#C5B358] opacity-50"><ArrowRight className="rotate-90" size={24} /></div>

                 {/* FUTURE */}
                <div className="w-full">
                    <div className="flex justify-between text-[10px] uppercase font-bold text-[#C5B358] mb-2 tracking-wide px-1">
                        <span>Origin System (156)</span>
                        <span>+183% Expansion</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-2 content-start justify-center bg-white/5 p-3 rounded-md border border-white/10 shadow-inner">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div key={`m-${i}`} className="w-3 h-3 rounded-full bg-white" />
                        ))}
                        {Array.from({ length: 92 }).map((_, i) => (
                            <div key={`f-${i}`} className="w-3 h-3 rounded-full bg-[#C8102E]" />
                        ))}
                    </div>
                </div>
            </div>
             <div className="mt-4 pt-3 border-t border-white/10 flex justify-center gap-6 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white"></div> Men (64)</div>
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#C8102E]"></div> Women (92)</div>
            </div>
        </div>

        {/* --- RIGHT COLUMN: WOMEN'S GAME --- */}
        <div className="flex-1 flex flex-col bg-red-50/40 rounded-lg p-4 border border-red-100/60">
             <div className="mb-2 border-b border-red-100 pb-2 flex justify-between items-end">
                <div>
                    <h3 className="text-[#C8102E] font-heading font-bold text-lg uppercase">Women's Game</h3>
                    <p className="text-gray-500 text-[10px]">Impact on annual earnings (Scaled for Detail)</p>
                </div>
                 <div className="flex gap-3 text-[10px] font-bold uppercase text-[#C8102E]/70">
                     <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-gray-300 rounded-sm"></div> Current</div>
                     <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#C8102E] rounded-sm"></div> New System</div>
                </div>
            </div>

             <div className="flex justify-around items-end flex-grow relative pt-12">
                
                {/* 3. Red Rose Star (Women) */}
                 <div className="flex flex-col items-center w-1/2 h-full justify-end">
                    
                    <div className="flex items-end gap-2 justify-center h-full max-h-[400px]">
                        {/* CURRENT (~£80k) ~260px (Magnified Scale) */}
                        <div className="w-20 flex flex-col-reverse opacity-80">
                            <div className="text-[10px] font-bold text-gray-400 text-center mb-1">~£80k</div>
                            <div className="h-[190px] bg-gray-300 w-full rounded-t-sm flex items-center justify-center border-b border-white/20 text-[10px] font-bold text-gray-600">Eng</div>
                            <div className="h-[70px] bg-gray-400 w-full rounded-b-sm flex items-center justify-center text-[10px] font-bold text-white">Club</div>
                        </div>
                        
                        {/* NEW (~£110k) ~360px (Magnified Scale) */}
                        <div className="w-20 flex flex-col-reverse relative">
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#C8102E] text-white text-[10px] font-extrabold px-2 py-1 rounded whitespace-nowrap z-20">£100k+</div>
                             <div className="text-[11px] font-bold text-[#C8102E] text-center mb-1">£110k</div>
                             <div className="h-[180px] bg-white border-2 border-[#C8102E] w-full rounded-t-sm flex items-center justify-center text-[10px] font-bold text-[#C8102E] z-20">Eng</div>
                             <div className="h-[100px] bg-[#C8102E] w-full flex items-center justify-center text-[10px] font-bold text-white z-10 border-x border-[#C8102E]">Origin</div>
                             <div className="h-[80px] bg-gray-800 w-full rounded-b-sm flex items-center justify-center text-[10px] font-bold text-white z-0 opacity-80">Club</div>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <div className="font-bold text-[#C8102E] text-xs uppercase">Red Rose Star</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Elite</div>
                    </div>
                </div>

                {/* 4. Origin Pro (Women) */}
                 <div className="flex flex-col items-center w-1/2 h-full justify-end">
                    
                    <div className="flex items-end gap-2 justify-center h-full max-h-[400px] relative">
                         {/* Dashed Line for Pro Threshold ~ 35k scale */}
                         <div className="absolute bottom-[115px] left-[-20px] right-[-20px] border-t-2 border-dashed border-red-300/40 z-0"></div>
                         <div className="absolute bottom-[119px] right-0 text-[8px] text-red-400 font-bold uppercase tracking-widest text-right leading-tight bg-white/50 px-1 rounded">Pro Level</div>

                        {/* CURRENT (~£5k) ~16px */}
                        <div className="w-20 flex flex-col-reverse opacity-60">
                            <div className="text-[10px] font-bold text-gray-400 text-center mb-1">~£5k</div>
                            <div className="h-[16px] bg-gray-300 w-full rounded-sm flex items-center justify-center"></div>
                        </div>
                        
                        {/* NEW (~£35k+) ~115px */}
                        <div className="w-20 flex flex-col-reverse relative">
                             <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#C8102E] text-white text-[10px] font-extrabold px-2 py-1 rounded whitespace-nowrap z-20 shadow-sm">
                                100% PRO
                             </div>
                             <div className="text-[11px] font-bold text-[#C8102E] text-center mb-1">£35k+</div>
                             <div className="h-[100px] bg-[#C8102E] w-full rounded-t-sm flex items-center justify-center text-[10px] font-bold text-white z-10 border-x border-[#C8102E]">Origin</div>
                             <div className="h-[15px] bg-gray-800 w-full rounded-b-sm z-0 opacity-80"></div>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <div className="font-bold text-[#C8102E] text-xs uppercase">Origin Pro</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Middle</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  );
};

// --- SLIDE 7: P&L ---
export const Slide7: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 mb-6">
        {['RFU (40%)', 'PRL (40%)', 'BROADCASTERS (10-15%)', 'PWR (5-10%)'].map((tag, i) => (
          <div key={i} className="bg-gray-200 px-3 py-1 rounded text-xs font-bold text-gray-600">OWNERSHIP: {tag}</div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_2fr] gap-8 flex-grow">
        <div className="bg-[#0B1F3F] text-white p-6 rounded-lg flex flex-col">
           <h4 className="text-white font-heading font-bold text-lg border-b border-white/20 pb-3 mb-4">Media Assumption</h4>
           <p className="text-sm opacity-80 mb-6">Six Nations rights are ~£115m/year (FTA). Origin valuation based on National Interest.</p>
           
           <div className="space-y-4">
             <div className="flex justify-between items-center text-sm opacity-60">
                <span>Pay-TV (Conservative)</span>
                <span>~£5m</span>
             </div>
             <div className="flex justify-between items-center text-lg font-bold text-[#C5B358]">
                <span>National Interest</span>
                <span>£23m</span>
             </div>
             <div className="text-[11px] italic opacity-60 mt-1">(Assuming 20% of Six Nations value)</div>
           </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
           <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                   <th className="bg-[#0B1F3F] text-white p-4 text-sm font-semibold">Line Item (Year 1)</th>
                   <th className="bg-[#0B1F3F] text-white p-4 text-sm font-semibold text-right">Pay-TV Model</th>
                   <th className="bg-[#2a3f63] text-white p-4 text-sm font-semibold text-right">National Interest (FTA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Total Gate (Men + Women)', '£25.7m', '£25.7m'],
                  ['Media Rights', '£5.0m', '£23.0m', true],
                  ['Hospitality / Comm / Partners', '£10.5m', '£10.5m'],
                ].map(([item, v1, v2, highlight], i) => (
                   <tr key={i} className="border-b border-gray-100">
                      <td className="p-4 text-sm font-medium text-gray-800">{item}</td>
                      <td className="p-4 text-sm text-right text-gray-600">{v1}</td>
                      <td className={`p-4 text-sm text-right ${highlight ? 'font-bold text-[#0B1F3F] bg-red-50/50' : 'text-gray-800 bg-red-50/20'}`}>{v2}</td>
                   </tr>
                ))}
                <tr className="bg-gray-100 font-bold border-b border-gray-200">
                   <td className="p-4 text-sm">TOTAL REVENUE</td>
                   <td className="p-4 text-sm text-right">£41.2m</td>
                   <td className="p-4 text-sm text-right text-[#0B1F3F] bg-red-50/50">£59.2m</td>
                </tr>
                 {[
                  ['Costs (Ops + Marketing)', '(£11.0m)', '(£11.0m)'],
                  ['Player Fund (£10m Investment)', '(£10.0m)', '(£10.0m)'],
                ].map(([item, v1, v2], i) => (
                   <tr key={i} className="border-b border-gray-100 text-gray-500">
                      <td className="p-4 text-sm">{item}</td>
                      <td className="p-4 text-sm text-right">{v1}</td>
                      <td className="p-4 text-sm text-right bg-red-50/20">{v2}</td>
                   </tr>
                ))}
                <tr className="bg-[#0B1F3F] text-white">
                   <td className="p-4 font-bold">SURPLUS (Distributable)</td>
                   <td className="p-4 text-right font-bold">£20.2m</td>
                   <td className="p-4 text-right font-extrabold text-[#C5B358] text-xl">£38.2m</td>
                </tr>
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

// --- SLIDE 9: SUMMARY ---
export const Slide9: React.FC = () => {
  const StakeholderCard = ({ icon, title, desc, ask }: { icon: React.ReactNode, title: string, desc: React.ReactNode, ask: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm flex gap-5 border border-gray-100 items-start">
       <div className="w-12 h-12 rounded-full bg-red-50 text-[#C8102E] flex items-center justify-center shrink-0">
         {icon}
       </div>
       <div>
         <h3 className="font-heading font-bold text-lg text-[#0B1F3F]">{title}</h3>
         <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
         <div className="mt-4 text-xs font-bold text-[#0B1F3F] uppercase tracking-wide">
           ASK: {ask}
         </div>
       </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
       <StakeholderCard 
          icon={<TowerControl />}
          title="Broadcasters (TNT / FTA)"
          desc={<span>A "National Interest" property delivering Six Nations-lite viewership.</span>}
          ask="Multi-year rights deal + production co-funding."
       />
       <StakeholderCard 
          icon={<Flower />}
          title="RFU"
          desc={<span>Funds 80 elite players centrally + <strong>~£10–19m</strong> new annual surplus.</span>}
          ask="Approve windows & cap exemptions."
       />
       <StakeholderCard 
          icon={<CreditCard />}
          title="PRL & Clubs"
          desc={<span><strong>£32m</strong> aggregate saving + <strong>£19m</strong> cash injection.</span>}
          ask="Vote for cap reset & release protocols."
       />
       <StakeholderCard 
          icon={<Users />}
          title="PWR & Women"
          desc={<span>40 Central Contracts @ £75k (beating Red Roses fees).</span>}
          ask="Join JV & align marketing."
       />
    </div>
  );
};