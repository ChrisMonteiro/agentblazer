import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle, ExternalLink, Terminal, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clubData } from '../data/clubData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '1st Year',
    domain: 'Agentic AI & Neural Systems',
    github: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB000', '#E85D04', '#FFD166', '#8BAE5D', '#F4F0E6'],
      });
    } catch {
      // safe fallback if canvas not available
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-[#20201B] border border-[#3A3323] p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#FFB000] font-mono text-xs tracking-wider uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  RECRUITMENT PROTOCOL // 2026
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black text-[#F4F0E6] mb-2">
                  Apply to <span className="text-[#FFB000]">AgentBlazer</span>.
                </h2>
                <p className="text-xs sm:text-sm text-[#A8A397] font-sans mb-6">
                  Open to all Computer Science & Engineering students. Tell us what you love to build!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F4F0E6] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] placeholder-[#A8A397]/50 focus:outline-none focus:border-[#FFB000] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#F4F0E6] uppercase tracking-wider mb-1.5">
                        College Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="student@college.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] placeholder-[#A8A397]/50 focus:outline-none focus:border-[#FFB000] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#F4F0E6] uppercase tracking-wider mb-1.5">
                        Academic Year
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] focus:outline-none focus:border-[#FFB000] transition-colors cursor-pointer"
                      >
                        <option value="1st Year">1st Year (Freshman)</option>
                        <option value="2nd Year">2nd Year (Sophomore)</option>
                        <option value="3rd Year">3rd Year (Junior)</option>
                        <option value="4th Year">4th Year (Senior)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F4F0E6] uppercase tracking-wider mb-1.5">
                      Primary Domain of Interest
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] focus:outline-none focus:border-[#FFB000] transition-colors cursor-pointer"
                    >
                      <option value="Agentic AI & Neural Systems">Agentic AI & Neural Systems</option>
                      <option value="Full-Stack & Cloud Architecture">Full-Stack & Cloud Architecture</option>
                      <option value="Competitive Programming & Algorithms">Competitive Programming & Algorithms</option>
                      <option value="Hackathons & Open Source">Hackathons & Open Source</option>
                      <option value="Cyber Security & Systems">Cyber Security & Systems</option>
                      <option value="UI/UX & Creative Engineering">UI/UX & Creative Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F4F0E6] uppercase tracking-wider mb-1.5">
                      GitHub or Portfolio URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourhandle"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] placeholder-[#A8A397]/50 focus:outline-none focus:border-[#FFB000] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl font-mono text-sm font-bold text-[#0D0D0B] bg-gradient-to-r from-[#FFB000] via-[#FFD166] to-[#FFB000] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,176,0,0.4)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    SUBMIT APPLICATION
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#8BAE5D]/20 border border-[#8BAE5D] text-[#8BAE5D] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(139,174,93,0.4)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#F4F0E6] mb-2">
                  Application Received!
                </h3>
                <p className="text-sm text-[#A8A397] font-sans mb-6">
                  Welcome aboard, <strong className="text-[#FFB000]">{formData.name}</strong>. Our core leadership team will review your application and send meeting coordinates to <span className="text-[#FFD166]">{formData.email}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-[#171714] border border-[#3A3323] mb-6 text-left">
                  <div className="text-[11px] font-mono text-[#FFB000] uppercase font-bold mb-1">
                    NEXT STEP: JOIN OUR DISCORD
                  </div>
                  <p className="text-xs text-[#A8A397] mb-3">
                    Hop into our open Discord server to introduce yourself, check ongoing hackathon squad channels, and meet other builders.
                  </p>
                  <a
                    href={clubData.socialLinks.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFB000]/10 hover:bg-[#FFB000]/20 border border-[#FFB000]/30 text-xs font-mono text-[#FFB000] font-bold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    JOIN DISCORD COMMUNITY
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-xs font-mono text-[#A8A397] hover:text-[#F4F0E6]"
                >
                  DONE
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;
