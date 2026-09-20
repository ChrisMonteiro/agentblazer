import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowUpRight, Sparkles, User, Filter, LayoutGrid, List } from 'lucide-react';
import { clubData } from '../data/clubData';
import { ClubMember } from '../types/club';

export const Members: React.FC = () => {
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [selectedTeam, setSelectedTeam] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'roster' | 'cards'>('roster');

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const teams = [
    'All',
    'Faculty Coordinator',
    'Core Leadership',
    'Core Committee',
    'Core Member',
    'Technical Lead',
    'Resource Management',
    'Media & Design',
  ];

  const filteredMembers = selectedTeam === 'All'
    ? clubData.members
    : clubData.members.filter((m) => m.team === selectedTeam);

  return (
    <section id="members" className="relative py-28 bg-[#0D0D0B] overflow-hidden border-t border-[#3A3323]">
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFB000]/05 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E85D04]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono text-xs text-[#FFB000] tracking-[0.3em] uppercase mb-2">
              // 03 • THE COLLECTIVE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F0E6] tracking-tight">
              Architects Behind <span className="text-[#FFB000]">AgentBlazer</span>.
            </h2>
          </div>

          {/* Controls: Team Filter and View Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-[#171714] border border-[#3A3323]">
              <button
                onClick={() => setViewMode('roster')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  viewMode === 'roster'
                    ? 'bg-[#FFB000]/20 text-[#FFB000] border border-[#FFB000]/40'
                    : 'text-[#A8A397] hover:text-[#F4F0E6]'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">ROSTER</span>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-[#FFB000]/20 text-[#FFB000] border border-[#FFB000]/40'
                    : 'text-[#A8A397] hover:text-[#F4F0E6]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GRID</span>
              </button>
            </div>

            {/* Team Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {teams.map((team) => (
                <button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    selectedTeam === team
                      ? 'bg-[#FFB000] text-[#0D0D0B] font-bold shadow-[0_0_15px_rgba(255,176,0,0.3)]'
                      : 'bg-[#171714] text-[#A8A397] hover:text-[#F4F0E6] border border-[#3A3323]'
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Council & Core Committee Direct Highlights */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-[#171714] border border-[#3A3323] shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#3A3323] mb-5">
            <div>
              <div className="font-mono text-[10px] text-[#FFB000] tracking-[0.25em] uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                EXECUTIVE COUNCIL & CORE COMMITTEE
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E6]">
                Official Leadership & Core Committee of AgentBlazer
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A8A397]">
              <span className="w-2 h-2 rounded-full bg-[#8BAE5D] animate-ping" />
              <span>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#8BAE5D]/50 hover:border-[#8BAE5D] transition-colors">
              <span className="text-[10px] font-mono text-[#8BAE5D] uppercase font-bold block">FACULTY COORD</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Mr. Keith Fernandes</span>
              <span className="text-[10px] text-[#8BAE5D]/80 font-mono">Asst. Professor, CSE</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#FFB000]/40 hover:border-[#FFB000] transition-colors">
              <span className="text-[10px] font-mono text-[#FFB000] uppercase font-bold block">PRESIDENT</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Ruben Saldanha</span>
              <span className="text-[10px] text-[#A8A397] font-mono">General Chair</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-colors">
              <span className="text-[10px] font-mono text-[#FFB000] uppercase font-bold block">VICE PRESIDENT</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Ajay Preenal Dsouza</span>
              <span className="text-[10px] text-[#A8A397] font-mono">Operations Lead</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-colors">
              <span className="text-[10px] font-mono text-[#FFB000] uppercase font-bold block">TECH LEAD</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Stevin Dsouza</span>
              <span className="text-[10px] text-[#A8A397] font-mono">AI & Architecture</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-colors">
              <span className="text-[10px] font-mono text-[#FFB000] uppercase font-bold block">RESOURCE HEAD</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Frenny Chrystal Saldanha</span>
              <span className="text-[10px] text-[#A8A397] font-mono">ECE-A Logistics</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/40 transition-colors">
              <span className="text-[10px] font-mono text-[#FFB000] uppercase font-bold block">SECRETARY</span>
              <span className="font-display text-sm font-bold text-[#F4F0E6] block truncate">Joyline Galbao</span>
              <span className="text-[10px] text-[#A8A397] font-mono">CSBS Admin</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: INTERACTIVE ROSTER */}
        {/* ========================================================================= */}
        {viewMode === 'roster' && (
          <div className="relative border-t border-[#3A3323]">
            {/* Interactive Member Rows */}
            <div className="divide-y divide-[#3A3323]">
              {filteredMembers.map((member) => {
                const isHovered = hoveredMemberId === member.id;
                const hasImage = member.image && !imgErrors[member.id];

                return (
                  <motion.div
                    key={member.id}
                    onMouseEnter={() => setHoveredMemberId(member.id)}
                    onMouseLeave={() => setHoveredMemberId(null)}
                    className={`relative py-6 px-4 sm:px-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer ${
                      isHovered ? 'bg-[#171714]' : 'hover:bg-[#171714]/40'
                    }`}
                  >
                    {/* Left: Number + Avatar + Name */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#A8A397] group-hover:text-[#FFB000] transition-colors w-7">
                        {member.number}
                      </span>
                      {/* Member Photo Thumbnail */}
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#0D0D0B] border border-[#3A3323] group-hover:border-[#FFB000]/50 flex-shrink-0 transition-colors">
                        {hasImage ? (
                          <img
                            src={encodeURI(member.image!)}
                            alt=""
                            loading="lazy"
                            onError={() => handleImgError(member.id)}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#FFB000] bg-[#171714]">
                            <User className="w-5 h-5 opacity-60" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-3xl font-extrabold text-[#F4F0E6] group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all duration-300">
                          {member.name}
                        </h3>
                        {member.department && (
                          <span className="text-[11px] font-mono text-[#A8A397] block mt-0.5">
                            {member.department}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Middle: Role & Team Tag */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-sm font-sans text-[#A8A397] group-hover:text-[#F4F0E6] transition-colors font-medium">
                        {member.role}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
                        member.team === 'Faculty Coordinator'
                          ? 'bg-[#8BAE5D]/20 text-[#8BAE5D] border border-[#8BAE5D]/40'
                          : member.team === 'Core Leadership'
                          ? 'bg-[#FFB000]/20 text-[#FFB000] border border-[#FFB000]/40'
                          : member.team === 'Core Committee'
                          ? 'bg-[#E85D04]/20 text-[#FFD166] border border-[#E85D04]/40'
                          : 'bg-[#171714] border border-[#3A3323] text-[#A8A397]'
                      }`}>
                        {member.team}
                      </span>
                    </div>

                    {/* Right: Social Links & Mobile Photo Preview */}
                    <div className="flex items-center gap-3">
                      {member.socials?.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials?.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-[#171714] border border-[#3A3323] text-[#A8A397] hover:text-[#FFB000] hover:border-[#FFB000]/50 transition-colors"
                          title="Twitter / X"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: SQUAD GRID (Full Cards Grid) */}
        {/* ========================================================================= */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#20201B] border border-[#3A3323] hover:border-[#FFB000]/50 p-5 flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0D0D0B] mb-4 border border-[#3A3323] group-hover:border-[#FFB000]/30 transition-colors">
                    {member.image && !imgErrors[member.id] ? (
                      <img
                        src={encodeURI(member.image)}
                        alt=""
                        loading="lazy"
                        onError={() => handleImgError(member.id)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#171714] text-[#FFB000]">
                        <User className="w-12 h-12 opacity-50 mb-1" />
                        <span className="font-mono text-[10px] text-[#A8A397]">AGENTBLAZER</span>
                      </div>
                    )}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-[10px] font-mono text-[#FFB000] font-bold">
                      {member.number}
                    </div>
                    {member.department && (
                      <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-[#0D0D0B]/80 backdrop-blur-md border border-[#3A3323] text-[10px] font-mono text-[#A8A397] truncate">
                        {member.department}
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#F4F0E6] group-hover:text-[#FFB000] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-[#FFB000]/90 font-medium mb-1 flex items-center justify-between">
                    <span>{member.role}</span>
                    {member.batch && (
                      <span className="text-[10px] text-[#A8A397] font-normal truncate max-w-[120px]">
                        {member.batch}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#A8A397] leading-relaxed font-sans mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-[#171714] border border-[#3A3323] text-[10px] font-mono text-[#A8A397]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Socials */}
                <div className="pt-3 border-t border-[#3A3323] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#A8A397] uppercase">
                    {member.team}
                  </span>
                  <div className="flex items-center gap-2">
                    {member.socials?.github && (
                      <a href={member.socials.github} target="_blank" rel="noreferrer" className="text-[#A8A397] hover:text-[#FFB000]">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#A8A397] hover:text-[#FFB000]">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Instructions for College Leads to Customize Content */}
        <div className="mt-14 p-5 rounded-2xl bg-[#171714] border border-[#3A3323] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A397]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#FFB000] flex-shrink-0" />
            <span>
              <strong className="text-[#F4F0E6]">Want to update members or photos?</strong> Edit <code className="px-1.5 py-0.5 rounded bg-[#0D0D0B] text-[#FFB000] border border-[#3A3323]">src/data/clubData.ts</code> directly. The roster updates instantly!
            </span>
          </div>
          <span className="text-[#FFB000] font-semibold uppercase tracking-wider">
            {clubData.members.length} CORE MEMBERS LOADED
          </span>
        </div>
      </div>
    </section>
  );
};

export default Members;
