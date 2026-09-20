import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Calendar,
  Award,
  Users,
  Search,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Tag,
} from 'lucide-react';
import { clubData } from '../data/clubData';
import { AnnualReportItem } from '../types/club';

export interface AnnualActivityReportSectionProps {
  embedded?: boolean;
  onCollapse?: () => void;
}

export const AnnualActivityReportSection: React.FC<AnnualActivityReportSectionProps> = ({
  embedded = false,
  onCollapse,
}) => {
  const report = clubData.annualReport;
  if (!report) return null;

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'inauguration-2025': true,
    'agentforce-session-aug2025': true,
    'gsoc-llm-workshop-feb2026': true,
    'demystifying-generative-models-mar2026': true,
    'prompt-ops-2k26-mar2026': true,
    'cyber-security-pathways-apr2026': true,
    'agentforce-workshop-may2026': true,
  });
  const [copied, setCopied] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpandAll = () => {
    const allExpanded = Object.values(expandedIds).every(Boolean);
    const updated: Record<string, boolean> = {};
    report.entries.forEach((e) => {
      updated[e.id] = !allExpanded;
    });
    setExpandedIds(updated);
  };

  const categories = useMemo(() => {
    const cats = ['All', 'Inauguration', 'Technical Session', 'Workshop', 'Competition'];
    return cats;
  }, []);

  const filteredEntries = useMemo(() => {
    return report.entries.filter((entry) => {
      const matchesCategory =
        activeCategory === 'All' ? true : entry.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        entry.title.toLowerCase().includes(q) ||
        entry.summary.toLowerCase().includes(q) ||
        entry.formattedDate.toLowerCase().includes(q) ||
        (entry.dignitariesOrSpeakers && entry.dignitariesOrSpeakers.toLowerCase().includes(q)) ||
        (entry.referenceCode && entry.referenceCode.toLowerCase().includes(q)) ||
        (entry.poMapping && entry.poMapping.some((po) => po.toLowerCase().includes(q))) ||
        entry.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [report.entries, activeCategory, searchQuery]);

  const handleCopyReport = () => {
    const textLines = [
      `${report.department}`,
      `${report.institution}, ${report.location}-${report.postalCode}`,
      `${report.clubName} – ${report.title}`,
      '',
      ...report.entries.map(
        (e) =>
          `• ${e.title} (${e.formattedDate}): ${e.summary}`
      ),
    ];

    navigator.clipboard.writeText(textLines.join('\n\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div id="annual-activity-report" className={embedded ? 'mt-4' : 'mt-24 pt-16 border-t border-[#3A3323]'}>
      {/* Official Header Badge */}
      <div className="rounded-3xl bg-[#171714] border border-[#3A3323] p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB000]/05 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E85D04]/05 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#3A3323]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/30 flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-[#FFB000]" />
                  {report.academicYear} Official Record
                </span>
                <span className="font-mono text-xs text-[#A8A397] bg-[#20201B] px-3 py-1 rounded-full border border-[#3A3323]">
                  {report.department}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F4F0E6] tracking-tight leading-tight">
                {report.clubName} – <span className="text-[#FFB000]">{report.title}</span>
              </h3>

              <div className="text-xs sm:text-sm text-[#A8A397] mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono">
                <span>{report.institution}</span>
                <span>•</span>
                <span>{report.location} - {report.postalCode}</span>
                <span>•</span>
                <span className="text-[#FFB000]">7 Official Milestones Documented</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleCopyReport}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#20201B] hover:bg-[#20201B]/80 text-[#F4F0E6] border border-[#3A3323] hover:border-[#FFB000]/50 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                title="Copy full annual report plain text to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#8BAE5D]" />
                    <span className="text-[#8BAE5D]">Report Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#FFB000]" />
                    <span>Copy Full Report</span>
                  </>
                )}
              </button>

              <button
                onClick={toggleExpandAll}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#FFB000]/15 hover:bg-[#FFB000]/25 text-[#FFB000] border border-[#FFB000]/30 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {Object.values(expandedIds).every(Boolean) ? 'Collapse All' : 'Expand All'}
              </button>

              {onCollapse && (
                <button
                  onClick={onCollapse}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#20201B] hover:bg-[#E85D04]/20 text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323] hover:border-[#E85D04]/40 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Close Dossier</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Controls Bar: Categories & Keyword Search */}
          <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? report.entries.length
                    : report.entries.filter((e) => e.category === cat).length;
                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#FFB000] text-[#0D0D0B] font-bold shadow-[0_0_12px_rgba(255,176,0,0.3)]'
                        : 'bg-[#20201B] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-[#0D0D0B] text-[#FFB000]' : 'bg-[#171714] text-[#A8A397]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A397]" />
              <input
                type="text"
                placeholder="Search report, speaker, PO..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#20201B] border border-[#3A3323] text-xs text-[#F4F0E6] placeholder-[#A8A397]/50 focus:outline-none focus:border-[#FFB000] font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#A8A397] hover:text-[#F4F0E6] font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Entries List / Cards */}
      <div className="space-y-6">
        {filteredEntries.map((entry, idx) => {
          const isExpanded = expandedIds[entry.id] ?? true;

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Card Header Bar */}
              <div
                onClick={() => toggleExpand(entry.id)}
                className="p-5 sm:p-6 bg-[#171714] border-b border-[#3A3323] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFB000]/15 border border-[#FFB000]/30 flex items-center justify-center text-[#FFB000] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {entry.category === 'Inauguration' && <Sparkles className="w-5 h-5 text-[#FFB000]" />}
                    {entry.category === 'Workshop' && <Terminal className="w-5 h-5 text-[#FFD166]" />}
                    {entry.category === 'Technical Session' && <FileText className="w-5 h-5 text-[#E85D04]" />}
                    {entry.category === 'Competition' && <Award className="w-5 h-5 text-[#8BAE5D]" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/30">
                        {entry.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#A8A397] flex items-center gap-1 bg-[#20201B] px-2 py-0.5 rounded-md border border-[#3A3323]">
                        <Calendar className="w-3 h-3 text-[#FFB000]" />
                        {entry.formattedDate}
                      </span>
                      {entry.referenceCode && (
                        <span className="font-mono text-[11px] font-bold text-[#FFD166] bg-[#E85D04]/15 px-2 py-0.5 rounded-md border border-[#E85D04]/30">
                          {entry.referenceCode}
                        </span>
                      )}
                      {entry.poMapping && entry.poMapping.length > 0 && (
                        <span className="font-mono text-[11px] text-[#8BAE5D] bg-[#8BAE5D]/15 px-2 py-0.5 rounded-md border border-[#8BAE5D]/30 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 text-[#8BAE5D]" />
                          Mapped: {entry.poMapping.join(', ')}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg sm:text-xl font-display font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors">
                      {entry.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs font-mono text-[#A8A397] hidden sm:inline-block">
                    {isExpanded ? 'Collapse' : 'Expand Details'}
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#20201B] border border-[#3A3323] text-[#A8A397] group-hover:text-[#FFB000]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="p-5 sm:p-7 space-y-5 bg-[#171714]">
                      {/* Full Verbatim Narrative Paragraph */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0D0D0B] border border-[#3A3323] leading-relaxed text-sm text-[#A8A397] font-sans">
                        <div className="font-mono text-[10px] uppercase text-[#FFB000] tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#FFB000]" />
                          Official Report Transcript
                        </div>
                        <p className="leading-relaxed text-[#F4F0E6]/90">
                          {entry.summary}
                        </p>
                      </div>

                      {/* Highlights & Key Takeaways */}
                      {entry.highlights && entry.highlights.length > 0 && (
                        <div>
                          <div className="text-xs font-mono font-bold uppercase text-[#A8A397] tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-[#FFB000]" />
                            Key Event Highlights & Deliverables
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {entry.highlights.map((highlight, hIdx) => (
                              <div
                                key={hIdx}
                                className="p-2.5 rounded-xl bg-[#20201B] border border-[#3A3323] flex items-start gap-2 text-xs text-[#A8A397]"
                              >
                                <span className="w-4 h-4 rounded-full bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/30 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span className="leading-snug">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Winners Podium (for competitions) */}
                      {entry.winners && entry.winners.length > 0 && (
                        <div className="p-4 rounded-xl bg-[#20201B] border border-[#8BAE5D]/30">
                          <div className="text-xs font-mono font-bold uppercase text-[#8BAE5D] tracking-wider mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-[#8BAE5D]" />
                            Official Competition Honors & Winners
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {entry.winners.map((win, wIdx) => (
                              <div key={wIdx} className="p-3 rounded-lg bg-[#0D0D0B] border border-[#3A3323]">
                                <div className="text-xs font-bold text-[#FFB000] mb-2 font-mono">
                                  {win.track}
                                </div>
                                <div className="space-y-1">
                                  {win.ranks.map((rank, rIdx) => (
                                    <div
                                      key={rIdx}
                                      className="text-xs text-[#A8A397] flex items-center gap-2 font-sans"
                                    >
                                      <span
                                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                                          rIdx === 0
                                            ? 'bg-[#FFB000]/20 text-[#FFD166] border border-[#FFB000]/40'
                                            : rIdx === 1
                                            ? 'bg-[#A8A397]/20 text-[#F4F0E6] border border-[#A8A397]/40'
                                            : 'bg-[#E85D04]/20 text-[#E85D04] border border-[#E85D04]/40'
                                        }`}
                                      >
                                        {rIdx + 1}
                                      </span>
                                      <span>{rank}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dignitaries, Speakers, & Coordinators */}
                      {entry.keyPeople && entry.keyPeople.length > 0 && (
                        <div className="pt-2">
                          <div className="text-[11px] font-mono uppercase text-[#A8A397] tracking-wider mb-2 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-[#FFB000]" />
                            Dignitaries, Faculty & Student Coordinators
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {entry.keyPeople.map((person, pIdx) => (
                              <div
                                key={pIdx}
                                className="px-2.5 py-1 rounded-lg bg-[#20201B] border border-[#3A3323] text-[11px] flex items-center gap-1.5"
                              >
                                <span className="font-semibold text-[#F4F0E6]">{person.name}</span>
                                <span className="text-[#A8A397] font-mono text-[10px]">({person.role})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {filteredEntries.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#20201B] border border-[#3A3323] text-[#A8A397] font-mono text-xs">
            No report milestones match &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
          </div>
        )}
      </div>

      {/* Accreditation Footer Note */}
      <div className="mt-8 p-4 rounded-xl bg-[#171714] border border-[#3A3323] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8A397] font-mono">
        <div className="flex items-center gap-2">
          <BookmarkCheck className="w-4 h-4 text-[#FFB000] shrink-0" />
          <span>Formally submitted to {report.department}, {report.institution}</span>
        </div>
        <div className="text-[#A8A397]/70 text-[11px]">
          Academic Year 2025–26 Activity Dossier
        </div>
      </div>
    </div>
  );
};
