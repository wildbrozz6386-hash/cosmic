export type CategoryKey = 
  | 'light-residential'
  | 'light-commercial'
  | 'light-outdoor';

export type CraftGroup = 'lighting';

export interface LightingFixtureItem {
  name: string;
  desc?: string;
  application?: string;
}

export interface ServiceCategory {
  id: CategoryKey;
  title: string;
  divisionNumber: string;
  group: CraftGroup;
  shortDesc: string;
  fullDesc: string;
  fixtures: string[];
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
  colorTag: 'warm' | 'neutral' | 'cool' | 'optical';
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
  selectedFixture?: string;
  dimensionsWidth?: string;
  dimensionsHeight?: string;
  materialFinish?: string;
  quantity?: number;
  details: string;
}
