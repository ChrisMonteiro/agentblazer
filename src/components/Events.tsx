import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight, X, Sparkles, CheckCircle } from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubEvent } from '../types/club';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const categories = ['All', 'Flagship Fest', 'Hackathon', 'Workshop', 'Tech Talk', 'Bootcamp'];

  const filteredEvents = selectedCategory === 'All'
    ? clubData.events
    : clubData.events.filter((e) => e.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="relative py-20 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 04 • HACKATHONS & GATHERINGS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Flagship <span className="text-[#FFB000]">Events</span> & Sprints.
            </h2>
          </div>

          {/* Controls: Scroll Buttons & Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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

            {/* Prev / Next Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors cursor-pointer"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors cursor-pointer"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Card Reel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -6 }}
              className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 overflow-hidden flex flex-col justify-between group shadow-xl snap-start cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div>
                {/* Event Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0D0D0B]">
                  {failedImages[event.id] || !event.image ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-4 text-center">
                      <Sparkles className="w-10 h-10 opacity-40 mb-2" />
                      <span className="font-display text-base font-bold text-[#F4F0E6] line-clamp-1">{event.title}</span>
                    </div>
                  ) : (
                    <img
                      src={encodeURI(event.image)}
                      alt=""
                      loading="lazy"
                      onError={() => handleImageError(event.id)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20201B] via-transparent to-transparent opacity-80" />

                  {/* Top Status and Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-[10px] font-mono font-bold text-[#FFB000] uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                        event.status === 'Upcoming'
                          ? 'bg-[#8BAE5D]/20 text-[#8BAE5D] border border-[#8BAE5D]/40 animate-pulse'
                          : 'bg-[#171714]/80 text-[#A8A397] border border-[#3A3323]'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-mono text-[#FFB000] bg-[#0D0D0B]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#3A3323]">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A397] leading-relaxed font-sans mb-5 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="space-y-1.5 mb-2">
                    {event.highlights.slice(0, 2).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#F4F0E6]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FFB000] flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-[#3A3323] bg-[#171714] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A8A397]">
                  <Users className="w-3.5 h-3.5 text-[#FFB000]" />
                  <span>{event.attendeesCount || '100+ Attendees'}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#FFB000] group-hover:translate-x-1 transition-transform">
                  <span>VIEW INTEL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0B]/80 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#20201B] border border-[#3A3323] shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#FFB000]/20 text-[#FFB000] font-mono text-xs font-bold uppercase border border-[#FFB000]/30">
                  {selectedEvent.category}
                </span>
                <span className="text-xs font-mono text-[#A8A397] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                  {selectedEvent.date}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#F4F0E6] mb-4">
                {selectedEvent.title}
              </h2>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-[#0D0D0B]">
                {failedImages[selectedEvent.id] || !selectedEvent.image ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000] p-6 text-center">
                    <Sparkles className="w-12 h-12 opacity-50 mb-2" />
                    <span className="font-display text-lg font-bold text-[#F4F0E6]">{selectedEvent.title}</span>
                  </div>
                ) : (
                  <img
                    src={encodeURI(selectedEvent.image)}
                    alt=""
                    onError={() => handleImageError(selectedEvent.id)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <p className="text-sm text-[#A8A397] leading-relaxed font-sans mb-6">
                {selectedEvent.longDescription || selectedEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#171714] border border-[#3A3323]">
                  <div className="font-mono text-[10px] text-[#FFB000] uppercase font-bold mb-1">
                    VENUE LOCATION
                  </div>
                  <div className="text-xs text-[#F4F0E6] flex items-center gap-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB000]" />
                    {selectedEvent.location || 'CSE Department Complex'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#171714] border border-[#3A3323]">
                  <div className="font-mono text-[10px] text-[#FFB000] uppercase font-bold mb-1">
                    ESTIMATED ATTENDANCE
                  </div>
                  <div className="text-xs text-[#F4F0E6] flex items-center gap-1.5 font-sans">
                    <Users className="w-3.5 h-3.5 text-[#FFB000]" />
                    {selectedEvent.attendeesCount || 'Open to all CSE students'}
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="font-mono text-xs text-[#A8A397] uppercase tracking-wider font-bold">
                  KEY HIGHLIGHTS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedEvent.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#171714] border border-[#3A3323] text-xs text-[#F4F0E6]">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB000] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
