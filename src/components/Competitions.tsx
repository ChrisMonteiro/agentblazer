import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ImageIcon,
  Calendar,
  Sparkles,
  Trophy,
  ExternalLink,
  Edit3,
} from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubCompetition } from '../types/club';
import { CompetitionModal } from './CompetitionModal';

export const Competitions: React.FC = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<ClubCompetition | null>(null);

  const competitions = clubData.competitions || [];
  const featuredCompetition = competitions[0];
  const remainingCompetitions = competitions.slice(1);

  return (
    <section
      id="competitions"
      className="relative py-28 sm:py-36 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FFB000]/05 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E85D04]/05 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            {/* Animated Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFB000] animate-ping" />
              <span>01 — COMPETITIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F0E6] tracking-tight leading-[1.05]">
              COMPETITIONS
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-sans text-[#A8A397] font-medium italic">
              &ldquo;Where ideas meet challenges.&rdquo;
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#A8A397] font-sans leading-relaxed">
              Showcasing the hackathons, algorithmic tournaments, prompt battles, and technical competitions organized and participated in by the CSE club.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs font-mono text-[#FFB000]/90">
              <span className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#FFB000]" />
                {competitions.length} Showcases Archived
              </span>
              <span className="text-[#3A3323]">•</span>
              <span>Click any project to view photos</span>
            </div>
          </div>
        </motion.div>

        {/* EDITORIAL SHOWCASE LAYOUT */}
        <div className="space-y-10">
          {/* 1. LARGE FEATURED COMPETITION CARD */}
          {featuredCompetition && (
            <FeaturedCompetitionCard
              competition={featuredCompetition}
              onSelect={() => setSelectedCompetition(featuredCompetition)}
            />
          )}

          {/* 2. ASYMMETRIC SECONDARY COMPETITIONS */}
          {remainingCompetitions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {remainingCompetitions.map((comp, index) => (
                <SecondaryCompetitionCard
                  key={comp.id || index}
                  competition={comp}
                  index={index}
                  onSelect={() => setSelectedCompetition(comp)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN DEDICATED GALLERY MODAL */}
      <CompetitionModal
        competition={selectedCompetition}
        onClose={() => setSelectedCompetition(null)}
      />
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* FEATURED COMPETITION CARD (Large Portfolio Lead Project)                   */
/* -------------------------------------------------------------------------- */
interface FeaturedProps {
  competition: ClubCompetition;
  onSelect: () => void;
}

const FeaturedCompetitionCard: React.FC<FeaturedProps> = ({
  competition,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const photoCount = competition.photos?.length || 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      onClick={onSelect}
      className="group relative rounded-3xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/60 transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${(mousePos.x - 0.5) * 3}deg) rotateX(${
              -(mousePos.y - 0.5) * 3
            }deg) translateY(-4px)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Cover Image Section */}
        <div className="relative lg:col-span-7 h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden bg-[#0D0D0B]">
          {imgFailed || !competition.cover ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-6 text-center">
              <Trophy className="w-14 h-14 opacity-50 mb-3" />
              <span className="font-display text-lg font-bold text-[#F4F0E6]">{competition.title}</span>
              <span className="font-mono text-xs text-[#A8A397] mt-1">{competition.year}</span>
            </div>
          ) : (
            <img
              src={encodeURI(competition.cover)}
              alt=""
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          )}

          {/* Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#20201B] via-transparent to-transparent opacity-80 lg:opacity-40" />
          <div className="absolute inset-0 bg-[#FFB000]/05 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Floating "VIEW PHOTOS" Badge */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.9,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 rounded-2xl bg-[#FFB000] text-[#0D0D0B] font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_30px_rgba(255,176,0,0.5)]"
            >
              <ImageIcon className="w-4 h-4" />
              <span>VIEW PHOTOS ({photoCount})</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.div>
          </div>

          {/* Top Pill Badges */}
          <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] font-mono text-xs text-[#FFB000] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFB000]" />
              FEATURED COMPETITION
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] font-mono text-xs text-[#FFD166] flex items-center gap-1">
              <ImageIcon className="w-3 h-3 text-[#FFD166]" />
              {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
            </span>
          </div>
        </div>

        {/* Right / Information & Typography */}
        <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between bg-[#171714]">
          <div>
            {/* Year & Date */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
              <span className="uppercase tracking-widest">
                {competition.date || competition.year || '2026'}
              </span>
              {competition.category && (
                <>
                  <span className="text-[#3A3323]">•</span>
                  <span className="text-[#A8A397]">{competition.category}</span>
                </>
              )}
            </div>

            {/* Title with Subtle Motion on Hover */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors duration-300 tracking-tight leading-snug mb-4">
              {competition.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#A8A397] font-sans leading-relaxed mb-6 line-clamp-4">
              {competition.description}
            </p>

            {/* Quick highlights snippet */}
            {competition.rulesAndHighlights && (
              <div className="space-y-1.5 mb-5 pt-4 border-t border-[#3A3323]">
                {competition.rulesAndHighlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="text-xs text-[#A8A397] flex items-start gap-2">
                    <span className="text-[#FFB000] font-mono font-bold">›</span>
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Inside Photos Preview Strip */}
            {competition.photos && competition.photos.length > 1 && (
              <div className="mb-5 pt-3 border-t border-[#3A3323]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5 text-[#FFB000] font-semibold">
                    <ImageIcon className="w-3.5 h-3.5" />
                    Inside Photos ({competition.photos.length - 1} Scenes)
                  </span>
                  <span className="text-[11px] text-[#A8A397]/70">Cover + Inside Gallery</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {competition.photos.slice(1, 4).map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="relative h-14 sm:h-16 rounded-xl overflow-hidden bg-[#0D0D0B] border border-[#3A3323] group-hover:border-[#FFB000]/40 transition-colors"
                    >
                      <img
                        src={encodeURI(p)}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B]/60 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Link Footer */}
          <div className="pt-6 border-t border-[#3A3323] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#FFB000] group-hover:text-[#FFD166] transition-colors">
              <span>View Competition Gallery</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
            </div>

            <span className="font-mono text-xs text-[#A8A397]">
              {competition.year || '2026'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* SECONDARY COMPETITION CARD (Asymmetric & Distinct Proportions)             */
/* -------------------------------------------------------------------------- */
interface SecondaryProps {
  competition: ClubCompetition;
  index: number;
  onSelect: () => void;
}

const SecondaryCompetitionCard: React.FC<SecondaryProps> = ({
  competition,
  index,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const photoCount = competition.photos?.length || 1;
  const isEditable = competition.isEditablePlaceholder;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      onClick={onSelect}
      className={`group relative rounded-3xl bg-[#20201B] border transition-all duration-300 overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between ${
        isEditable
          ? 'border-[#8BAE5D]/40 hover:border-[#8BAE5D]'
          : 'border-[#3A3323] hover:border-[#FFB000]/50'
      }`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${(mousePos.x - 0.5) * 4}deg) rotateX(${
              -(mousePos.y - 0.5) * 4
            }deg) translateY(-5px)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
      }}
    >
      <div>
        {/* Cover Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0D0D0B]">
          {imgFailed || !competition.cover ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-5 text-center">
              <Trophy className="w-10 h-10 opacity-50 mb-2" />
              <span className="font-display text-base font-bold text-[#F4F0E6] line-clamp-1">{competition.title}</span>
              <span className="font-mono text-[11px] text-[#A8A397] mt-1">{competition.year}</span>
            </div>
          ) : (
            <img
              src={encodeURI(competition.cover)}
              alt=""
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
              referrerPolicy="no-referrer"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#20201B] via-transparent to-transparent opacity-80" />

          {/* Hover Overlay "VIEW PHOTOS" */}
          <div className="absolute inset-0 bg-[#0D0D0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <div className="px-5 py-2.5 rounded-xl bg-[#FFB000] text-[#0D0D0B] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(255,176,0,0.4)]">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>VIEW PHOTOS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] font-mono text-[11px] text-[#FFB000] font-bold">
              {competition.year || '2026'}
            </span>

            {isEditable ? (
              <span className="px-2.5 py-1 rounded-full bg-[#8BAE5D]/20 backdrop-blur-md border border-[#8BAE5D]/40 font-mono text-[10px] text-[#8BAE5D] font-semibold flex items-center gap-1">
                <Edit3 className="w-3 h-3" />
                EDITABLE ENTRY
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] font-mono text-[11px] text-[#A8A397] flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-[#FFD166]" />
                {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="text-[11px] font-mono text-[#FFB000]/90 mb-2">
            {competition.date || competition.year}
          </div>

          <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors duration-300 tracking-tight mb-2.5 line-clamp-2">
            {competition.title}
          </h4>

          <p className="text-xs sm:text-sm text-[#A8A397] font-sans leading-relaxed line-clamp-3 mb-4">
            {competition.description}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#3A3323] flex items-center justify-between text-xs font-mono">
        <span className="text-[#FFB000] group-hover:text-[#FFD166] flex items-center gap-1 font-semibold">
          View Competition
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
        <span className="text-[#A8A397] text-[11px]">
          {photoCount} Available
        </span>
      </div>
    </motion.div>
  );
};

export default Competitions;
