import fs from 'fs';
import path from 'path';

const publicMembersDir = path.resolve('public/assets/members');
const distMembersDir = path.resolve('dist/assets/members');

fs.mkdirSync(publicMembersDir, { recursive: true });
fs.mkdirSync(distMembersDir, { recursive: true });

const members = [
  {
    fileName: 'mr-keith-raymond-fernandes.jpg',
    name: 'Mr. Keith Raymond Fernandes',
    initials: 'KF',
    role: 'Faculty Coordinator',
    department: 'Assistant Professor, Dept of CSE',
    batch: 'SJEC Vamanjoor',
    theme: {
      primary: '#10B981',
      secondary: '#06B6D4',
      bgGlow: '#047857',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeBorder: '#10B981',
      tag: 'FACULTY ADVISORY BOARD',
    },
  },
  {
    fileName: 'Ruben Saldanha.jpg',
    alternateName: 'Copy of Ruben Saldanha.jpg',
    name: 'Ruben Saldanha',
    initials: 'RS',
    role: 'Student President',
    department: 'Dept of Computer Science & Engg',
    batch: 'Final Year CSE • SJEC',
    theme: {
      primary: '#00F0FF',
      secondary: '#3B82F6',
      bgGlow: '#0284C7',
      badgeBg: 'rgba(0, 240, 255, 0.15)',
      badgeBorder: '#00F0FF',
      tag: 'PRESIDENT & GENERAL CHAIR',
    },
  },
  {
    fileName: 'Ajay Preenal Dsouza_.jpg',
    name: 'Ajay Preenal Dsouza',
    initials: 'AD',
    role: 'Vice President',
    department: 'Dept of Computer Science & Engg',
    batch: 'Operations & Tech Lead • CSE',
    theme: {
      primary: '#3B82F6',
      secondary: '#6366F1',
      bgGlow: '#2563EB',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      badgeBorder: '#3B82F6',
      tag: 'VICE PRESIDENT',
    },
  },
  {
    fileName: 'Stevin D Souza.jpg',
    name: 'Stevin Dsouza',
    initials: 'SD',
    role: 'Tech Lead',
    department: 'Dept of Computer Science & Engg',
    batch: 'AI & Systems Architect • CSE',
    theme: {
      primary: '#8B5CF6',
      secondary: '#06B6D4',
      bgGlow: '#7C3AED',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      badgeBorder: '#8B5CF6',
      tag: 'TECHNICAL LEAD',
    },
  },
  {
    fileName: 'Frenny Chrystal Saldanha ECE-A.jpg',
    name: 'Frenny Chrystal Saldanha',
    initials: 'FS',
    role: 'Resource Head',
    department: 'Dept of Electronics & Comm (ECE-A)',
    batch: 'Resource & Labs Management',
    theme: {
      primary: '#F43F5E',
      secondary: '#EC4899',
      bgGlow: '#E11D48',
      badgeBg: 'rgba(244, 63, 94, 0.15)',
      badgeBorder: '#F43F5E',
      tag: 'RESOURCE HEAD • ECE-A',
    },
  },
  {
    fileName: 'joyline V CSBS.jpg',
    name: 'Joyline Galbao',
    initials: 'JG',
    role: 'Secretary',
    department: 'Dept of Computer Science & Business Systems (CSBS)',
    batch: 'Club Administration & Governance',
    theme: {
      primary: '#F59E0B',
      secondary: '#EAB308',
      bgGlow: '#D97706',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeBorder: '#F59E0B',
      tag: 'SECRETARY • CSBS',
    },
  },
  {
    fileName: 'Chinthan N V.jpg',
    name: 'Chinthan N V',
    initials: 'CN',
    role: 'Media Head',
    department: 'Dept of Computer Science & Engg',
    batch: 'Visual Media & Creative Design',
    theme: {
      primary: '#A855F7',
      secondary: '#D946EF',
      bgGlow: '#9333EA',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      badgeBorder: '#A855F7',
      tag: 'MEDIA HEAD',
    },
  },
  {
    fileName: 'Aditi J N 5th Sem CSE _A_.jpg',
    name: 'Aditi J N',
    initials: 'AN',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Computer Science & Engg',
    batch: '5th Sem CSE "A"',
    theme: {
      primary: '#14B8A6',
      secondary: '#06B6D4',
      bgGlow: '#0D9488',
      badgeBg: 'rgba(20, 184, 166, 0.15)',
      badgeBorder: '#14B8A6',
      tag: 'CORE MEMBER • 5TH SEM CSE-A',
    },
  },
  {
    fileName: 'Ashwini Shenoy B-5th A CSE.jpg',
    name: 'Ashwini Shenoy B',
    initials: 'AS',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Computer Science & Engg',
    batch: '5th Sem CSE "A"',
    theme: {
      primary: '#6366F1',
      secondary: '#38BDF8',
      bgGlow: '#4F46E5',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
      badgeBorder: '#6366F1',
      tag: 'CORE MEMBER • 5TH SEM CSE-A',
    },
  },
  {
    fileName: 'Nandini S P - ECE _A_.jpg',
    name: 'Nandini S P',
    initials: 'NP',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Electronics & Comm (ECE-A)',
    batch: 'Core Technical Committee • ECE',
    theme: {
      primary: '#EC4899',
      secondary: '#F43F5E',
      bgGlow: '#DB2777',
      badgeBg: 'rgba(236, 72, 153, 0.15)',
      badgeBorder: '#EC4899',
      tag: 'CORE MEMBER • ECE-A',
    },
  },
  {
    fileName: 'Tejashwini K M 5th Sem CSE-D.jpg',
    name: 'Tejashwini K M',
    initials: 'TM',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Computer Science & Engg',
    batch: '5th Sem CSE "D"',
    theme: {
      primary: '#10B981',
      secondary: '#34D399',
      bgGlow: '#059669',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeBorder: '#10B981',
      tag: 'CORE MEMBER • 5TH SEM CSE-D',
    },
  },
  {
    fileName: 'Vinisha Sweedal Saldanha .jpg',
    name: 'Vinisha Sweedal Saldanha',
    initials: 'VS',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Computer Science & Engg',
    batch: 'Event Execution & Technical Team',
    theme: {
      primary: '#F97316',
      secondary: '#FBBF24',
      bgGlow: '#EA580C',
      badgeBg: 'rgba(249, 115, 22, 0.15)',
      badgeBorder: '#F97316',
      tag: 'CORE MEMBER • CSE',
    },
  },
  {
    fileName: 'Winona Lobo CSE-D.jpg',
    name: 'Winona Lobo',
    initials: 'WL',
    role: 'Core Member & Student Coordinator',
    department: 'Dept of Computer Science & Engg',
    batch: '5th Sem CSE "D"',
    theme: {
      primary: '#0EA5E9',
      secondary: '#06B6D4',
      bgGlow: '#0284C7',
      badgeBg: 'rgba(14, 165, 233, 0.15)',
      badgeBorder: '#0EA5E9',
      tag: 'CORE MEMBER • 5TH SEM CSE-D',
    },
  },
  {
    fileName: 'prajwal-royston-cordiero.jpg',
    name: 'Prajwal Royston Cordiero',
    initials: 'PC',
    role: 'Core Committee Member',
    department: 'Dept of Computer Science & Engg',
    batch: 'Competitive Programming Lead',
    theme: {
      primary: '#EAB308',
      secondary: '#F59E0B',
      bgGlow: '#CA8A04',
      badgeBg: 'rgba(234, 179, 8, 0.15)',
      badgeBorder: '#EAB308',
      tag: 'CORE COMMITTEE',
    },
  },
  {
    fileName: 'chacko-p-abraham.jpg',
    name: 'Chacko P Abraham',
    initials: 'CA',
    role: 'Core Committee Member',
    department: 'Dept of Computer Science & Engg',
    batch: 'Open Source & Cloud Systems',
    theme: {
      primary: '#06B6D4',
      secondary: '#3B82F6',
      bgGlow: '#0891B2',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      badgeBorder: '#06B6D4',
      tag: 'CORE COMMITTEE',
    },
  },
  {
    fileName: 'alma-roxane-pereira.jpg',
    name: 'Alma Roxane Pereira',
    initials: 'AP',
    role: 'Core Committee Member',
    department: 'Dept of Computer Science & Engg',
    batch: 'UI/UX & Creative Outreach',
    theme: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      bgGlow: '#DB2777',
      badgeBg: 'rgba(236, 72, 153, 0.15)',
      badgeBorder: '#EC4899',
      tag: 'CORE COMMITTEE',
    },
  },
];

