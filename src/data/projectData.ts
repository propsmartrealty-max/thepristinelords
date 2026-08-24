import { FloorPlan, Amenity, Landmark, SpecificationCategory, FAQItem, GalleryItem } from '../types';

export const PROJECT_DETAILS = {
  name: "THE LORD'S",
  developerName: "PRISTINE DEVELOPERS",
  brandTitle: "THE LORD'S BY PRISTINE DEVELOPER",
  slogan: "WHERE ELEGANCE MEETS LEGACY",
  location: "PASHAN, PUNE",
  subLocation: "BANER - PASHAN LINK ROAD, SOMESHWARWADI",
  units: "3 & 4.5 BHK LUXURY RESIDENCES",
  reraNumber: "P52100078557",
  reraLink: "https://maharera.mahaonline.gov.in",
  financedBy: "CAPRI GLOBAL CAPITAL LIMITED (CGCL)",
  financeLogo: "https://static.wixstatic.com/media/53bf92_4b9b6e6c95284108bf3d4b5f2a38e6dd~mv2.png/v1/crop/x_69,y_0,w_2906,h_1687/fill/w_320,h_180,al_c,q_85,enc_avif,quality_auto/CGCL_Logo-1%5B1%5D_edited.png",
  phone: "+91 - 9209090022",
  phoneAlt: "+91 91580 00199",
  whatsapp: "+919209090022",
  email: "INFO@PRISTINEDEVELOPER.COM",
  legalEmail: "LEGAL1101@PRISTINEDEVELOPER.COM",
  siteAddress: "BESIDE WAKESHWAR TEMPLE, BANER-PASHAN LINK ROAD, SOMESHWARWADI, PASHAN, PUNE - 411008, MAHARASHTRA",
  corpAddress: "PRISTINE DEVELOPERS CORPORATE OFFICE, PRISTINE SQUARE, SHANKAR SHETH ROAD / ERANDWANE, PUNE - 411004",
  o2Address: "GATE NO 1286, PRISTINE O2 WORLD, UBALE NAGAR, WAGHOLI, PUNE, MAHARASHTRA 412207",
  officialUrl: "https://www.pristinedeveloper.com/the-lords",
  googleMapsUrl: "https://www.google.com/maps/place/The+Lords+By+Pristine+Developers/@18.5470937,73.7935628,17z/data=!4m6!3m5!1s0x3bc2bf001df0fc63:0x9d9e40b1f152a83f!8m2!3d18.5470937!4d73.7935628!16s%2Fg%2F11lnnwqhvh",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=18.5470937,73.7935628&hl=en&z=16&output=embed",
  coordinates: {
    lat: 18.5470937,
    lng: 73.7935628
  },
  aboutCopy: "THE LORDS BY PRISTINE DEVELOPERS SETS NEW STANDARDS IN LUXURY AND GRANDEUR. DESIGNED FOR THOSE WHO SEEK THE FINEST, THE LORDS SEAMLESSLY BLENDS TIMELESS ARCHITECTURE WITH MODERN COMFORTS. A MASTERPIECE OF EXCLUSIVITY AND REFINEMENT, THE LORDS REDEFINES SOPHISTICATED LIVING WITH EVERY DETAIL CRAFTED TO PERFECTION. IT STANDS AS A TRUE TESTAMENT TO SUCCESS, WHERE ELEGANCE AND LEGACY CONVERGE TO CREATE AN UNPARALLELED LIFESTYLE."
};

