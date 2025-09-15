export interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'guidance' | 'community' | 'practical' | 'wellness';
  details: {
    subtitle: string;
    content: string[];
    actionText: string;
    actionLink: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';

export interface AppState {
  expandedCards: Set<string>;
  theme: Theme;
  isMobileMenuOpen: boolean;
}