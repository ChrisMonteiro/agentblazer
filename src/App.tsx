import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Workshops } from './components/Workshops';
import { Members } from './components/Members';
import { Events } from './components/Events';
import { Competitions } from './components/Competitions';
import { Gallery } from './components/Gallery';
import { VideoSection } from './components/VideoSection';
import { ClubMoments } from './components/ClubMoments';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { AddLogoModal } from './components/AddLogoModal';
import { X } from 'lucide-react';
import { LogoProvider } from './context/LogoContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string; title: string } | null>(null);

  const handleOpenVideoModal = (url: string, title: string) => {
    setActiveVideoModal({ url, title });
  };

  const handleCloseVideoModal = () => {
    setActiveVideoModal(null);
  };

  return (
    <LogoProvider>
      <div className="relative min-h-screen bg-[#0D0D0B] text-[#F4F0E6] overflow-x-hidden selection:bg-[#FFB000]/30 selection:text-[#FFB000]">
        {/* Loading Screen Animation */}
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Subtle Desktop Interactive Cursor */}
        <CustomCursor />

        {/* Primary Sticky / Floating Navigation */}
        <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* Main Sections Flow */}
        <main>
          <Hero
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onOpenVideoModal={handleOpenVideoModal}
          />

          <About />

          <Activities />

          <Workshops />

          <Members />

          <Events />

          <Competitions />

          <Gallery />

          <VideoSection onOpenVideoModal={handleOpenVideoModal} />

          <ClubMoments />

          <CTA onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Add Club Logo Modal */}
        <AddLogoModal />

        {/* Join Application Dialog */}
        <JoinModal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
        />

        {/* Global Fullscreen Video Modal */}
        <AnimatePresence>
          {activeVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
              onClick={handleCloseVideoModal}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl rounded-3xl bg-[#171714] border border-[#3A3323] p-4 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 px-2 border-b border-[#3A3323] mb-3">
                  <h3 className="font-display text-lg font-bold text-[#F4F0E6]">
                    {activeVideoModal.title}
                  </h3>
                  <button
                    onClick={handleCloseVideoModal}
                    className="p-1.5 rounded-full bg-[#20201B] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
                  <video
                    src={activeVideoModal.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LogoProvider>
  );
}
