import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Camera } from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubGalleryItem } from '../types/club';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Hackathon', 'Workshops', 'Campus Life', 'Project Demos', 'Celebrations'];

  const filteredItems = selectedCategory === 'All'
    ? clubData.gallery
    : clubData.gallery.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-20 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 05 • VISUAL ARCHIVE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Moments Captured in <span className="text-[#FFB000]">Code</span> & Grit.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FFB000] text-[#0D0D0B] font-bold'
                    : 'bg-[#171714] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isWide = item.featured || item.aspectRatio === 'wide';

            return (
              <motion.div
                key={item.id}
                layout
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                data-cursor="view"
                data-cursor-text="EXPAND"
                onClick={() => setLightboxIndex(idx)}
                className={`relative rounded-3xl overflow-hidden bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/60 group cursor-pointer shadow-xl ${
                  isWide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-square'
                }`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B]/90 via-[#0D0D0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#0D0D0B]/70 backdrop-blur-md border border-[#3A3323] text-[10px] font-mono text-[#FFB000]">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon Button */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0D0D0B]/70 backdrop-blur-md border border-[#3A3323] text-[#A8A397] group-hover:text-[#FFB000] group-hover:border-[#FFB000]/40 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption & Title */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A8A397] font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Viewer */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0D0D0B]/95 backdrop-blur-2xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-auto z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FFB000]/20 border border-[#FFB000]/30 text-[#FFB000] font-mono text-xs font-bold">
                  {currentItem.category}
                </span>
                <span className="font-mono text-xs text-[#A8A397]">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#171714]/90 border border-[#3A3323] text-[#F4F0E6] hover:text-[#0D0D0B] hover:bg-[#FFB000] transition-all cursor-pointer z-20"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#171714]/90 border border-[#3A3323] text-[#F4F0E6] hover:text-[#0D0D0B] hover:bg-[#FFB000] transition-all cursor-pointer z-20"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-[#3A3323]"
              />

              <div className="mt-4 text-center max-w-xl">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E6] mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A397] font-sans">
                  {currentItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
