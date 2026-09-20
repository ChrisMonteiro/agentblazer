import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Calendar,
  GraduationCap,
  CheckCircle2,
  Search,
  ArrowRight,
  ArrowLeft,
  X,
  User,
  Tag,
  BookOpen,
} from 'lucide-react';

type WorkshopCategory = 'all' | 'hands-on' | 'industry' | 'peer-learning';

interface WorkshopItem {
  id: string;
  title: string;
  date: string;
  category: WorkshopCategory;
  type: string;
  organizers: string;
  speakers: string;
  preview: string;
  description: string;
  keyTakeaways: string[];
  tags: string[];
  accentColor: string;
  poMapping?: string[];
  audience?: string;
  referenceCode?: string;
}

export const Activities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedWorkshop(null);
      }
    };
    if (selectedWorkshop) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWorkshop]);

  // Held Workshops & Technical Sessions from the official report (Preserving 100% of facts)
  const workshopsHeld: WorkshopItem[] = [
    {
      id: 'agentforce-workshop-may2026',
      title: 'Agentforce Workshop',
      date: 'May 22, 2026',
      category: 'hands-on',
      type: 'Hands-on Workshop',
      organizers: 'AgentBlazer Club in collaboration with Salesforce',
      speakers: 'Coordinated by Ms. Nisha Roche (Faculty) and Mr. Ruben Saldanha (Student Lead)',
      preview: 'Hands-on technical workshop building autonomous AI agents and prompt flows in Salesforce Trailhead.',
      description:
        'The AgentBlazer Club, in collaboration with Salesforce, organized a hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students gained practical experience in designing Sales Email Prompt Templates, Flex Prompt Templates, and configuring automated prompt flows to build reusable AI structures. Coordinated by faculty coordinator Ms. Nisha Roche and student coordinator Mr. Ruben Saldanha, the session concluded with an interactive discussion on industry applications of AI agents and career opportunities in the Salesforce ecosystem.',
      keyTakeaways: [
        'Building autonomous AI agents on Salesforce Trailhead environment',
        'Designing Sales Email Prompt Templates & Flex Prompt Templates',
        'Configuring automated prompt flows to build reusable AI structures',
        'Industry applications and direct career pathways in Salesforce Trailblazer ecosystem',
      ],
      tags: ['Salesforce Trailhead', 'Agentforce', 'AI Agents', 'Prompt Templates', 'Workflow Automation'],
      accentColor: 'from-[#FFB000]/10 to-transparent border-[#3A3323]',
    },
    {
      id: 'cyber-security-pathways-apr2026',
      title: '"Cyber Security and Career Pathways" Session',
      date: 'April 01, 2026',
      category: 'industry',
      type: 'Technical Workshop & Masterclass',
      organizers: 'Department of CSE in association with the AgentBlazer Club',
      speakers: 'Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand)',
      poMapping: ['PO6', 'PO7', 'PO9', 'PO11'],
      audience: '6th-Semester CSE Students',
      preview: 'Expert SecOps workshop covering Shodan reconnaissance, OSINT, CVE mitigation, and cybersecurity career roles.',
      description:
        'Organized by the Department of CSE in association with the AgentBlazer Club, this hands-on workshop was delivered by Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand) for 6th-semester students (mapped to PO6, PO7, PO9, PO11). The session provided practical exposure to core security concepts, live tool demonstrations including Shodan, OSINT techniques, Google Dorking, CVE management, SQL Injection, and the Cyber Kill Chain model. It concluded with actionable guidance on career roles such as Security Analyst, SOC Analyst, Ethical Hacker, and Cloud Security Engineer.',
      keyTakeaways: [
        'Live tool demonstrations: Shodan reconnaissance, OSINT & Google Dorking',
        'Practical walkthroughs of CVE vulnerability management & SQL Injection mitigation',
        'In-depth study of the Cyber Kill Chain model in production SecOps',
        'Industry pathways: Security Analyst, SOC Analyst, Ethical Hacker & Cloud Security Engineer',
      ],
      tags: ['Cyber Security', 'Shodan', 'OSINT', 'Google Dorking', 'CVE Management', 'SQL Injection', 'Cyber Kill Chain'],
      accentColor: 'from-[#E85D04]/10 to-transparent border-[#3A3323]',
    },
    {
      id: 'demystifying-generative-models-mar2026',
      title: '"Demystifying Generative Models" Workshop',
      date: 'March 18, 2026',
      category: 'peer-learning',
      type: 'Peer-Learning Workshop',
      organizers: 'AgentBlazer Club, Department of CSE',
      speakers: 'Prajwal Royston Corderio & Chacko P Abraham (6th-sem CSE) under guidance of Ms. Nisha J. Roche',
      poMapping: ['PO4', 'PO6', 'PO7', 'PO11'],
      preview: 'Peer-learning lab detailing AI governance frameworks, transformer mechanisms, and multi-model evaluations.',
      description:
        'Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI (mapped to PO4, PO6, PO7, PO11). The session detailed AI governance frameworks (LLM Council), transformer mechanisms, and prompt engineering, alongside comparisons of LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, and Perplexity. Students engaged in an AI quiz, a three-stage model evaluation challenge, and a feature-modification coding task before a valedictory session to end the program.',
      keyTakeaways: [
        'Peer-learning pedagogical model led by 6th-semester student researchers',
        'AI governance frameworks and multi-agent coordination (LLM Council)',
        'Model comparisons: LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, Perplexity',
        'Interactive AI quiz, 3-stage model evaluation challenge & coding task',
      ],
      tags: ['Generative AI', 'LLM Council', 'Transformer Mechanisms', 'Groq', 'Mistral AI', 'LLaMA', 'Model Evaluation'],
      accentColor: 'from-[#FFD166]/10 to-transparent border-[#3A3323]',
    },
    {
      id: 'gsoc-llm-workshop-feb2026',
      title: '"Master the Future: Hands-on GSOC & LLMs Workshop"',
      date: 'February 14, 2026',
      category: 'hands-on',
      type: 'Hands-on Workshop',
      organizers: 'Department of CSE in association with the AgentBlazer Club',
      speakers: 'Mr. Anas Khan (Software Development Engineer at HackerRank)',
      audience: 'Approximately 55 Participants',
      preview: 'Practical GitHub workflows, Google Summer of Code triage, LLM parameters, and RAG architectures.',
      description:
        'Organized by the Department of CSE in association with the AgentBlazer Club, this workshop was conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training (forking, cloning, pull requests), guidance on Google Summer of Code (GSOC) participation, and an overview of the AI ecosystem. Key technical topics covered included LLM parameters (Temperature, Top-P, Max Tokens), prompt strategies, Retrieval Augmented Generation (RAG), function calling, Gemini AI, and development frameworks such as LangChain, LlamaIndex, CrewAI, Gradio, and Streamlit. The session opened with a welcome by Club VP Mr. Ajay D\'Souza and concluded with a token of appreciation presented by Faculty Coordinator Ms. Nisha J Roche, along with a vote of thanks by Student President Mr. Ruben Saldanha and support from HOD Dr. Melwyn D’Souza.',
      keyTakeaways: [
        'Practical GitHub workflow training (forking, cloning, branching, pull requests)',
        'Comprehensive guidance on Google Summer of Code (GSOC) proposals & contribution triage',
        'Tuning LLM parameters: Temperature, Top-P, and Max Tokens',
        'Hands-on RAG, function calling, Gemini AI, LangChain, LlamaIndex, CrewAI, Gradio & Streamlit',
      ],
      tags: ['GSOC', 'GitHub Workflows', 'Gemini AI', 'RAG', 'LangChain', 'LlamaIndex', 'CrewAI', 'Streamlit'],
      accentColor: 'from-[#8BAE5D]/10 to-transparent border-[#3A3323]',
    },
    {
      id: 'agentforce-session-aug2025',
      title: 'Agentforce Technical Session',
      date: 'August 28, 2025',
      category: 'industry',
      type: 'Technical Session & Industry Keynote',
      organizers: 'AgentBlazer Club in collaboration with Salesforce',
      speakers: 'Mr. Santhosh Rebello & Mr. Stephen Pinto (Salesforce Executives)',
      referenceCode: 'Ref: CSE/AB/2025-26/02',
      preview: 'Industry keynote tracing AI evolution through Predictive, Copilot, and Agentic systems with Salesforce.',
      description:
        'Held alongside the club launch, Salesforce executives Mr. Santhosh Rebello and Mr. Stephen Pinto delivered an expert session on Agentforce and AI career opportunities (Ref: CSE/AB/2025-26/02). They traced AI evolution through Predictive, Copilot, and Agentic AI (autonomous systems using Salesforce Data Cloud), highlighted key career pathways in Salesforce Administration, Analytics, and Solution Development, and urged students to build adaptability within the Trailblazer ecosystem.',
      keyTakeaways: [
        'Traced AI evolution: Predictive AI → Copilot → Agentic AI (autonomous systems)',
        'Architectural role of Salesforce Data Cloud in agentic reasoning',
        'Career pathways in Salesforce Administration, Analytics, and Solution Development',
        'Cultivating adaptability within the global Trailblazer ecosystem',
      ],
      tags: ['Salesforce', 'Agentforce', 'Data Cloud', 'Agentic AI', 'Ref: CSE/AB/2025-26/02'],
      accentColor: 'from-[#FFB000]/10 to-transparent border-[#3A3323]',
    },
    {
      id: 'inauguration-2025',
      title: 'AgentBlazer Club Inauguration',
      date: 'August 28, 2025',
      category: 'industry',
      type: 'Inauguration & Launch Ceremony',
      organizers: 'Department of Computer Science & Engineering, SJEC',
      speakers: 'Mr. Santosh Rebello (Chief Guest, Salesforce), Mr. Stephen Pinto (Guest of Honor, Salesforce & SJEC Alumnus), Dr. Rio D’Souza (Principal, SJEC), Dr. Melwyn D’Souza (HOD - CSE)',
      preview: 'Formal charter launch and keynote addresses bridging the role-radiance gap in AI engineering.',
      description:
        'The Department of Computer Science & Engineering formally inaugurated the AgentBlazer Club to foster leadership, innovation, and technical excellence among students. Chief Guest Mr. Santosh Rebello (Salesforce) emphasized bridging the "role–radiance gap," while Guest of Honor Mr. Stephen Pinto (Salesforce & SJEC alumnus) encouraged continuous learning. Principal Dr. Rio D’Souza called on students to seize growth opportunities. The event, coordinated by Mr. Keith Fernandes and Ms. Nisha Roche, included a lamp-lighting ceremony, welcome address by HOD Dr. Melwyn D’Souza, felicitations, and a Vote of Thanks by Student President Mr. Reuben Saldanha.',
      keyTakeaways: [
        'Bridging the "role–radiance gap" highlighted by Chief Guest Mr. Santosh Rebello',
        'Continuous learning mindset emphasized by Guest of Honor Mr. Stephen Pinto',
        'Lamp lighting, departmental addresses by Principal Dr. Rio D’Souza & HOD Dr. Melwyn D’Souza',
        'Official charter launch coordinated by Mr. Keith Fernandes, Ms. Nisha Roche, and Ruben Saldanha',
      ],
      tags: ['Inauguration', 'Salesforce Partnership', 'Role-Radiance Gap', 'Leadership', 'CSE Dept'],
      accentColor: 'from-[#E85D04]/10 to-transparent border-[#3A3323]',
    },
  ];

  const filteredWorkshops = workshopsHeld.filter((w) => {
    const matchesCategory = activeCategory === 'all' || w.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      w.title.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q)) ||
      w.speakers.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="activities" className="relative py-20 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      {/* Background Cyber Ambient */}
      <div className="absolute inset-0 bg-grid-amber opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 02 • CLUB ACTIVITIES & WORKSHOPS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Activities Held: <span className="text-[#FFB000]">Workshops</span> & <span className="text-[#FFD166]">Technical Sessions</span>.
            </h2>
          </div>
          <p className="max-w-lg text-xs sm:text-sm text-[#A8A397] leading-relaxed font-sans">
            Official record of hands-on technical workshops, industry masterclasses, and peer-learning cohorts organized by AgentBlazer Club at St Joseph Engineering College.
          </p>
        </div>

        {/* Category Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#3A3323]">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#FFB000] text-[#0D0D0B] shadow-[0_0_15px_rgba(255,176,0,0.3)]'
                  : 'bg-[#20201B] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
              }`}
            >
              <span>All Held Sessions</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#171714] text-[10px]">
                {workshopsHeld.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('hands-on')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'hands-on'
                  ? 'bg-[#8BAE5D] text-[#0D0D0B] shadow-[0_0_15px_rgba(139,174,93,0.3)]'
                  : 'bg-[#20201B] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-[#8BAE5D]" />
              <span>Hands-on Labs</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#171714] text-[10px]">
                {workshopsHeld.filter((w) => w.category === 'hands-on').length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('industry')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'industry'
                  ? 'bg-[#E85D04] text-[#F4F0E6] shadow-[0_0_15px_rgba(232,93,4,0.3)]'
                  : 'bg-[#20201B] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
              }`}
            >
              <span>Industry & Keynotes</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#171714] text-[10px]">
                {workshopsHeld.filter((w) => w.category === 'industry').length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('peer-learning')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'peer-learning'
                  ? 'bg-[#FFD166] text-[#0D0D0B] shadow-[0_0_15px_rgba(255,209,102,0.3)]'
                  : 'bg-[#20201B] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
              }`}
            >
              <span>Peer Learning</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#171714] text-[10px]">
                {workshopsHeld.filter((w) => w.category === 'peer-learning').length}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A397]" />
            <input
              type="text"
              placeholder="Filter sessions, tools, POs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#20201B] border border-[#3A3323] text-xs text-[#F4F0E6] placeholder-[#A8A397]/50 focus:outline-none focus:border-[#FFB000] font-mono"
            />
          </div>
        </div>

        {/* WORKSHOPS & TECHNICAL SESSIONS COMPACT 2-COLUMN GRID */}
        {/* Desktop: [ EVENT 01 ] [ EVENT 02 ] ... Mobile: Stacked 1-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredWorkshops.map((w, index) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelectedWorkshop(w)}
              className="group cursor-pointer rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/60 hover:bg-[#20201B]/95 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden active:scale-[0.99]"
            >
              <div>
                {/* Top Metadata: [ CATEGORY / TYPE ] & [ DATE ] */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {w.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#A8A397] font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                    {w.date}
                  </span>
                </div>

                {/* Event Title */}
                <h4 className="font-display text-lg sm:text-xl font-bold text-[#F4F0E6] mb-2 group-hover:text-[#FFB000] transition-colors leading-snug">
                  {w.title}
                </h4>

                {/* Short 1-Line Preview / Description */}
                <p className="text-xs text-[#A8A397] font-sans line-clamp-1 mb-4 leading-relaxed">
                  {w.preview}
                </p>
              </div>

              {/* Clear Clickable Action: [ VIEW FULL DETAILS → ] */}
              <div className="pt-3 border-t border-[#3A3323]/60 flex items-center justify-between text-xs font-mono font-semibold text-[#FFB000] group-hover:text-[#FFD166] transition-colors">
                <span className="inline-flex items-center gap-1.5">
                  VIEW FULL DETAILS
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-[10px] text-[#A8A397]/70 font-normal hidden sm:inline">
                  Click card to inspect
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#20201B] border border-[#3A3323] text-[#A8A397] font-mono text-xs">
            No workshops match &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
          </div>
        )}
      </div>

      {/* FULL-DETAILS EXPANDABLE PANEL / MODAL OVERLAY */}
      <AnimatePresence>
        {selectedWorkshop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWorkshop(null)}
              className="fixed inset-0 bg-[#0D0D0B]/85 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#171714] border border-[#3A3323] p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[85vh] overflow-y-auto"
            >
              {/* Top Navigation & Controls */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#3A3323]">
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#20201B] border border-[#3A3323] text-xs font-mono text-[#F4F0E6] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#FFB000]" />
                  <span>← BACK TO EVENTS</span>
                </button>

                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="p-1.5 rounded-xl bg-[#20201B] border border-[#3A3323] text-[#A8A397] hover:text-[#F4F0E6] hover:border-[#FFB000]/50 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category, Date & Accreditation Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/30 text-xs font-mono font-bold uppercase">
                  {selectedWorkshop.type}
                </span>

                <span className="px-3 py-1 rounded-full bg-[#20201B] border border-[#3A3323] text-[#A8A397] text-xs font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FFB000]" />
                  {selectedWorkshop.date}
                </span>

                {selectedWorkshop.referenceCode && (
                  <span className="px-2.5 py-1 rounded-full bg-[#E85D04]/15 text-[#FFD166] border border-[#E85D04]/30 text-[11px] font-mono">
                    {selectedWorkshop.referenceCode}
                  </span>
                )}

                {selectedWorkshop.poMapping && (
                  <span className="px-2.5 py-1 rounded-full bg-[#8BAE5D]/15 text-[#8BAE5D] border border-[#8BAE5D]/30 text-[11px] font-mono">
                    Mapped: {selectedWorkshop.poMapping.join(', ')}
                  </span>
                )}
              </div>

              {/* Full Event Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F4F0E6] mb-4 leading-tight tracking-tight">
                {selectedWorkshop.title}
              </h3>

              {/* Organizers & Speakers Meta Box */}
              <div className="rounded-2xl bg-[#20201B] border border-[#3A3323] p-4 sm:p-5 mb-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm font-mono">
                  <User className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A8A397]">Speaker / Resource: </span>
                    <span className="text-[#F4F0E6] font-medium">{selectedWorkshop.speakers}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs font-mono text-[#A8A397] pt-2 border-t border-[#3A3323]/50">
                  <GraduationCap className="w-4 h-4 text-[#8BAE5D] shrink-0 mt-0.5" />
                  <div>
                    <span>Organizers: </span>
                    <span className="text-[#F4F0E6]">{selectedWorkshop.organizers}</span>
                  </div>
                </div>

                {selectedWorkshop.audience && (
                  <div className="flex items-start gap-2 text-xs font-mono text-[#A8A397] pt-2 border-t border-[#3A3323]/50">
                    <BookOpen className="w-4 h-4 text-[#FFD166] shrink-0 mt-0.5" />
                    <div>
                      <span>Audience / Cohort: </span>
                      <span className="text-[#FFD166]">{selectedWorkshop.audience}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Full Verbatim Description */}
              <div className="mb-6">
                <div className="text-[11px] font-mono text-[#FFB000] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
                  <span>// COMPLETE SESSION RECORD & ABSTRACT</span>
                </div>
                <p className="text-sm sm:text-base text-[#F4F0E6]/90 leading-relaxed font-sans bg-[#20201B]/40 p-4 rounded-xl border border-[#3A3323]/60">
                  {selectedWorkshop.description}
                </p>
              </div>

              {/* Key Highlights / Takeaways */}
              <div className="mb-6">
                <div className="text-[11px] font-mono text-[#FFB000] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
                  <span>// KEY TAKEAWAYS & TECHNICAL COVERAGE</span>
                </div>
                <div className="space-y-2">
                  {selectedWorkshop.keyTakeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#20201B] border border-[#3A3323] text-xs sm:text-sm text-[#F4F0E6]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Tags */}
              <div className="mb-6">
                <div className="text-[11px] font-mono text-[#A8A397] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#FFB000]" />
                  <span>// TOPIC ARCHIVE & METHODOLOGY</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedWorkshop.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#20201B] text-[#A8A397] font-mono text-xs border border-[#3A3323]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#3A3323] flex justify-end">
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="px-5 py-2 rounded-xl bg-[#FFB000] text-[#0D0D0B] font-mono font-bold text-xs hover:bg-[#FFD166] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,176,0,0.3)]"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Activities;
