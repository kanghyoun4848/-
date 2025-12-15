export interface Listing {
  id: string;
  title: string;
  category: 'Land' | 'House' | 'Commercial';
  price: string;
  location: string;
  area: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ConsultingStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}