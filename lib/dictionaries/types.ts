export type NavLink = {
  href: string;
  label: string;
};

export type CareerEntry = {
  id: string;
  team: string;
  years: string;
  role: string;
  league: string;
  achievements: string[];
  stats?: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
};

export type HighlightMoment = {
  title: string;
  description: string;
  stat: string;
};

export type SeasonStat = {
  label: string;
  value: string;
};

export type SeasonHighlight = {
  title: string;
  description: string;
  highlight: boolean;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: NavLink[];
  hero: {
    name: string;
    number: number;
    position: string;
    currentTeam: string;
    currentLeague: string;
    profileImage: string;
    discoverMore: string;
    scrollDown: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio: string;
    infoCards: {
      birthPlace: { label: string; value: string };
      birthDate: { label: string; value: string };
      height: { label: string; value: string };
      nationality: { label: string; value: string };
      position: { label: string; value: string };
    };
  };
  timeline: {
    title: string;
    subtitle: string;
    entries: CareerEntry[];
  };
  videos: {
    title: string;
    subtitle: string;
    items: VideoItem[];
    moments: HighlightMoment[];
  };
  stats: {
    title: string;
    subtitle: string;
    items: StatItem[];
    nationalTeam: {
      title: string;
      description: string;
    };
  };
  currentSeason: {
    title: string;
    subtitle: string;
    stats: SeasonStat[];
    highlights: SeasonHighlight[];
  };
  footer: {
    name: string;
    number: number;
    links: {
      team: string;
      wikipedia: string;
      wikipediaUrl: string;
    };
  };
};
