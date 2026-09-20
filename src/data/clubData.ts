import { ClubData } from '../types/club';

/**
 * =========================================================================
 * AGENTBLAZER CLUB - CENTRAL CONFIGURATION & CONTENT DATA
 * =========================================================================
 * 
 * College students and club leads can easily update all content here!
 * - Replace member names, photos, or roles
 * - Add or modify events, dates, and event photos
 * - Update gallery images and videos
 * - Change social media links and descriptions
 * 
 * No need to touch component logic!
 * =========================================================================
 */

export const clubData: ClubData = {
  clubName: 'AgentBlazer Club',
  clubShortName: 'AgentBlazer',
  department: 'Department of Computer Science and Engineering',
  collegeName: 'St Joseph Engineering College, Vamanjoor, Mangalore-575028',
  tagline: 'Where Code Meets Creativity',
  secondaryTagline: 'Engineering Autonomous Intelligence, Open Architectures, and the Next Generation of Technologists.',
  
  logo: {
    svgPath: '/assets/images/agentblazer_official_logo_1789660136606.jpg',
    pngPath: '/assets/images/agentblazer_official_logo_1789660136606.jpg',
    fullLogoPath: '/assets/images/agentblazer_official_logo_1789660136606.jpg',
    transparentPath: '/assets/images/agentblazer_official_logo_1789660136606.jpg',
    alt: 'AgentBlazer Club Official Hexagonal Emblem',
  },

  description:
    'AgentBlazer is the premier student-led technical collective in the Department of Computer Science & Engineering. We are an incubator of builders, researchers, and creative technologists uniting to solve high-impact problems through code, autonomous systems, open-source innovation, and national hackathons.',

  mission:
    'To bridge the gap between academic computer science theory and bleeding-edge production engineering, empowering every student to build software that moves the world forward.',

  vision:
    'To establish a world-class student developer community known for groundbreaking hackathon prototypes, open-source contributions, and engineering excellence.',

  corePillars: [
    {
      title: 'Autonomous Systems & AI',
      description: 'Diving deep into agentic workflows, machine learning models, and intelligent automated tools.',
    },
    {
      title: 'Competitive Algorithmic Mastery',
      description: 'Rigorous problem solving, data structures, and championship hackathon preparation.',
    },
    {
      title: 'Open Source & Full-Stack Craft',
      description: 'Shipping real-world web, cloud, and distributed architectures with clean craft and reliability.',
    },
    {
      title: 'Peer Mentorship & Community',
      description: 'Fostering an inclusive circle where freshmen pair with senior engineers to accelerate growth.',
    },
  ],

  stats: [
    {
      label: 'Active Hackers',
      value: '500+',
      description: 'Passionate student developers and designers across all CSE batches.',
    },
    {
      label: 'Technical Workshops',
      value: '35+',
      description: 'Hands-on bootcamps in AI, Cloud, Rust, Web3, and Algorithms.',
    },
    {
      label: 'Hackathons Conquered',
      value: '28+',
      description: 'Podium finishes and grand prizes at national & global hackathons.',
    },
    {
      label: 'Projects Shipped',
      value: '60+',
      description: 'Production-grade open-source applications built by club teams.',
    },
  ],

  // -------------------------------------------------------------------------
  // ANNUAL ACTIVITY REPORT (AY 2025–26)
  // Department of Computer Science and Engineering
  // St Joseph Engineering College, Vamanjoor, Mangalore-575028
  // -------------------------------------------------------------------------
  annualReport: {
    institution: 'St Joseph Engineering College',
    department: 'Department of Computer Science and Engineering',
    location: 'Vamanjoor, Mangalore',
    postalCode: '575028',
    clubName: 'AgentBlazer Club',
    title: 'Annual Activity Report (AY 2025–26)',
    academicYear: 'AY 2025–26',
    overview:
      'Official record of technical workshops, guest lectures, peer learning bootcamps, and competitive events organized by the AgentBlazer Club under the Department of Computer Science and Engineering, St Joseph Engineering College, Vamanjoor, Mangalore.',
    entries: [
      {
        id: 'inauguration-2025',
        title: 'AgentBlazer Club Inauguration',
        date: '2025-08-28',
        formattedDate: 'August 28, 2025',
        category: 'Inauguration',
        organizers: 'Department of Computer Science & Engineering',
        dignitariesOrSpeakers: 'Chief Guest Mr. Santosh Rebello (Salesforce), Guest of Honor Mr. Stephen Pinto (Salesforce & SJEC alumnus), Principal Dr. Rio D’Souza, HOD Dr. Melwyn D’Souza',
        summary:
          'The Department of Computer Science & Engineering formally inaugurated the AgentBlazer Club to foster leadership, innovation, and technical excellence among students. Chief Guest Mr. Santosh Rebello (Salesforce) emphasized bridging the "role–radiance gap," while Guest of Honor Mr. Stephen Pinto (Salesforce & SJEC alumnus) encouraged continuous learning. Principal Dr. Rio D’Souza called on students to seize growth opportunities. The event, coordinated by Mr. Keith Fernandes and Ms. Nisha Roche, included a lamp-lighting ceremony, welcome address by HOD Dr. Melwyn D’Souza, felicitations, and a Vote of Thanks by Student President Mr. Reuben Saldanha.',
        highlights: [
          'Formal inauguration with traditional lamp-lighting ceremony',
          'Keynote on bridging the "role–radiance gap" by Chief Guest Mr. Santosh Rebello',
          'Special address on continuous learning by alumnus Mr. Stephen Pinto',
          'Growth opportunity charge by Principal Dr. Rio D’Souza & HOD Dr. Melwyn D’Souza',
          'Coordinated by Mr. Keith Fernandes & Ms. Nisha Roche; Vote of Thanks by President Mr. Reuben Saldanha',
        ],
        keyPeople: [
          { name: 'Mr. Santosh Rebello', role: 'Chief Guest (Salesforce)' },
          { name: 'Mr. Stephen Pinto', role: 'Guest of Honor (Salesforce & SJEC Alumnus)' },
          { name: 'Dr. Rio D’Souza', role: 'Principal, SJEC' },
          { name: 'Dr. Melwyn D’Souza', role: 'HOD - CSE' },
          { name: 'Mr. Keith Fernandes', role: 'Faculty Coordinator' },
          { name: 'Ms. Nisha Roche', role: 'Faculty Coordinator' },
          { name: 'Mr. Reuben Saldanha', role: 'Student President' },
        ],
      },
      {
        id: 'agentforce-session-aug2025',
        title: 'Agentforce Technical Session',
        date: '2025-08-28',
        formattedDate: 'August 28, 2025',
        category: 'Technical Session',
        referenceCode: 'Ref: CSE/AB/2025-26/02',
        organizers: 'AgentBlazer Club in collaboration with Salesforce',
        dignitariesOrSpeakers: 'Mr. Santhosh Rebello & Mr. Stephen Pinto (Salesforce Executives)',
        summary:
          'Held alongside the club launch, Salesforce executives Mr. Santhosh Rebello and Mr. Stephen Pinto delivered an expert session on Agentforce and AI career opportunities (Ref: CSE/AB/2025-26/02). They traced AI evolution through Predictive, Copilot, and Agentic AI (autonomous systems using Salesforce Data Cloud), highlighted key career pathways in Salesforce Administration, Analytics, and Solution Development, and urged students to build adaptability within the Trailblazer ecosystem.',
        highlights: [
          'Official Department Reference: Ref: CSE/AB/2025-26/02',
          'Traced AI evolution: Predictive AI → Copilot → Agentic AI (autonomous systems)',
          'Deep dive into Salesforce Data Cloud powering autonomous enterprise agents',
          'Career pathways in Salesforce Administration, Analytics, and Solution Development',
          'Strategic guidance on cultivating adaptability in the global Trailblazer ecosystem',
        ],
        keyPeople: [
          { name: 'Mr. Santhosh Rebello', role: 'Salesforce Executive' },
          { name: 'Mr. Stephen Pinto', role: 'Salesforce Executive & SJEC Alumnus' },
        ],
      },
      {
        id: 'gsoc-llm-workshop-feb2026',
        title: '"Master the Future: Hands-on GSOC & LLMs Workshop"',
        date: '2026-02-14',
        formattedDate: 'February 14, 2026',
        category: 'Workshop',
        organizers: 'Department of CSE in association with the AgentBlazer Club',
        dignitariesOrSpeakers: 'Mr. Anas Khan (Software Development Engineer at HackerRank)',
        summary:
          'Organized by the Department of CSE in association with the AgentBlazer Club, this workshop was conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training (forking, cloning, pull requests), guidance on Google Summer of Code (GSOC) participation, and an overview of the AI ecosystem. Key technical topics covered included LLM parameters (Temperature, Top-P, Max Tokens), prompt strategies, Retrieval Augmented Generation (RAG), function calling, Gemini AI, and development frameworks such as LangChain, LlamaIndex, CrewAI, Gradio, and Streamlit. The session opened with a welcome by Club VP Mr. Ajay D\'Souza and concluded with a token of appreciation presented by Faculty Coordinator Ms. Nisha J Roche, along with a vote of thanks by Student President Mr. Ruben Saldanha and support from HOD Dr. Melwyn D’Souza.',
        highlights: [
          'Approximately 55 participants engaged in hands-on computer laboratory training',
          'Practical GitHub workflow training: forking, cloning, branching, and pull requests',
          'Actionable Google Summer of Code (GSOC) proposal crafting & mentor org triage',
          'Core LLM tuning parameters: Temperature, Top-P, and Max Tokens',
          'Hands-on RAG, function calling, Gemini AI, LangChain, LlamaIndex, CrewAI, Gradio & Streamlit',
        ],
        keyPeople: [
          { name: 'Mr. Anas Khan', role: 'Speaker (SDE @ HackerRank)' },
          { name: 'Mr. Ajay D\'Souza', role: 'Club Vice President (Welcome Address)' },
          { name: 'Ms. Nisha J Roche', role: 'Faculty Coordinator (Token of Appreciation)' },
          { name: 'Mr. Ruben Saldanha', role: 'Student President (Vote of Thanks)' },
          { name: 'Dr. Melwyn D’Souza', role: 'HOD - CSE' },
        ],
      },
      {
        id: 'demystifying-generative-models-mar2026',
        title: '"Demystifying Generative Models" Workshop',
        date: '2026-03-18',
        formattedDate: 'March 18, 2026',
        category: 'Workshop',
        poMapping: ['PO4', 'PO6', 'PO7', 'PO11'],
        organizers: 'AgentBlazer Club, Department of CSE',
        dignitariesOrSpeakers: 'Prajwal Royston Corderio & Chacko P Abraham (6th-sem CSE) under guidance of Ms. Nisha J. Roche',
        summary:
          'Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI (mapped to PO4, PO6, PO7, PO11). The session detailed AI governance frameworks (LLM Council), transformer mechanisms, and prompt engineering, alongside comparisons of LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, and Perplexity. Students engaged in an AI quiz, a three-stage model evaluation challenge, and a feature-modification coding task before a valedictory session to end the program.',
        highlights: [
          'Academic Accreditation Mapping: Program Outcomes PO4, PO6, PO7, PO11',
          'Peer-learning pedagogical model led by 6th-semester student researchers',
          'AI governance frameworks and multi-agent coordination (LLM Council)',
          'Comprehensive comparisons: LLaMA, Groq, Mistral AI, ChatGPT, Copilot & Perplexity',
          'Interactive 3-stage model evaluation challenge and live code modification sprint',
        ],
        keyPeople: [
          { name: 'Prajwal Royston Corderio', role: 'Peer Lead & Trainer (6th-Sem CSE)' },
          { name: 'Chacko P Abraham', role: 'Peer Lead & Trainer (6th-Sem CSE)' },
          { name: 'Ms. Nisha J. Roche', role: 'Faculty Mentor & Coordinator' },
        ],
      },
      {
        id: 'prompt-ops-2k26-mar2026',
        title: '"PROMPT OPS-2K26" Competition',
        date: '2026-03-25',
        formattedDate: 'March 25, 2026',
        category: 'Competition',
        poMapping: ['PO4', 'PO5', 'PO8', 'PO11'],
        organizers: 'AgentBlazer Club and Cipher, Department of CSE',
        dignitariesOrSpeakers: 'Coordinated under guidance of Ms. Nisha J Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza',
        summary:
          'Organized by the AgentBlazer Club and Cipher under the guidance of Ms. Nisha J Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza, this technical competition focused on prompt engineering and AI tools (mapped to PO4, PO5, PO8, PO11). Track 1 (1st Year) featured invitation generation, logo recreation, and image recreation rounds, with Chinmayee, Chris Royston Monteiro, and Deeksha Ravi Moger taking top honors. Track 2 (2nd Year) tested students in JSON conversion, Python code debugging, and a Gemini AI security prompt extraction challenge, with Harimurali KS, Venus Suhani D’Lima, and Venisha Snehal D’Souza securing top positions.',
        highlights: [
          'Inter-club flagship technical competition co-hosted with Cipher',
          'Formally mapped to Program Outcomes: PO4, PO5, PO8, PO11',
          'Track 1: Generative invitation design, vector logo recreation & visual fidelity recreation',
          'Track 2: Automated JSON schema conversion, Python debugging & Gemini AI prompt extraction',
        ],
        keyPeople: [
          { name: 'Ms. Nisha J Roche', role: 'Faculty Coordinator (AgentBlazer)' },
          { name: 'Ms. Jaishma K', role: 'Faculty Coordinator (Cipher)' },
          { name: 'Dr. Melwyn D’Souza', role: 'HOD - CSE' },
        ],
        winners: [
          {
            track: 'Track 1 (1st Year CSE/Engineering)',
            ranks: ['1st Place: Chinmayee', '2nd Place: Chris Royston Monteiro', '3rd Place: Deeksha Ravi Moger'],
          },
          {
            track: 'Track 2 (2nd Year CSE/Engineering)',
            ranks: ['1st Place: Harimurali KS', '2nd Place: Venus Suhani D’Lima', '3rd Place: Venisha Snehal D’Souza'],
          },
        ],
      },
      {
        id: 'cyber-security-pathways-apr2026',
        title: '"Cyber Security and Career Pathways" Session',
        date: '2026-04-01',
        formattedDate: 'April 01, 2026',
        category: 'Technical Session',
        poMapping: ['PO6', 'PO7', 'PO9', 'PO11'],
        organizers: 'Department of CSE in association with the AgentBlazer Club',
        dignitariesOrSpeakers: 'Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand)',
        summary:
          'Organized by the Department of CSE in association with the AgentBlazer Club, this hands-on workshop was delivered by Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand) for 6th-semester students (mapped to PO6, PO7, PO9, PO11). The session provided practical exposure to core security concepts, live tool demonstrations including Shodan, OSINT techniques, Google Dorking, CVE management, SQL Injection, and the Cyber Kill Chain model. It concluded with actionable guidance on career roles such as Security Analyst, SOC Analyst, Ethical Hacker, and Cloud Security Engineer.',
        highlights: [
          'Advanced technical session mapped to Program Outcomes: PO6, PO7, PO9, PO11',
          'Live attack & defense demonstrations: Shodan reconnaissance, OSINT & Google Dorking',
          'Practical walkthroughs of CVE vulnerability management & SQL Injection prevention',
          'Comprehensive breakdown of the Cyber Kill Chain model and real-world SecOps operations',
          'Direct industry roadmaps: Security Analyst, SOC Analyst, Ethical Hacker & Cloud Security Engineer',
        ],
        keyPeople: [
          { name: 'Mr. Suhas Nayak', role: 'Speaker (Tech Lead – SecOps, Ingersoll Rand)' },
        ],
      },
      {
        id: 'agentforce-workshop-may2026',
        title: 'Agentforce Workshop',
        date: '2026-05-22',
        formattedDate: 'May 22, 2026',
        category: 'Workshop',
        organizers: 'AgentBlazer Club in collaboration with Salesforce',
        dignitariesOrSpeakers: 'Coordinated by Ms. Nisha Roche and Mr. Ruben Saldanha',
        summary:
          'The AgentBlazer Club, in collaboration with Salesforce, organized a hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students gained practical experience in designing Sales Email Prompt Templates, Flex Prompt Templates, and configuring automated prompt flows to build reusable AI structures. Coordinated by faculty coordinator Ms. Nisha Roche and student coordinator Mr. Ruben Saldanha, the session concluded with an interactive discussion on industry applications of AI agents and career opportunities in the Salesforce ecosystem.',
        highlights: [
          'Direct enterprise hands-on lab on Salesforce Trailhead environment',
          'Building custom AI agents with Sales Email Prompt Templates & Flex Prompt Templates',
          'Architecting and deploying automated prompt flows for reusable AI agent execution',
          'In-depth exploration of industry agentic applications and enterprise career pathways',
          'Coordinated by Ms. Nisha Roche (Faculty) and Mr. Ruben Saldanha (Student Lead)',
        ],
        keyPeople: [
          { name: 'Ms. Nisha Roche', role: 'Faculty Coordinator' },
          { name: 'Mr. Ruben Saldanha', role: 'Student Coordinator' },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // ACTIVITIES & DOMAINS
  // -------------------------------------------------------------------------
  activities: [
    {
      id: 'ai-agents',
      title: 'Agentic AI & Neural Systems',
      tagline: 'Building beyond simple prompts into autonomous systems',
      description:
        'We explore autonomous agent frameworks, multi-agent coordination, local LLM deployment, computer vision, and cognitive architectures.',
      iconName: 'Cpu',
      skills: ['PyTorch', 'LangChain', 'Multi-Agent Systems', 'Vector DBs', 'TensorFlow'],
      projectCount: '18+ Prototypes',
      gradient: 'from-[#FFB000]/20 to-[#E85D04]/20',
      stats: 'Top 3 in National AI Summit',
    },
    {
      id: 'fullstack-cloud',
      title: 'Full-Stack & Cloud Architecture',
      tagline: 'From zero to production-grade distributed deployments',
      description:
        'Architecting resilient modern web platforms, microservices, containerization, real-time WebSockets, and serverless edge functions.',
      iconName: 'Globe',
      skills: ['React / Next.js', 'Node.js / Express', 'Docker', 'Kubernetes', 'PostgreSQL'],
      projectCount: '24+ Deployed Apps',
      gradient: 'from-[#E85D04]/20 to-[#FFB000]/20',
      stats: '100k+ Total Requests Served',
    },
    {
      id: 'cp-algorithms',
      title: 'Competitive Programming',
      tagline: 'Precision logic, optimized runtime, algorithmic elegance',
      description:
        'Weekly algorithm sprints, dynamic programming deep-dives, graph theory challenges, and dedicated preparation for ICPC and Codeforces.',
      iconName: 'Terminal',
      skills: ['C++', 'Graph Theory', 'Dynamic Programming', 'Trees & Tries', 'ICPC prep'],
      projectCount: '500+ Solved Challenges',
      gradient: 'from-amber-500/20 to-orange-600/20',
      stats: 'ICPC Regional Finalists',
    },
    {
      id: 'hackathons-opensource',
      title: 'Hackathons & Open Source',
      tagline: '36 hours of relentless building, caffeine, and shipping',
      description:
        'We assemble elite cross-functional squads for global hackathons and maintain active open-source repositories contributed to by students.',
      iconName: 'Flame',
      skills: ['Rapid Prototyping', 'Git & CI/CD', 'API Orchestration', 'Pitching', 'UI/UX'],
      projectCount: '15+ Hackathon Wins',
      gradient: 'from-rose-500/20 to-red-600/20',
      stats: '$20,000+ Prize Money Won',
    },
    {
      id: 'cybersecurity',
      title: 'Cyber Security & Systems',
      tagline: 'Defending networks, reverse engineering, and threat analysis',
      description:
        'Capture-The-Flag (CTF) challenges, cryptography, secure coding practices, penetration testing basics, and binary exploitation analysis.',
      iconName: 'Shield',
      skills: ['CTF Operations', 'Linux Kernel', 'Wireshark', 'Cryptography', 'Ethical Hacking'],
      projectCount: '8+ CTF Competitions',
      gradient: 'from-emerald-500/20 to-teal-600/20',
      stats: 'Rank 12 State Cyber Challenge',
    },
    {
      id: 'creative-design',
      title: 'UI/UX & Creative Engineering',
      tagline: 'Where mathematical logic pairs with visual storytelling',
      description:
        'Designing user journeys, 3D interactive web experiences, design systems, generative art, and accessible typography-led digital interfaces.',
      iconName: 'Palette',
      skills: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Design Systems'],
      projectCount: '30+ UI Designs',
      gradient: 'from-[#FFB000]/20 to-[#FFD166]/20',
      stats: 'Best UI/UX Award 2025',
    },
  ],

  // -------------------------------------------------------------------------
  // MEMBERS DIRECTORY (Official AgentBlazer Leadership & Core Committee)
  // -------------------------------------------------------------------------
  members: [
    {
      id: 'm-keith',
      number: '00',
      name: 'Mr. Keith Raymond Fernandes',
      role: 'Faculty Coordinator',
      team: 'Faculty Coordinator',
      department: 'Assistant Professor, Dept of CSE',
      batch: 'Faculty Advisory Board • SJEC',
      photoFileName: 'mr-keith-raymond-fernandes.jpg',
      image: '/assets/members/mr-keith-raymond-fernandes.jpg',
      bio: 'Faculty Coordinator of AgentBlazer Club. Assistant Professor in the Department of Computer Science & Engineering, mentoring technical innovation, industry linkages, and student development.',
      skills: ['Faculty Mentorship', 'Curriculum Innovation', 'Technical Advisory', 'Industry Outreach'],
      socials: {
        linkedin: 'https://linkedin.com',
        email: 'keithf@sjec.ac.in',
      },
    },
    {
      id: 'm1',
      number: '01',
      name: 'Ruben Saldanha',
      role: 'Student President',
      team: 'Core Leadership',
      department: 'Dept of Computer Science & Engg',
      batch: 'Final Year CSE • SJEC',
      photoFileName: 'Ruben Saldanha.jpg',
      image: '/assets/members/Ruben Saldanha.jpg',
      bio: 'President of AgentBlazer Club. Spearheading strategic direction, technological innovation, national hackathon initiatives, and community vision across the CSE Department.',
      skills: ['Club Governance', 'System Architecture', 'Autonomous Systems', 'Strategic Roadmaps', 'Leadership'],
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'ruben.saldanha@agentblazer.edu',
      },
    },
    {
      id: 'm2',
      number: '02',
      name: 'Ajay Preenal Dsouza',
      role: 'Vice President',
      team: 'Core Leadership',
      department: 'Dept of Computer Science & Engg',
      batch: 'Operations & Tech Lead • CSE',
      photoFileName: 'Ajay Preenal Dsouza_.jpg',
      image: '/assets/members/Ajay Preenal Dsouza_.jpg',
      bio: 'Vice President of AgentBlazer Club. Directing operational workflows, inter-collegiate technical symposia, hackathon execution, and member development.',
      skills: ['Operations Management', 'Full-Stack Engineering', 'Event Coordination', 'Tech Strategy'],
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'ajay.dsouza@agentblazer.edu',
      },
    },
    {
      id: 'm3',
      number: '03',
      name: 'Stevin Dsouza',
      role: 'Tech Lead',
      team: 'Technical Lead',
      department: 'Dept of Computer Science & Engg',
      batch: 'AI & Systems Architect • CSE',
      photoFileName: 'Stevin D Souza.jpg',
      image: '/assets/members/Stevin D Souza.jpg',
      bio: 'Technical Lead of AgentBlazer Club. Architecting hands-on bootcamps, algorithmic challenge platforms, agentic AI pipelines, and reviewing engineering projects.',
      skills: ['Distributed Architecture', 'Autonomous Agentic AI', 'Cloud & DevOps', 'Go / Python', 'Competitive Algorithms'],
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 'm4',
      number: '04',
      name: 'Frenny Chrystal Saldanha',
      role: 'Resource Head',
      team: 'Resource Management',
      department: 'Dept of Electronics & Comm (ECE-A)',
      batch: 'Resource & Labs Management',
      photoFileName: 'Frenny Chrystal Saldanha ECE-A.jpg',
      image: '/assets/members/Frenny Chrystal Saldanha ECE-A.jpg',
      bio: 'Resource Head of AgentBlazer Club. Managing sponsorship acquisitions, high-performance computing labs, technical logistics, and event material procurement.',
      skills: ['Resource Planning', 'Corporate Partnerships', 'Budgetary Operations', 'Logistics Infrastructure'],
      socials: {
        linkedin: 'https://linkedin.com',
        email: 'frenny.saldanha@agentblazer.edu',
      },
    },
    {
      id: 'm5',
      number: '05',
      name: 'Joyline Galbao',
      role: 'Secretary',
      team: 'Core Leadership',
      department: 'Dept of Computer Science & Business Systems (CSBS)',
      batch: 'Club Administration & Governance',
      photoFileName: 'joyline V CSBS.jpg',
      image: '/assets/members/joyline V CSBS.jpg',
      bio: 'Secretary of AgentBlazer Club. Maintaining official administrative registries, event documentation, club resolutions, inter-departmental communications, and meeting agendas.',
      skills: ['Governance Documentation', 'Executive Scheduling', 'Technical Communications', 'Compliance'],
      socials: {
        linkedin: 'https://linkedin.com',
        email: 'joyline.galbao@agentblazer.edu',
      },
    },
    {
      id: 'm6',
      number: '06',
      name: 'Chinthan N V',
      role: 'Media Head',
      team: 'Media & Design',
      department: 'Dept of Computer Science & Engg',
      batch: 'Visual Media & Creative Design',
      photoFileName: 'Chinthan N V.jpg',
      image: '/assets/members/Chinthan N V.jpg',
      bio: 'Media Head of AgentBlazer Club. Directing visual media, competition poster design, aftermovies, promotional reels, digital brand identity, and UI/UX assets.',
      skills: ['Poster & Visual Design', 'Cinematography & Editing', 'Motion Graphics', 'Brand Strategy', 'UI/UX'],
      socials: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'm-aditi',
      number: '07',
      name: 'Aditi J N',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Computer Science & Engg',
      batch: '5th Sem CSE "A"',
      photoFileName: 'Aditi J N 5th Sem CSE _A_.jpg',
      image: '/assets/members/Aditi J N 5th Sem CSE _A_.jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club from 5th Semester CSE Section A. Leading student engagement, technical workshop support, and coding meetups.',
      skills: ['Python / Java', 'Web Development', 'Student Coordination', 'Technical Workshops'],
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 'm-ashwini',
      number: '08',
      name: 'Ashwini Shenoy B',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Computer Science & Engg',
      batch: '5th Sem CSE "A"',
      photoFileName: 'Ashwini Shenoy B-5th A CSE.jpg',
      image: '/assets/members/Ashwini Shenoy B-5th A CSE.jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club from 5th Semester CSE Section A. Driving technical project discussions, hackathon logistics, and peer mentorship.',
      skills: ['Data Structures', 'Algorithmic Problem Solving', 'Full-Stack Basics', 'Team Operations'],
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 'm-nandini',
      number: '09',
      name: 'Nandini S P',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Electronics & Comm (ECE-A)',
      batch: 'Core Technical Committee • ECE',
      photoFileName: 'Nandini S P - ECE _A_.jpg',
      image: '/assets/members/Nandini S P - ECE _A_.jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club representing ECE Section A. Coordinating inter-disciplinary hardware-software integration, AI edge computing, and tech events.',
      skills: ['Embedded Systems', 'IoT & Edge AI', 'Event Operations', 'Technical Coordination'],
      socials: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'm-tejashwini',
      number: '10',
      name: 'Tejashwini K M',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Computer Science & Engg',
      batch: '5th Sem CSE "D"',
      photoFileName: 'Tejashwini K M 5th Sem CSE-D.jpg',
      image: '/assets/members/Tejashwini K M 5th Sem CSE-D.jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club from 5th Semester CSE Section D. Coordinating club technical activities, code sprints, and community outreach.',
      skills: ['Frontend Engineering', 'Java / OOP', 'Hackathon Sprints', 'Community Building'],
      socials: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'm-vinisha',
      number: '11',
      name: 'Vinisha Sweedal Saldanha',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Computer Science & Engg',
      batch: 'Event Execution & Technical Team',
      photoFileName: 'Vinisha Sweedal Saldanha .jpg',
      image: '/assets/members/Vinisha Sweedal Saldanha .jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club. Managing event workflows, participant registration desks, hospitality, and technical support across flagship symposiums.',
      skills: ['Event Logistics', 'Technical Documentation', 'Member Engagement', 'Project Sprints'],
      socials: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'm-winona',
      number: '12',
      name: 'Winona Lobo',
      role: 'Core Member & Student Coordinator',
      team: 'Core Member',
      department: 'Dept of Computer Science & Engg',
      batch: '5th Sem CSE "D"',
      photoFileName: 'Winona Lobo CSE-D.jpg',
      image: '/assets/members/Winona Lobo CSE-D.jpg',
      bio: 'Core Member and Student Coordinator of AgentBlazer Club from 5th Semester CSE Section D. Supporting web platform development, design systems, and workshop facilitation.',
      skills: ['UI/UX Design', 'Web Technologies', 'Workshop Facilitation', 'Team Collaboration'],
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 'm7',
      number: '13',
      name: 'Prajwal Royston Cordiero',
      role: 'Core Committee Member',
      team: 'Core Committee',
      department: 'Dept of Computer Science & Engg',
      batch: 'Competitive Programming Lead',
      photoFileName: 'prajwal-royston-cordiero.jpg',
      image: '/assets/members/prajwal-royston-cordiero.jpg',
      bio: 'Core Committee Member of AgentBlazer Club. Active driver of algorithmic sprints, hackathon mentorship, technical hackathons, and pairing sessions for junior engineers.',
      skills: ['Competitive Programming', 'Graph Algorithms', 'Hackathon Strategy', 'Full-Stack Prototyping'],
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'm8',
      number: '14',
      name: 'Chacko P Abraham',
      role: 'Core Committee Member',
      team: 'Core Committee',
      department: 'Dept of Computer Science & Engg',
      batch: 'Open Source & Cloud Systems',
      photoFileName: 'chacko-p-abraham.jpg',
      image: '/assets/members/chacko-p-abraham.jpg',
      bio: 'Core Committee Member of AgentBlazer Club. Leading open-source incubator tracks, developer bootcamps, Git workshops, and cloud deployment pipelines.',
      skills: ['Open Source CI/CD', 'Cloud Infrastructure', 'System Programming', 'Technical Mentorship'],
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'm9',
      number: '15',
      name: 'Alma Roxane Pereira',
      role: 'Core Committee Member',
      team: 'Core Committee',
      department: 'Dept of Computer Science & Engg',
      batch: 'UI/UX & Creative Outreach',
      photoFileName: 'alma-roxane-pereira.jpg',
      image: '/assets/members/alma-roxane-pereira.jpg',
      bio: 'Core Committee Member of AgentBlazer Club. Coordinating creative tech showcases, community outreach, competition logistics, and cross-batch developer networking.',
      skills: ['Community Outreach', 'UI/UX Design Systems', 'Event Ideation', 'Creative Strategy'],
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
  ],

  // -------------------------------------------------------------------------
  // COMPETITIONS HELD (Official Posters, Tournaments & Photo Galleries)
  // -------------------------------------------------------------------------
  competitions: [
    {
      id: 'prompt-ops-2k26',
      title: '"PROMPT OPS-2K26" Competition',
      year: '2026',
      date: 'March 25, 2026',
      cover: '/assets/competitions/IMG-20260326-WA0008.jpg',
      description:
        'Organized by the AgentBlazer Club and Cipher under the guidance of Ms. Nisha J Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza, this technical competition focused on prompt engineering and AI tools (mapped to PO4, PO5, PO8, PO11). Track 1 (1st Year) featured invitation generation, logo recreation, and image recreation rounds, with Chinmayee, Chris Royston Monteiro, and Deeksha Ravi Moger taking top honors. Track 2 (2nd Year) tested students in JSON conversion, Python code debugging, and a Gemini AI security prompt extraction challenge, with Harimurali KS, Venus Suhani D’Lima, and Venisha Snehal D’Souza securing top positions.',
      photos: [
        '/assets/competitions/IMG-20260326-WA0008.jpg',
        '/assets/competitions/IMG_8888.JPG',
        '/assets/competitions/IMG_8908.JPG',
        '/assets/competitions/IMG_8912.JPG',
      ],
      tagline: 'Prompt Engineering, AI Tools, Reverse Prompting & Code Debugging',
      edition: 'Annual Technical Edition • 2026',
      category: 'Prompt Engineering & AI Tools',
      status: 'Completed',
      prizePool: 'Cash Prizes, Certificates of Excellence & Club Trophies',
      participantsCount: 'Track 1 (1st Year) & Track 2 (2nd Year) CSE Students',
      venue: 'Department of CSE Advanced Labs, SJEC',
      rulesAndHighlights: [
        'Track 1 (1st Year): Generative invitation design, vector logo recreation & visual prompt fidelity',
        'Track 2 (2nd Year): Automated JSON schema conversion, Python debugging & Gemini AI security prompt extraction',
        'Formally mapped to Academic Program Outcomes: PO4, PO5, PO8, PO11',
        'Organized jointly by AgentBlazer Club and Cipher, Dept of CSE',
      ],
      posterTheme: {
        accentColor: 'amber',
        gradient: 'from-[#FFB000]/30 via-[#E85D04]/20 to-[#0D0D0B]',
        glow: 'shadow-[0_0_50px_rgba(255,176,0,0.35)]',
      },
      coordinators: [
        { name: 'Ms. Nisha J Roche', role: 'Faculty Coordinator (AgentBlazer)' },
        { name: 'Ms. Jaishma K', role: 'Faculty Coordinator (Cipher)' },
        { name: 'Dr. Melwyn D’Souza', role: 'HOD - CSE' },
        { name: 'Ruben Saldanha', role: 'Student President' },
      ],
      winners: [
        { rank: 'Track 1 - 1st Place', teamName: 'Chinmayee', project: 'Visual Prompt Recreation & Design' },
        { rank: 'Track 1 - 2nd Place', teamName: 'Chris Royston Monteiro', project: 'Logo Recreation & Typography' },
        { rank: 'Track 1 - 3rd Place', teamName: 'Deeksha Ravi Moger', project: 'Generative Invitation Synthesis' },
        { rank: 'Track 2 - 1st Place', teamName: 'Harimurali KS', project: 'Gemini AI Security Prompt Extraction' },
        { rank: 'Track 2 - 2nd Place', teamName: 'Venus Suhani D’Lima', project: 'Python Debugging & JSON Conversion' },
        { rank: 'Track 2 - 3rd Place', teamName: 'Venisha Snehal D’Souza', project: 'Algorithmic Code Debugging' },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // TECHNICAL WORKSHOPS & BOOTCAMPS
  // -------------------------------------------------------------------------
  workshops: [
    {
      id: 'gsoc-and-llm-workshop',
      folderName: 'GSoc and LLM Workshop',
      title: 'Master the Future: Hands-on GSOC & LLMs Workshop',
      year: '2026',
      date: 'February 14, 2026',
      cover: '/assets/workshops/GSoc and LLM Workshop/ab7.jpeg',
      description:
        'Organized by the Department of CSE in association with the AgentBlazer Club, conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training, guidance on Google Summer of Code (GSOC) participation, and an in-depth dive into LLM parameters, prompt engineering strategies, RAG architecture, function calling, Gemini AI, LangChain, and Streamlit.',
      photos: [
        '/assets/workshops/GSoc and LLM Workshop/ab7.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab1.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab2.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab3.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab4.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab5.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab6.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab8.jpeg',
        '/assets/workshops/GSoc and LLM Workshop/ab9.jpeg',
      ],
      tagline: 'Google Summer of Code Mastery, LLM Prompt Engineering & Autonomous Agent Architectures',
      time: '2:00 PM – 5:00 PM IST',
      venue: 'Computer Science & Engineering Lab, St Joseph Engineering College, Mangaluru',
      locationDetails: {
        city: 'Mangaluru, Karnataka, India',
        highway: 'Panvel Kochi Kanyakumari Highway, Thiruvail',
        postalCode: 'Karnataka 575028',
        coordinates: 'Lat 12.910572, Long 74.899409',
      },
      speaker: {
        name: 'Anas Khan',
        role: 'Software Development Engineer',
        company: 'HackerRank',
        handle: '@anxkhn',
      },
      organizers: {
        department: 'Department of Computer Science & Engineering',
        club: 'The AgentBlazer Club',
        institution: 'St Joseph Engineering College, Mangaluru (An Autonomous Institution)',
        coordinators: [
          { name: 'Dr. Melwyn DSouza', title: 'HOD - CSE', role: 'Department Head & Academic Patron' },
          { name: 'Ms Nisha J Roche', title: 'Faculty Coordinator', role: 'Faculty Coordinator, AgentBlazer Club' },
          { name: 'Mr Ruben Saldanha', title: 'President', role: 'Student President, AgentBlazer Club' },
          { name: 'Ajay Preenal Dsouza', title: 'Vice President', role: 'Vice President, AgentBlazer Club' },
          { name: 'Stevin Dsouza', title: 'Tech Lead', role: 'Tech Lead, AgentBlazer Club' },
          { name: 'Prajwal Royston Cordiero', title: 'Core Committee', role: 'Core Committee Member, AgentBlazer' },
          { name: 'Chacko P Abraham', title: 'Core Committee', role: 'Core Committee Member, AgentBlazer' },
          { name: 'Alma Roxane Pereira', title: 'Core Committee', role: 'Core Committee Member, AgentBlazer' },
          { name: 'Frenny Chrystal Saldanha', title: 'Resource Head', role: 'Resource Head, AgentBlazer' },
          { name: 'Joyline Galbao', title: 'Secretary', role: 'Secretary, AgentBlazer' },
          { name: 'Chinthan N V', title: 'Media Head', role: 'Media Head, AgentBlazer' },
        ],
      },
      capacity: 'First 80 Students Shortlisted',
      curriculum: [
        'Google Summer of Code (GSoC) Blueprint: Identifying Top Mentoring Orgs & Writing Winning Proposals',
        'Open-Source Contribution Hygiene: Git branching, CI pipelines, PR reviews, and code standards',
        'Large Language Model Foundations: Transformers, embeddings, vector indexing, and zero-shot reasoning',
        'Building Real-World AI Agents: Tool-calling loops, context windows, and production deployment',
        'Career Pathways at Product Companies: Engineering interview strategies and technical portfolio creation',
      ],
      takeaways: [
        'Hands-on Git & LLM repo setup on personal machines with immediate peer code review',
        'Step-by-step proposal template vetted by past GSoC scholars and HackerRank engineers',
        'Direct 1-on-1 AMA session with Anas Khan on software engineering at scale',
        'Official SJEC & AgentBlazer Certificate of Technical Participation',
      ],
      images: [
        {
          id: 'poster',
          url: '/assets/workshops/GSoc and LLM Workshop/poster.svg',
          label: 'Official Keynote & Event Announcement Poster',
          aspectRatio: 'portrait',
          caption: 'Dept. of CSE & AgentBlazer Club presents Master The Future with Anas Khan (SDE@HackerRank)',
          stage: 'Event Poster',
        },
        {
          id: 'session-1',
          url: '/assets/workshops/GSoc and LLM Workshop/session-1.svg',
          label: 'Live Hands-On Lab Session & Speaker Keynote',
          aspectRatio: 'portrait',
          caption: 'Speaker Anas Khan presenting GSoC architectures and open-source contribution patterns at SJEC CS Lab',
          stage: 'Speaker Keynote',
        },
        {
          id: 'session-2',
          url: '/assets/workshops/GSoc and LLM Workshop/session-2.svg',
          label: 'Code Sprint & Architecture Walkthrough',
          aspectRatio: 'wide',
          caption: 'Students coding in real-time with terminals, VS Code, and live model endpoints',
          stage: 'Code Sprint',
        },
        {
          id: 'session-3',
          url: '/assets/workshops/GSoc and LLM Workshop/session-3.svg',
          label: 'Computer Lab Workstations & Group Collaboration',
          aspectRatio: 'wide',
          caption: 'Full house at St Joseph Engineering College computing laboratory during hands-on exercises',
          stage: 'Lab Session',
        },
        {
          id: 'session-4',
          url: '/assets/workshops/GSoc and LLM Workshop/session-4.svg',
          label: 'Interactive Q&A & Mentorship Discussion',
          aspectRatio: 'wide',
          caption: 'Engaged students raising hands, asking technical questions, and exploring career pathways',
          stage: 'Q&A & AMA',
        },
      ],
    },
    {
      id: 'demystifying-generative-models',
      title: '"Demystifying Generative Models" Workshop',
      year: '2026',
      date: 'March 18, 2026',
      cover: '/assets/workshops/GSoc and LLM Workshop/session-3.jpg',
      description:
        'Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI (mapped to PO4, PO6, PO7, PO11). The session detailed AI governance frameworks, transformer mechanisms, prompt engineering, Groq, Mistral AI, ChatGPT, Copilot, and an interactive 3-stage model evaluation challenge.',
      photos: [
        '/assets/workshops/GSoc and LLM Workshop/session-3.jpg',
        '/assets/workshops/GSoc and LLM Workshop/session-2.jpg',
        '/assets/workshops/GSoc and LLM Workshop/IMG_5950.JPG',
        '/assets/workshops/GSoc and LLM Workshop/IMG_5951.JPG',
      ],
      tagline: 'Peer-to-Peer Generative AI, LLM Councils & Model Architecture Sprint',
      venue: 'Department of CSE Computing Center, SJEC',
      speaker: {
        name: 'Prajwal Royston Corderio & Chacko P Abraham',
        role: 'Peer Trainers (6th Sem CSE)',
        company: 'AgentBlazer Club • Dept of CSE',
      },
    },
    {
      id: 'agentforce-workshop',
      title: 'Agentforce Workshop',
      year: '2026',
      date: 'May 22, 2026',
      cover: '/assets/workshops/GSoc and LLM Workshop/session-2.jpg',
      description:
        'Organized by the AgentBlazer Club in collaboration with Salesforce, this hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students designed Sales Email Prompt Templates, Flex Prompt Templates, and automated prompt flows for reusable AI agent execution.',
      photos: [
        '/assets/workshops/GSoc and LLM Workshop/session-2.jpg',
        '/assets/workshops/GSoc and LLM Workshop/session-1.jpg',
        '/assets/workshops/GSoc and LLM Workshop/IMG_5949.JPG',
        '/assets/workshops/GSoc and LLM Workshop/IMG_5952.JPG',
      ],
      tagline: 'Autonomous AI Agents & Enterprise Prompt Flows on Salesforce Trailhead',
      venue: 'SJEC Advanced Computer Labs & Online Environment',
      speaker: {
        name: 'Ms. Nisha Roche & Mr. Ruben Saldanha',
        role: 'Faculty & Student Coordinators',
        company: 'AgentBlazer Club & Salesforce',
      },
    },
    {
      id: 'editable-workshop-placeholder',
      title: 'New Technical Workshop',
      year: '2026',
      date: 'AY 2025–26 / Upcoming',
      cover: '/assets/workshops/GSoc and LLM Workshop/poster.jpg',
      description:
        '[Editable Entry] Add new workshop title, dates, descriptions, cover image, and full gallery photos directly in src/data/clubData.ts without altering component code.',
      photos: [
        '/assets/workshops/GSoc and LLM Workshop/poster.jpg',
        '/assets/workshops/GSoc and LLM Workshop/IMG-20260213-WA0000.jpg',
      ],
      isEditablePlaceholder: true,
    },
  ],
  events: [
    {
      id: 'cyber-security-pathway-2026',
      title: 'Cyber Security and Carrier Pathway',
      date: 'March 14–15, 2026',
      category: 'Flagship Fest',
      status: 'Upcoming',
      description:
        'Our premier technical symposium & CTF competition combining deep-dive ethical hacking, blue-team defense arenas, and direct cyber security career roadmaps.',
      longDescription:
        'Cyber Security and Carrier Pathway is the hallmark technical event of the CSE Department and AgentBlazer Club. Featuring specialized tracks in red teaming, network vulnerability analysis, cryptographic challenges, and interactive sessions with industry cybersecurity architects detailing career opportunities.',
      image: '/assets/competitions/IMG-20260326-WA0008.jpg',
      attendeesCount: '600+ Students & Hackers',
      location: 'Main Auditorium & CS Labs',
      highlights: ['₹50,000 Prize Pool', 'Live CTF Arena', 'Career Roadmaps & Masterclass', 'Industry Security Certifications'],
    },
    {
      id: 'agentic-bootcamp',
      title: 'Agentic Workflows & Multi-Agent Swarms',
      date: 'February 20, 2026',
      category: 'Workshop',
      status: 'Completed',
      description:
        'A packed 5-hour hands-on deep dive building production agent pipelines with Python, memory stores, and vector embeddings.',
      longDescription:
        'Over 180 students brought laptops to wire up custom tool-calling agents, simulate collaborative swarms, and deploy serverless endpoints on cloud infra.',
      image: '/assets/workshops/GSoc and LLM Workshop/session-1.jpg',
      attendeesCount: '185 Students',
      location: 'Advanced Computing Lab 4',
      highlights: ['Hands-on Codebase', 'API Credits Sponsored', 'Certificate of Completion'],
    },
    {
      id: 'code-sprint-spring',
      title: 'CodeSprint Algo Challenge: Spring Edition',
      date: 'January 28, 2026',
      category: 'Hackathon',
      status: 'Completed',
      description:
        'A high-intensity 4-hour speed-coding championship testing algorithmic efficiency, graph traversal, and dynamic programming.',
      longDescription:
        '5 problem sets designed by competitive programming veterans. Real-time dynamic leaderboard projected live in the seminar hall.',
      image: '/assets/competitions/IMG_8888.JPG',
      attendeesCount: '140 Contestants',
      location: 'Virtual + CS Hall 1',
      highlights: ['Speed Leaderboard', 'Tech Swag & Trophies', 'Post-contest Editorial'],
    },
    {
      id: 'web3-cloud-symposium',
      title: 'Decentralized Systems & Edge Cloud Summit',
      date: 'November 18, 2025',
      category: 'Tech Talk',
      status: 'Completed',
      description:
        'Keynote addresses and live panel discussions with senior alumni working at leading cloud and distributed systems companies.',
      longDescription:
        'Explored the shift from monolithic architectures to serverless edge nodes, peer-to-peer databases, and resilient container clustering.',
      image: '/assets/workshops/GSoc and LLM Workshop/session-2.jpg',
      attendeesCount: '220 Attendees',
      location: 'CSE Seminar Complex',
      highlights: ['Keynote by Cloud Architects', 'Networking High-Tea', 'Q&A Panel'],
    },
    {
      id: 'devforge-hackathon',
      title: 'DevForge: Open Source Sprint',
      date: 'September 22, 2025',
      category: 'Bootcamp',
      status: 'Completed',
      description:
        'Mentored weekend sprint where first-year and sophomore students solved real issues across open-source repositories.',
      longDescription:
        'Over 90 successful pull requests merged across global open-source libraries, tooling, and internal club infrastructure.',
      image: '/assets/workshops/GSoc and LLM Workshop/session-3.jpg',
      attendeesCount: '110 Juniors',
      location: 'Innovation Hub',
      highlights: ['90+ Pull Requests Merged', '1-on-1 Senior Mentorship', 'Git Masterclasses'],
    },
  ],

  // -------------------------------------------------------------------------
  // PHOTO GALLERY (Asymmetric & Masonry Layout)
  // -------------------------------------------------------------------------
  gallery: [
    {
      id: 'g1',
      title: 'Midnight Code Jam at BlazeHack',
      caption: 'Squads collaborating past 2 AM solving stubborn concurrency bugs.',
      category: 'Hackathon',
      aspectRatio: 'landscape',
      featured: true,
      imageUrl: '/assets/competitions/IMG-20260326-WA0008.jpg',
    },
    {
      id: 'g2',
      title: 'Agentic AI Workshop in Session',
      caption: 'Full house at Lab 4 debugging multi-agent memory graphs.',
      category: 'Workshops',
      aspectRatio: 'portrait',
      imageUrl: '/assets/ab1.jpeg',
    },
    {
      id: 'g3',
      title: 'Grand Finale Trophy Celebration',
      caption: 'AgentBlazer teams capturing the 1st place championship trophy.',
      category: 'Celebrations',
      aspectRatio: 'square',
      imageUrl: '/assets/competitions/IMG_8912.JPG',
    },
    {
      id: 'g4',
      title: 'Live Hardware & IoT Demo',
      caption: 'Integrating microcontrollers with real-time web telemetry.',
      category: 'Project Demos',
      aspectRatio: 'wide',
      imageUrl: '/assets/ab3.jpeg',
    },
    {
      id: 'g5',
      title: 'Design Critique & UI Review',
      caption: 'Pixel-perfect wireframing and micro-interaction polish.',
      category: 'Campus Life',
      aspectRatio: 'portrait',
      imageUrl: '/assets/ab4.jpeg',
    },
    {
      id: 'g6',
      title: 'Keynote Speaker Session',
      caption: 'Interactive tech talk on modern distributed computing paradigms.',
      category: 'Workshops',
      aspectRatio: 'landscape',
      imageUrl: '/assets/ab7.jpeg',
    },
    {
      id: 'g7',
      title: 'Team Huddle in the Innovation Lab',
      caption: 'Weekly sprint planning and roadmap alignment across domains.',
      category: 'Campus Life',
      aspectRatio: 'square',
      imageUrl: '/assets/ab8.jpeg',
    },
    {
      id: 'g8',
      title: 'Algo Speed Showdown',
      caption: 'Rapid submission buzzer in the final 10 minutes of the contest.',
      category: 'Hackathon',
      aspectRatio: 'landscape',
      imageUrl: '/assets/competitions/IMG_8908.JPG',
    },
  ],

  // -------------------------------------------------------------------------
  // VIDEOS SECTION
  // -------------------------------------------------------------------------
  videos: [
    {
      id: 'v1',
      title: 'AgentBlazer Club: Official 2026 Reel',
      description: 'A cinematic journey through our hackathons, sleepless build nights, workshops, and tech triumphs.',
      duration: '02:45',
      posterUrl: '/assets/workshops/GSoc and LLM Workshop/session-3.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      category: 'Aftermovie',
      date: 'February 2026',
    },
    {
      id: 'v2',
      title: 'BlazeHack 2025: Highlights & Winner Showcases',
      description: '36 hours condensed into 3 minutes of pure engineering passion, product demos, and victory celebrations.',
      duration: '03:15',
      posterUrl: '/assets/competitions/IMG-20260326-WA0008.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Hackathon Recap',
      date: 'October 2025',
    },
    {
      id: 'v3',
      title: 'Workshop Stream: Building Autonomous Multi-Agent Swarms',
      description: 'Watch our technical lead explain agent architectures, prompt reasoning chains, and real-time execution.',
      duration: '45:10',
      posterUrl: '/assets/workshops/GSoc and LLM Workshop/ab7.jpeg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      category: 'Masterclass',
      date: 'January 2026',
    },
  ],

  // -------------------------------------------------------------------------
  // VISUAL JOURNEY: LEARN -> BUILD -> COMPETE -> CREATE -> GROW
  // -------------------------------------------------------------------------
  journeyStages: [
    {
      stage: '01',
      actionWord: 'LEARN',
      title: 'Demystifying the Bleeding Edge',
      description:
        'Every member starts with interactive bootcamps covering core CS fundamentals, git hygiene, algorithms, and emerging frameworks.',
      statsHighlight: '100% Peer-to-Peer Learning',
    },
    {
      stage: '02',
      actionWord: 'BUILD',
      title: 'Architecting Real Production Software',
      description:
        'Theory transforms into code. We build open-source tools, campus utilities, AI applications, and distributed services together.',
      statsHighlight: '60+ Active Code Repos',
    },
    {
      stage: '03',
      actionWord: 'COMPETE',
      title: 'Conquering the National Hackathon Arena',
      description:
        'Cross-disciplinary teams assemble to compete at high-stakes hackathons, algorithmic contests, and security CTFs.',
      statsHighlight: '28+ National Podiums',
    },
    {
      stage: '04',
      actionWord: 'CREATE',
      title: 'Crafting Experiences with Soul & Identity',
      description:
        'Engineering meets art. From 3D web graphics to seamless UI interactions, we prioritize high-craft aesthetics in everything we ship.',
      statsHighlight: 'Award-Winning UI/UX',
    },
    {
      stage: '05',
      actionWord: 'GROW',
      title: 'Launching Industry Leaders & Researchers',
      description:
        'Club alumni lead engineering teams at premier tech companies, launch venture-backed startups, and publish groundbreaking research.',
      statsHighlight: 'Lifelong Alumni Network',
    },
  ],

  // -------------------------------------------------------------------------
  // SOCIAL LINKS & CONTACT
  // -------------------------------------------------------------------------
  socialLinks: {
    github: 'https://github.com/agentblazer-club',
    linkedin: 'https://linkedin.com/company/agentblazer-club',
    instagram: 'https://instagram.com/agentblazer_club',
    twitter: 'https://twitter.com/agentblazer',
    youtube: 'https://youtube.com/@agentblazer-club',
    discord: 'https://discord.gg/agentblazer',
    email: 'agentblazer.club@college.edu',
  },

  contactEmail: 'agentblazer.club@college.edu',
  discordInviteUrl: 'https://discord.gg/agentblazer',
  registrationUrl: '#join',
};
