import { ServiceCategory, MaterialSwatch, GalleryItem, CategoryKey } from './types';
import residentialLivingImg from './assets/images/residential_chandelier_living_1791894581991.jpg';
import residentialKitchenImg from './assets/images/residential_kitchen_pendant_1791894607312.jpg';
import residentialBedroomImg from './assets/images/residential_bedroom_sconces_1791894637703.jpg';
import outdoorSconcesImg from './assets/images/outdoor_updown_sconces_1791893660132.jpg';
import outdoorPathwayImg from './assets/images/outdoor_pathway_garden_1791893612037.jpg';
import outdoorLanternsImg from './assets/images/outdoor_wall_lanterns_1791893636826.jpg';
import commercialHighbayImg from './assets/images/commercial_highbay_facility_1791894123075.jpg';
import commercialTrofferImg from './assets/images/commercial_led_troffer_1791894211727.jpg';
import commercialLinearImg from './assets/images/commercial_linear_light_1791894210030.jpg';
import magneticTrackHeroImg from './assets/images/magnetic_track_light_hero_1791955608196.jpg';

export const HERO_IMAGES = {
  residential: residentialLivingImg,
  commercial: commercialLinearImg,
  outdoor: outdoorSconcesImg,
  headingBg: magneticTrackHeroImg,
};

export const RESIDENTIAL_FIXTURES = [
  'Chandeliers',
  'Flush mounts',
  'Semi-flush mounts',
  'Pendant lights',
  'Recessed downlights',
  'Track lighting',
  'Under-cabinet lights',
  'Wall sconces',
  'Table lamps',
  'Floor lamps',
  'Vanity lights',
  'Cove lighting',
];

export const COMMERCIAL_FIXTURES = [
  'LED troffers',
  'Linear suspended lights',
  'High bay lights',
  'Low bay lights',
  'Flat panel lights',
  'Emergency exit lights',
  'Track showcase lights',
  'Recessed architectural slots',
  'Grid ceiling panels',
  'Vapor-tight fixtures',
];

