import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { AgentBlazerLogo } from './AgentBlazerLogo';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Activities', href: '#activities' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'Members', href: '#members' },
  { name: 'Events', href: '#events' },
  { name: 'Competitions', href: '#competitions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Videos', href: '#videos' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0B]/90 backdrop-blur-md border-b border-[#3A3323]/80 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Club Brand Emblem */}
            <a
              href="#hero"
              className="flex items-center gap-2 group transition-transform duration-200 hover:opacity-95"
            >
              <AgentBlazerLogo
                size={38}
                showText={false}
                animate={false}
                variant="emblem"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#141411]/80 border border-[#3A3323]/60 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#0D0D0B] bg-[#FFB000] shadow-[0_0_12px_rgba(255,176,0,0.3)]'
                        : 'text-[#A8A397] hover:text-[#F4F0E6] hover:bg-[#20201B]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Status Pill & Join CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#8BAE5D]/10 border border-[#8BAE5D]/30 text-[11px] font-mono text-[#8BAE5D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8BAE5D] animate-pulse" />
                CSE DEPT • ACTIVE
              </div>

              <button
                onClick={onOpenJoinModal}
                className="relative group px-4 py-2 rounded-full overflow-hidden text-xs font-semibold tracking-wider font-mono text-[#0D0D0B] bg-[#FFB000] hover:bg-[#E85D04] active:scale-95 transition-all shadow-[0_0_15px_rgba(255,176,0,0.25)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0D0D0B]" />
                  JOIN CLUB
                </span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenJoinModal}
                className="px-3 py-1.5 rounded-full text-[11px] font-mono font-bold text-[#0D0D0B] bg-[#FFB000] hover:bg-[#E85D04] transition-colors"
              >
                JOIN
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#141411] border border-[#3A3323] text-[#F4F0E6] hover:text-[#FFB000] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-[#0D0D0B]/95 backdrop-blur-xl border-b border-[#3A3323] px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono text-[#A8A397] hover:text-[#F4F0E6] hover:bg-[#1A1A16] transition-colors text-left"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#3A3323] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3.5 rounded-xl font-mono text-sm font-bold text-[#0D0D0B] bg-[#FFB000] hover:bg-[#E85D04] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-[#0D0D0B]" />
                JOIN AGENTBLAZER COMMUNITY
              </button>
              <div className="text-center font-mono text-[11px] text-[#A8A397]">
                Department of Computer Science & Engineering
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
