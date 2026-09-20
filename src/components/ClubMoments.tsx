import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, CheckCircle2, TrendingUp, Code2, Zap, Rocket } from 'lucide-react';
import { clubData } from '../data/clubData';

export const ClubMoments: React.FC = () => {
  const stageIcons = [BookOpenIcon, Code2, Zap, PaletteIcon, Rocket];

  return (
    <section id="moments" className="relative py-20 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
            // 07 • THE STUDENT ODYSSEY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight mb-3">
            The <span className="text-[#FFB000]">AgentBlazer</span> Trajectory.
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A397] font-sans leading-relaxed">
            How a freshman moves from their first lines of code to commanding national hackathons and shipping production-grade architectures.
          </p>
        </div>

        {/* Vertical Connected Storyline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing central circuit trace wire */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FFB000] via-[#E85D04] to-[#FFD166] shadow-[0_0_12px_rgba(255,176,0,0.3)] pointer-events-none" />

          <div className="space-y-16 relative z-10">
            {clubData.journeyStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Left or Right on desktop) */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="p-7 rounded-3xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 transition-all shadow-xl group">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                        <span className="font-mono text-xs font-bold text-[#FFB000]">
                          PHASE // {stage.stage}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
                        <span className="font-mono text-xs text-[#A8A397]">
                          {stage.statsHighlight}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors mb-2">
                        {stage.actionWord}: {stage.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#A8A397] leading-relaxed font-sans">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#171714] border-2 border-[#FFB000] shadow-[0_0_20px_rgba(255,176,0,0.4)] flex items-center justify-center font-mono text-xs font-bold text-[#FFB000]">
                      {stage.actionWord.slice(0, 3)}
                    </div>
                  </div>

                  {/* Empty counterpart spacer for balance on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper SVG icons
function BookOpenIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function PaletteIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

export default ClubMoments;
