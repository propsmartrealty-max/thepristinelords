export interface FloorPlan {
  id: string;
  name: string;
  category: '3 BHK' | '3.5 BHK' | '4 BHK' | '4.5 BHK' | '5 BHK';
  carpetAreaSqFt: number;
  carpetAreaSqM: number;
  balconyAreaSqFt: number;
  totalUsableSqFt: number;
  startingPrice: string;
  floors: string;
  towers: string;
  highlights: string[];
  dimensions: {
    room: string;
    size: string;
    feature: string;
  }[];
  layout2D: string;
  render3D: string;
  keyFeatures: string[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'Sky Deck Horizon (L-34)' | 'Club Royale & Wellness' | 'Biophilic Greenery' | 'Elite Lifestyle & Sports';
  description: string;
  iconName: string;
  image: string;
  highlightTag: string;
  locationInProject: string;
}

export interface Landmark {
  id: string;
  name: string;
  category: 'High Street & Dining' | 'IT & Business Hubs' | 'Elite Education' | 'Super-specialty Hospitals' | 'Transit & Arteries';
  distanceKm: number;
  driveTimeMins: number;
  description: string;
  iconName: string;
}

export interface SpecificationCategory {
  category: string;
  icon: string;
  details: {
    title: string;
    desc: string;
    brandTier: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Project & Approvals' | 'Configuration & Price' | 'Possession & Amenities' | 'Location & Connectivity';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior & Towers' | 'Grand Interiors' | 'Sky Amenities' | 'Master Suites' | 'Landscape & Pool';
  timeOfDay: 'Day' | 'Sunset' | 'Dusk / Night';
  imageUrl: string;
  tag: string;
}
