export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  discord?: string;
  email?: string;
}

export interface ClubMember {
  id: string;
  number: string; // e.g. "01", "02"
  name: string;
  role: string;
  team: 'Faculty Coordinator' | 'Core Leadership' | 'Technical Lead' | 'Core Committee' | 'Resource Management' | 'Media & Design' | 'Event Operations' | 'Core Member';
  photoFileName?: string; // Exact uploaded filename, e.g. "Ruben Saldanha.jpg"
  department?: string; // e.g. "5th Sem CSE 'A'", "Dept of CSE", "ECE 'A'"
  batch?: string;
  image?: string; // Path or URL to photo; if undefined, elegant avatar fallback is rendered
  bio?: string;
  skills: string[];
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
}

export interface ClubCompetition {
  id: string;
  title: string;
  year?: string;
  date?: string;
  cover: string;
  photos: string[];
  description: string;
  posterName?: string;
  posterUrl?: string;
  tagline?: string;
  edition?: string;
  category?: string;
  status?: 'Completed' | 'Upcoming' | 'Live Now';
  prizePool?: string;
  participantsCount?: string;
  venue?: string;
  rulesAndHighlights?: string[];
  posterTheme?: {
    accentColor: string;
    gradient: string;
    glow: string;
  };
  coordinators?: {
    name: string;
    role: string;
  }[];
  winners?: {
    rank: string;
    teamName: string;
    project: string;
  }[];
  isEditablePlaceholder?: boolean;
}

export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  category: 'Hackathon' | 'Workshop' | 'Tech Talk' | 'Bootcamp' | 'Flagship Fest';
  description: string;
  longDescription?: string;
  image: string;
  attendeesCount?: string;
  status: 'Completed' | 'Upcoming' | 'Annual';
  highlights: string[];
  location?: string;
}

export interface ClubGalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Hackathon' | 'Workshops' | 'Campus Life' | 'Project Demos' | 'Celebrations';
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  featured?: boolean;
}

export interface ClubVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  posterUrl: string;
  videoUrl?: string; // mp4 or youtube embed URL
  youtubeId?: string;
  category: string;
  date: string;
}

export interface ClubActivity {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  skills: string[];
  projectCount: string;
  gradient: string;
  stats: string;
}

export interface ClubStat {
  label: string;
  value: string;
  description: string;
}

export interface ClubMilestone {
  stage: string;
  actionWord: 'LEARN' | 'BUILD' | 'COMPETE' | 'CREATE' | 'GROW';
  title: string;
  description: string;
  statsHighlight: string;
}

export interface WorkshopImageItem {
  id: string;
  url: string;
  label: string;
  aspectRatio: 'portrait' | 'landscape' | 'wide';
  caption?: string;
  stage?: string;
}

export interface ClubWorkshop {
  id: string;
  title: string;
  year?: string;
  date?: string;
  cover: string;
  description?: string;
  photos: string[];
  folderName?: string; // e.g. "GSoc and LLM Workshop"
  tagline?: string;
  time?: string;
  venue?: string;
  category?: string;
  locationDetails?: {
    city?: string;
    highway?: string;
    postalCode?: string;
    coordinates?: string;
  };
  speaker?: {
    name: string;
    role?: string;
    company?: string;
    handle?: string;
  };
  organizers?: {
    department?: string;
    club?: string;
    institution?: string;
    coordinators?: {
      name: string;
      title?: string;
      role?: string;
    }[];
  };
  capacity?: string;
  curriculum?: string[];
  takeaways?: string[];
  images?: WorkshopImageItem[];
  isEditablePlaceholder?: boolean;
}

export interface AnnualReportItem {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  category: 'Inauguration' | 'Technical Session' | 'Workshop' | 'Competition';
  referenceCode?: string;
  poMapping?: string[];
  organizers: string;
  dignitariesOrSpeakers?: string;
  summary: string;
  highlights: string[];
  keyPeople: { name: string; role: string }[];
  winners?: { track: string; ranks: string[] }[];
}

export interface AnnualActivityReport {
  institution: string;
  department: string;
  location: string;
  postalCode: string;
  clubName: string;
  title: string;
  academicYear: string;
  overview: string;
  entries: AnnualReportItem[];
}

export interface ClubData {
  clubName: string;
  clubShortName: string;
  department: string;
  collegeName: string;
  tagline: string;
  secondaryTagline: string;
  logo: {
    svgPath: string;
    pngPath?: string;
    fullLogoPath?: string;
    transparentPath?: string;
    alt: string;
  };
  description: string;
  mission: string;
  vision: string;
  corePillars: {
    title: string;
    description: string;
  }[];
  stats: ClubStat[];
  annualReport?: AnnualActivityReport;
  activities: ClubActivity[];
  members: ClubMember[];
  competitions: ClubCompetition[];
  workshops?: ClubWorkshop[];
  events: ClubEvent[];
  gallery: ClubGalleryItem[];
  videos: ClubVideo[];
  journeyStages: ClubMilestone[];
  socialLinks: SocialLinks;
  contactEmail: string;
  discordInviteUrl?: string;
  registrationUrl?: string;
}
