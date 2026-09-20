import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { ClubCompetition } from '../types/club';

interface CompetitionModalProps {
  competition: ClubCompetition | null;
  onClose: () => void;
}

export const CompetitionModal: React.FC<CompetitionModalProps> = ({
  competition,
  onClose,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [failedPhotos, setFailedPhotos] = useState<Record<number, boolean>>({});

  const handlePhotoError = (index: number) => {
    setFailedPhotos((prev) => ({ ...prev, [index]: true }));
  };

  // Keyboard navigation for Lightbox and Modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!competition) return;

      if (activePhotoIndex !== null) {
        // Lightbox is active
        if (e.key === 'Escape') {
          setActivePhotoIndex(null);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : competition.photos.length - 1
          );
        } else if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) =>
            prev !== null && prev < competition.photos.length - 1 ? prev + 1 : 0
          );
        }
      } else {
        // Modal is active, Lightbox is closed
        if (e.key === 'Escape') {
          onClose();
        }
      }
    },
    [competition, activePhotoIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (competition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [competition]);

  if (!competition) return null;

  const photos = competition.photos && competition.photos.length > 0
    ? competition.photos
    : [competition.cover];

  return (
    <AnimatePresence>
      <div
        id="competition-gallery-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
      >
        {/* Backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D0D0B]/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl my-auto rounded-3xl bg-[#20201B] border border-[#3A3323] shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#171714]/95 backdrop-blur-md border-b border-[#3A3323]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#FFB000]/15 border border-[#FFB000]/30 text-[#FFB000] font-mono text-[11px] uppercase tracking-wider font-semibold">
                {competition.year || '2026'}
              </span>
              {competition.category && (
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#20201B] border border-[#3A3323] text-[#A8A397] font-mono text-[11px]">
                  {competition.category}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-[#E85D04]/15 border border-[#E85D04]/30 text-[#FFD166] font-mono text-[11px] flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-[#FFD166]" />
                {photos.length} {photos.length === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>

            <button
              id="close-competition-modal-btn"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#20201B] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#FFD166] border border-[#3A3323] hover:border-[#E85D04]/40 font-mono text-xs transition-colors cursor-pointer"
              title="Close modal (Esc)"
            >
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Competition Header Info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                <span>{competition.date || competition.year || 'Academic Year 2025–26'}</span>
                {competition.venue && (
                  <>
                    <span className="text-[#3A3323]">•</span>
                    <span className="text-[#A8A397]">{competition.venue}</span>
                  </>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4F0E6] tracking-tight mb-4">
                {competition.title}
              </h2>

              {competition.description && (
                <p className="text-sm sm:text-base text-[#A8A397] leading-relaxed font-sans max-w-3xl">
                  {competition.description}
                </p>
              )}

              {/* Highlights & Winners if present */}
              {(competition.rulesAndHighlights || (competition.winners && competition.winners.length > 0)) && (
                <div className="mt-6 pt-6 border-t border-[#3A3323] grid grid-cols-1 md:grid-cols-2 gap-4">
                  {competition.rulesAndHighlights && (
                    <div className="space-y-2">
                      <div className="font-mono text-xs text-[#A8A397] uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#FFB000]" />
                        <span>Key Focus & Highlights</span>
                      </div>
                      <div className="space-y-1.5">
                        {competition.rulesAndHighlights.map((r, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#F4F0E6]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000] shrink-0 mt-0.5" />
                            <span className="leading-snug">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {competition.winners && competition.winners.length > 0 && (
                    <div className="space-y-2">
                      <div className="font-mono text-xs text-[#A8A397] uppercase tracking-wider flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-[#FFB000]" />
                        <span>Rankings & Honors</span>
                      </div>
                      <div className="space-y-2">
                        {competition.winners.map((w, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] flex items-center justify-between text-xs"
                          >
                            <div>
                              <span className="font-mono font-semibold text-[#FFD166] mr-2">
                                {w.rank}
                              </span>
                              <span className="text-[#F4F0E6] font-semibold">{w.teamName}</span>
                            </div>
                            {w.project && (
                              <span className="text-[11px] text-[#A8A397] hidden sm:inline">
                                {w.project}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Photo Gallery Grid (Editorial / Masonry Style) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#A8A397] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#FFB000]" />
                  <span>Competition Gallery ({photos.length})</span>
                </h3>
                <span className="text-[11px] font-mono text-[#A8A397]/70">
                  Click any photo to enlarge
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photoUrl, index) => {
                  // Asymmetric spans: make the first photo large (2 cols on tablet/desktop)
                  const isFeatured = index === 0;
                  const isWide = index === 3;
                  const isFailed = failedPhotos[index];

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setActivePhotoIndex(index)}
                      className={`group relative rounded-2xl overflow-hidden bg-[#171714] border border-[#3A3323] hover:border-[#FFB000]/50 cursor-pointer shadow-lg transition-all ${
                        isFeatured ? 'sm:col-span-2 sm:row-span-2' : isWide ? 'sm:col-span-2' : 'col-span-1'
                      } ${isFeatured ? 'min-h-[280px] sm:min-h-[420px]' : 'min-h-[220px]'}`}
                    >
                      {isFailed ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[#FFB000] bg-[#171714]">
                          <ImageIcon className="w-8 h-8 opacity-40 mb-2" />
                          <span className="font-mono text-xs text-[#A8A397]">Photo Archive</span>
                        </div>
                      ) : (
                        <img
                          src={encodeURI(photoUrl)}
                          alt=""
                          loading="lazy"
                          onError={() => handlePhotoError(index)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                        />
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B]/90 via-[#0D0D0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-end">
                          <div className="p-2 rounded-xl bg-[#171714]/80 backdrop-blur-sm border border-[#3A3323] text-[#FFB000]">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono text-[#F4F0E6]">
                          <span className="bg-[#0D0D0B]/70 px-2 py-0.5 rounded border border-[#3A3323]">
                            Photo {index + 1} of {photos.length}
                          </span>
                          <span className="text-[#FFB000]">Click to View →</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FULLSCREEN LIGHTBOX VIEWER */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-[#0D0D0B]/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8"
              onClick={() => setActivePhotoIndex(null)}
            >
              {/* Lightbox Top Header */}
              <div
                className="w-full max-w-6xl flex items-center justify-between text-[#A8A397] z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="font-mono text-xs sm:text-sm">
                  <span className="text-[#FFB000] font-bold">{competition.title}</span>
                  <span className="mx-2 text-[#3A3323]">•</span>
                  <span className="text-[#A8A397]">
                    {activePhotoIndex + 1} of {photos.length}
                  </span>
                </div>

                <button
                  id="close-lightbox-btn"
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 rounded-xl bg-[#171714] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#FFD166] border border-[#3A3323] transition-colors cursor-pointer"
                  title="Close viewer (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Centered Image with controls */}
              <div
                className="relative w-full max-w-5xl flex-1 flex items-center justify-center p-2 sm:p-4 my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {photos.length > 1 && (
                  <button
                    id="lightbox-prev-btn"
                    onClick={() =>
                      setActivePhotoIndex((prev) =>
                        prev !== null && prev > 0 ? prev - 1 : photos.length - 1
                      )
                    }
                    className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#171714]/80 hover:bg-[#FFB000] hover:text-[#0D0D0B] text-[#F4F0E6] border border-[#3A3323] transition-all cursor-pointer shadow-2xl"
                    title="Previous photo (←)"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                <motion.img
                  key={activePhotoIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  src={encodeURI(photos[activePhotoIndex])}
                  alt=""
                  onError={() => handlePhotoError(activePhotoIndex)}
                  className="max-h-[78vh] max-w-[92vw] md:max-w-[85vw] object-contain rounded-2xl shadow-2xl border border-[#3A3323] select-none"
                  referrerPolicy="no-referrer"
                />

                {photos.length > 1 && (
                  <button
                    id="lightbox-next-btn"
                    onClick={() =>
                      setActivePhotoIndex((prev) =>
                        prev !== null && prev < photos.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#171714]/80 hover:bg-[#FFB000] hover:text-[#0D0D0B] text-[#F4F0E6] border border-[#3A3323] transition-all cursor-pointer shadow-2xl"
                    title="Next photo (→)"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Lightbox Footer Thumbnail Strip */}
              {photos.length > 1 && (
                <div
                  className="flex items-center gap-2 overflow-x-auto max-w-xl py-2 px-3 rounded-2xl bg-[#171714]/70 border border-[#3A3323] z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {photos.map((p, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setActivePhotoIndex(pIdx)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                        activePhotoIndex === pIdx
                          ? 'border-[#FFB000] scale-105 shadow-[0_0_10px_rgba(255,176,0,0.4)]'
                          : 'border-[#3A3323] opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={encodeURI(p)}
                        alt=""
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
