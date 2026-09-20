import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ChevronRight, Terminal, Code2 } from 'lucide-react';
import { AgentBlazerLogo } from './AgentBlazerLogo';
import { InteractiveHeroMedia } from './InteractiveHeroMedia';
import { clubData } from '../data/clubData';

interface HeroProps {
  onOpenJoinModal: () => void;
  onOpenVideoModal: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onOpenVideoModal }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#0D0D0B]"
    >
      {/* Background Precision Grid & Texture */}
      <div className="absolute inset-0 bg-grid-lab opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-dots opacity-20 pointer-events-none" />

      {/* Subtle Warm Amber Atmospheric Accents */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-15, 15, -15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[34rem] sm:w-[46rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#9333EA]/20 via-[#A855F7]/15 to-[#FFB000]/10 blur-[130px] pointer-events-none"
      />
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#9333EA]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#00F0FF]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Department Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] border border-[#3A3323] mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB000]" />
          </span>
          <span className="font-mono text-xs text-[#A8A397] tracking-wider uppercase">
            {clubData.department}
          </span>
        </motion.div>

        {/* Hero Central Club Logo Display */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 relative flex flex-col items-center justify-center"
        >
          {/* Subtle soft neutral ambient backlight */}
          <div className="absolute -inset-10 rounded-full bg-white/[0.03] blur-2xl pointer-events-none" />

          {/* Official Emblem Display */}
          <div className="relative z-10 flex flex-col items-center justify-center select-none">
            <div className="hidden sm:block">
              <AgentBlazerLogo
                variant="full"
                size={260}
                animate={false}
                alt="AgentBlazer Club Official Logo"
              />
            </div>
            <div className="sm:hidden">
              <AgentBlazerLogo
                variant="full"
                size={200}
                animate={false}
                alt="AgentBlazer Club Official Logo"
              />
            </div>
          </div>
        </motion.div>

        {/* Primary Club Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F0E6] mb-3 leading-[1.05]"
        >
          <span className="bg-gradient-to-r from-[#F4F0E6] via-[#F4F0E6] to-[#C2BEB2] bg-clip-text text-transparent">
            {clubData.clubName}
          </span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm sm:text-base md:text-lg text-[#FFB000] tracking-wider uppercase font-semibold mb-6 max-w-2xl"
        >
          {clubData.tagline}
        </motion.p>

        {/* Club Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-[#A8A397] max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          {clubData.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
        >
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-[#0D0D0B] bg-[#FFB000] hover:bg-[#E85D04] active:scale-95 transition-all shadow-[0_0_25px_rgba(255,176,0,0.3)] hover:shadow-[0_0_30px_rgba(255,176,0,0.5)] flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#0D0D0B]" />
            <span>JOIN AGENTBLAZER</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-medium text-[#F4F0E6] bg-[#1A1A16] hover:bg-[#252520] border border-[#3A3323] hover:border-[#FFB000]/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-[#FFB000]" />
            <span>EXPLORE CLUB</span>
          </button>
        </motion.div>

        {/* Interactive Workshop Video & Gallery Preview */}
        <InteractiveHeroMedia onOpenVideoModal={onOpenVideoModal} />

        {/* Quick Tech Focus Tickers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-[#7A7568]"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141411] border border-[#2A271F]">
            <Code2 className="w-3.5 h-3.5 text-[#FFB000]" />
            Autonomous AI Agents
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141411] border border-[#2A271F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            Multi-Agent Workflows
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141411] border border-[#2A271F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
            SJEC Hackathons & Research
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14"
        >
          <button
            onClick={scrollToAbout}
            className="text-[#7A7568] hover:text-[#FFB000] transition-colors flex flex-col items-center gap-1 cursor-pointer group"
            aria-label="Scroll down to about section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase group-hover:translate-y-0.5 transition-transform">
              SCROLL
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
