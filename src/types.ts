export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  span?: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
