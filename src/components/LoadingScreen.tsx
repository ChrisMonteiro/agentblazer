import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AgentBlazerLogo } from './AgentBlazerLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING AGENTBLAZER CORE...',
  'CONNECTING CSE DISTRIBUTED NODES...',
  'CALIBRATING NEURAL ARCHITECTURES...',
  'SYNCING REPOSITORIES & PROTOCOLS...',
  'ACCESS GRANTED. LAUNCHING PORTAL.',
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds total
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        // Update boot log based on progress
        const logIndex = Math.min(
          Math.floor((next / 100) * BOOT_LOGS.length),
          BOOT_LOGS.length - 1
        );
        setCurrentLogIndex(logIndex);

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0D0D0B] text-[#F4F0E6] overflow-hidden"
    >
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-grid-lab opacity-40 pointer-events-none" />

      {/* Radial Ambient Core Glow (Warm Amber) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#FFB000]/10 blur-[120px] pointer-events-none"
      />

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Logo Entrance */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 relative flex items-center justify-center"
        >
          <div className="absolute -inset-10 rounded-full bg-[#FFB000]/15 blur-2xl pointer-events-none" />
          <div className="hidden sm:block">
            <AgentBlazerLogo variant="full" size={230} animate />
          </div>
          <div className="sm:hidden">
            <AgentBlazerLogo variant="full" size={170} animate />
          </div>
          {/* Hex ring ripple */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border border-[#FFB000]/30 pointer-events-none"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-1 mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#F4F0E6]">
            AgentBlazer
          </h1>
          <p className="font-mono text-xs text-[#FFB000] font-semibold tracking-[0.35em] uppercase">
            Computer Science & Engineering Club
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-3">
          <div className="relative h-1.5 w-full bg-[#171714] rounded-full overflow-hidden border border-[#3A3323]">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FFB000] to-[#E85D04] rounded-full shadow-[0_0_12px_rgba(255,176,0,0.45)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Progress Stats & Terminal Log */}
          <div className="flex items-center justify-between font-mono text-[11px] text-[#A8A397]">
            <span className="text-[#FFB000] font-medium">
              {BOOT_LOGS[currentLogIndex]}
            </span>
            <span className="font-bold text-[#F4F0E6]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Corner Tech Coordinates */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-[#A8A397]/50 tracking-wider">
        SYS.VER // 2026.04 // SECURE
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-[#A8A397]/50 tracking-wider">
        PORT // 3000 • DEPT.CSE
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
