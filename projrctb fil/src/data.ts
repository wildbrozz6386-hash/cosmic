import { ServiceCategory, MaterialSwatch, GalleryItem, Testimonial, CategoryKey } from './types';

import heroWallArtImg from './assets/images/wall_art_hero_1785928233932.jpg';
import electricalImg from './assets/images/electrical_switches_panel_1785929905624.jpg';
import lightingImg from './assets/images/lighting_architectural_1785929943202.jpg';
import applianceImg from './assets/images/modern_appliances_1785929956005.jpg';
import yellowCablesImg from './assets/images/yellow_cables_wires_1785932874110.jpg';
import dbPanelImg from './assets/images/distribution_db_panel_1785932887702.jpg';

export const HERO_IMAGES = {
  wallArt: heroWallArtImg,
  electrical: yellowCablesImg,
  lighting: lightingImg,
  appliance: applianceImg,
};

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  // Wall Design
  'wall-art': 'Wall Art (Canvas Prints & Frames)',
  'wall-gallery': 'Wall Gallery Layouts',
  'wall-printing': 'Direct Wall Printing',
  'wallpaper': 'Wallpaper Wall Art',
  // Electrical
  'elec-distribution': 'Electrical Distribution',
  'wiring-materials': 'Wiring Materials',
  'switches-sockets': 'Switches & Sockets',
  'circuit-protection': 'Circuit Protection & MCBs',
  // Lighting
  'light-residential': 'Residential Lighting',
  'light-commercial': 'Commercial Lighting',
  'light-garden': 'Garden & Landscape Lighting',
  'light-strip': 'Architectural & Strip Lights',
  // Appliance
  'app-fans': 'Ceiling & Exhaust Fans',
  'app-ac': 'Air Conditioners & Coolers',
  'app-stoves': 'Gas Stoves & Hobs',
  'app-chimneys': 'Kitchen Chimneys',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  // ================= WALL DESIGN =================
  {
    id: 'wall-art',
    title: 'Wall Art',
    group: 'wall',
    shortDesc: 'Custom canvas prints, framed fine art, and statement gallery murals.',
    fullDesc: 'Museum-grade cotton canvas art prints, floating teak frames, and metallic acoustic panels. Color-calibrated and printed with 12-color pigment HD inks.',
    features: [
      '380 GSM Pure Cotton Archival Canvas',
      'Solid Teakwood & Matte Black Floating Frames',
      'Fade-resistant 12-color Pigment HD Printing',
      'Scratch-resistant Protective UV Coating'
    ],
    recommendedMaterials: ['380 GSM Cotton Canvas', 'Fine Art Matte Board', 'Teak Floating Frame'],
    images: [
      {
        url: heroWallArtImg,
        caption: 'Luxury Minimalist Stretched Canvas in Living Suite',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        caption: 'Abstract Architectural Canvas Art with Teak Frame',
      }
    ]
  },
  {
    id: 'wall-gallery',
    title: 'Wall Gallery Layouts',
    group: 'wall',
    shortDesc: 'Curated photo grid walls and multi-frame displays with 1:1 hanging templates.',
    fullDesc: 'Coordinated memory walls and family photo grids. Includes precision hanging stencil guides and anti-glare museum glass.',
    features: [
      '1:1 Scale Hanging Stencil Template Included',
      'Matching Aluminum & Wooden Frames',
      'Custom Layout Proportions (Grids, Asymmetric)',
      'Free Color Correction & Enhancement'
    ],
    recommendedMaterials: ['260GSM Satin Photo Paper', 'Acid-Free Matboard', 'Anti-Glare Acrylic'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        caption: 'Monochrome Photography Gallery Grid on Neutral Wall',
      }
    ]
  },
  {
    id: 'wall-printing',
    title: 'Direct Wall Printing',
    group: 'wall',
    shortDesc: 'Vertical UV printing directly onto plaster, brick, wood, tiles or glass.',
    fullDesc: 'Mobile vertical UV printer applies pigment inks directly onto interior or exterior wall surfaces with zero drying wait time and no peeling seams.',
    features: [
      'Direct-to-Wall Vertical Printing up to 3.5m Height',
      'Prints on Plaster, Exposed Brick, Wood & Glass',
      'Instant UV-cured Inks - Odorless & Waterproof',
      'Non-toxic & Washable Surface'
    ],
    recommendedMaterials: ['Direct UV Pigment on Smooth Plaster', 'Direct-on-Glass Matte Finish'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80',
        caption: 'Direct UV Wall Print Mural in Bengaluru Cafe',
      }
    ]
  },
  {
    id: 'wallpaper',
    title: 'Wallpaper Wall Art',
    group: 'wall',
    shortDesc: 'Seamless custom-measured wallpapers and textured feature wall murals.',
    fullDesc: 'Tailor-made wall coverings printed exactly to room dimensions. Choose between embossed leather, linen weave, or eco non-woven paper.',
    features: [
      'Zero-Overlap Precision Panel Matching',
      'Textured Finishes (Linen, Leather, Matte Sand)',
      'Odorless Water-based Latex Inks',
      'Easy to Wipe Clean and Washable'
    ],
    recommendedMaterials: ['Non-Woven Embossed Paper', 'Textured Linen Wallpaper'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        caption: 'Textured Tropical Leaves Wallpaper in Master Suite',
      }
    ]
  },

  // ================= ELECTRICAL =================
  {
    id: 'elec-distribution',
    title: 'Electrical Distribution',
    group: 'electrical',
    shortDesc: 'Heavy-duty distribution boards (DB), main switchgear, and panel enclosures.',
    fullDesc: 'High-safety electrical distribution panels, load break switches, phase selectors, and industrial-grade DB boxes engineered for residential villas and commercial complexes.',
    features: [
      'IP65 Flame-retardant Metal Enclosures',
      '3-Phase & Single-Phase DB Assemblies',
      'Busbar Chambers with High Current Ratings',
      'IS / IEC Standard Certified Components'
    ],
    recommendedMaterials: ['CRCA Sheet Metal Powder-Coated DB', 'Copper Busbar Assemblies'],
    images: [
      {
        url: dbPanelImg,
        caption: 'Flush Wall-Mounted White Electrical Distribution Board Panel with Open Cover & MCBs',
      },
      {
        url: yellowCablesImg,
        caption: 'JURO Cables - High Safety Yellow Multi-Strand Copper Power Wires',
      },
      {
        url: electricalImg,
        caption: 'Modular Electrical Switches Panel',
      }
    ]
  },
  {
    id: 'wiring-materials',
    title: 'Wiring Materials',
    group: 'electrical',
    shortDesc: 'Fire-resistant copper wires, armored cables, and flexible conduit piping.',
    fullDesc: '100% electrolytic grade multi-strand copper wires with FR-LSH (Flame Retardant Low Smoke Zero Halogen) insulation for maximum electrical safety.',
    features: [
      '100% Electrolytic Bare Copper Conductors',
      'FR-LSH Fire Resistant Outer Insulation',
      'High Current-Carrying Capacity',
      'Zero Toxic Halogen Gas Emission on Overheat'
    ],
    recommendedMaterials: ['FR-LSH Multi-Strand Copper Wires', 'Heavy Duty PVC Conduit Piping'],
    images: [
      {
        url: yellowCablesImg,
        caption: 'JURO Cables — Bright Yellow FR-LSH Multi-Strand Insulated Copper Wire Rolls',
      },
      {
        url: dbPanelImg,
        caption: 'Distribution Panel Internal Copper Wiring Connection',
      }
    ]
  },
  {
    id: 'switches-sockets',
    title: 'Switches & Sockets',
    group: 'electrical',
    shortDesc: 'Modular touch switches, smart automation sockets, and designer glass plates.',
    fullDesc: 'Aesthetic modular switches, USB/Type-C charging sockets, touch glass plates, and smart Wi-Fi automated switches for modern luxury interiors.',
    features: [
      'Tempered Glass & Anodized Metallic Switch Plates',
      'Soft-Touch Silent Micro-switch Mechanism',
      'Smart Wi-Fi App & Voice Control Compatible',
      'Child-safe Shuttered Sockets & Fast USB Chargers'
    ],
    recommendedMaterials: ['Polycarbonate Flame-Retardant Modules', 'Tempered Toughened Glass Plates'],
    images: [
      {
        url: electricalImg,
        caption: 'Sleek Black Tempered Glass Modular Touch Switches with Amber Backlight',
      },
      {
        url: yellowCablesImg,
        caption: 'Internal Wiring with FR-LSH High Grade Yellow Copper Conductors',
      }
    ]
  },
  {
    id: 'circuit-protection',
    title: 'Circuit Protection & MCBs',
    group: 'electrical',
    shortDesc: 'Miniature Circuit Breakers (MCB), RCCBs, isolators, and surge protectors.',
    fullDesc: 'Essential circuit protection safety devices including RCCBs (Residual Current Circuit Breaker) for shock protection and SPD surge arrester units.',
    features: [
      '10kA Short Circuit Breaking Capacity',
      'High Sensitivity Shock Protection RCCB (30mA)',
      'Surge Protection Devices (SPD) against Lightning Strikes',
      'B & C Curve Tripping Options'
    ],
    recommendedMaterials: ['Self-Extinguishing Thermoplastic Housing', 'Silver Alloy Contacts'],
    images: [
      {
        url: dbPanelImg,
        caption: 'Wall-Mounted White DB Box with DIN-Rail MCB Circuit Breakers & RCCB',
      },
      {
        url: yellowCablesImg,
        caption: 'Multi-Strand Yellow Copper Power Feed Cables',
      }
    ]
  },

  // ================= LIGHTING =================
  {
    id: 'light-residential',
    title: 'Residential Lighting',
    group: 'lighting',
    shortDesc: 'Chandeliers, warm recessed downlights, pendant drops, and magnetic track lights.',
    fullDesc: 'Curated home illumination solutions designed to create ambiance and warmth. High CRI (>90) LED COB downlights, mood dimmers, and statement dining pendants.',
    features: [
      'High CRI > 90 for Natural Color Rendering',
      'Flicker-Free Driver Technology with Dimming Support',
      'Warm White (2700K - 3000K) & Tunable White Options',
      'Custom Architectural Pendant Fittings'
    ],
    recommendedMaterials: ['Die-cast Aluminum Heat Sink', 'PMMA Anti-Glare Diffuser'],
    images: [
      {
        url: lightingImg,
        caption: 'Warm Residential Architectural Recessed Downlights & Dining Pendant',
      }
    ]
  },
  {
    id: 'light-commercial',
    title: 'Commercial Lighting',
    group: 'lighting',
    shortDesc: 'High-bay LED panels, linear workplace lighting, and retail track spotlights.',
    fullDesc: 'Energy-efficient workspace and showroom lighting. Uniform low-glare UGR<19 LED panels, magnetic linear tracks, and accent zoom spotlights.',
    features: [
      'UGR < 19 Low-Glare Optics for Office Ergonomics',
      'High Efficacy up to 140 Lumens per Watt',
      'Seamless Continuous Linear Profile Runs',
      'Smart DALI & Zigbee Motion Sensor Integration'
    ],
    recommendedMaterials: ['Extruded Aluminum Profile', 'Prismatic Micro-Structured Diffuser'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=800&q=80',
        caption: 'Commercial Office Linear Architectural Suspended LED Lighting',
      }
    ]
  },
  {
    id: 'light-garden',
    title: 'Garden & Landscape Lighting',
    group: 'lighting',
    shortDesc: 'IP67 waterproof spike lights, pathway bollards, underwater & facade uplighters.',
    fullDesc: 'Weatherproof outdoor landscape fixtures engineered to withstand heavy rainfall and monsoon humidity. Illuminates pathways, trees, water fountains, and exterior facades.',
    features: [
      'IP67 / IP68 Fully Waterproof & Dustproof Rating',
      'Solid Brass & Die-Cast Corrosion-Resistant Bodies',
      'Safe 12V / 24V Low Voltage Landscape Distribution',
      'Targeted Narrow-Beam Tree Uplighters'
    ],
    recommendedMaterials: ['Solid Cast Brass Body', 'Toughened Tempered Optical Lens'],
    images: [
      {
        url: lightingImg,
        caption: 'Outdoor Garden Pathway LED Bollards & Tree Accent Uplighters',
      }
    ]
  },
  {
    id: 'light-strip',
    title: 'Architectural & Strip Lights',
    group: 'lighting',
    shortDesc: 'Flexible COB LED strips, aluminum profile channels, and silicone neon flex.',
    fullDesc: 'Dotless continuous COB LED strip lighting integrated into false ceilings, wardrobe interiors, kitchen under-cabinets, and cove spaces.',
    features: [
      'Dotless COB (Chip-on-Board) Continuous Illumination',
      'Slim Anodized Aluminum Channels with Opal Covers',
      'Waterproof Silicone Neon Flex for Curves',
      '24V Constant Voltage Driver Units'
    ],
    recommendedMaterials: ['Double-Layer 3-Oz Copper Flexible PCB', 'Anodized Aluminum Channel'],
    images: [
      {
        url: lightingImg,
        caption: 'Continuous False Ceiling Cove COB LED Strip Profile Lighting',
      }
    ]
  },

  // ================= APPLIANCE =================
  {
    id: 'app-fans',
    title: 'Ceiling & Exhaust Fans',
    group: 'appliance',
    shortDesc: 'BLDC energy-saving ceiling fans, wooden blade decorative fans, and silent exhaust units.',
    fullDesc: 'High-performance BLDC (Brushless DC) motor fans that consume up to 65% less electricity. Features RF smart remotes, aerodynamic wooden blades, and whisper-quiet operation.',
    features: [
      '5-Star Rated Energy Saving BLDC Motor (Only 28W)',
      'Aero-dynamic ABS & Handcrafted Wooden Blades',
      'Smart RF Remote Control & Timer Functions',
      'Silent Operation (< 35 dB Noise)'
    ],
    recommendedMaterials: ['100% Copper Stator Winding', 'Aerodynamic ABS/Wood Blades'],
    images: [
      {
        url: applianceImg,
        caption: 'Modern Wood Finish BLDC Decorative Ceiling Fan in Living Room',
      }
    ]
  },
  {
    id: 'app-ac',
    title: 'Air Conditioners & Coolers',
    group: 'appliance',
    shortDesc: 'Inverter split ACs, cassette ceiling units, tower air conditioners, and air purifiers.',
    fullDesc: 'High-efficiency inverter air conditioning units with 100% copper condenser coils, PM2.5 air filtration, and rapid 4-way cooling swing for home and office comfort.',
    features: [
      'Inverter Compressor with Variable Speed Cooling',
      '100% Copper Condenser with Anti-Corrosion Blue Fins',
      'PM2.5 Air Purifying Filter Built-in',
      'Eco-Friendly R32 Low GWP Refrigerant'
    ],
    recommendedMaterials: ['Grooved Copper Tubing', 'Hydrophilic Blue-Fin Heat Exchanger'],
    images: [
      {
        url: applianceImg,
        caption: 'Inverter Split AC Unit Mounted on Living Room Feature Wall',
      }
    ]
  },
  {
    id: 'app-stoves',
    title: 'Gas Stoves & Hobs',
    group: 'appliance',
    shortDesc: 'Built-in glass hob tops, 3/4/5 burner gas stoves, auto-ignition forged brass burners.',
    fullDesc: 'Premium kitchen gas hobs and stoves featuring 8mm toughened bevelled glass, heavy-duty cast iron pan supports, and Italian auto-ignition burners.',
    features: [
      '8mm Toughened Scratch-Resistant Glass Top',
      'High Efficiency Forged Brass Burners',
      'Integrated Flame Failure Device (FFD) Safety',
      'Pulse Auto-Ignition via Built-in Battery'
    ],
    recommendedMaterials: ['8mm Bevelled Tempered Glass', 'Forged Brass Burner Assemblies'],
    images: [
      {
        url: applianceImg,
        caption: 'Built-in 4-Burner Toughened Glass Gas Hob with Cast Iron Pan Supports',
      }
    ]
  },
  {
    id: 'app-chimneys',
    title: 'Kitchen Chimneys',
    group: 'appliance',
    shortDesc: 'Filterless auto-clean chimneys, touch gesture hoods, and island extraction hoods.',
    fullDesc: 'High suction power (1200 - 1500 m³/hr) kitchen chimneys equipped with thermal auto-clean technology, wave gesture controls, and baffle filters tailored for Indian cooking.',
    features: [
      'Powerful 1400 m³/hr Air Suction Motor',
      'Filterless Thermal Auto-Clean Oil Collector Tray',
      'Motion Gesture & Touch Control Panel',
      'Dual Bright LED Cooking Lights'
    ],
    recommendedMaterials: ['SS304 Stainless Steel Body', 'Oil Collector Metal Tray'],
    images: [
      {
        url: applianceImg,
        caption: 'Black Curved Glass Filterless Kitchen Chimney with Gesture Controls',
      }
    ]
  }
];