function generateMemberSvg(member) {
  const { name, initials, role, department, batch, theme } = member;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04060E"/>
      <stop offset="40%" stop-color="#080D1E"/>
      <stop offset="80%" stop-color="#050814"/>
      <stop offset="100%" stop-color="#020308"/>
    </linearGradient>

    <!-- Glowing Rim Gradient -->
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.primary}"/>
      <stop offset="100%" stop-color="${theme.secondary}"/>
    </linearGradient>

    <radialGradient id="centerGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${theme.bgGlow}" stop-opacity="0.38"/>
      <stop offset="60%" stop-color="${theme.bgGlow}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Grid Pattern -->
    <pattern id="cyberGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E293B" stroke-width="0.75" stroke-opacity="0.25"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="600" height="750" fill="url(#bgGrad)" rx="32"/>
  <rect width="600" height="750" fill="url(#cyberGrid)" rx="32"/>
  <circle cx="300" cy="300" r="280" fill="url(#centerGlow)"/>

  <!-- Outer Border Frame -->
  <rect x="8" y="8" width="584" height="734" rx="26" fill="none" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="14" y="14" width="572" height="722" rx="22" fill="none" stroke="#334155" stroke-width="0.75" stroke-opacity="0.4"/>

  <!-- Top Header Bar -->
  <g transform="translate(32, 42)">
    <rect x="0" y="0" width="14" height="14" rx="4" fill="${theme.primary}"/>
    <text x="22" y="11" font-family="'JetBrains Mono', 'Courier New', monospace" font-size="11" font-weight="700" fill="${theme.primary}" letter-spacing="2">
      AGENTBLAZER CLUB // OFFICIAL ID
    </text>
    <text x="536" y="11" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#64748B" letter-spacing="1">
      SJEC MANGALORE
    </text>
  </g>

  <!-- Corner Tech Accents -->
  <path d="M 28 60 L 28 28 L 60 28" fill="none" stroke="${theme.primary}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 572 60 L 572 28 L 540 28" fill="none" stroke="${theme.primary}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 28 690 L 28 722 L 60 722" fill="none" stroke="${theme.primary}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 572 690 L 572 722 L 540 722" fill="none" stroke="${theme.primary}" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Central Member Portrait Ring -->
  <g transform="translate(300, 270)">
    <!-- Outer Decorative Orbit -->
    <circle cx="0" cy="0" r="148" fill="none" stroke="${theme.primary}" stroke-width="1" stroke-dasharray="8 6" stroke-opacity="0.4"/>
    <circle cx="0" cy="0" r="136" fill="none" stroke="${theme.secondary}" stroke-width="2" stroke-opacity="0.6"/>
    
    <!-- Outer Glow Ring -->
    <circle cx="0" cy="0" r="124" fill="#0A0F24" stroke="url(#accentGrad)" stroke-width="4" filter="url(#softGlow)"/>
    <circle cx="0" cy="0" r="122" fill="#070C1B"/>

    <!-- Avatar Stylized Silhouette -->
    <!-- Head -->
    <circle cx="0" cy="-28" r="46" fill="url(#accentGrad)" fill-opacity="0.9"/>
    <!-- Torso / Shoulders -->
    <path d="M -75 92 C -75 42, -50 20, 0 20 C 50 20, 75 42, 75 92 Z" fill="url(#accentGrad)" fill-opacity="0.85"/>

    <!-- Inner Initials Badge Shield -->
    <circle cx="0" cy="-28" r="32" fill="#04060E" fill-opacity="0.85"/>
    <text x="0" y="-17" text-anchor="middle" font-family="'Space Grotesk', 'Inter', -apple-system, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="1">
      ${initials}
    </text>

    <!-- Verified Member Badge Pill -->
    <g transform="translate(0, 126)">
      <rect x="-90" y="-15" width="180" height="30" rx="15" fill="#030712" stroke="${theme.primary}" stroke-width="1.5"/>
      <circle cx="-68" cy="0" r="4" fill="${theme.primary}"/>
      <text x="-56" y="4" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="${theme.primary}" letter-spacing="1">
        VERIFIED MEMBER
      </text>
    </g>
  </g>

  <!-- Member Information Details -->
  <g transform="translate(300, 485)">
    <!-- Tag Category Badge -->
    <rect x="-160" y="-18" width="320" height="28" rx="14" fill="${theme.badgeBg}" stroke="${theme.badgeBorder}" stroke-width="1"/>
    <text x="0" y="0" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800" fill="${theme.primary}" letter-spacing="2">
      ${theme.tag}
    </text>

    <!-- Full Member Name -->
    <text x="0" y="48" text-anchor="middle" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">
      ${name}
    </text>

    <!-- Role Designation -->
    <text x="0" y="78" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="15" font-weight="700" fill="${theme.primary}">
      ${role}
    </text>

    <!-- Department & Specialization -->
    <text x="0" y="108" text-anchor="middle" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#94A3B8">
      ${department}
    </text>
    
    <!-- Batch / College Details -->
    <text x="0" y="132" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#64748B">
      ${batch}
    </text>
  </g>

  <!-- Card Footer Security & Authenticity Bar -->
  <g transform="translate(32, 690)">
    <line x1="0" y1="0" x2="536" y2="0" stroke="#1E293B" stroke-width="1"/>
    <text x="0" y="24" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#475569" letter-spacing="1">
      ST JOSEPH ENGINEERING COLLEGE
    </text>
    <text x="536" y="24" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="${theme.primary}">
      AUTHENTICATED // 2025–26
    </text>
  </g>
</svg>`;
}

// Generate each file
let count = 0;
for (const member of members) {
  const svgContent = generateMemberSvg(member);

  // Write exact fileName
  const targetPublic = path.join(publicMembersDir, member.fileName);
  const targetDist = path.join(distMembersDir, member.fileName);
  fs.writeFileSync(targetPublic, svgContent, 'utf-8');
  fs.writeFileSync(targetDist, svgContent, 'utf-8');
  count++;

  // Also write .svg version for flexibility
  const svgFileName = member.fileName.replace(/\.jpg$/i, '.svg');
  fs.writeFileSync(path.join(publicMembersDir, svgFileName), svgContent, 'utf-8');
  fs.writeFileSync(path.join(distMembersDir, svgFileName), svgContent, 'utf-8');

  // If alternateName exists (like "Copy of Ruben Saldanha.jpg")
  if (member.alternateName) {
    fs.writeFileSync(path.join(publicMembersDir, member.alternateName), svgContent, 'utf-8');
    fs.writeFileSync(path.join(distMembersDir, member.alternateName), svgContent, 'utf-8');
    count++;
  }
}

console.log(`Successfully generated ${count} member photo assets in public/assets/members/ and dist/assets/members/`);
