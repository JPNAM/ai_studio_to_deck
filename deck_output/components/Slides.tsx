import React from 'react';
import { THEME } from '../constants';
import { User, Shield, Crown, Waves, Gavel, Castle, Clock, ArrowRight, Mars, Venus } from 'lucide-react';

// --- SLIDE 1 ---
export const Slide1: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 h-full items-start">
      <div className="flex flex-col gap-6 pt-2">
        <div className="pl-5 border-l-4 border-[#0B1F3F]">
          <h3 className="text-xl font-heading font-bold text-[#0B1F3F] mb-2">The Connection is to "England"</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Revenue in rugby union is driven by the national team. New fans engage with the <strong>England</strong> brand.
          </p>
        </div>
        <div className="pl-5 border-l-4 border-[#C8102E]">
          <h3 className="text-xl font-heading font-bold text-[#C8102E] mb-2">The Story Breaks When the Window Ends</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            When the international window closes, the audience evaporates. Fans do not migrate to the Premiership because the "Test" connection is severed.
          </p>
        </div>
        <div className="pl-5 border-l-4 border-[#0B1F3F]">
          <h3 className="text-xl font-heading font-bold text-[#0B1F3F] mb-2">The Economic Consequence</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Clubs are left paying Test-level wages to produce England players, without capturing the Test-level revenue to fund them.
          </p>
        </div>
        <div className="bg-[#0B1F3F] text-white p-6 rounded-lg shadow-xl relative mt-4 border border-white/10">
          <div className="absolute -top-3 left-5 bg-[#C5B358] text-[#0B1F3F] text-xs font-extrabold px-3 py-1 rounded tracking-wider">
            THE THESIS
          </div>
          <p className="text-lg leading-relaxed">
            Don't fight the current. Start where demand is strongest—<strong>England</strong>—and build <em className="text-[#C5B358] not-italic font-bold">down</em> into a divisional "Origin" product.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full pl-4">
        <div className="bg-white rounded-lg p-6 shadow-lg border-t-8 border-[#D32F2F]">
          <div className="font-bold text-lg text-[#D32F2F] mb-6 text-center uppercase tracking-wide">
            Clubs Spend £2 for Every £1 of Media Revenue
          </div>
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase pb-2 border-b border-gray-200">Property</th>
                <th className="text-right text-xs font-semibold text-gray-400 uppercase pb-2 border-b border-gray-200">Ratio (Salaries/Rights)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50 relative">
                <td className="p-3 font-bold text-[#C8102E] border-l-4 border-[#D32F2F]">PREM (Rugby Union)</td>
                <td className="p-3 text-right font-extrabold text-[#C8102E] text-xl border-r-4 border-[#D32F2F]">203%</td>
              </tr>
              {[
                ['NHL (Ice Hockey)', '122%'],
                ['Premier League (Football)', '115%'],
                ['NFL (American Football)', '74%'],
                ['NBA (Basketball)', '55%'],
                ['NRL (Rugby League)', '50%'],
                ['AFL (Australian Rules)', '50%']
              ].map(([league, val]) => (
                <tr key={league} className="border-b border-gray-100">
                  <td className="p-3 text-sm font-semibold text-[#0B1F3F] bg-white border-b border-gray-100">{league}</td>
                  <td className="p-3 text-right text-sm font-bold text-gray-700 bg-white border-b border-gray-100">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-xs text-gray-500 text-right italic">
            *Premiership rights cover barely half the wage bill. Clubs start every season in a deep structural deficit.
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SLIDE 2 ---
export const Slide2: React.FC = () => {
  const PlayerRow: React.FC<{ name: string, origin: string, gender: 'm' | 'f' }> = ({ name, origin, gender }) => (
    <div className="flex items-center text-xs py-1">
      <div className="w-5 opacity-50 mr-2 text-[10px] text-center">
        {gender === 'm' ? <Mars size={12} /> : <Venus size={12} />}
      </div>
      <div>
        <span className="font-bold text-gray-800 mr-1">{name}</span>
        <span className="text-gray-500 italic text-[11px]">({origin})</span>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 h-full items-center">
      <div className="pr-8">
        <h2 className="text-4xl font-heading font-bold text-[#0B1F3F] leading-tight mb-8">
          Identity Defined by Roots,<br />Not Contracts.
        </h2>
        
        <div className="mb-6 pl-5 border-l-4 border-[#0B1F3F]">
          <h3 className="text-lg font-bold text-[#0B1F3F] mb-1">Eligibility</h3>
          <p className="text-gray-600 leading-relaxed">
            The club you play for is irrelevant. Eligibility is defined solely by your <strong>Birthplace</strong>, <strong>School</strong> (Age 16), or <strong>Junior Club</strong>.
          </p>
        </div>
        
        <div className="mb-6 pl-5 border-l-4 border-[#0B1F3F]">
          <h3 className="text-lg font-bold text-[#0B1F3F] mb-1">The 4 Historic Divisions</h3>
          <p className="text-gray-600 leading-relaxed">
            We are reviving the historic playing divisions of the RFU. This creates authentic, tribal rivalries that commercial franchises cannot replicate.
          </p>
        </div>

        <div className="mb-6 pl-5 border-l-4 border-[#C8102E]">
          <h3 className="text-lg font-bold text-[#C8102E] mb-1">Instant Affinity</h3>
          <p className="text-gray-600 leading-relaxed">
            These identities are pre-loaded. Old fans recognize the heritage; new fans instinctively understand the geography. You don't need to "explain" why the North hates the South.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-gray-200 px-4 py-2 rounded-t font-bold text-gray-600 text-xs uppercase self-start mb-2">
          Example Squad Lists (Eligibility by Roots)
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              region: 'NORTH', 
              color: THEME.navy, 
              icon: <Castle size={14} className="opacity-30" />, 
              players: [
                {n: 'Owen Farrell', o: 'Wigan', g: 'm'}, {n: 'George Ford', o: 'Oldham', g: 'm'}, 
                {n: 'Zoe Aldcroft', o: 'Scarborough', g: 'f'}, {n: 'Ellie Kildunne', o: 'Rotherham', g: 'f'}
              ] 
            },
            { 
              region: 'MIDLANDS', 
              color: THEME.englandRed, 
              icon: <Gavel size={14} className="opacity-30" />, 
              players: [
                {n: 'Courtney Lawes', o: 'Northampton', g: 'm'}, {n: 'Freddie Steward', o: 'Norfolk', g: 'm'}, 
                {n: 'Emily Scarratt', o: 'Leicester', g: 'f'}, {n: 'Sadia Kabeya', o: 'Loughborough', g: 'f'}
              ] 
            },
            { 
              region: 'LONDON & SE', 
              color: THEME.accentGold, 
              icon: <Crown size={14} className="opacity-30" />, 
              players: [
                {n: 'Maro Itoje', o: 'Camden', g: 'm'}, {n: 'Henry Pollock', o: 'Bucks', g: 'm'}, 
                {n: 'Jess Breach', o: 'Chichester', g: 'f'}, {n: 'Hannah Botterman', o: 'Stevenage', g: 'f'}
              ] 
            },
            { 
              region: 'SOUTH WEST', 
              color: THEME.greenSuccess, 
              icon: <Waves size={14} className="opacity-30" />, 
              players: [
                {n: 'Ellis Genge', o: 'Bristol', g: 'm'}, {n: 'Henry Slade', o: 'Plymouth', g: 'm'}, 
                {n: 'Marlie Packer', o: 'Yeovil', g: 'f'}, {n: 'Tatyana Heard', o: 'Gloucester', g: 'f'}
              ] 
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border rounded-lg p-4 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: card.color }}></div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                <span className="font-extrabold text-[#0B1F3F] uppercase text-sm" style={{ color: card.color === THEME.accentGold ? '#998a30' : card.color }}>{card.region}</span>
                {card.icon}
              </div>
              <div className="flex flex-col gap-1">
                {card.players.map((p, pIdx) => (
                  <PlayerRow key={pIdx} name={p.n} origin={p.o} gender={p.g as 'm' | 'f'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SLIDE 3 ---
export const Slide3: React.FC = () => {
  const RegionCard = ({ 
    title, subtitle, desc, icon, history, color 
  }: { title: string, subtitle: string, desc: string, icon: React.ReactNode, history: {match: string, context: string}[], color: string }) => (
    <div className="bg-white border-l-[6px] p-5 rounded-sm shadow-sm flex flex-col relative overflow-hidden" style={{ borderColor: color }}>
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: color }}>{icon}</span>
        <h3 className="font-bold text-xl uppercase text-[#0B1F3F]">{title}</h3>
      </div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{subtitle}</div>
      <p className="text-[15px] font-medium text-[#0B1F3F] leading-snug mb-5 flex-grow">
        {desc}
      </p>
      <div className="bg-[#f4f6f8] p-3 rounded mt-auto">
        <div className="flex items-center gap-2 text-[11px] font-extrabold text-gray-500 uppercase border-b border-gray-200 pb-1 mb-2">
          <Clock size={10} /> Historic Fixtures
        </div>
        <ul className="space-y-2">
          {history.map((h, idx) => (
            <li key={idx} className="text-xs leading-tight">
              <strong className="block text-[#0B1F3F] mb-0.5">{h.match}</strong>
              <span className="text-gray-500 italic text-[11px]">{h.context}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
      <RegionCard 
        title="North" 
        subtitle="The Fortress" 
        desc="League heartland. Hard edges. Playmakers. The team that nobody wants to play away."
        icon={<Castle size={20} />}
        color={THEME.navy}
        history={[
          { match: 'Beat All Blacks 21-9 (1979)', context: 'Inflicted the only defeat on the touring All Blacks.' },
          { match: 'Beat Wallabies 15-12 (1976)', context: 'A gritty win against the touring Australians in Gosforth.' }
        ]}
      />
      <RegionCard 
        title="Midlands" 
        subtitle="The Engine Room" 
        desc="Industrial pack power. The scrum engine. Uncompromising physicality."
        icon={<Gavel size={20} />}
        color={THEME.englandRed}
        history={[
          { match: 'Beat All Blacks 19-13 (1983)', context: "Dusty Hare's boot secured a famous win at Welford Rd." },
          { match: 'Drew w/ South Africa 19-19 (1992)', context: 'Held the returning Springboks to a stalemate.' }
        ]}
      />
      <RegionCard 
        title="London & SE" 
        subtitle="The Capital" 
        desc="Wealth and population density. A deep talent pool with the swagger to match. The natural 'Villains'."
        icon={<Crown size={20} />}
        color={THEME.accentGold}
        history={[
          { match: 'Beat Springboks 11-6 (1969)', context: 'A famous tactical victory against the tourists.' },
          { match: 'Beat Wallabies 23-11 (1967)', context: 'Comprehensive win with running rugby.' }
        ]}
      />
      <RegionCard 
        title="South West" 
        subtitle="The Heartland" 
        desc="Tribal, passionate, flair & grit combined. A deep rugby culture."
        icon={<Waves size={20} />}
        color={THEME.greenSuccess}
        history={[
          { match: 'Drew 12-12 vs Wallabies (1984)', context: "Denied the 'Grand Slam' legends a perfect record." },
          { match: 'Beat All Blacks 15-14 (1972)', context: 'A famous upset victory at a raucous Kingsholm.' }
        ]}
      />
    </div>
  );
};

// --- SLIDE 4 ---
export const Slide4: React.FC = () => {
  const PhaseCard = ({ title, desc, highlight = false }: { title: string, desc: string, highlight?: boolean }) => (
    <div className={`p-3 rounded-md border-l-4 flex flex-col justify-center ${highlight ? 'bg-[#0B1F3F] text-white' : 'bg-[#0B1F3F] text-white'}`} style={{ borderColor: highlight ? THEME.englandRed : THEME.accentGold }}>
      <div className={`text-[11px] font-bold uppercase mb-1 ${highlight ? 'text-white' : 'text-[#C5B358]'}`}>{title}</div>
      <div className="text-[11px] leading-tight opacity-90">{desc}</div>
    </div>
  );

  const CalHeader = () => (
    <div className="flex w-full mb-1">
      <div className="w-[60px] shrink-0"></div>
      <div className="flex-grow grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[2px]">
        {['Sep', '', '', '', 'Oct', '', '', '', 'Nov', '', '', '', '', 'Dec', '', '', '', 'Jan', '', '', '', '', 'Feb', '', '', ''].map((m, i) => (
          <div key={i} className={`text-[9px] font-bold text-center border-b border-gray-300 pb-1 ${['Oct'].includes(m) ? 'text-[#C8102E]' : 'text-gray-400'}`}>{m}</div>
        ))}
      </div>
    </div>
  );

  const CalRow: React.FC<{ label: string, labelColor?: string, children: React.ReactNode }> = ({ label, labelColor, children }) => (
    <div className="flex w-full h-[32px] items-center mb-1">
      <div className="w-[60px] shrink-0 text-[10px] font-extrabold text-right pr-3 uppercase" style={{ color: labelColor || THEME.navy }}>{label}</div>
      <div className="flex-grow h-full bg-[#f4f5f7] rounded overflow-hidden relative grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[2px]">
        {children}
      </div>
    </div>
  );

  const Block = ({ start, span, color, text, border = false }: { start: number, span: number, color: string, text: string, border?: boolean }) => (
    <div 
      className={`h-full flex items-center justify-center text-white font-bold text-[9px] rounded-sm z-10 ${border ? 'border border-black' : ''}`}
      style={{ gridColumn: `${start} / span ${span}`, backgroundColor: color }}
    >
      {text}
    </div>
  );

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Phases */}
      <div className="grid grid-cols-4 gap-4 w-full">
        <PhaseCard title="Men Phase 1 (25/26)" desc="3-Week Window (Sept/Oct). Sat + Sun fixtures for broadcast." />
        <PhaseCard title="Men Phase 2 (26/27)" desc="Split Season: 3wks (Oct) + 2wks (Jan). Test Series intensity." />
        <PhaseCard title="Men Phase 3 (27/28+)" desc="New Flow: PREM -> Europe -> Origin -> 6N -> Business End." />
        <PhaseCard title="Women (From Day 1)" desc="6-Week Block (Sept/Oct). Home & Away League." highlight />
      </div>

      {/* Calendars */}
      <div className="bg-white p-4 rounded-lg shadow-sm flex-grow flex flex-col gap-6">
        
        {/* Autumn */}
        <div>
          <div className="text-xs font-extrabold text-gray-500 uppercase border-b border-gray-100 pb-1 mb-2">Autumn Block (2026/27)</div>
          <CalHeader />
          <CalRow label="Prem">
            <Block start={1} span={5} color="#000" text="R1-5" border />
            <Block start={16} span={3} color="#000" text="R6-8" border />
            <Block start={21} span={2} color="#000" text="R9-10" border />
          </CalRow>
          <CalRow label="Origin" labelColor={THEME.englandRed}>
            <Block start={6} span={3} color={THEME.englandRed} text="ORIGIN SERIES" />
          </CalRow>
          <CalRow label="Europe" labelColor={THEME.europeBlue}>
            <Block start={14} span={2} color={THEME.europeBlue} text="R1-2" />
            <Block start={19} span={2} color={THEME.europeBlue} text="R3-4" />
          </CalRow>
          <CalRow label="Intl">
            <Block start={9} span={4} color={THEME.navy} text="NATIONS CUP" />
            <Block start={23} span={4} color={THEME.navy} text="SIX NATIONS" />
          </CalRow>
        </div>

        {/* Goal */}
        <div>
          <div className="text-xs font-extrabold uppercase border-b border-gray-100 pb-1 mb-2" style={{ color: THEME.greenSuccess }}>Goal State (2027/28+)</div>
          <CalHeader />
          <CalRow label="Prem">
            <Block start={1} span={2} color="#000" text="R1-2" border />
            <Block start={14} span={3} color="#000" text="R3-5" border />
            <Block start={21} span={2} color="#000" text="R6-7" border />
          </CalRow>
          <CalRow label="Origin" labelColor={THEME.englandRed}>
            <Block start={3} span={6} color={THEME.englandRed} text="ORIGIN (6 WEEKS)" />
          </CalRow>
          <CalRow label="Europe" labelColor={THEME.europeBlue}>
            <Block start={17} span={2} color={THEME.europeBlue} text="R1-2" />
            <Block start={19} span={2} color={THEME.europeBlue} text="R3-4" />
          </CalRow>
           <CalRow label="Intl">
            <Block start={9} span={4} color={THEME.navy} text="NATIONS CUP" />
            <Block start={23} span={4} color={THEME.navy} text="SIX NATIONS" />
          </CalRow>
        </div>
      </div>

      {/* Trade Off */}
      <div className="flex items-center pt-2 border-t border-gray-200 text-[11px] text-gray-500">
        <div className="flex-grow">
          <div className="font-bold text-gray-400 uppercase text-[10px]">The Trade-Off</div>
          <div className="font-bold text-[#0B1F3F] text-sm flex items-center gap-2">
            <span className="text-gray-400 line-through">PREM CUP & 4 ROUNDS</span>
            <ArrowRight size={12} className="text-gray-300" />
            <span className="text-[#C8102E]">5 ORIGIN TEST WEEKS</span>
          </div>
        </div>
        <div className="pl-6 border-l border-gray-200 text-right">
          <strong>Net Result:</strong> Reduced game load for elite players.<br/>Zero conflict with Europe.
        </div>
      </div>
    </div>
  );
};