// Material Swatches dividing into FOUR COLORS: Yellow, Orange, Blue, Green
export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  // --- YELLOW SWATCHES (Electrical Focus) ---
  {
    id: 'swatch-yellow-1',
    name: 'FR-LSH Electrolytic Copper Conductor',
    categoryGroup: 'electrical',
    colorTag: 'yellow',
    finish: 'Flame-Retardant PVC Sheathing',
    durability: '25+ Years Insulated Life',
    idealFor: 'Main DB Wiring, Heavy Appliance Cables, Villa Power Mains',
    description: 'High-purity oxygen-free copper core wrapped in triple-layer low smoke zero halogen insulation for zero toxic fumes in short circuits.'
  },
  {
    id: 'swatch-yellow-2',
    name: 'Polycarbonate Switch Enclosure Substrate',
    categoryGroup: 'electrical',
    colorTag: 'yellow',
    finish: 'High-Gloss Flame Resistant',
    durability: 'UV-Stabilized Anti-Yellowing',
    idealFor: 'Modular Switch Plates, Outdoor DB Covers, Industrial Sockets',
    description: 'Impact-resistant thermoplastic engineered to withstand extreme heat, arc flashes, and high physical stress without cracking.'
  },

  // --- ORANGE SWATCHES (Wall Design Focus) ---
  {
    id: 'swatch-orange-1',
    name: '380 GSM Pure Cotton Archival Canvas',
    categoryGroup: 'wall',
    colorTag: 'orange',
    finish: 'Natural Woven Matte Texture',
    durability: '15+ Years Color Retention',
    idealFor: 'Canvas Fine Art, Living Room Statement Art, Stretched Frames',
    description: 'Heavyweight organic cotton weave providing deep pigment absorption and tactile canvas grain for fine art reproductions.'
  },
  {
    id: 'swatch-orange-2',
    name: 'Embossed Non-Woven Wallpaper',
    categoryGroup: 'wall',
    colorTag: 'orange',
    finish: 'Linen / Leather Textured Stipple',
    durability: '10+ Years Indoor Washable',
    idealFor: 'Master Bedroom Walls, Hotel Feature Murals, Living Alcoves',
    description: 'Breathable, eco-friendly wallpaper substrate printed with odorless water-based latex inks. Hides minor wall cracks easily.'
  },

  // --- BLUE SWATCHES (Lighting Focus) ---
  {
    id: 'swatch-blue-1',
    name: 'Anodized Architectural Aluminum Channel',
    categoryGroup: 'lighting',
    colorTag: 'blue',
    finish: 'Matte Silver & Anodized Black',
    durability: 'Corrosion Proof Heat Dissipation',
    idealFor: 'Recessed COB LED Profile Light, Wardrobe Strip Channels, Cove Lighting',
    description: 'Aero-grade aluminum housing that acts as a continuous heat sink, prolonging LED chip lifespan up to 50,000 hours.'
  },
  {
    id: 'swatch-blue-2',
    name: 'PMMA Optical Opal Diffuser Lens',
    categoryGroup: 'lighting',
    colorTag: 'blue',
    finish: 'Satin Light-Scattering Surface',
    durability: 'Anti-Yellowing UV Resistant',
    idealFor: 'Dotless COB Strip Channels, Office Panel Lights, Linear Fixtures',
    description: 'High-transmission acrylic lens that blends individual LED diodes into a smooth, dotless, glare-free continuous light beam.'
  },

  // --- GREEN SWATCHES (Appliance Focus) ---
  {
    id: 'swatch-green-1',
    name: 'BLDC Permanent Magnet Copper Stator',
    categoryGroup: 'appliance',
    colorTag: 'green',
    finish: 'High-Density Enamel Copper Coil',
    durability: '65% Energy Efficient Operation',
    idealFor: '5-Star Ceiling Fans, Silent Exhaust Fans, Air Conditioner Motors',
    description: 'Brushless DC motor technology with neodymium permanent magnets that cuts fan electricity consumption down to just 28 Watts.'
  },
  {
    id: 'swatch-green-2',
    name: '8mm Bevelled Toughened Glass Top',
    categoryGroup: 'appliance',
    colorTag: 'green',
    finish: 'Thermal Shock-Proof Scratch Matte',
    durability: 'High Heat & Impact Resistant',
    idealFor: 'Built-in Gas Hobs, Kitchen Chimney Panels, Glass Stoves',
    description: 'Tempered safety glass top able to support heavy cast iron utensils and high-temperature cooking without thermal strain.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Living Suite Architectural Canvas Art',
    category: 'wall-art',
    group: 'wall',
    imageUrl: heroWallArtImg,
    location: 'Indiranagar Villa, Bengaluru',
    dimensions: '6 ft x 4 ft Stretched Canvas',
    description: '380 GSM cotton canvas with solid teakwood floating frame mounted in double-height living area.'
  },
  {
    id: 'gal-2',
    title: 'Villa Electrical Distribution & Smart Touch Switches',
    category: 'switches-sockets',
    group: 'electrical',
    imageUrl: electricalImg,
    location: 'Sadashivanagar Villa, Bengaluru',
    dimensions: '3-Phase Smart Home DB & Glass Switches',
    description: 'Complete electrical panel wiring with black tempered glass capacitive touch switches and FR-LSH copper cabling.'
  },
  {
    id: 'gal-3',
    title: 'Architectural False Ceiling Strip & Downlight Lighting',
    category: 'light-residential',
    group: 'lighting',
    imageUrl: lightingImg,
    location: 'Whitefield Penthouse, Bengaluru',
    dimensions: '3000K Warm CRI>95 Lighting Setup',
    description: 'Dotless COB profile cove lighting combined with anti-glare COB downlights and garden bollard lights.'
  },
  {
    id: 'gal-4',
    title: 'Modern Modular Kitchen Appliance Installation',
    category: 'app-chimneys',
    group: 'appliance',
    imageUrl: applianceImg,
    location: 'HSR Layout Residence, Bengaluru',
    dimensions: '1400 m³/hr Chimney + Glass Hob + BLDC Fan',
    description: 'Filterless gesture chimney, 4-burner glass hob, and 28W BLDC ceiling fan installed in modern kitchen.'
  },
  {
    id: 'gal-5',
    title: 'Cafe Direct UV Brick Wall Mural',
    category: 'wall-printing',
    group: 'wall',
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80',
    location: 'Church Street Cafe, Bengaluru',
    dimensions: '14 ft x 9 ft Direct Print',
    description: 'Printed directly onto exposed brickwork using mobile vertical UV printer without paper seams.'
  },
  {
    id: 'gal-6',
    title: 'Textured Tropical Bedroom Feature Wallpaper',
    category: 'wallpaper',
    group: 'wall',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    location: 'Koramangala Residence, Bengaluru',
    dimensions: '11 ft x 10 ft Custom Wallpaper',
    description: 'Seamless linen-texture non-woven wallpaper with custom color palette matching bedroom accents.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Ananya Rao',
    role: 'Interior Architect',
    location: 'Indiranagar, Bengaluru',
    quote: 'Printers and Events handles both our wall design art and complete villa electrical switchgear & lighting profiles. Having a single team handle wall murals, lighting channels, and appliances saved us immense coordination time!',
    projectType: 'Wall Art & Lighting Profiles',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Karthik Subramanian',
    role: 'Homeowner',
    location: 'Sadashivanagar, Bengaluru',
    quote: 'We got our distribution board, smart touch glass switches, kitchen chimney, and BLDC ceiling fans done through Printers and Events. Excellent quality materials and clean installation.',
    projectType: 'Electrical, Appliance & Lighting',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Priya & Rahul Nair',
    role: 'Penthouse Owners',
    location: 'Whitefield, Bengaluru',
    quote: 'The direct wall printing in our dining area paired with warm COB strip lights created a showroom look. Highly recommend their material swatches and site guidance.',
    projectType: 'Direct Wall Printing & Architectural Lighting',
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What core categories and services do you offer?',
    answer: 'We specialize in four key craft areas: 1) Wall Design (Canvas Wall Art, Gallery Layouts, Direct Wall Printing, Wallpaper Murals), 2) Electrical (Distribution Panels, FR Copper Wires, Touch Switches & Sockets, MCBs), 3) Lighting (Residential Downlights, Commercial Linear Profiles, Outdoor Garden Lights, COB LED Strips), and 4) Appliances (BLDC Ceiling Fans, Inverter ACs, Gas Stoves/Hobs, Kitchen Chimneys).'
  },
  {
    question: 'How does the material index color coding work?',
    answer: 'Our Material Index is color-coded into four categories for easy selection: Yellow (Electrical Wires & Enclosures), Orange (Wall Design Canvases & Substrates), Blue (Lighting Aluminum Channels & Optics), and Green (Appliance BLDC Motors & Toughened Glass).'
  },
  {
    question: 'Do you provide site visits & installation in Bengaluru?',
    answer: 'Yes! Our team provides complete site measurement, material swatches inspection, delivery, and professional installation across Bengaluru for Wall Design, Electrical Switchgear, Lighting, and Kitchen Appliances.'
  },
  {
    question: 'How do I place an order or request a quote?',
    answer: 'Select your preferred category or swatch, or fill out the Project Brief form on our website. It opens directly in WhatsApp with all your specifications pre-filled so our studio team can send you an instant quote.'
  }
];
