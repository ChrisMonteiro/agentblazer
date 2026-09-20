import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Github, MessageSquare, Terminal } from 'lucide-react';
import { clubData } from '../data/clubData';
import { AgentBlazerLogo } from './AgentBlazerLogo';

interface CTAProps {
  onOpenJoinModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="cta" className="relative py-32 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      {/* Dynamic Amber Ambient Glow */}
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#FFB000]/10 via-[#E85D04]/10 to-[#FFD166]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo Emblem Icon */}
        <div className="flex justify-center mb-6">
          <AgentBlazerLogo size={80} animate />
        </div>

        {/* Section Pre-title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB000]/10 border border-[#FFB000]/30 text-[#FFB000] font-mono text-xs uppercase tracking-widest mb-6">
          <Terminal className="w-3.5 h-3.5" />
          // INITIATE NEXT LEVEL
        </div>

        {/* Big Bold Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F0E6] tracking-tight leading-none mb-6">
          Ready to Build <br />
          <span className="bg-gradient-to-r from-[#FFB000] via-[#FFD166] to-[#E85D04] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,176,0,0.3)]">
            What's Next?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#A8A397] font-sans leading-relaxed mb-10">
          Whether you want to construct autonomous multi-agent networks, conquer 36-hour hackathons, or ship high-craft web apps, your seat in our engineering collective is waiting.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-10 py-5 rounded-full font-mono text-base font-bold tracking-wider text-[#0D0D0B] bg-gradient-to-r from-[#FFB000] via-[#FFD166] to-[#FFB000] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_35px_rgba(255,176,0,0.4)] cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-[#0D0D0B]" />
            <span>JOIN THE CLUB</span>
            <ArrowRight className="w-5 h-5 text-[#0D0D0B] ml-1" />
          </button>

          <a
            href={clubData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-5 rounded-full font-mono text-sm font-semibold tracking-wider text-[#F4F0E6] bg-[#171714] hover:bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 active:scale-95 transition-all backdrop-blur-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4 text-[#FFB000]" />
            <span>FOLLOW OUR CODE</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
