import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Image as ImageIcon,
  Calendar,
  Sparkles,
  Layers,
  Terminal,
  User,
  MapPin,
  Edit3,
} from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubWorkshop } from '../types/club';
import { WorkshopModal } from './WorkshopModal';

export const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<ClubWorkshop | null>(null);

  const workshops = clubData.workshops || [];
  const featuredWorkshop = workshops[0];
  const remainingWorkshops = workshops.slice(1);

  return (
    <section
      id="workshops"
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
              <span>01 — WORKSHOPS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F0E6] tracking-tight leading-[1.05]">
              WORKSHOPS
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-sans text-[#A8A397] font-medium italic">
              &ldquo;Where concepts transform into code.&rdquo;
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#A8A397] font-sans leading-relaxed">
              Showcasing the hands-on masterclasses, peer-learning labs, and technical bootcamps conducted by the AgentBlazer Club.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs font-mono text-[#FFB000]/90">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FFB000]" />
                {workshops.length} Workshops Archived
              </span>
              <span className="text-[#3A3323]">•</span>
              <span>Click any workshop to view photos</span>
            </div>
          </div>
        </motion.div>

        {/* EDITORIAL SHOWCASE LAYOUT */}
        <div className="space-y-10">
          {/* 1. LARGE FEATURED WORKSHOP CARD */}
          {featuredWorkshop && (
            <FeaturedWorkshopCard
              workshop={featuredWorkshop}
              onSelect={() => setSelectedWorkshop(featuredWorkshop)}
            />
          )}

          {/* 2. ASYMMETRIC SECONDARY WORKSHOPS */}
          {remainingWorkshops.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingWorkshops.map((workshop, index) => (
                <SecondaryWorkshopCard
                  key={workshop.id || index}
                  workshop={workshop}
                  index={index}
                  onSelect={() => setSelectedWorkshop(workshop)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN DEDICATED WORKSHOP GALLERY MODAL */}
      <WorkshopModal
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
      />
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* FEATURED WORKSHOP CARD (Large Portfolio Lead Project)                      */
/* -------------------------------------------------------------------------- */
interface FeaturedProps {
  workshop: ClubWorkshop;
  onSelect: () => void;
}

const FeaturedWorkshopCard: React.FC<FeaturedProps> = ({
  workshop,
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

  const photoCount = workshop.photos?.length || 1;

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
        <div className="relative lg:col-span-7 h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden bg-[#0D0D0B]">
          {imgFailed || !workshop.cover ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-6 text-center">
              <Sparkles className="w-14 h-14 opacity-50 mb-3" />
              <span className="font-display text-lg font-bold text-[#F4F0E6]">{workshop.title}</span>
              <span className="font-mono text-xs text-[#A8A397] mt-1">{workshop.date || 'Technical Workshop'}</span>
            </div>
          ) : (
            <img
              src={encodeURI(workshop.cover)}
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

          {/* Top Pill Badges - Clean Cover Photo indication */}
          <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/85 backdrop-blur-md border border-[#FFB000]/40 font-mono text-xs text-[#FFB000] font-semibold flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3 h-3 text-[#FFB000]" />
              COVER PHOTO
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/85 backdrop-blur-md border border-[#3A3323] font-mono text-xs text-[#FFD166] flex items-center gap-1">
              <ImageIcon className="w-3 h-3 text-[#FFD166]" />
              {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
            </span>
          </div>
        </div>

        {/* Right / Information & Typography */}
        <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between bg-[#171714]">
          <div>
            {/* Year & Date */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FFB000] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
              <span className="uppercase tracking-widest">
                {workshop.date || workshop.year || '2026'}
              </span>
              {workshop.venue && (
                <>
                  <span className="text-[#3A3323]">•</span>
                  <span className="text-[#A8A397] truncate max-w-[200px] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E85D04] shrink-0" />
                    {workshop.venue}
                  </span>
                </>
              )}
            </div>

            {/* Title with Subtle Motion on Hover */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors duration-300 tracking-tight leading-snug mb-4">
              {workshop.title}
            </h3>

            {/* Speaker Information if available */}
            {workshop.speaker && (
              <div className="flex items-center gap-2.5 mb-4 px-3.5 py-2 rounded-xl bg-[#20201B] border border-[#3A3323]">
                <User className="w-4 h-4 text-[#FFB000] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4F0E6] font-semibold">{workshop.speaker.name}</span>
                  {(workshop.speaker.role || workshop.speaker.company) && (
                    <span className="text-[#A8A397] ml-1.5">
                      ({workshop.speaker.role} @ {workshop.speaker.company})
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Short Description */}
            {workshop.description && (
              <p className="text-sm sm:text-base text-[#A8A397] font-sans leading-relaxed mb-6 line-clamp-4">
                {workshop.description}
              </p>
            )}

            {/* Quick Curriculum / Key Focus Snippet */}
            {workshop.curriculum && (
              <div className="space-y-1.5 mb-5 pt-4 border-t border-[#3A3323]">
                {workshop.curriculum.slice(0, 2).map((h, i) => (
                  <div key={i} className="text-xs text-[#A8A397] flex items-start gap-2">
                    <span className="text-[#FFB000] font-mono font-bold">›</span>
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Link Footer */}
          <div className="pt-6 border-t border-[#3A3323] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#FFB000] group-hover:text-[#FFD166] transition-colors">
              <span>View Workshop Gallery</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
            </div>

            <span className="font-mono text-xs text-[#A8A397]">
              {workshop.year || '2026'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* SECONDARY WORKSHOP CARD (Asymmetric & Distinct Proportions)                */
/* -------------------------------------------------------------------------- */
interface SecondaryProps {
  workshop: ClubWorkshop;
  index: number;
  onSelect: () => void;
}

const SecondaryWorkshopCard: React.FC<SecondaryProps> = ({
  workshop,
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

  const photoCount = workshop.photos?.length || 1;
  const isEditable = workshop.isEditablePlaceholder;

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
        <div className="relative h-60 sm:h-64 overflow-hidden bg-[#0D0D0B]">
          {imgFailed || !workshop.cover ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-5 text-center">
              <Terminal className="w-10 h-10 opacity-50 mb-2" />
              <span className="font-display text-base font-bold text-[#F4F0E6] line-clamp-1">{workshop.title}</span>
              <span className="font-mono text-[11px] text-[#A8A397] mt-1">{workshop.date || 'Workshop'}</span>
            </div>
          ) : (
            <img
              src={encodeURI(workshop.cover)}
              alt=""
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
              referrerPolicy="no-referrer"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#20201B] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#FFB000]/05 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-full bg-[#0D0D0B]/85 backdrop-blur-md border border-[#FFB000]/30 font-mono text-[11px] text-[#FFB000] font-bold">
              COVER PHOTO
            </span>

            {isEditable ? (
              <span className="px-2.5 py-1 rounded-full bg-[#8BAE5D]/20 backdrop-blur-md border border-[#8BAE5D]/40 font-mono text-[10px] text-[#8BAE5D] font-semibold flex items-center gap-1">
                <Edit3 className="w-3 h-3" />
                EDITABLE ENTRY
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-[#0D0D0B]/85 backdrop-blur-md border border-[#3A3323] font-mono text-[11px] text-[#A8A397] flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-[#FFD166]" />
                {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="text-[11px] font-mono text-[#FFB000]/90 mb-2">
            {workshop.date || workshop.year}
          </div>

          <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors duration-300 tracking-tight mb-2.5 line-clamp-2">
            {workshop.title}
          </h4>

          {workshop.description && (
            <p className="text-xs sm:text-sm text-[#A8A397] font-sans leading-relaxed line-clamp-3 mb-4">
              {workshop.description}
            </p>
          )}

          {workshop.speaker && (
            <div className="text-xs text-[#A8A397] font-mono flex items-center gap-1.5 mt-2">
              <User className="w-3 h-3 text-[#FFB000]" />
              <span className="text-[#F4F0E6] truncate">{workshop.speaker.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#3A3323] flex items-center justify-between text-xs font-mono">
        <span className="text-[#FFB000] group-hover:text-[#FFD166] flex items-center gap-1 font-semibold">
          View Workshop
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
        <span className="text-[#A8A397] text-[11px]">
          {photoCount} Available
        </span>
      </div>
    </motion.div>
  );
};

export default Workshops;
