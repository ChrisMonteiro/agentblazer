import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Clock, Calendar, Sparkles, Film } from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubVideo } from '../types/club';

interface VideoSectionProps {
  onOpenVideoModal: (url: string, title: string) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideoModal }) => {
  const [selectedVideo, setSelectedVideo] = useState<ClubVideo>(clubData.videos[0]);
  const [activeModalVideo, setActiveModalVideo] = useState<ClubVideo | null>(null);

  const handlePlayClick = (video: ClubVideo) => {
    setActiveModalVideo(video);
  };

  return (
    <section id="videos" className="relative py-20 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 06 • CINEMATIC ARCHIVES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Watch <span className="text-[#FFB000]">AgentBlazer</span> in Motion.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#A8A397] leading-relaxed font-sans">
            Recaps, keynote recordings, hands-on workshop masterclasses, and aftermovies captured across our university seasons.
          </p>
        </div>

        {/* Featured Video + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Cinema Screen */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              data-cursor="play"
              data-cursor-text="PLAY"
              onClick={() => handlePlayClick(selectedVideo)}
              className="relative aspect-video w-full rounded-3xl overflow-hidden bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000] group cursor-pointer shadow-2xl"
            >
              <img
                src={selectedVideo.posterUrl}
                alt={selectedVideo.title}
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B]/90 via-[#0D0D0B]/30 to-transparent" />

              {/* Big Center Glowing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-[#FFB000] text-[#0D0D0B] flex items-center justify-center shadow-[0_0_40px_rgba(255,176,0,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Top Tags */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-xs font-mono text-[#FFB000]">
                  {selectedVideo.category}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-xs font-mono text-[#A8A397]">
                  <Clock className="w-3.5 h-3.5 text-[#FFB000]" />
                  {selectedVideo.duration}
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono text-[#FFB000] uppercase tracking-wider mb-1">
                  FEATURED STREAM
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F4F0E6] mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A397] font-sans max-w-xl line-clamp-2">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Playlist Rail */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="font-mono text-xs font-bold text-[#A8A397] uppercase tracking-wider flex items-center gap-2 mb-1">
              <Film className="w-4 h-4 text-[#FFB000]" />
              PLAYLIST QUEUE ({clubData.videos.length})
            </div>

            {clubData.videos.map((video) => {
              const isSelected = selectedVideo.id === video.id;

              return (
                <motion.div
                  key={video.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedVideo(video)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-4 ${
                    isSelected
                      ? 'bg-[#20201B] border-[#FFB000]/60 shadow-lg'
                      : 'bg-[#171714] border-[#3A3323] hover:bg-[#20201B]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-28 aspect-video rounded-xl overflow-hidden bg-[#0D0D0B] flex-shrink-0">
                    <img
                      src={video.posterUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#FFB000] font-bold uppercase tracking-wider">
                        {video.category}
                      </span>
                      <h4 className="font-display text-sm font-bold text-[#F4F0E6] line-clamp-2 leading-snug">
                        {video.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#A8A397] mt-2">
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0D0D0B]/90 backdrop-blur-2xl"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl bg-[#20201B] border border-[#3A3323] p-4 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#3A3323] mb-3">
                <h3 className="font-display text-lg font-bold text-[#F4F0E6]">
                  {activeModalVideo.title}
                </h3>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-1.5 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <video
                  src={activeModalVideo.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 text-xs text-[#A8A397] font-sans">
                {activeModalVideo.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