export const OUTDOOR_FIXTURES = [
  'Floodlights',
  'Landscape spotlights',
  'Bollard lights',
  'Wall lanterns',
  'Step lights',
  'Post top lights',
  'String lights',
  'Path lights',
  'Well lights',
  'Security motion lights',
  'Deck lights',
  'Bulkhead lights',
];

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  'light-residential': 'Residential Lights',
  'light-commercial': 'Commercial Lights',
  'light-outdoor': 'Outdoor Lights',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'light-residential',
    title: 'Residential Lights',
    divisionNumber: '01',
    group: 'lighting',
    shortDesc: 'Chandeliers, flush mounts, pendant lights, downlights, sconces, and ambient cove lighting.',
    fullDesc: 'Comprehensive home illumination designed for luxury penthouses, villas, and apartments. From statement dining chandeliers to glare-free recessed downlights and ambient cove lighting.',
    fixtures: RESIDENTIAL_FIXTURES,
    features: [
      'High CRI > 95 for True Natural Color Rendering',
      'Smooth 0-10V, Phase, & DALI Flicker-Free Dimming',
      'Warm White (2700K - 3000K) & Human Centric Tunable White',
      'Architectural Finishes: Matte Black, Brushed Brass, White'
    ],
    recommendedMaterials: [
      'Solid Brass & Brushed Aluminum',
      'PMMA Anti-Glare Honeycomb Louver',
      'Frosted Optical Diffusers',
      'Triac & 48V Magnetic Drivers'
    ],
    images: [
      {
        url: residentialLivingImg,
        caption: 'Luxury Penthouse Living & Dining: Statement Architectural Chandelier, Perimeter Cove Ceiling Lighting & Glare-Free Recessed Downlights',
      },
      {
        url: residentialKitchenImg,
        caption: 'Modern Island & Kitchen: Suspended Brass Linear Pendant Lights, Warm LED Under-Cabinet Task Strips & Flush Ceiling Downlights',
      },
      {
        url: residentialBedroomImg,
        caption: 'Master Suite Bedroom: Architectural Bedside Wall Sconces, Concealed Headboard Cove Lighting, Recessed Micro Downlights & Table Lamps',
      }
    ]
  },
  {
    id: 'light-commercial',
    title: 'Commercial Lights',
    divisionNumber: '02',
    group: 'lighting',
    shortDesc: 'LED troffers, linear suspended lights, high bay lights, flat panel lights, and emergency fixtures.',
    fullDesc: 'Engineered commercial illumination for corporate headquarters, open workstations, boardrooms, retail showrooms, and industrial facilities with certified glare-free optics.',
    fixtures: COMMERCIAL_FIXTURES,
    features: [
      'UGR < 19 Low-Glare Optics for Screen Ergonomics',
      'High System Efficacy up to 140 Lumens / Watt',
      'Continuous Suspended Linear Runs & Architectural Slots',
      'Emergency Battery Backups & Smart DALI-2 Controls'
    ],
    recommendedMaterials: [
      'Extruded Aero-Grade Aluminum Housing',
      'Prismatic Micro-Structured Diffusers',
      'Isolated Constant-Current Drivers',
      'Vapor-Proof Sealed Enclosures'
    ],
    images: [
      {
        url: commercialLinearImg,
        caption: 'Continuous Suspended Linear Lights & Architectural Ceiling Slots in Modern Corporate Office',
      },
      {
        url: commercialTrofferImg,
        caption: 'Flush Recessed LED Troffers & Acoustic Grid Ceiling Panels in Workstation Floor',
      },
      {
        url: commercialHighbayImg,
        caption: 'Heavy-Duty High Bay Lights & Industrial Low Bay Luminaires in High-Ceiling Facility',
      }
    ]
  },
  {
    id: 'light-outdoor',
    title: 'Outdoor Lights',
    divisionNumber: '03',
    group: 'lighting',
    shortDesc: 'Floodlights, landscape spotlights, bollard lights, wall lanterns, step lights, and bulkhead fixtures.',
    fullDesc: 'Weatherproof exterior luminaires certified IP65 to IP68 for gardens, building facades, stone walls, pedestrian walkways, and outdoor recreation decks.',
    fixtures: OUTDOOR_FIXTURES,
    features: [
      'IP65 / IP67 / IP68 Waterproof & Dust-tight Enclosures',
      'Marine-Grade Cast Brass & Die-Cast Aluminum Bodies',
      'Safe 12V / 24V Low Voltage Landscape Power Distribution',
      'PIR Security Motion Sensor & Dusk-to-Dawn Automation'
    ],
    recommendedMaterials: [
      'Solid Cast Brass & Marine Anodized Aluminum',
      'Tempered Borosilicate Glass Lens',
      'Anti-Corrosion Powder Coating',
      'Silicone Compression O-Ring Gaskets'
    ],
    images: [
      {
        url: outdoorSconcesImg,
        caption: 'Exterior Natural Stone Wall Up & Down Accent Sconces with Walkway Bollards',
      },
      {
        url: outdoorPathwayImg,
        caption: 'Garden Gravel Pathway Step Lights, Under-Cap Retaining Strips & Pergola String Lights',
      },
      {
        url: outdoorLanternsImg,
        caption: 'Timber Fence Architectural Wall Lanterns & Botanical Garden Illumination',
      }
    ]
  }
];

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'swatch-opt-1',
    name: 'Anodized Architectural Aluminum Housing',
    categoryGroup: 'lighting',
    colorTag: 'optical',
    finish: 'Matte Jet Black & Deep Anodized Finish',
    durability: 'Corrosion Proof Rapid Heat Dissipation',
    idealFor: 'Recessed Downlights, Linear Suspended Profiles, Track Showcases',
    description: 'Aero-grade aluminum housing that acts as a continuous heat sink, prolonging LED chip lifespan up to 50,000 hours.'
  },
  {
    id: 'swatch-opt-2',
    name: 'PMMA Optical Opal & Micro-Prism Diffuser',
    categoryGroup: 'lighting',
    colorTag: 'optical',
    finish: 'Satin Micro-Etched Anti-Glare Surface',
    durability: 'Anti-Yellowing UV Resistant',
    idealFor: 'LED Troffers, Flat Panel Lights, Cove Lighting, Suspended Runs',
    description: 'High-transmission optical acrylic lens that blends individual LED diodes into a smooth, dotless, low-glare beam.'
  },
  {
    id: 'swatch-warm-1',
    name: 'High CRI > 95 Warm White COB LED Engine',
    categoryGroup: 'lighting',
    colorTag: 'warm',
    finish: '2700K - 3000K Soft Golden Glow',
    durability: '50,000+ Burning Hours Guarantee',
    idealFor: 'Chandeliers, Pendants, Recessed Downlights, Wall Sconces',
    description: 'Museum-grade color rendering LED chips reproducing accurate fabric textures, wood grain tones, and human skin warmth.'
  },
  {
    id: 'swatch-cool-1',
    name: 'Weatherproof Solid Cast Brass Body',
    categoryGroup: 'lighting',
    colorTag: 'neutral',
    finish: 'Aged Weathered Brass Patina / IP68 Sealed',
    durability: 'Submersible & Coastal Salt Spray Certified',
    idealFor: 'Landscape Spotlights, Pathway Bollards, Well Lights, Step Lights',
    description: 'Natural solid cast brass that never rusts or flakes, aging gracefully in rain, sprinkler water, and outdoor gardens.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Residential Architectural Lighting Setup',
    category: 'light-residential',
    group: 'lighting',
    imageUrl: residentialLivingImg,
    location: 'Whitefield Penthouse, Bengaluru',
    dimensions: '3000K Warm CRI>95 Lighting Setup',
    description: 'Chandeliers, recessed downlights, track lighting, and under-cabinet warm cove illumination.'
  },
  {
    id: 'gal-2',
    title: 'Commercial Office Linear Suspended Grid',
    category: 'light-commercial',
    group: 'lighting',
    imageUrl: commercialLinearImg,
    location: 'Outer Ring Road Tech Park, Bengaluru',
    dimensions: '4000K Neutral UGR<19 LED Troffers & Linear Runs',
    description: 'Continuous linear suspended lights, recessed architectural slots, and grid ceiling panels.'
  },
  {
    id: 'gal-3',
    title: 'Outdoor Architectural Landscape & Wall Illumination',
    category: 'light-outdoor',
    group: 'lighting',
    imageUrl: outdoorSconcesImg,
    location: 'Sadashivanagar Villa, Bengaluru',
    dimensions: 'IP67 Up/Down Sconces, Step Lights & Path Bollards',
    description: 'Outdoor stone wall up-and-down sconces, gravel pathway step lights, under-cap retaining strips, and fence lanterns.'
  }
];
