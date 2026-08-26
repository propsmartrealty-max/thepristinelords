export interface SearchQueryItem {
  queryText: string;
  intent: 'Transactional' | 'Commercial' | 'Informational' | 'Navigational';
  estimatedVolume: string;
  targetCleanUrl: string;
  relevanceScore?: string;
}

export interface SearchQueryCategory {
  categoryTitle: string;
  categorySlug: string;
  badge: string;
  queries: SearchQueryItem[];
}

export const SEARCH_QUERIES_BANK: SearchQueryCategory[] = [
  // 1. Core Pristine Developers Pune Keywords
  {
    categoryTitle: "1. CORE PRISTINE DEVELOPERS PUNE BRAND CLUSTERS",
    categorySlug: "core-brand-pune",
    badge: "30+ YEARS LEGACY",
    queries: [
      { queryText: "Pristine Developers Pune", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Properties Pune", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Developers", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Properties", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Pune", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine real estate Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine residential projects Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "Pristine properties for sale Pune", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "Pristine new launch Pune", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine ongoing projects Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-p52100078557-status" },
      { queryText: "Pristine Developers Pune reviews", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine construction quality", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-specifications-mivan-italian-marble" },
      { queryText: "Pristine Pune price list", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "Pristine Pune brochure download", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-brochure-download-pdf" },
      { queryText: "Pristine Pune RERA verified projects", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-p52100078557-status" }
    ]
  },

  // 2. The Lord's By Pristine (Pashan / Baner-Pashan Link Road)
  {
    categoryTitle: "2. THE LORD'S BY PRISTINE (BANER-PASHAN LINK ROAD)",
    categorySlug: "the-lords-baner-pashan",
    badge: "FLAGSHIP LUXURY",
    queries: [
      { queryText: "The Lord's By Pristine", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "The Lords by Pristine Pune", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine The Lords Baner", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "The Lords Pristine Pashan", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "Pristine Lords Baner Pashan", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "The Lords Pristine price list", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "The Lords Pristine 3 BHK price", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "The Lords Pristine 4.5 BHK Sky Villa", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "The Lords Pristine floor plan & master layout", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-master-layout-floor-plans" },
      { queryText: "The Lords Pristine Level 34 Sky Lounge amenities", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-luxury-amenities-sky-lounge" },
      { queryText: "The Lords Pristine MahaRERA P52100078557", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-p52100078557-status" },
      { queryText: "The Lords Pristine site visit & booking", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-contact-sales-office" },
      { queryText: "luxury flats Pashan Baner Link Road", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "premium apartments Pashan Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" }
    ]
  },

  // 3. Pristine O2 World (Kharadi / Wagholi - 20 Acres, RERA: P52100054937)
  {
    categoryTitle: "3. PRISTINE O2 WORLD (KHARADI / WAGHOLI)",
    categorySlug: "pristine-o2-world",
    badge: "20-ACRE TOWNSHIP",
    queries: [
      { queryText: "Pristine O2 World", intent: "Navigational", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine O2 World Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine O2 World Kharadi Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine O2 World Wagholi Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine O2 World price list & 2 BHK 3 BHK", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "Pristine O2 World floor plan & brochure", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-brochure-download-pdf" },
      { queryText: "Pristine O2 World RERA P52100054937", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-p52100078557-status" },
      { queryText: "Pristine O2 World new tower launch", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" }
    ]
  },

  // 4. Pristine Allure (Kharadi) & Pristine I-Life (Mundhwa)
  {
    categoryTitle: "4. PRISTINE ALLURE & PRISTINE I-LIFE (KHARADI & MUNDHWA)",
    categorySlug: "allure-ilife-east-pune",
    badge: "EAST PUNE HUBS",
    queries: [
      { queryText: "Pristine Allure Kharadi Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Allure 2 BHK 3 BHK price list", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "Pristine Allure Commercial Kharadi office space", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine I-Life Mundhwa Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine I-Life 2 BHK 3 BHK apartments Mundhwa", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "flats in Mundhwa by Pristine Developers", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" }
    ]
  },

  // 5. Ultra-Luxury Signature Collections: YOO Pristine (Akurdi) & Pristine Kyra (Viman Nagar)
  {
    categoryTitle: "5. ULTRA LUXURY: YOO PRISTINE (AKURDI) & PRISTINE KYRA (VIMAN NAGAR)",
    categorySlug: "yoo-kyra-ultra-luxury",
    badge: "ULTRA LUXURY SIGNATURES",
    queries: [
      { queryText: "YOO Pristine Akurdi Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "YOO Pristine price list & luxury apartments", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "ultra luxury flats Akurdi by Pristine", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine Kyra Viman Nagar Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "Pristine Kyra 3 BHK 4 BHK luxury apartments", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "ultra luxury homes Viman Nagar Pristine", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" }
    ]
  },

  // 6. Upcoming Pristine Projects (Pristine Azure Kalyani Nagar, I-Life Wagholi & NIBM)
  {
    categoryTitle: "6. UPCOMING PROJECTS: PRISTINE AZURE & I-LIFE EXPANSIONS",
    categorySlug: "upcoming-azure-ilife",
    badge: "UPCOMING PIPELINE",
    queries: [
      { queryText: "Pristine Azure Kalyani Nagar Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine Azure 3 BHK 4 BHK price list", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "Pristine I-Life Wagholi Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine I-Life NIBM Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers upcoming projects 2026", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" }
    ]
  },

  // 7. Commercial & Business Hubs (AP81 Koregaon Park, Commerce Street Moshi, Pristine Square)
  {
    categoryTitle: "7. COMMERCIAL & BUSINESS HUBS (AP81, COMMERCE STREET, SQUARE)",
    categorySlug: "commercial-ap81-square",
    badge: "GRADE-A COMMERCIAL",
    queries: [
      { queryText: "AP81 Koregaon Park Pune Pristine", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "AP81 office space & commercial property Koregaon Park", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Commerce Street Moshi shops & retail", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Square Wakad commercial office spaces", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Arcade Wakad commercial shops", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pune Trade Centre Wagholi Pristine commercial", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" }
    ]
  },

  // 8. Completed Legacy Portfolio (Aundh, Wakad, Wagholi, Moshi, Bavdhan, Hinjewadi)
  {
    categoryTitle: "8. HISTORICAL & COMPLETED RESIDENTIAL LANDMARKS",
    categorySlug: "completed-landmarks",
    badge: "DELIVERED EXCELLENCE",
    queries: [
      { queryText: "Pristine Royale & Privilege Aundh", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Grandeur & Prolife Wakad", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine East Wind & Classique Wagholi", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Greens 1 2 3 Moshi Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Equilife Mahalunge near Hinjewadi", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi" },
      { queryText: "Pristine Fontana Bavdhan Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "Pristine Luxor Kalyani Nagar & Viva NIBM", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Aspiria Hinjawadi IT Park", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi" },
      { queryText: "Pristine Prosperia Chikhali PCMC", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine Neo City & NA Plots Wagholi Bakori", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" }
    ]
  },

  // 9. Hospitality Portfolios (Holiday Inn Balewadi & Wildernest Resort)
  {
    categoryTitle: "9. PRISTINE HOSPITALITY: HOLIDAY INN & WILDERNEST",
    categorySlug: "hospitality-landmarks",
    badge: "HOSPITALITY LEADERSHIP",
    queries: [
      { queryText: "Holiday Inn Balewadi Pune Pristine", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Wildernest Hill Resort Sinhagad Road Pristine", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Pristine hospitality and luxury hotels Pune", intent: "Informational", estimatedVolume: "Medium", targetCleanUrl: "/pristine-the-lords-baner-project-overview" }
    ]
  },

  // 10. Location + Brand Micro-Corridor Dominance
  {
    categoryTitle: "10. MICRO-CORRIDOR & LOCATION DOMINANCE",
    categorySlug: "location-corridor-dominance",
    badge: "ALL PUNE REGIONS",
    queries: [
      { queryText: "Pristine Developers Kharadi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers Viman Nagar", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers Akurdi PCMC", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers Pashan Baner Link Road", intent: "Commercial", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "Pristine Developers Mundhwa", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers Wagholi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine Developers Wakad", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi" },
      { queryText: "Pristine Developers Bavdhan", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "Pristine Developers Moshi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" }
    ]
  },

  // 11. Configuration & Unit Searches (1, 2, 3, 4 BHK & Sky Villas)
  {
    categoryTitle: "11. CONFIGURATION & RESIDENCE FORMAT SEARCHES",
    categorySlug: "configuration-bhk-searches",
    badge: "1, 2, 3, 4.5 BHK",
    queries: [
      { queryText: "Pristine 3 BHK flats Pune", intent: "Transactional", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "Pristine 4 BHK luxury apartments Pune", intent: "Transactional", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "Pristine 3 BHK Baner Pashan price", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "Pristine 4.5 BHK Sky Villa penthouse Pune", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" },
      { queryText: "Pristine 2 BHK flats Pune Kharadi Wakad", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-keyword-search-directory" },
      { queryText: "Pristine ultra luxury duplex homes Pune", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-4-5-bhk-sky-villas" }
    ]
  },

  // 12. High-Intent Commercial Pricing & Payment Terms
  {
    categoryTitle: "12. PRICING, BUDGET TIERS & COST SHEETS",
    categorySlug: "price-cost-sheets",
    badge: "₹1 CR TO ₹5 CR+",
    queries: [
      { queryText: "Pristine Pune property price list", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-faqs-price-possession" },
      { queryText: "Pristine The Lords rate per sq ft Baner", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "flats above 2 crore Baner Pashan", intent: "Commercial", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "luxury apartments Pune 2 crore to 5 crore", intent: "Commercial", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine down payment and payment plan", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-banking-institutional-financing" },
      { queryText: "Pristine home loan EMI calculation Capri Global", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-banking-institutional-financing" }
    ]
  },

  // 13. High-Intent Buyer Action Searches (Buy, Booking, Site Visit, Inventory)
  {
    categoryTitle: "13. BUYER CONVERSION: BOOKING, INVENTORY & SITE VISIT",
    categorySlug: "buyer-actions-inventory",
    badge: "DIRECT CONVERSION",
    queries: [
      { queryText: "buy Pristine flat Pune", intent: "Transactional", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-contact-sales-office" },
      { queryText: "Pristine flats for sale Baner Pune", intent: "Transactional", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" },
      { queryText: "Pristine The Lords booking & token amount", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-contact-sales-office" },
      { queryText: "Pristine The Lords sample flat site visit", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-contact-sales-office" },
      { queryText: "Pristine sales office contact number Pune", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-contact-sales-office" },
      { queryText: "Pristine The Lords current available inventory", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-luxury-apartments" }
    ]
  },

  // 14. Investment, ROI, Rental Yields & NRI Diaspora
  {
    categoryTitle: "14. INVESTMENT ROI, RENTAL YIELD & GLOBAL NRI GATEWAYS",
    categorySlug: "investment-roi-nri",
    badge: "NRI & ROI INTENT",
    queries: [
      { queryText: "Pristine Pune real estate investment", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-nri-real-estate-investment" },
      { queryText: "best Pristine project for investment Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-investment-guide" },
      { queryText: "Pristine rental yield & capital appreciation Baner", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison" },
      { queryText: "NRI investment Pristine Pune Dubai USA UK", intent: "Transactional", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-nri-real-estate-investment" },
      { queryText: "Pristine Pune property FEMA rules for NRI", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-nri-fema-investment-guide" }
    ]
  },

  // 15. Informational SEO, Builder Credibility & Due Diligence
  {
    categoryTitle: "15. BUILDER CREDIBILITY, DUE DILIGENCE & REVIEWS",
    categorySlug: "credibility-due-diligence",
    badge: "REPUTATION & LEGAL",
    queries: [
      { queryText: "Pristine Developers Pune review & reputation", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" },
      { queryText: "Is Pristine Developers reliable and RERA compliant", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-p52100078557-status" },
      { queryText: "Pristine construction quality Mivan formwork review", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-mivan-construction-technology" },
      { queryText: "Pristine Pune RERA registration and delivery track record", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-maharera-due-diligence-checklist" },
      { queryText: "Pristine Pune price trends 2026", intent: "Informational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" }
    ]
  },

  // 16. Competitor Comparison Searches (Pristine vs Major Pune Developers)
  {
    categoryTitle: "16. COMPETITOR COMPARISONS (GODREJ, KOLTE PATIL, VTP, SHAPOORJI)",
    categorySlug: "competitor-comparisons",
    badge: "MARKET BENCHMARK",
    queries: [
      { queryText: "Pristine vs Godrej Pune luxury apartments", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine vs Kolte Patil Baner Kharadi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine vs VTP Pune property comparison", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine vs Shapoorji Pallonji luxury flats", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "Pristine vs Lodha Kalpataru luxury homes Pune", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" },
      { queryText: "best builders in Pune for luxury residences", intent: "Commercial", estimatedVolume: "Very High", targetCleanUrl: "/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore" }
    ]
  },

  // 17. Hyperlocal Baner-Pashan-Hinjewadi Infrastructure & Price Matrix
  {
    categoryTitle: "17. HYPERLOCAL BANER-PASHAN-HINJEWADI INFRASTRUCTURE SEARCHES",
    categorySlug: "hyperlocal-baner-pashan",
    badge: "WEST PUNE ARTERY",
    queries: [
      { queryText: "Baner Pashan Link Road real estate price trends", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-investment-guide" },
      { queryText: "flats near Baner High Street and Balewadi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "luxury apartments 15 mins from Hinjewadi IT Park", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi" },
      { queryText: "Pristine The Lords beside Wakeshwar Temple Pashan", intent: "Navigational", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location" },
      { queryText: "top luxury projects in Baner Pashan Someshwarwadi", intent: "Commercial", estimatedVolume: "High", targetCleanUrl: "/pristine-the-lords-baner-project-overview" }
    ]
  }
];