export const OFFICIAL_SPECIFICATIONS: SpecificationCategory[] = [
  {
    category: "STRUCTURE & BLOCKWORK",
    icon: "Building2",
    details: [
      {
        title: "EARTHQUAKE RESISTANT RCC STRUCTURE",
        desc: "ENGINEERED TO WITHSTAND SEISMIC LOADS WITH ROBUST STRUCTURAL ENGINEERING.",
        brandTier: "SEISMIC ZONE COMPLIANT"
      },
      {
        title: "ALUMINIUM FORMWORK CONSTRUCTION",
        desc: "MONOLITHIC MIVAN ALUMINIUM FORMWORK FOR UNMATCHED PRECISION, DURABILITY, AND SMOOTH FINISH.",
        brandTier: "ALUMINIUM MIVAN TECH"
      }
    ]
  },
  {
    category: "DOORS & HARDWARE",
    icon: "DoorClosed",
    details: [
      {
        title: "MAIN ENTRANCE DIGITAL DOOR LOCK",
        desc: "HIGH-SECURITY DIGITAL BIOMETRIC LOCK WITH MULTI-MODE ACCESS (FINGERPRINT, RFID, PIN, KEY).",
        brandTier: "YALE OR EQUIVALENT"
      },
      {
        title: "INTERNAL DOORS & FRAMES",
        desc: "BOTH SIDE LAMINATED FLUSH DOORS WITH PREMIUM MORTISE LOCKS AND DURABLE LAMINATE DOOR FRAMES.",
        brandTier: "YALE MORTISED LOCK"
      }
    ]
  },
  {
    category: "FLOORING & FINISHES",
    icon: "Layers",
    details: [
      {
        title: "LIVING, DINING, BEDROOM & KITCHEN",
        desc: "EXQUISITE IMPORTED MARBLE FLOORING FOR A TIMELESS, REGAL INTERIOR AMBIANCE.",
        brandTier: "IMPORTED MARBLE SELECTION"
      },
      {
        title: "BATHROOMS",
        desc: "DESIGNER ANTI-SKID PREMIUM FLOOR TILES AND WALL TILES UP TO 8 FT LEVEL.",
        brandTier: "ANTI-SKID VITRIFIED"
      },
      {
        title: "BALCONIES AND TERRACES",
        desc: "PREMIUM VITRIFIED WOODEN-FINISHED FLOORING OFFERING WEATHER RESISTANCE AND AESTHETIC WARMTH.",
        brandTier: "WOODEN FINISHED VITRIFIED"
      }
    ]
  },
  {
    category: "KITCHEN & DRY BALCONY",
    icon: "ChefHat",
    details: [
      {
        title: "TILE KITCHEN PLATFORM & DADO",
        desc: "COLOURED 15 MM TILE KITCHEN PLATFORM WITH STAINLESS STEEL SINK WITH DRAIN BOARD & TILES DADO UP TO 2 FEET ABOVE PLATFORM.",
        brandTier: "15MM COLOURED TILE & SS SINK"
      },
      {
        title: "DRY BALCONY SINK",
        desc: "DEDICATED STAINLESS STEEL DRAIN BOARD SINK IN DRY BALCONY WITH WASHING MACHINE PROVISIONS.",
        brandTier: "SS DRAIN BOARD SINK"
      }
    ]
  },
  {
    category: "WINDOWS & FACADE",
    icon: "Maximize",
    details: [
      {
        title: "HEAVY DUTY HIGH-RISE WINDOWS",
        desc: "THREE-TRACK POWDER-COATED ALUMINIUM SLIDING WINDOWS WITH MOSQUITO MESH, ENGINEERED FOR HIGH-RISE WIND LOADS.",
        brandTier: "HEAVY DUTY 3-TRACK ALUMINIUM"
      },
      {
        title: "SGU GLASS FAÇADE",
        desc: "SINGLE GLAZED / SOLAR CONTROLLED SGU GLASS FAÇADE DESIGNED AS PER ARCHITECTURAL ELEVATION AESTHETICS.",
        brandTier: "FAÇADE ENGINEERED SGU GLASS"
      }
    ]
  },
  {
    category: "ELECTRIFICATION & CABLING",
    icon: "Zap",
    details: [
      {
        title: "CONCEALED WIRING & MODULAR SWITCHES",
        desc: "CONCEALED PVC CONDUITS WITH FLAME RETARDANT LOW SMOKE (FRLS) COPPER WIRES AND ADEQUATE MODULAR SWITCHES.",
        brandTier: "FRLS COPPER CONDUITS"
      },
      {
        title: "TV & AC POINTS",
        desc: "DEDICATED TV POINTS IN LIVING ROOM AND IN ALL BEDROOMS; AC POINTS PROVIDED IN ALL BEDROOMS & LIVING ROOM.",
        brandTier: "UNIVERSAL POWER BACKBONE"
      }
    ]
  },
  {
    category: "TOILETS & SANITARY",
    icon: "Bath",
    details: [
      {
        title: "CP & SANITARY FITTINGS",
        desc: "STANDARD PREMIUM CP AND DESIGNER SANITARY FITTINGS IN ALL TOILETS WITH ANTI-SKID FLOOR SURFACES.",
        brandTier: "PREMIUM STANDARD CP & SANITARY"
      },
      {
        title: "HOT WATER & EXHAUST PROVISION",
        desc: "HOT WATER PROVISION IN MASTER BATHROOM AND DEDICATED ELECTRICAL/DUCTING PROVISION FOR EXHAUST FANS.",
        brandTier: "MASTER SUITE HOT WATER"
      }
    ]
  },
  {
    category: "ENVIRONMENTAL & SECURITY",
    icon: "ShieldCheck",
    details: [
      {
        title: "GREEN ENVIRONMENTAL FEATURES",
        desc: "RAINWATER HARVESTING SYSTEM, ON-SITE SEWAGE TREATMENT PLANT (STP), AND ORGANIC WASTE MANAGEMENT.",
        brandTier: "ECO SUSTAINABLE CERTIFIED"
      },
      {
        title: "SECURITY & SURVEILLANCE",
        desc: "COMPREHENSIVE CCTV MONITORING IN ALL COMMON AREAS, FIRE ALARM & FIRE-FIGHTING SYSTEMS, AND VIDEO DOOR PHONE.",
        brandTier: "VIDEO DOOR PHONE & AI CCTV"
      }
    ]
  }
];

