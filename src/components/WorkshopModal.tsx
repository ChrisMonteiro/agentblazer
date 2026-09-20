import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  User,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { ClubWorkshop } from '../types/club';

interface WorkshopModalProps {
  workshop: ClubWorkshop | null;
  onClose: () => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({
  workshop,
  onClose,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [failedPhotos, setFailedPhotos] = useState<Record<number, boolean>>({});
  const touchStartXRef = useRef<number | null>(null);

  const handlePhotoError = (index: number) => {
    setFailedPhotos((prev) => ({ ...prev, [index]: true }));
  };

  // Keyboard navigation for Lightbox and Modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!workshop) return;

      if (activePhotoIndex !== null) {
        // Lightbox is active
        if (e.key === 'Escape') {
          setActivePhotoIndex(null);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : workshop.photos.length - 1
          );
        } else if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) =>
            prev !== null && prev < workshop.photos.length - 1 ? prev + 1 : 0
          );
        }
      } else {
        // Modal is active, Lightbox is closed
        if (e.key === 'Escape') {
          onClose();
        }
      }
    },
    [workshop, activePhotoIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (workshop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [workshop]);

  // Touch / swipe handlers for mobile photo navigation in lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || !workshop || activePhotoIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold 45px
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        // Swiped left -> next
        setActivePhotoIndex((prev) =>
          prev !== null && prev < workshop.photos.length - 1 ? prev + 1 : 0
        );
      } else {
        // Swiped right -> prev
        setActivePhotoIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : workshop.photos.length - 1
        );
      }
    }
    touchStartXRef.current = null;
  };

  if (!workshop) return null;

  const photos = workshop.photos && workshop.photos.length > 0
    ? workshop.photos
    : [workshop.cover];

  return (
    <AnimatePresence>
      <div
        id="workshop-gallery-modal"
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
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#20201B]/95 backdrop-blur-md border-b border-[#3A3323]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#FFB000]/15 border border-[#FFB000]/30 text-[#FFB000] font-mono text-[11px] uppercase tracking-wider font-semibold">
                {workshop.year || '2026'}
              </span>
              {workshop.category && (
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] font-mono text-[11px]">
                  {workshop.category}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-[#FFD166]/15 border border-[#FFD166]/30 text-[#FFD166] font-mono text-[11px] flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-[#FFD166]" />
                {photos.length} {photos.length === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>

            <button
              id="close-workshop-modal-btn"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#171714] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#E85D04] border border-[#3A3323] hover:border-[#E85D04]/30 font-mono text-xs transition-colors cursor-pointer"
              title="Close modal (Esc)"
            >
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Workshop Header Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FFB000] mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                <span>{workshop.date || workshop.year || 'Academic Year 2025–26'}</span>
                {workshop.venue && (
                  <>
                    <span className="text-[#3A3323]">•</span>
                    <span className="text-[#A8A397] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E85D04]" />
                      {workshop.venue}
                    </span>
                  </>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4F0E6] tracking-tight mb-4">
                {workshop.title}
              </h2>

              {workshop.description && (
                <p className="text-sm sm:text-base text-[#A8A397] leading-relaxed font-sans max-w-3xl">
                  {workshop.description}
                </p>
              )}

              {/* Speaker & Curriculum / Takeaways Highlights if present */}
              {(workshop.speaker || workshop.curriculum || workshop.takeaways) && (
                <div className="mt-6 pt-6 border-t border-[#3A3323] grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workshop.speaker && (
                    <div className="p-4 rounded-2xl bg-[#171714] border border-[#3A3323]">
                      <div className="font-mono text-[11px] text-[#FFB000] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <User className="w-3.5 h-3.5" />
                        <span>Speaker / Lead Trainer</span>
                      </div>
                      <div className="text-[#F4F0E6] font-bold text-sm">
                        {workshop.speaker.name}
                      </div>
                      {(workshop.speaker.role || workshop.speaker.company) && (
                        <div className="text-xs text-[#A8A397] mt-0.5">
                          {workshop.speaker.role} {workshop.speaker.company && `• ${workshop.speaker.company}`}
                        </div>
                      )}
                    </div>
                  )}

                  {workshop.curriculum && workshop.curriculum.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#171714] border border-[#3A3323]">
                      <div className="font-mono text-[11px] text-[#FFD166] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Curriculum Highlights</span>
                      </div>
                      <div className="space-y-1.5">
                        {workshop.curriculum.slice(0, 3).map((c, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#F4F0E6]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000] shrink-0 mt-0.5" />
                            <span className="leading-snug">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Photo Gallery Grid (Editorial / Masonry Asymmetric Style) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#A8A397] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#FFB000]" />
                  <span>Workshop Photo Archive ({photos.length})</span>
                </h3>
                <span className="text-[11px] font-mono text-[#A8A397]/70">
                  Click any photo to enlarge
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photoUrl, index) => {
                  // Asymmetric spans: make the first photo large (2 cols on tablet/desktop)
                  const isFeatured = index === 0;
                  const isWide = index === 3 || index === 7;
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
                      <div className="absolute inset-0 bg-[#0D0D0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="p-2.5 rounded-2xl bg-[#171714]/90 backdrop-blur-md border border-[#FFB000]/40 text-[#FFB000] shadow-xl group-hover:scale-110 transition-transform">
                          <Maximize2 className="w-5 h-5" />
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
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Lightbox Top Header */}
              <div
                className="w-full max-w-6xl flex items-center justify-between text-[#F4F0E6] z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="font-mono text-xs sm:text-sm">
                  <span className="text-[#FFB000] font-bold">{workshop.title}</span>
                  <span className="mx-2 text-[#3A3323]">•</span>
                  <span className="text-[#A8A397]">
                    {activePhotoIndex + 1} of {photos.length}
                  </span>
                </div>

                <button
                  id="close-workshop-lightbox-btn"
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 rounded-xl bg-[#171714] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#E85D04] border border-[#3A3323] transition-colors cursor-pointer"
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
                    id="workshop-lightbox-prev-btn"
                    onClick={() =>
                      setActivePhotoIndex((prev) =>
                        prev !== null && prev > 0 ? prev - 1 : photos.length - 1
                      )
                    }
                    className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#171714]/90 hover:bg-[#FFB000] hover:text-[#0D0D0B] text-[#F4F0E6] border border-[#3A3323] transition-all cursor-pointer shadow-2xl"
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
                    id="workshop-lightbox-next-btn"
                    onClick={() =>
                      setActivePhotoIndex((prev) =>
                        prev !== null && prev < photos.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#171714]/90 hover:bg-[#FFB000] hover:text-[#0D0D0B] text-[#F4F0E6] border border-[#3A3323] transition-all cursor-pointer shadow-2xl"
                    title="Next photo (→)"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Lightbox Footer Thumbnail Strip */}
              {photos.length > 1 && (
                <div
                  className="flex items-center gap-2 overflow-x-auto max-w-xl py-2 px-3 rounded-2xl bg-[#171714]/80 border border-[#3A3323] z-10"
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
