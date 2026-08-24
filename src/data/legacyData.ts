import { Landmark, FAQItem } from '../types';

export const HIGHLIGHT_METRICS = [
  { value: "3 & 4.5", label: "LUXURY UNITS", suffix: "BHK", desc: "EXPANSIVE LAYOUTS WITH MARBLE FLOORING" },
  { value: "34", label: "STOREYS TALL", suffix: "FLOORS", desc: "HIGH-RISE TOWERS IN PASHAN, PUNE" },
  { value: "20+", label: "ELITE AMENITIES", suffix: "CLUB", desc: "SKY LOUNGE, THEATRE, GYM, SPA & SMASH COURT" },
  { value: "P52100078557", label: "MAHARERA APPROVED", suffix: "RERA", desc: "GOVERNMENT VERIFIED & COMPLIANT" },
  { value: "CGCL", label: "FINANCED BY", suffix: "CAPRI", desc: "FINANCED BY CAPRI GLOBAL CAPITAL LIMITED" },
  { value: "30+", label: "YEARS LEGACY", suffix: "PRISTINE", desc: "PRISTINE DEVELOPERS TRUSTED PEDIGREE" }
];

export const LANDMARKS: Landmark[] = [
  {
    id: "loc-baner-high-street",
    name: "BANER HIGH STREET & BALEWADI HIGH STREET",
    category: "High Street & Dining",
    distanceKm: 2.5,
    driveTimeMins: 5,
    description: "TRENDIEST CULINARY & BOUTIQUE SHOPPING BOULEVARD WITH FINE DINING CAFES AND BREWERIES.",
    iconName: "Utensils"
  },
  {
    id: "loc-westend-mall",
    name: "WESTEND MALL & AUNDH COMMERCIAL CORE",
    category: "High Street & Dining",
    distanceKm: 3.8,
    driveTimeMins: 8,
    description: "PREMIER ENTERTAINMENT HUB WITH IMAX CINEMA, MARKS & SPENCER, AND GOURMET SUPERMARKETS.",
    iconName: "ShoppingBag"
  },
  {
    id: "loc-hinjewadi-it",
    name: "HINJEWADI IT PARK (PHASES 1, 2 & 3)",
    category: "IT & Business Hubs",
    distanceKm: 8.5,
    driveTimeMins: 15,
    description: "SOFTWARE DISTRICT HOSTING INFOSYS, WIPRO, TCS, COGNIZANT, AND TECH CAMPUSES.",
    iconName: "Briefcase"
  },
  {
    id: "loc-mumbai-pune-expressway",
    name: "MUMBAI - PUNE EXPRESSWAY (CHANDANI CHOWK / NH 48)",
    category: "Transit & Arteries",
    distanceKm: 3.0,
    driveTimeMins: 6,
    description: "INSTANT ARTERIAL ACCESS FOR SEAMLESS TRANSIT TO MUMBAI, NAVI MUMBAI, AND LONAVALA.",
    iconName: "Navigation"
  },
  {
    id: "loc-symbiosis",
    name: "SYMBIOSIS INTERNATIONAL UNIVERSITY & VIBGYOR",
    category: "Elite Education",
    distanceKm: 4.2,
    driveTimeMins: 9,
    description: "TOP-TIER EDUCATIONAL INSTITUTIONS AND CAMBRIDGE/IB CURRICULA SCHOOLS.",
    iconName: "GraduationCap"
  },
  {
    id: "loc-jupiter-hospital",
    name: "JUPITER HOSPITAL & MANIPAL HOSPITAL",
    category: "Super-specialty Hospitals",
    distanceKm: 3.2,
    driveTimeMins: 7,
    description: "MULTI-SPECIALTY QUATERNARY HEALTHCARE CENTERS WITH 24/7 EMERGENCY CARE.",
    iconName: "HeartPulse"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "WHAT IS THE MAHARERA REGISTRATION NUMBER FOR THE LORD'S?",
    answer: "THE LORD'S BY PRISTINE DEVELOPERS IS REGISTERED UNDER MAHARERA WITH REGISTRATION NO. P52100078557. SANCTIONED PLANS AND TITLE DOCUMENTS ARE PUBLICLY VERIFIED ON THE OFFICIAL MAHARERA WEBSITE.",
    category: "Project & Approvals"
  },
  {
    question: "WHAT UNIT CONFIGURATIONS ARE AVAILABLE AT THE LORD'S?",
    answer: "THE PROJECT OFFERS EXPANSIVE 3 BHK & 4.5 BHK LUXURY RESIDENCES DESIGNED WITH IMPORTED MARBLE FLOORING, SGU GLASS FACADES, AND HEAVY-DUTY 3-TRACK POWDER-COATED ALUMINIUM WINDOWS.",
    category: "Configuration & Price"
  },
  {
    question: "WHO IS FINANCING THIS PROJECT?",
    answer: "THE LORD'S BY PRISTINE DEVELOPER IS PROUDLY FINANCED BY CAPRI GLOBAL CAPITAL LIMITED (CGCL).",
    category: "Project & Approvals"
  },
  {
    question: "WHAT ARE THE KEY INTERNAL SPECIFICATIONS?",
    answer: "SPECIFICATIONS INCLUDE IMPORTED MARBLE FLOORING IN LIVING, DINING, BEDROOMS, AND KITCHEN; 15MM COLOURED TILE KITCHEN PLATFORM WITH STAINLESS STEEL DRAIN BOARD SINK; YALE DIGITAL MAIN DOOR LOCKS; AND POWDER-COATED 3-TRACK ALUMINIUM WINDOWS.",
    category: "Possession & Amenities"
  },
  {
    question: "WHERE IS THE PROJECT LOCATED?",
    answer: "THE LORD'S IS LOCATED IN PASHAN, PUNE ON THE BANER-PASHAN LINK ROAD (BESIDE WAKESHWAR TEMPLE), PROVIDING 5-MINUTE CONNECTIVITY TO BANER HIGH STREET AND 8 MINUTES TO AUNDH.",
    category: "Location & Connectivity"
  }
];