export const OFFICIAL_AMENITIES: Amenity[] = [
  {
    id: "am-entrance",
    title: "LUXURIOUS ENTRANCE",
    category: "Elite Lifestyle & Sports",
    description: "GRAND ARCHITECTURAL GATEWAY WITH LANDSCAPED DROP-OFF CANOPY AND 24/7 SECURITY CONCIERGE.",
    iconName: "Crown",
    image: "https://static.wixstatic.com/media/53bf92_4094e14f5a614e85ad8a712d1d3bde6b~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_4094e14f5a614e85ad8a712d1d3bde6b~mv2.jpg",
    highlightTag: "GRAND ARRIVAL",
    locationInProject: "GROUND ENTRY"
  },
  {
    id: "am-arial-view",
    title: "ARIAL TOWER VIEW",
    category: "Sky Deck Horizon (L-34)",
    description: "ICONIC 34-STOREY TOWERS RISING DRAMATICALLY AGAINST THE PICTURESQUE PASHAN BIODIVERSITY HILLS.",
    iconName: "Eye",
    image: "https://static.wixstatic.com/media/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg",
    highlightTag: "34 STOREYS",
    locationInProject: "SKY HORIZON"
  },
  {
    id: "am-sky-lounge",
    title: "THE SKY LOUNGE",
    category: "Sky Deck Horizon (L-34)",
    description: "EXCLUSIVE ROOFTOP PROMENADE OFFERING STARLIT PANORAMIC VIEWS ACROSS PASHAN AND BANER HORIZONS.",
    iconName: "GlassWater",
    image: "https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg",
    highlightTag: "ROOFTOP STARLIGHT",
    locationInProject: "LEVEL 34 SKY DECK"
  },
  {
    id: "am-gym",
    title: "GYM & THE FITNESS FORGE",
    category: "Club Royale & Wellness",
    description: "HIGH-PERFORMANCE FITNESS ARENA EQUIPPED WITH WORLD-CLASS CARDIO AND STRENGTH-TRAINING EQUIPMENT.",
    iconName: "Dumbbell",
    image: "https://static.wixstatic.com/media/53bf92_74b413824b884e9ea23e25e5968e8cc6~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_74b413824b884e9ea23e25e5968e8cc6~mv2.jpg",
    highlightTag: "PRO FITNESS",
    locationInProject: "CLUB ROYALE"
  },
  {
    id: "am-spa",
    title: "REJUVENATION SPA",
    category: "Club Royale & Wellness",
    description: "CALMING THERAPEUTIC SPA SANCTUARY WITH PRIVATE MASSAGE ROOMS AND RELAXATION LOUNGES.",
    iconName: "Sparkles",
    image: "https://static.wixstatic.com/media/53bf92_ba7f3f499a944cbe890b2675a45574d8~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_ba7f3f499a944cbe890b2675a45574d8~mv2.jpg",
    highlightTag: "WELLNESS RETREAT",
    locationInProject: "SPA SANCTUARY"
  },
  {
    id: "am-theatre",
    title: "PRIVATE THEATRE",
    category: "Club Royale & Wellness",
    description: "BESPOKE ACOUSTIC CINEMA HALL WITH PLUSH SEATING AND HIGH-DEFINITION SURROUND SOUND PROJECTION.",
    iconName: "Film",
    image: "https://static.wixstatic.com/media/53bf92_6196c57d743b4b3da25b9f9a2be930f1~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_6196c57d743b4b3da25b9f9a2be930f1~mv2.jpg",
    highlightTag: "PRIVATE SCREENING",
    locationInProject: "CLUB LEVEL 1"
  },
  {
    id: "am-badminton",
    title: "BADMINTON COURT",
    category: "Elite Lifestyle & Sports",
    description: "STANDARD INDOOR WOODEN BADMINTON COURT WITH ANTI-GLARE ILLUMINATION FOR COMPETITIVE MATCHES.",
    iconName: "Activity",
    image: "https://static.wixstatic.com/media/53bf92_0f2df722f952479cb5479a4a8dd510b9~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_0f2df722f952479cb5479a4a8dd510b9~mv2.jpg",
    highlightTag: "SPORTS ARENA",
    locationInProject: "SPORTS COMPLEX"
  },
  {
    id: "am-smash-court",
    title: "SMASH COURT",
    category: "Elite Lifestyle & Sports",
    description: "GLASS-BACKED SQUASH AND SMASH ARENA DESIGNED FOR HIGH-INTENSITY INDOOR ATHLETIC GAMEPLAY.",
    iconName: "Trophy",
    image: "https://static.wixstatic.com/media/53bf92_5e3c9850c0a34204a2fc6f4ed8049830~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_5e3c9850c0a34204a2fc6f4ed8049830~mv2.jpg",
    highlightTag: "HIGH ENERGY",
    locationInProject: "SPORTS ARENA"
  },
  {
    id: "am-music",
    title: "MUSIC ROOM",
    category: "Club Royale & Wellness",
    description: "SOUND-ISOLATED MUSICAL PERFORMANCE AND PRACTICE STUDIO FOR CREATIVE RESIDENTS AND CHILDREN.",
    iconName: "Music",
    image: "https://static.wixstatic.com/media/53bf92_64366999c1c44835a6c425caa9323e17~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_64366999c1c44835a6c425caa9323e17~mv2.jpg",
    highlightTag: "ACOUSTIC ISOLATED",
    locationInProject: "CLUB MEZZANINE"
  },
  {
    id: "am-creche",
    title: "CRÈCHE & DAY CARE",
    category: "Biophilic Greenery",
    description: "SAFE, VIBRANT TODDLER DAY-CARE ENVIRONMENT WITH EDUCATIONAL PLAY ZONES AND ATTENTIVE CARE.",
    iconName: "Smile",
    image: "https://static.wixstatic.com/media/53bf92_ebb6fb7d6034495786d7012dc7b01bc6~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_ebb6fb7d6034495786d7012dc7b01bc6~mv2.jpg",
    highlightTag: "KIDS SAFETY",
    locationInProject: "GROUND LEVEL"
  },
  {
    id: "am-pilates-zumba",
    title: "PILATES & ZUMBA",
    category: "Club Royale & Wellness",
    description: "DEDICATED AEROBIC AND CORE STRENGTH TRAINING STUDIO WITH HARDWOOD SPRING FLOORS AND MIRROR WALLS.",
    iconName: "Activity",
    image: "https://static.wixstatic.com/media/53bf92_2c1599c5f1df4ddb9412160dd65d6ace~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_2c1599c5f1df4ddb9412160dd65d6ace~mv2.jpg",
    highlightTag: "YOGA & AEROBICS",
    locationInProject: "WELLNESS FLOOR"
  },
  {
    id: "am-library",
    title: "LIBRARY",
    category: "Elite Lifestyle & Sports",
    description: "PEACEFUL BOOK LOUNGE WITH CURATED READING COLLECTIONS, PRIVATE STUDY NOOKS, AND COFFEE BAR.",
    iconName: "BookOpen",
    image: "https://static.wixstatic.com/media/53bf92_9f57fe32ddbf4a57b55288f4e41c3210~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_9f57fe32ddbf4a57b55288f4e41c3210~mv2.jpg",
    highlightTag: "CO-STUDY",
    locationInProject: "CLUB LEVEL 2"
  }
];

