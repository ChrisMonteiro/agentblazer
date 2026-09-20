import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Target,
  Layers,
  Award,
  Users,
  BookOpen,
  GitBranch,
  ChevronDown,
  ChevronUp,
  FileText,
  ShieldCheck,
  BookmarkCheck,
} from 'lucide-react';
import { clubData } from '../data/clubData';
import { AnnualActivityReportSection } from './AnnualActivityReport';

const KINETIC_WORDS = ['BUILD', 'LEARN', 'CREATE', 'INNOVATE', 'COMPETE', 'SHIP'];

export const About: React.FC = () => {
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [showMissionDetails, setShowMissionDetails] = useState<boolean>(false);
  const [showVisionDetails, setShowVisionDetails] = useState<boolean>(false);

  return (
    <section id="about" className="relative py-24 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-grid-lab opacity-25 pointer-events-none" />

      {/* Kinetic Scrolling Marquee Banner */}
      <div className="w-full py-3.5 bg-[#171714] border-y border-[#3A3323] mb-12 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
          {[...KINETIC_WORDS, ...KINETIC_WORDS, ...KINETIC_WORDS].map((word, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-6">
              <span className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#20201B] hover:text-[#FFB000] transition-colors duration-300">
                {word}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB000] shadow-[0_0_8px_rgba(255,176,0,0.6)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 01 • ABOUT THE INITIATIVE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Engineering the <span className="text-[#FFB000]">Next Wave</span> of CS Talent.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A8A397] leading-relaxed font-sans">
            Founded within the {clubData.department}, {clubData.clubName} bridges academic foundations with production-grade engineering mastery.
          </p>
        </div>

        {/* Editorial 2-Column Bento Feature - Compact & Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Left Column: Mission & Vision Cards (Compact & Elegant) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFB000]/06 rounded-full blur-xl group-hover:bg-[#FFB000]/12 transition-all pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#FFB000]/15 border border-[#FFB000]/30 text-[#FFB000]">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs text-[#FFB000] tracking-[0.2em] uppercase font-bold">
                    OUR MISSION
                  </h3>
                </div>

                <button
                  onClick={() => setShowMissionDetails(!showMissionDetails)}
                  className="text-[11px] font-mono text-[#A8A397] hover:text-[#FFB000] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{showMissionDetails ? 'Less' : 'Directive'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMissionDetails ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <p className="font-display text-lg sm:text-xl font-bold text-[#F4F0E6] leading-snug mb-2">
                {clubData.mission}
              </p>

              <p className="text-xs text-[#A8A397] leading-relaxed font-sans">
                Empowering students to transition from consuming tutorials to architecting resilient, production-ready distributed systems and AI workflows.
              </p>

              <AnimatePresence>
                {showMissionDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3 pt-3 border-t border-[#3A3323]"
                  >
                    <p className="text-xs text-[#A8A397] leading-relaxed font-sans">
                      We empower students to move from passively consuming tutorial code to actively designing robust systems, participating in global open-source ecosystems, and collaborating across disciplines.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#E85D04]/06 rounded-full blur-xl group-hover:bg-[#E85D04]/12 transition-all pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#E85D04]/15 border border-[#E85D04]/30 text-[#FFD166]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs text-[#FFD166] tracking-[0.2em] uppercase font-bold">
                    OUR VISION
                  </h3>
                </div>

                <button
                  onClick={() => setShowVisionDetails(!showVisionDetails)}
                  className="text-[11px] font-mono text-[#A8A397] hover:text-[#FFD166] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{showVisionDetails ? 'Less' : 'Statement'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showVisionDetails ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <p className="font-display text-lg sm:text-xl font-bold text-[#F4F0E6] leading-snug mb-2">
                {clubData.vision}
              </p>

              <p className="text-xs text-[#A8A397] leading-relaxed font-sans">
                Establishing a premier collegiate incubator renowned nationally for open-source engineering, hackathon triumphs, and industry leadership.
              </p>

              <AnimatePresence>
                {showVisionDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3 pt-3 border-t border-[#3A3323]"
                  >
                    <p className="text-xs text-[#A8A397] leading-relaxed font-sans">
                      By standardizing high engineering rigor, thoughtful UI craft, and deep algorithmic foundations, AgentBlazer cultivates alumni who step into high-impact engineering and research roles on day one.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Visual Feature & Core Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#171714] border border-[#3A3323] shadow-lg relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-[#FFB000]" />
                <span className="font-mono text-xs font-bold text-[#F4F0E6] tracking-[0.2em] uppercase">
                  CORE ENGINEERING PILLARS
                </span>
              </div>

              <div className="space-y-3">
                {clubData.corePillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-3.5 rounded-xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold text-[#FFB000]">0{idx + 1} //</span>
                      <h4 className="font-display text-sm font-bold text-[#F4F0E6]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#A8A397] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#3A3323] flex items-center justify-between text-xs font-mono text-[#A8A397]">
              <span>{clubData.collegeName}</span>
              <span className="text-[#FFB000] font-bold">EST. 2024</span>
            </div>
          </div>
        </div>

        {/* Animated Statistics Ribbon Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {clubData.stats.map((stat, idx) => {
            const icons = [Users, BookOpen, Award, GitBranch];
            const IconComponent = icons[idx % icons.length];

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 relative overflow-hidden group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#171714] border border-[#3A3323] text-[#FFB000] group-hover:text-[#FFD166]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#A8A397]/70 tracking-wider">
                    METRIC // 0{idx + 1}
                  </span>
                </div>

                <div className="font-display text-3xl sm:text-4xl font-black text-[#F4F0E6] mb-1.5 tracking-tight group-hover:text-[#FFB000] transition-colors">
                  {stat.value}
                </div>

                <div className="font-mono text-xs font-bold text-[#A8A397] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-[#A8A397]/80 leading-relaxed font-sans">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* PROMINENT OFFICIAL DEPARTMENT RECORD CARD / INTERACTIVE LAUNCHER */}
        <div id="official-department-record" className="pt-8 border-t border-[#3A3323]">
          <div className="rounded-3xl bg-[#171714] border border-[#3A3323] p-6 sm:p-8 relative overflow-hidden shadow-2xl hover:border-[#FFB000]/60 transition-all">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB000]/06 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E85D04]/06 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFB000]/15 border border-[#FFB000]/40 text-[#FFB000] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    OFFICIAL DEPARTMENT RECORD
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#20201B] border border-[#3A3323] text-[#A8A397] font-mono text-xs">
                    AY 2025–26 ARCHIVE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#8BAE5D]/15 border border-[#8BAE5D]/30 text-[#8BAE5D] font-mono text-xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified SJEC / CSE
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F4F0E6] tracking-tight">
                  Academic Year 2025–26 Activity Dossier
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A397] font-sans leading-relaxed">
                  Accredited institutional documentation comprising 7 official milestones, industry sessions, hands-on workshops, competitive tracks, and verified PO mappings recorded under the Department of Computer Science & Engineering.
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#A8A397]/90 pt-1">
                  <span>St Joseph Engineering College</span>
                  <span>•</span>
                  <span>Dept of CSE</span>
                  <span>•</span>
                  <span className="text-[#FFB000]">7 Verbatim Proceedings Recorded</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setIsReportOpen(!isReportOpen)}
                  className="px-6 sm:px-8 py-4 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider text-[#0D0D0B] bg-[#FFB000] hover:bg-[#FFD166] active:scale-95 transition-all shadow-[0_0_25px_rgba(255,176,0,0.3)] cursor-pointer flex items-center justify-center gap-3 group"
                  id="btn-view-official-record"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D0D0B]" />
                  <span>{isReportOpen ? 'COLLAPSE OFFICIAL RECORD' : 'VIEW OFFICIAL DEPARTMENT RECORD'}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0D0D0B] transition-transform duration-300 ${
                      isReportOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* EXPANDABLE OFFICIAL ARCHIVE & ACTIVITY DOSSIER VIEWER */}
          <AnimatePresence>
            {isReportOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -15 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-8"
              >
                {/* Official Archive Document Shell */}
                <div className="rounded-3xl bg-[#171714] border border-[#3A3323] p-6 sm:p-10 shadow-2xl relative">
                  {/* Top Bar with Archive Badge & Collapse Trigger */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#3A3323] mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#FFB000]/15 border border-[#FFB000]/40 text-[#FFB000] font-mono text-xs font-bold tracking-wider uppercase">
                          OFFICIAL ANNUAL ACTIVITY DOSSIER
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#20201B] border border-[#3A3323] text-[#A8A397] font-mono text-xs">
                          AY 2025–26
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-3xl font-extrabold text-[#F4F0E6] tracking-tight">
                        St Joseph Engineering College, Vamanjoor , Mangalore-575028
                      </h3>
                      <p className="font-mono text-sm sm:text-lg text-[#FFB000] font-bold mt-1">
                        AgentBlazer Club – Annual Activity Report (AY 2025–26)
                      </p>
                    </div>

                    <button
                      onClick={() => setIsReportOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#20201B] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323] hover:border-[#E85D04]/40 transition-all flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto"
                    >
                      <ChevronUp className="w-4 h-4 text-[#E85D04]" />
                      <span>Collapse Record</span>
                    </button>
                  </div>

                  {/* Section A: Verbatim Departmental Narrative Record */}
                  <div className="mb-12">
                    <div className="p-3.5 rounded-xl bg-[#20201B] border border-[#3A3323] text-[#FFD166] text-xs font-mono mb-4 flex items-center justify-between">
                      <span className="font-bold uppercase tracking-wider text-[#FFB000]">
                        // Part I: Verbatim Departmental Proceedings • Department of Computer Science & Engineering
                      </span>
                      <span className="text-[10px] text-[#A8A397] hidden sm:inline">7 Verified Milestones</span>
                    </div>

                    <div className="rounded-2xl bg-[#0D0D0B] border border-[#3A3323] p-6 sm:p-8 space-y-6 text-[#A8A397] font-sans text-sm leading-relaxed">
                      <p className="border-l-2 border-[#FFB000] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">AgentBlazer Club Inauguration (August 28, 2025):</strong> The Department of Computer Science & Engineering formally inaugurated the AgentBlazer Club to foster leadership, innovation, and technical excellence among students. Chief Guest Mr. Santosh Rebello (Salesforce) emphasized bridging the &ldquo;role–radiance gap,&rdquo; while Guest of Honor Mr. Stephen Pinto (Salesforce & SJEC alumnus) encouraged continuous learning. Principal Dr. Rio D’Souza called on students to seize growth opportunities. The event, coordinated by Mr. Keith Fernandes and Ms. Nisha Roche, included a lamp-lighting ceremony, welcome address by HOD Dr. Melwyn D’Souza, felicitations, and a Vote of Thanks by Student President Mr. Reuben Saldanha.
                      </p>

                      <p className="border-l-2 border-[#E85D04] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">Agentforce Technical Session (August 28, 2025):</strong> Held alongside the club launch, Salesforce executives Mr. Santhosh Rebello and Mr. Stephen Pinto delivered an expert session on Agentforce and AI career opportunities (Ref: CSE/AB/2025-26/02). They traced AI evolution through Predictive, Copilot, and Agentic AI (autonomous systems using Salesforce Data Cloud), highlighted key career pathways in Salesforce Administration, Analytics, and Solution Development, and urged students to build adaptability within the Trailblazer ecosystem.
                      </p>

                      <p className="border-l-2 border-[#FFD166] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">&ldquo;Master the Future: Hands-on GSOC & LLMs Workshop&rdquo; (February 14, 2026):</strong> Organized by the Department of CSE in association with the AgentBlazer Club, this workshop was conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training (forking, cloning, pull requests), guidance on Google Summer of Code (GSOC) participation, and an overview of the AI ecosystem. Key technical topics covered included LLM parameters (Temperature, Top-P, Max Tokens), prompt strategies, Retrieval Augmented Generation (RAG), function calling, Gemini AI, and development frameworks such as LangChain, LlamaIndex, CrewAI, Gradio, and Streamlit. The session opened with a welcome by Club VP Mr. Ajay D&apos;Souza and concluded with a token of appreciation presented by Faculty Coordinator Ms. Nisha J Roche, along with a vote of thanks by Student President Mr. Ruben Saldanha and support from HOD Dr. Melwyn D’Souza.
                      </p>

                      <p className="border-l-2 border-[#8BAE5D] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">&ldquo;Demystifying Generative Models&rdquo; Workshop (March 18, 2026):</strong> Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI (mapped to PO4, PO6, PO7, PO11). The session detailed AI governance frameworks (LLM Council), transformer mechanisms, and prompt engineering, alongside comparisons of LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, and Perplexity. Students engaged in an AI quiz, a three-stage model evaluation challenge, and a feature-modification coding task before a valedictory session to end the program.
                      </p>

                      <p className="border-l-2 border-[#FFB000] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">&ldquo;PROMPT OPS-2K26&rdquo; Competition (March 25, 2026):</strong> Organized by the AgentBlazer Club and Cipher under the guidance of Ms. Nisha J Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza, this technical competition focused on prompt engineering and AI tools (mapped to PO4, PO5, PO8, PO11). Track 1 (1st Year) featured invitation generation, logo recreation, and image recreation rounds, with Chinmayee, Chris Royston Monteiro, and Deeksha Ravi Moger taking top honors. Track 2 (2nd Year) tested students in JSON conversion, Python code debugging, and a Gemini AI security prompt extraction challenge, with Harimurali KS, Venus Suhani D’Lima, and Venisha Snehal D’Souza securing top positions.
                      </p>

                      <p className="border-l-2 border-[#E85D04] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">&ldquo;Cyber Security and Career Pathways&rdquo; Session (April 01, 2026):</strong> Organized by the Department of CSE in association with the AgentBlazer Club, this hands-on workshop was delivered by Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand) for 6th-semester students (mapped to PO6, PO7, PO9, PO11). The session provided practical exposure to core security concepts, live tool demonstrations including Shodan, OSINT techniques, Google Dorking, CVE management, SQL Injection, and the Cyber Kill Chain model. It concluded with actionable guidance on career roles such as Security Analyst, SOC Analyst, Ethical Hacker, and Cloud Security Engineer.
                      </p>

                      <p className="border-l-2 border-[#FFD166] pl-4 py-1">
                        <strong className="text-[#F4F0E6] font-semibold font-display">Agentforce Workshop (May 22, 2026):</strong> The AgentBlazer Club, in collaboration with Salesforce, organized a hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students gained practical experience in designing Sales Email Prompt Templates, Flex Prompt Templates, and configuring automated prompt flows to build reusable AI structures. Coordinated by faculty coordinator Ms. Nisha Roche and student coordinator Mr. Ruben Saldanha, the session concluded with an interactive discussion on industry applications of AI agents and career opportunities in the Salesforce ecosystem.
                      </p>
                    </div>
                  </div>

                  {/* Section B: Interactive Milestone Explorer, Categories & Search */}
                  <div>
                    <div className="p-3.5 rounded-xl bg-[#20201B] border border-[#3A3323] text-[#FFD166] text-xs font-mono mb-4 flex items-center justify-between">
                      <span className="font-bold uppercase tracking-wider text-[#FFB000]">
                        // Part II: Accredited Milestone Explorer, Program Outcomes & Search
                      </span>
                    </div>

                    <AnnualActivityReportSection
                      embedded={true}
                      onCollapse={() => setIsReportOpen(false)}
                    />
                  </div>

                  {/* Bottom Quick Collapse Bar */}
                  <div className="mt-8 pt-6 border-t border-[#3A3323] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#A8A397]">
                      End of Department Record Archive • AY 2025–26
                    </span>
                    <button
                      onClick={() => {
                        setIsReportOpen(false);
                        const el = document.getElementById('official-department-record');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#FFB000]/15 hover:bg-[#FFB000]/25 text-[#FFB000] border border-[#FFB000]/30 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>COLLAPSE RECORD ↑</span>
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
