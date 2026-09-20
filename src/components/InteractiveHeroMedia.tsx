import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { clubData } from '../data/clubData';

interface HeroMediaProps {
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

export const InteractiveHeroMedia: React.FC<HeroMediaProps> = ({ onOpenVideoModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const featuredVideo = clubData.videos[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto perspective-1000 py-6"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 bg-[#FFB000]/08 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

      {/* Main 3D Card Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl md:rounded-3xl border border-[#3A3323] bg-[#171714]/95 p-2 md:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-[#FFB000]/40"
      >
        {/* Media Frame Header / Engineering Chrome */}
        <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-[#3A3323] font-mono text-[11px] text-[#A8A397]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB000]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8BAE5D]" />
            <span className="ml-2 text-[#F4F0E6] font-semibold flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#FFB000]" />
              agentblazer://live-feed.stream
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[#FFB000] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000] animate-ping" />
              LIVE REEL
            </span>
            <span className="text-[#A8A397]/70">1080P // 60FPS</span>
          </div>
        </div>

        {/* Video Screen Container */}
        <div
          className="relative aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#0D0D0B] group cursor-pointer"
          data-cursor="play"
          data-cursor-text="WATCH"
          onClick={() => {
            if (onOpenVideoModal && featuredVideo) {
              onOpenVideoModal(featuredVideo.videoUrl || '', featuredVideo.title);
            } else {
              togglePlay();
            }
          }}
        >
          {/* Real playable video stream with fallback poster */}
          <video
            ref={videoRef}
            src={featuredVideo?.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
            poster={featuredVideo?.posterUrl || '/assets/workshops/GSoc and LLM Workshop/session-3.jpg'}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Precision Grid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-lab opacity-20 pointer-events-none" />

          {/* Media Controls Bar (Overlay on hover) */}
          <div
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-[#20201B]/90 border border-[#3A3323] text-[#F4F0E6] hover:text-[#FFB000] hover:border-[#FFB000]/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-[#20201B]/90 border border-[#3A3323] text-[#F4F0E6] hover:text-[#FFB000] hover:border-[#FFB000]/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <div className="hidden sm:block ml-2 px-3 py-1 rounded-md bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-xs font-mono text-[#A8A397]">
                {featuredVideo?.title || 'AgentBlazer 2026 Reel'}
              </div>
            </div>

            <button
              onClick={() => onOpenVideoModal && featuredVideo && onOpenVideoModal(featuredVideo.videoUrl || '', featuredVideo.title)}
              className="px-3.5 py-1.5 rounded-full bg-[#FFB000]/15 hover:bg-[#FFB000]/25 border border-[#FFB000]/40 text-[#FFB000] text-xs font-mono font-medium backdrop-blur-md transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#FFB000]" />
              CINEMA MODE
            </button>
          </div>
        </div>

        {/* Floating Cyber Badge 1: Top Left */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-6 -left-3 md:-left-8 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#20201B]/95 border border-[#3A3323] shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#FFB000]/15 border border-[#FFB000]/30 flex items-center justify-center text-[#FFB000]">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#FFB000] font-semibold tracking-wider uppercase">
              Core Discipline
            </div>
            <div className="text-xs font-bold text-[#F4F0E6]">
              Autonomous Systems & AI
            </div>
          </div>
        </motion.div>

        {/* Floating Cyber Badge 2: Bottom Right */}
        <motion.div
          animate={{
            y: [4, -4, 4],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-6 -right-3 md:-right-8 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#20201B]/95 border border-[#3A3323] shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#E85D04]/15 border border-[#E85D04]/30 flex items-center justify-center text-[#FFD166]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#FFD166] font-semibold tracking-wider uppercase">
              Championship Record
            </div>
            <div className="text-xs font-bold text-[#F4F0E6]">
              28+ Hackathon Podiums
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveHeroMedia;
