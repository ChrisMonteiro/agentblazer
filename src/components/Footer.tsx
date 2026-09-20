import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Youtube, MessageSquare, Mail, ArrowUp } from 'lucide-react';
import { clubData } from '../data/clubData';
import { AgentBlazerLogo } from './AgentBlazerLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#0D0D0B] text-[#A8A397] font-sans border-t border-[#3A3323] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A3323]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <AgentBlazerLogo size={42} animate />
            
            <p className="text-sm text-[#A8A397] font-sans max-w-sm leading-relaxed">
              {clubData.description}
            </p>

            <div className="pt-2 font-mono text-xs text-[#FFB000] space-y-1">
              <div>{clubData.department}</div>
              <div className="text-[#A8A397]">{clubData.collegeName}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs text-[#F4F0E6] uppercase tracking-widest font-bold">
              PORTAL NAVIGATION
            </div>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#about" className="hover:text-[#FFB000] transition-colors">
                  About & Mission
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-[#FFB000] transition-colors">
                  Technical Activities
                </a>
              </li>
              <li>
                <a href="#competitions" className="hover:text-[#FFB000] transition-colors">
                  Competitions & Posters
                </a>
              </li>
              <li>
                <a href="#members" className="hover:text-[#FFB000] transition-colors">
                  Members & Leadership
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#FFB000] transition-colors">
                  Hackathons & Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFB000] transition-colors">
                  Campus Photo Archive
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#FFB000] transition-colors">
                  Cinematic Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs text-[#F4F0E6] uppercase tracking-widest font-bold">
              COMMUNITY CHANNELS
            </div>
            <p className="text-xs text-[#A8A397] leading-relaxed font-sans">
              Connect with our leads, access open-source repositories, and collaborate on upcoming hackathons.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {clubData.socialLinks.github && (
                <a
                  href={clubData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="GitHub Organization"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.linkedin && (
                <a
                  href={clubData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.instagram && (
                <a
                  href={clubData.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.twitter && (
                <a
                  href={clubData.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.youtube && (
                <a
                  href={clubData.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.discord && (
                <a
                  href={clubData.socialLinks.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="Discord Server"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              )}
              {clubData.socialLinks.email && (
                <a
                  href={`mailto:${clubData.socialLinks.email}`}
                  className="p-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/40 transition-colors"
                  title="Email Us"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${clubData.contactEmail}`}
                className="font-mono text-xs text-[#A8A397] hover:text-[#FFB000] transition-colors"
              >
                {clubData.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Official Club Leadership & Core Committee Tribute Bar */}
        <div className="py-6 my-6 border-b border-[#3A3323] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="text-[#A8A397]">
            <span className="text-[#FFB000] font-bold block mb-1">AGENTBLAZER EXECUTIVE COUNCIL:</span>
            <span>Ruben Saldanha (President) • Ajay Preenal Dsouza (Vice President) • Stevin Dsouza (Tech Lead) • Frenny Chrystal Saldanha (Resource Head) • Joyline Galbao (Secretary) • Chinthan N V (Media Head)</span>
          </div>
          <div className="text-[#A8A397]">
            <span className="text-[#FFD166] font-bold block mb-1">CORE COMMITTEE MEMBERS:</span>
            <span>Prajwal Royston Cordiero • Chacko P Abraham • Alma Roxane Pereira</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A8A397]">
          <div>
            &copy; {currentYear} {clubData.clubName}. All rights reserved. {clubData.department}.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A8A397] hover:text-[#FFB000] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
