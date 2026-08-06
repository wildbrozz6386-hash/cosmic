export type CategoryKey = 
  // Wall Design
  | 'wall-art' 
  | 'wall-gallery' 
  | 'wall-printing' 
  | 'wallpaper' 
  // Electrical
  | 'elec-distribution'
  | 'wiring-materials'
  | 'switches-sockets'
  | 'circuit-protection'
  // Lighting
  | 'light-residential'
  | 'light-commercial'
  | 'light-garden'
  | 'light-strip'
  // Appliance
  | 'app-fans'
  | 'app-ac'
  | 'app-stoves'
  | 'app-chimneys';

export type CraftGroup = 'wall' | 'electrical' | 'lighting' | 'appliance';

export interface ServiceCategory {
  id: CategoryKey;
  title: string;
  group: CraftGroup;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  recommendedMaterials: string[];
  basePricePerSqFt?: number;
  images: {
    url: string;
    caption: string;
    aspectRatio?: string;
  }[];
}

export interface MaterialSwatch {
  id: string;
  name: string;
  categoryGroup: CraftGroup;
  colorTag: 'yellow' | 'orange' | 'blue' | 'green';
  finish: string;
  durability: string;
  idealFor: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: CategoryKey;
  group: CraftGroup;
  imageUrl: string;
  location: string;
  dimensions?: string;
  description: string;
}

export interface QuoteBrief {
  name: string;
  phone: string;
  projectType: string;
  dimensionsWidth?: string;
  dimensionsHeight?: string;
  materialFinish?: string;
  quantity?: number;
  details: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  projectType: string;
  rating: number;
}
