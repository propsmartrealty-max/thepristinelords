export interface SearchQueryCategory {
  categoryTitle: string;
  categorySlug: string;
  badge: string;
  queries: {
    queryText: string;
    intent: 'Transactional' | 'Commercial' | 'Informational' | 'Navigational';
    estimatedVolume: string;
    targetCleanUrl: string;
  }[];
}

export const SEARCH_QUERIES_BANK: SearchQueryCategory[] = [
  {
    categoryTitle: "HIGH-INTENT BUYER & COMMERCIAL PRICING QUERIES",
    categorySlug: "pricing-commercial",
    badge: "₹2 CR - ₹5 CR+ COMMERCE",
    queries: [
      {
        queryText: "Pristine The Lords 3 BHK price Baner",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-3-bhk-luxury-apartments-baner"
      },
      {
        queryText: "Pristine The Lords 4 BHK cost Baner Pashan Link Road",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune"
      },
      {
        queryText: "Pristine The Lords price per sq ft Baner",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pune-luxury-real-estate-market-sweep-above-2-crore"
      },
      {
        queryText: "Pristine The Lords booking amount & down payment plan",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-brochure-download-pdf"
      },
      {
        queryText: "Pristine The Lords all inclusive cost sheet Pune",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-brochure-download-pdf"
      },
      {
        queryText: "Pristine The Lords resale flats for sale Baner",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-3-bhk-luxury-apartments-baner"
      }
    ]
  },
  {
    categoryTitle: "FLOOR PLANS, CARPET AREA & BLUEPRINT SEARCHES",
    categorySlug: "floor-plans-layouts",
    badge: "SANCTIONED RERA BLUEPRINTS",
    queries: [
      {
        queryText: "Pristine The Lords 3 BHK floor plan 1554 sq ft",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-3-bhk-luxury-apartments-baner"
      },
      {
        queryText: "Pristine The Lords 4.5 BHK carpet area 2005 sq ft",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune"
      },
      {
        queryText: "Pristine The Lords master site plan & tower layout",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-master-layout-floor-plans"
      },
      {
        queryText: "Pristine The Lords sample flat 3D video walkthrough",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-luxury-amenities-sky-lounge"
      },
      {
        queryText: "Pristine The Lords east facing vastu compliant flats",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-3-bhk-luxury-apartments-baner"
      },
      {
        queryText: "Pristine The Lords high floor sky villa duplex Baner",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune"
      }
    ]
  },
  {
    categoryTitle: "LOCATION, CONNECTIVITY & WAKESHWAR TEMPLE CORRIDOR",
    categorySlug: "location-transit",
    badge: "BANER-PASHAN LINK ROAD",
    queries: [
      {
        queryText: "Pristine The Lords location Baner Pashan Link Road",
        intent: "Navigational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location"
      },
      {
        queryText: "Pristine The Lords near Wakeshwar Temple Someshwarwadi",
        intent: "Navigational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location"
      },
      {
        queryText: "Distance from Pristine The Lords to Balewadi High Street",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-transit-commute-hinjewadi-balewadi"
      },
      {
        queryText: "Pristine The Lords commute time to Hinjewadi IT Park",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-transit-commute-hinjewadi-balewadi"
      },
      {
        queryText: "Pristine The Lords Google Maps GPS directions",
        intent: "Navigational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-baner-pashan-link-road-location"
      }
    ]
  },
  {
    categoryTitle: "DUE DILIGENCE, MAHARERA, REVIEWS & CAPRI GLOBAL",
    categorySlug: "due-diligence-rera",
    badge: "MAHARERA: P52100078557",
    queries: [
      {
        queryText: "Pristine The Lords MahaRERA registration number P52100078557",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-maharera-p52100078557-construction-status"
      },
      {
        queryText: "Pristine The Lords Capri Global Capital Limited financing",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-specifications-mivan-italian-marble"
      },
      {
        queryText: "Pristine The Lords construction status & possession date",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-maharera-p52100078557-construction-status"
      },
      {
        queryText: "Pristine The Lords brochure download PDF official",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-brochure-download-pdf"
      },
      {
        queryText: "Pristine The Lords builder review & track record",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-faqs-price-carpet-area-possession"
      }
    ]
  },
  {
    categoryTitle: "GLOBAL NRI REAL ESTATE & FEMA COMPLIANCE QUERIES",
    categorySlug: "nri-global",
    badge: "GLOBAL NRI INVESTORS",
    queries: [
      {
        queryText: "Dubai NRI buying luxury flat in Pristine The Lords Baner",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-nri-real-estate-investment-pune"
      },
      {
        queryText: "USA NRI property investment in Pristine The Lords Pune",
        intent: "Transactional",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-nri-real-estate-investment-pune"
      },
      {
        queryText: "Pristine The Lords rental yield ROI and appreciation Baner",
        intent: "Commercial",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-nri-real-estate-investment-pune"
      },
      {
        queryText: "FEMA NRE NRO bank repatriation Pristine The Lords",
        intent: "Informational",
        estimatedVolume: "High",
        targetCleanUrl: "/pristine-the-lords-nri-real-estate-investment-pune"
      }
    ]
  }
];