export const OFFICIAL_FLOOR_PLANS: FloorPlan[] = [
  {
    id: "official-3bhk",
    name: "3 BHK LUXURY RESIDENCE",
    category: "3 BHK",
    carpetAreaSqFt: 1554,
    carpetAreaSqM: 144.37,
    balconyAreaSqFt: 210,
    totalUsableSqFt: 1764,
    startingPrice: "₹ 2.57 CR* ONWARDS",
    floors: "TOWERS A, B, C, D (LEVELS 4 - 30)",
    towers: "BANER-PASHAN CORRIDOR VIEW",
    highlights: [
      "EXPANSIVE LIVING & DINING HALL OPENING INTO PRIVATE GREEN TERRACE",
      "IMPORTED MARBLE FLOORING THROUGHOUT LIVING AND BEDROOM SUITES",
      "COLOURED 15MM TILE PLATFORM KITCHEN WITH SEPARATE DRY BALCONY",
      "DIGITAL MAIN DOOR LOCK (YALE OR EQUIVALENT) & VIDEO DOOR PHONE",
      "THREE-TRACK POWDER-COATED ALUMINIUM WINDOWS WITH SGU GLASS FAÇADE"
    ],
    dimensions: [
      { room: "LIVING & DINING ROOM", size: "28'0\" x 14'6\"", feature: "IMPORTED MARBLE FLOORING WITH SGU GLASS FAÇADE" },
      { room: "GRAND BALCONY / DECK", size: "14'6\" x 6'0\"", feature: "PREMIUM VITRIFIED WOODEN FINISHED FLOORING" },
      { room: "MASTER BEDROOM SUITE", size: "16'0\" x 13'0\"", feature: "LAMINATED FLUSH DOOR WITH YALE MORTISE LOCK" },
      { room: "BEDROOM 2 (GUEST / KIDS)", size: "14'0\" x 12'0\"", feature: "FRLS CONCEALED WIRING & AC CONDUIT POINT" },
      { room: "BEDROOM 3 (PARENT / STUDY)", size: "12'6\" x 11'6\"", feature: "HEAVY DUTY 3-TRACK ALUMINIUM SLIDING WINDOW" },
      { room: "KITCHEN & DRY BALCONY", size: "13'0\" x 9'6\"", feature: "15MM COLOURED TILE PLATFORM & STAINLESS STEEL SINK" }
    ],
    layout2D: "https://static.wixstatic.com/media/53bf92_8b73a8f6a8504d51b3625fc708888ff6~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/image%20(4).png",
    render3D: "https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg",
    keyFeatures: ["IMPORTED MARBLE FLOORING", "SGU GLASS FAÇADE", "YALE DIGITAL DOOR LOCK", "MIVAN FORMWORK"]
  },
  {
    id: "official-4.5bhk",
    name: "4.5 BHK LUXURY ESTATE RESIDENCE",
    category: "4.5 BHK",
    carpetAreaSqFt: 2005,
    carpetAreaSqM: 186.27,
    balconyAreaSqFt: 310,
    totalUsableSqFt: 2315,
    startingPrice: "₹ 3.55 CR* ONWARDS",
    floors: "CROWN FLOORS (LEVELS 15 - 34)",
    towers: "PANORAMIC HILL & SKYLINE VIEW",
    highlights: [
      "PALATIAL LIVING HALL WITH DOUBLE TERRACE VIEWING DECKS",
      "DEDICATED 0.5 MULTI-UTILITY ROOM / EXECUTIVE OFFICE / MEDIA ROOM",
      "PRIVATE MASTER SUITE WITH WALK-IN WARDROBE AND HOT WATER PROVISION",
      "DUAL BALCONIES WITH PREMIUM VITRIFIED WOODEN-FINISHED DECK TILES",
      "EARTHQUAKE-RESISTANT ALUMINIUM FORMWORK RCC CONSTRUCTION"
    ],
    dimensions: [
      { room: "PALATIAL LIVING & DINING", size: "36'0\" x 16'6\"", feature: "IMPORTED ITALIAN MARBLE WITH FLOOR-TO-CEILING WINDOWS" },
      { room: "PANORAMIC SKY BALCONY", size: "22'0\" x 7'6\"", feature: "VITRIFIED WOODEN FINISHED DECK TILES & GLASS RAILINGS" },
      { room: "PRIMARY MASTER SUITE", size: "20'0\" x 15'0\"", feature: "ATTACHED DESIGNER BATHROOM WITH HOT WATER PROVISION" },
      { room: "JUNIOR MASTER SUITE", size: "16'6\" x 13'6\"", feature: "ANTI-SKID BATHROOM FLOORING & 8FT TILE DADO" },
      { room: "BEDROOM 3", size: "15'0\" x 12'6\"", feature: "HEAVY DUTY 3-TRACK WINDOWS & FRLS ELECTRIFICATION" },
      { room: "BEDROOM 4", size: "14'0\" x 12'0\"", feature: "BOTH-SIDE LAMINATED FLUSH DOOR WITH YALE LOCK" },
      { room: "0.5 MULTIPURPOSE ROOM", size: "11'0\" x 9'6\"", feature: "EXECUTIVE STUDY / HOME THEATRE / PRAYER SPACE" },
      { room: "KITCHEN & DRY BALCONY", size: "16'0\" x 11'6\"", feature: "15MM TILE PLATFORM, DRAIN BOARD SS SINK & PIPED GAS" }
    ],
    layout2D: "https://static.wixstatic.com/media/53bf92_7057ae4f67de42cc901ffbf49bcd21ed~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/image%20(3).png",
    render3D: "https://static.wixstatic.com/media/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg",
    keyFeatures: ["0.5 MULTI-UTILITY SUITE", "DUAL SKY BALCONIES", "IMPORTED MARBLE", "ALUMINIUM MIVAN TECH"]
  }
];

export const OFFICIAL_GALLERY_IMAGES = [
  {
    title: "LUXURIOUS ENTRANCE GATEWAY",
    category: "EXTERIOR & PORTALS",
    url: "https://static.wixstatic.com/media/53bf92_4094e14f5a614e85ad8a712d1d3bde6b~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_4094e14f5a614e85ad8a712d1d3bde6b~mv2.jpg",
    tag: "ARRIVAL PORTAL"
  },
  {
    title: "SIDE VIEW & LANDSCAPED PODIUM",
    category: "EXTERIOR & PORTALS",
    url: "https://static.wixstatic.com/media/53bf92_b66a4abe32be44da8d244bc1be3cad1b~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_b66a4abe32be44da8d244bc1be3cad1b~mv2.jpg",
    tag: "PODIUM GREENS"
  },
  {
    title: "FRONT VIEW MONOLITHIC TOWER ELEVATION",
    category: "TOWER ARCHITECTURE",
    url: "https://static.wixstatic.com/media/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg",
    tag: "34 STOREYS"
  },
  {
    title: "FRONT VIEW 2 PANORAMIC PERSPECTIVE",
    category: "TOWER ARCHITECTURE",
    url: "https://static.wixstatic.com/media/53bf92_1ca87d91be2447549578600e12d72096~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_1ca87d91be2447549578600e12d72096~mv2.jpg",
    tag: "MONOLITH FACADE"
  },
  {
    title: "ARIAL TOWER VIEW & HILLSIDE HORIZONS",
    category: "TOWER ARCHITECTURE",
    url: "https://static.wixstatic.com/media/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg",
    tag: "PASHAN HILL RIDGE"
  },
  {
    title: "THE SKY LOUNGE & EVENING HORIZON",
    category: "SKY DECK PROMENADE",
    url: "https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg",
    tag: "34TH FLOOR LOUNGE"
  },
  {
    title: "GRAND LIVING HALL WITH MARBLE FLOORING",
    category: "GRAND INTERIORS",
    url: "https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg",
    tag: "MARBLE LIVING"
  },
  {
    title: "GOURMET CHEF KITCHEN & 15MM TILE PLATFORM",
    category: "GRAND INTERIORS",
    url: "https://static.wixstatic.com/media/53bf92_d0424980d8614c849bda5b6216170ff7~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_d0424980d8614c849bda5b6216170ff7~mv2.jpg",
    tag: "MODULAR KITCHEN"
  },
  {
    title: "MASTER SUITE BEDROOM WITH BALCONY DECK",
    category: "SUITES & BEDROOMS",
    url: "https://static.wixstatic.com/media/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg",
    tag: "MASTER SUITE"
  },
  {
    title: "LUXURY BEDROOM 2 WITH PANORAMIC WINDOWS",
    category: "SUITES & BEDROOMS",
    url: "https://static.wixstatic.com/media/53bf92_ed6795de25664dfa892db909c01ccb98~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_ed6795de25664dfa892db909c01ccb98~mv2.jpg",
    tag: "GUEST SUITE"
  },
  {
    title: "SKY VIEW DECK & PASHAN VALLEY",
    category: "SKY DECK PROMENADE",
    url: "https://static.wixstatic.com/media/53bf92_82cb950dfdd94f47858aedc114b8ad03~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_82cb950dfdd94f47858aedc114b8ad03~mv2.jpg",
    tag: "PASHAN VIEWS"
  },
  {
    title: "PRIVATE RESIDENT DOLBY THEATRE",
    category: "CLUB ROYALE",
    url: "https://static.wixstatic.com/media/53bf92_6196c57d743b4b3da25b9f9a2be930f1~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/53bf92_6196c57d743b4b3da25b9f9a2be930f1~mv2.jpg",
    tag: "CINEMA LOUNGE"
  }
];

export { HIGHLIGHT_METRICS, LANDMARKS, FAQS } from './legacyData';
