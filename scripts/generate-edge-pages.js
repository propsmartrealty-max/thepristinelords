import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const ROUTE_DATA = {
  '/pristine-the-lords-baner-project-overview': {
    title: "PRISTINE THE LORDS BANER | PROJECT OVERVIEW & 34-STOREY ELEVATION | PRISTINE DEVELOPERS",
    description: "EXPLORE THE LORD'S BY PRISTINE DEVELOPERS ON BANER-PASHAN LINK ROAD PUNE. ICONIC 34-STOREY HIGH-RISE ELEVATION, PALATIAL ITALIAN MARBLE RESIDENCES, AND SCENIC BANER HILL VIEWS. MAHARERA P52100078557.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-project-overview",
    h1: "PRISTINE THE LORD'S BANER - PROJECT OVERVIEW & 34-STOREY ARCHITECTURAL ELEVATION",
    category: "Project Elevation & Master Architecture",
    schemaType: "ApartmentComplex"
  },
  '/pristine-the-lords-baner-3-bhk-luxury-apartments': {
    title: "PRISTINE THE LORDS 3 BHK LUXURY APARTMENTS BANER PASHAN LINK ROAD PUNE | 1,554 SQ.FT",
    description: "SANCTIONED 1,554 SQ.FT RERA CARPET 3 BHK LUXURY RESIDENCES AT THE LORD'S BANER PASHAN LINK ROAD. IMPORTED STATUARIO MARBLE FLOORING, SGU SOLAR GLASS BALCONIES & 34-STOREY VIEWS. STARTING ₹ 2.57 CR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-luxury-apartments",
    h1: "3 BHK ULTRA LUXURY MARBLE RESIDENCES (1,554 SQ.FT RERA CARPET) - PRISTINE THE LORD'S BANER",
    category: "3 BHK Residence Configuration",
    schemaType: "Product",
    price: "25700000",
    sku: "PRISTINE-LORDS-3BHK"
  },
  '/pristine-the-lords-baner-4-5-bhk-sky-villas': {
    title: "PRISTINE THE LORDS 4.5 BHK SKY VILLAS & PALATIAL PENTHOUSES BANER PUNE | 2,005 SQ.FT",
    description: "EXCLUSIVE 2,005 SQ.FT RERA CARPET 4.5 BHK PALATIAL SKY VILLAS AT THE LORD'S BY PRISTINE DEVELOPERS BANER. DUAL BALCONIES, PRIVATE ELEVATOR ACCESS & LEVEL 34 SKY PROMENADE. STARTING ₹ 3.55 CR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-4-5-bhk-sky-villas",
    h1: "4.5 BHK PALATIAL SKY VILLAS & PENTHOUSES (2,005 SQ.FT RERA CARPET) - PRISTINE THE LORD'S BANER",
    category: "4.5 BHK Sky Villa Configuration",
    schemaType: "Product",
    price: "35500000",
    sku: "PRISTINE-LORDS-4.5BHK"
  },
  '/pristine-the-lords-baner-master-layout-floor-plans': {
    title: "PRISTINE THE LORDS BANER MASTER LAYOUT & SANCTIONED FLOOR PLANS | BLUEPRINTS",
    description: "VIEW SANCTIONED ARCHITECTURAL BLUEPRINTS, 3 & 4.5 BHK FLOOR PLANS, UNIT ORIENTATIONS & SITE MASTER LAYOUT FOR THE LORD'S BY PRISTINE DEVELOPERS PASHAN BANER PUNE. MAHARERA P52100078557.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-master-layout-floor-plans",
    h1: "SANCTIONED MASTER LAYOUT & ARCHITECTURAL FLOOR PLANS - PRISTINE THE LORD'S BANER",
    category: "Sanctioned Blueprints & Unit Floor Plans",
    schemaType: "RealEstateListing"
  },
  '/pristine-the-lords-baner-luxury-amenities-sky-lounge': {
    title: "PRISTINE THE LORDS 20+ LUXURY AMENITIES & LEVEL 34 SKY LOUNGE | BANER PUNE",
    description: "DISCOVER 20+ SIGNATURE RESIDENTIAL AMENITIES AT THE LORD'S BANER: LEVEL 34 SKY LOUNGE, FITNESS FORGE GYM, PRIVATE RESIDENT DOLBY THEATRE, SPA, BADMINTON & SMASH COURTS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-luxury-amenities-sky-lounge",
    h1: "20+ CURATED LIFESTYLE AMENITIES & LEVEL 34 ROOFTOP SKY LOUNGE - PRISTINE THE LORD'S",
    category: "Lifestyle Amenities & Sky Promenade",
    schemaType: "ApartmentComplex"
  },
  '/pristine-the-lords-baner-specifications-mivan-italian-marble': {
    title: "PRISTINE THE LORDS SPECIFICATIONS: MIVAN TECH & IMPORTED ITALIAN MARBLE",
    description: "10-TIER ARCHITECTURAL SPECIFICATIONS OF THE LORD'S BY PRISTINE DEVELOPERS: MIVAN MONOLITHIC CONCRETE, STATUARIO ITALIAN MARBLE, GROHE/KOHLER FITTINGS, YALE DIGITAL LOCKS & SGU GLASS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-specifications-mivan-italian-marble",
    h1: "10-TIER LUXURY SPECIFICATIONS: MIVAN MONOLITHIC CONCRETE & ITALIAN STATUARIO MARBLE",
    category: "Engineering & Material Specifications",
    schemaType: "ApartmentComplex"
  },
  '/pristine-the-lords-baner-pashan-link-road-location': {
    title: "PRISTINE THE LORDS BANER-PASHAN LINK ROAD LOCATION & CONNECTIVITY MAP",
    description: "PRISTINE THE LORDS PRIME LOCATION: BESIDE WAKESHWAR TEMPLE, BANER-PASHAN LINK ROAD, SOMESHWARWADI, PASHAN, PUNE 411008. 5 MINS TO BANER HIGH STREET, 15 MINS TO HINJEWADI IT PARK.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-location",
    h1: "STRATEGIC LOCATION & TRANSIT MAP: BANER-PASHAN LINK ROAD, PUNE",
    category: "Geographic Location & Corridor Access",
    schemaType: "Place"
  },
  '/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi': {
    title: "PRISTINE THE LORDS COMMUTE MATRIX: 15 MINS TO HINJEWADI & BALEWADI HIGH STREET",
    description: "REAL-TIME TRANSIT MATRIX FROM THE LORD'S BANER: 12 MINS TO MUMBAI-PUNE HIGHWAY, 15 MINS TO HINJEWADI PHASE 1, 5 MINS TO BALEWADI HIGH STREET, 25 MINS TO SHIVAJINAGAR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi",
    h1: "TRANSIT & COMMUTE MATRIX: 15 MINS TO HINJEWADI IT PARK & BALEWADI HIGH STREET",
    category: "Commute Times & Infrastructure Proximity",
    schemaType: "Place"
  },
  '/pristine-the-lords-baner-nri-real-estate-investment': {
    title: "PRISTINE THE LORDS NRI REAL ESTATE INVESTMENT GATEWAY PUNE (DUBAI, USA, UK, SG)",
    description: "OFFICIAL NRI & OCI REAL ESTATE DESK FOR THE LORD'S BANER PUNE. 100% REPATRIABLE NRE/NRO INVESTMENT, RBI FEMA COMPLIANCE, HIGH RENTAL YIELDS & DEDICATED WEALTH ADVISORY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-real-estate-investment",
    h1: "OFFICIAL NRI & OCI WEALTH INVESTMENT GATEWAY: THE LORD'S BANER PUNE",
    category: "Global NRI Portfolio Advisory",
    schemaType: "FinancialProduct"
  },
  '/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore': {
    title: "PUNE LUXURY REAL ESTATE MARKET SWEEP ABOVE 2 CRORE | PRISTINE THE LORDS BANER",
    description: "IN-DEPTH PUNE LUXURY REAL ESTATE MARKET ANALYSIS FOR RESIDENCES ABOVE ₹ 2 CRORE. PRICE TRENDS, CARPET EFFICIENCIES, APPRECIATION BENCHMARKS & WHY BANER-PASHAN OUTPERFORMS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore",
    h1: "PUNE ULTRA LUXURY REAL ESTATE MARKET BENCHMARK (HOMES ABOVE ₹ 2 CRORE)",
    category: "Market Research & Asset Performance",
    schemaType: "RealEstateListing"
  },
  '/pristine-the-lords-baner-keyword-search-directory': {
    title: "PRISTINE DEVELOPERS PUNE KEYWORD SEARCH & BUYER INTENT DIRECTORY",
    description: "COMPLETE GOOGLE SEARCH QUERY DIRECTORY FOR PRISTINE DEVELOPERS PUNE PORTFOLIO: THE LORD'S BANER, O2 WORLD KHARADI, ALLURE, I-LIFE, YOO AKURDI, KYRA VIMAN NAGAR & AP81.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-keyword-search-directory",
    h1: "PRISTINE DEVELOPERS PUNE PORTFOLIO & BUYER INTENT SEARCH DIRECTORY",
    category: "Search Intelligence Directory",
    schemaType: "ItemList"
  },
  '/pristine-the-lords-baner-maharera-p52100078557-status': {
    title: "PRISTINE THE LORDS MAHARERA P52100078557 VERIFICATION & CONSTRUCTION STATUS",
    description: "OFFICIAL MAHARERA COMPLIANCE REPORT FOR THE LORD'S BY PRISTINE DEVELOPERS (REG NO: P52100078557). VERIFIED COMMENCEMENT CERTIFICATE, TITLE CLEARANCES & AUDITED ESCROW BACKING.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-maharera-p52100078557-status",
    h1: "OFFICIAL MAHARERA REGISTRATION NO: P52100078557 - VERIFICATION & DISCLOSURES",
    category: "Statutory Compliance & Legal Clearances",
    schemaType: "GovernmentPermit"
  },
  '/pristine-the-lords-baner-faqs-price-possession': {
    title: "PRISTINE THE LORDS BANER FAQS: PRICING, POSSESSION DATE & CARPET AREA",
    description: "VERIFIED BUYER FAQS FOR THE LORD'S BY PRISTINE DEVELOPERS: 3 & 4.5 BHK ALL-INCLUSIVE COST SHEETS, POSSESSION TIMELINES, MAINTENANCE, STAMP DUTY, GST & PAYMENT SCHEDULES.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-faqs-price-possession",
    h1: "BUYER FAQS: PRICING, POSSESSION SCHEDULE, CARPET AREA & PAYMENT PLANS",
    category: "Verified Buyer Knowledge Base",
    schemaType: "FAQPage"
  },
  '/pristine-the-lords-baner-brochure-download-pdf': {
    title: "DOWNLOAD PRISTINE THE LORDS OFFICIAL MASTER BROCHURE & BLUEPRINTS PDF",
    description: "INSTANT DOWNLOAD FOR THE LORD'S BY PRISTINE DEVELOPERS OFFICIAL MASTER BROCHURE PDF: SANCTIONED FLOOR PLANS, SPECIFICATIONS, AMENITIES, MASTER LAYOUT & RERA DETAILS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-brochure-download-pdf",
    h1: "DOWNLOAD OFFICIAL MASTER BROCHURE, SPECIFICATIONS & SANCTIONED BLUEPRINTS PDF",
    category: "Digital Assets & Master Brochure",
    schemaType: "DigitalDocument"
  },
  '/pristine-the-lords-baner-banking-institutional-financing': {
    title: "PRISTINE THE LORDS INSTITUTIONAL FINANCING BY CAPRI GLOBAL CAPITAL LIMITED (CGCL)",
    description: "THE LORD'S IS INSTITUTIONALLY FINANCED BY CAPRI GLOBAL CAPITAL LIMITED (CGCL). APPROVED FOR ATTRACTIVE HOME LOAN PACKAGES ACROSS ALL MAJOR INDIAN NATIONALIZED & PRIVATE BANKS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-banking-institutional-financing",
    h1: "INSTITUTIONAL FINANCING BY CAPRI GLOBAL CAPITAL LIMITED & APPROVED HOME LOANS",
    category: "Banking Clearances & Escrow Backing",
    schemaType: "FinancialService"
  },
  '/pristine-the-lords-baner-contact-sales-office': {
    title: "CONTACT PRISTINE THE LORDS SALES OFFICE | VIP SITE VISIT BOOKING BANER PUNE",
    description: "CONNECT DIRECTLY WITH PRISTINE DEVELOPERS VIP SALES DESK FOR THE LORD'S PASHAN BANER. SCHEDULE A PRIVATE 3D SITE TOUR OR SAMPLE FLAT VISIT. CALL +91-9209090022.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-contact-sales-office",
    h1: "CONTACT VIP SALES DESK & SCHEDULE A PRIVATE SAMPLE SUITE TOUR",
    category: "Direct Sales Office & VIP Appointments",
    schemaType: "RealEstateAgent"
  },
  '/pristine-the-lords-baner-nri-investment-dubai-uae': {
    title: "PRISTINE THE LORDS NRI DUBAI & UAE INVESTMENT DESK | PUNE LUXURY HOMES",
    description: "DIRECT NRI REAL ESTATE INVESTMENT GATEWAY FOR UAE & DUBAI RESIDENTS INVESTING IN THE LORD'S BANER PUNE. ATTRACTIVE DIRHAM-TO-INR PARITY & REPATRIATION SUPPORT.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-dubai-uae",
    h1: "NRI DUBAI & UAE INVESTMENT DESK: THE LORD'S BANER PUNE",
    category: "Dubai & Middle East NRI Desk",
    schemaType: "FinancialProduct"
  },
  '/pristine-the-lords-baner-nri-investment-usa': {
    title: "PRISTINE THE LORDS NRI USA & SILICON VALLEY INVESTMENT GATEWAY PUNE",
    description: "USD WEALTH ADVISORY FOR US-BASED NRIS & OCIS INVESTING IN HIGH-GROWTH WEST PUNE REAL ESTATE AT THE LORD'S BANER-PASHAN LINK ROAD.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-usa",
    h1: "NRI USA & SILICON VALLEY INVESTMENT GATEWAY: THE LORD'S BANER PUNE",
    category: "USA & Silicon Valley NRI Desk",
    schemaType: "FinancialProduct"
  },
  '/pristine-the-lords-baner-nri-investment-uk': {
    title: "PRISTINE THE LORDS NRI UK & LONDON INVESTMENT GATEWAY PUNE",
    description: "STERLING GBP INVESTMENT GATEWAY FOR UK NRIS INVESTING IN 3 & 4.5 BHK PALATIAL RESIDENCES IN BANER PUNE WITH TIMELESS MARBLE CRAFTSMANSHIP.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-uk",
    h1: "NRI UK & LONDON STERLING INVESTMENT GATEWAY: THE LORD'S BANER PUNE",
    category: "United Kingdom & London NRI Desk",
    schemaType: "FinancialProduct"
  },
  '/pristine-the-lords-baner-nri-investment-singapore': {
    title: "PRISTINE THE LORDS NRI SINGAPORE INVESTMENT GATEWAY PUNE",
    description: "SINGAPORE SGD WEALTH ALLOCATION ADVISORY FOR THE LORD'S BY PRISTINE DEVELOPERS IN BANER PASHAN LINK ROAD PUNE.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-singapore",
    h1: "NRI SINGAPORE & ASIA-PACIFIC INVESTMENT GATEWAY: THE LORD'S BANER PUNE",
    category: "Singapore & APAC NRI Desk",
    schemaType: "FinancialProduct"
  },
  '/pristine-the-lords-baner-pashan-link-road-investment-guide': {
    title: "BANER-PASHAN LINK ROAD LUXURY REAL ESTATE INVESTMENT GUIDE 2026 | PRISTINE RESEARCH",
    description: "IN-DEPTH RESEARCH REPORT: WHY BANER-PASHAN LINK ROAD IS PUNE'S TOP LUXURY REAL ESTATE INVESTMENT CORRIDOR. CAPITAL APPRECIATION, METRO CONNECTIVITY & HNI MIGRATION.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-investment-guide",
    h1: "2026 BANER-PASHAN LINK ROAD LUXURY REAL ESTATE INVESTMENT INTELLIGENCE REPORT",
    category: "Market Intelligence & Growth Analysis",
    schemaType: "Article"
  },
  '/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison': {
    title: "3 BHK VS 4.5 BHK LUXURY RESIDENCES ROI & RENTAL YIELD COMPARISON | PUNE",
    description: "FINANCIAL COMPARISON OF 1,554 SQ.FT 3 BHK VS 2,005 SQ.FT 4.5 BHK RESIDENCES AT THE LORD'S BANER. RENTAL YIELD BENCHMARKS (4.8% GROSS), CAPITAL GAINS & HNI RESALE LIQUIDITY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison",
    h1: "FINANCIAL BENCHMARK: 3 BHK (1,554 SQ.FT) VS 4.5 BHK (2,005 SQ.FT) ROI & YIELD COMPARISON",
    category: "Unit ROI & Rental Yield Modeling",
    schemaType: "Article"
  },
  '/pristine-the-lords-baner-nri-fema-investment-guide': {
    title: "2026 NRI & OCI FEMA REAL ESTATE INVESTMENT GUIDE FOR PUNE INDIA | PRISTINE LEGAL",
    description: "STEP-BY-STEP LEGAL ROADMAP FOR DUBAI, USA, UK & SINGAPORE NRIS BUYING RESIDENTIAL PROPERTY IN INDIA. RBI REGULATIONS, FEMA COMPLIANCE, NRE REPATRIATION & TAX EXEMPTIONS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-fema-investment-guide",
    h1: "NRI & OCI LEGAL BLUEPRINT: FEMA COMPLIANCE, RBI RULES & REPATRIATION RIGHTS",
    category: "Legal Framework & Foreign Exchange Compliance",
    schemaType: "Article"
  },
  '/pristine-the-lords-baner-maharera-due-diligence-checklist': {
    title: "MAHARERA DUE DILIGENCE CHECKLIST FOR LUXURY APARTMENT BUYERS IN PUNE",
    description: "BUYER'S GUIDE TO VERIFYING MAHARERA REGISTRATIONS, 70% ESCROW COMPLIANCE, COMMENCEMENT CERTIFICATES & TITLE DEEDS BEFORE INVESTING IN PUNE RESIDENTIAL PROPERTY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-maharera-due-diligence-checklist",
    h1: "MAHARERA DUE DILIGENCE BLUEPRINT FOR LUXURY HOME BUYERS IN PUNE",
    category: "Consumer Protection & Compliance Audit",
    schemaType: "Article"
  },
  '/pristine-the-lords-baner-mivan-construction-technology': {
    title: "MIVAN ALUMINIUM FORMWORK VS CONVENTIONAL BRICKWORK IN HIGH-RISE TOWERS",
    description: "ENGINEERING STUDY: WHY PRISTINE DEVELOPERS USES 100% CAST-IN-SITU REINFORCED MONOLITHIC CONCRETE (MIVAN TECH) FOR SEISMIC RESILIENCE, ZERO SEEPAGE & HIGH CARPET AREA EFFICIENCY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-mivan-construction-technology",
    h1: "STRUCTURAL ENGINEERING STUDY: MIVAN ALUMINIUM FORMWORK VS TRADITIONAL MASONRY",
    category: "Civil Engineering & High-Rise Technology",
    schemaType: "Article"
  }
};

async function generateEdgePages() {
  console.log("⚡ Starting Ultra Advanced Cloudflare Edge Static HTML Pre-Rendering...");

  if (!fs.existsSync(distDir)) {
    console.error("❌ dist directory does not exist! Run `vite build` first.");
    process.exit(1);
  }

  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error("❌ dist/index.html not found!");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
  let generatedCount = 0;

  for (const [route, data] of Object.entries(ROUTE_DATA)) {
    const routeSlug = route.replace(/^\//, '');
    const targetDir = path.join(distDir, routeSlug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let pageHtml = baseHtml;

    // 1. Replace Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${data.title}</title>`);

    // 2. Replace Meta Title
    pageHtml = pageHtml.replace(/<meta name="title" content="[\s\S]*?" \/>/i, `<meta name="title" content="${data.title}" />`);

    // 3. Replace Meta Description
    pageHtml = pageHtml.replace(/<meta name="description" content="[\s\S]*?" \/>/i, `<meta name="description" content="${data.description}" />`);

    // 4. Replace Canonical URL
    pageHtml = pageHtml.replace(/<link rel="canonical" href="[\s\S]*?" \/>/i, `<link rel="canonical" href="${data.canonicalUrl}" />`);

    // 5. Replace OpenGraph Tags
    pageHtml = pageHtml.replace(/<meta property="og:title" content="[\s\S]*?" \/>/i, `<meta property="og:title" content="${data.title}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:description" content="[\s\S]*?" \/>/i, `<meta property="og:description" content="${data.description}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:url" content="[\s\S]*?" \/>/i, `<meta property="og:url" content="${data.canonicalUrl}" />`);

    // 6. Replace Twitter Card Tags
    pageHtml = pageHtml.replace(/<meta name="twitter:title" content="[\s\S]*?" \/>/i, `<meta name="twitter:title" content="${data.title}" />`);
    pageHtml = pageHtml.replace(/<meta name="twitter:description" content="[\s\S]*?" \/>/i, `<meta name="twitter:description" content="${data.description}" />`);

    // 7. Inject Route-Specific Pre-rendered Crawler Fallback Markup inside #root
    const crawlerMarkup = `
    <div id="root">
      <header style="background:#fff;padding:16px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
        <a href="/" style="font-weight:bold;color:#0f172a;text-decoration:none;font-size:16px;">THE LORD'S | PRISTINE DEVELOPERS</a>
        <span style="font-size:12px;color:#ED6336;font-weight:bold;">MAHARERA: P52100078557</span>
      </header>
      <main style="max-width:1200px;margin:0 auto;padding:32px 16px;">
        <nav aria-label="Breadcrumb" style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#64748b;text-decoration:none;">HOME</a> / 
          <span style="color:#ED6336;font-weight:bold;">${data.category}</span>
        </nav>
        <h1 style="font-size:32px;font-weight:bold;color:#0f172a;line-height:1.2;margin-bottom:16px;">${data.h1}</h1>
        <p style="font-size:16px;color:#334155;line-height:1.6;margin-bottom:24px;">${data.description}</p>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:24px;margin-bottom:32px;">
          <h2 style="font-size:18px;color:#0f172a;margin-bottom:12px;">KEY HIGHLIGHTS & ARCHITECTURAL BENCHMARKS</h2>
          <ul style="color:#475569;font-size:14px;line-height:1.8;">
            <li><strong>Project:</strong> The Lord's by Pristine Developers</li>
            <li><strong>Location:</strong> Beside Wakeshwar Temple, Baner-Pashan Link Road, Someshwarwadi, Pashan, Pune 411008</li>
            <li><strong>MahaRERA Registration:</strong> P52100078557 (Sanctioned & Audited)</li>
            <li><strong>Institutional Financing:</strong> 100% Financed by Capri Global Capital Limited (CGCL)</li>
            <li><strong>Construction Method:</strong> 100% Mivan Aluminium Formwork Monolithic Cast-in-situ Concrete</li>
            <li><strong>Interior Craft:</strong> Imported Statuario Italian Marble in Living, Dining & Master Suites</li>
            <li><strong>Signature Amenities:</strong> Level 34 Sky Lounge, Rooftop Starlit Observatory, Dolby Resident Cinema</li>
          </ul>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="/pristine-the-lords-baner-brochure-download-pdf" style="display:inline-block;background:#ED6336;color:#fff;padding:12px 24px;border-radius:9999px;text-decoration:none;font-weight:bold;font-size:13px;">DOWNLOAD MASTER BROCHURE</a>
          <a href="/pristine-the-lords-baner-contact-sales-office" style="display:inline-block;background:#0f172a;color:#fff;padding:12px 24px;border-radius:9999px;text-decoration:none;font-weight:bold;font-size:13px;">SCHEDULE VIP SITE VISIT</a>
          <a href="tel:+919209090022" style="display:inline-block;background:#10b981;color:#fff;padding:12px 24px;border-radius:9999px;text-decoration:none;font-weight:bold;font-size:13px;">CALL DIRECT: +91-9209090022</a>
        </div>
      </main>
    </div>`;

    pageHtml = pageHtml.replace(/<div id="root"><\/div>/i, crawlerMarkup);

    // Write physical pre-rendered HTML file
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, pageHtml, 'utf8');
    generatedCount++;
  }

  // 8. Generate public/_redirects for Cloudflare Pages SPA Routing Fallback
  const redirectsContent = `/*  /index.html  200\n`;
  fs.writeFileSync(path.join(distDir, '_redirects'), redirectsContent, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'public', '_redirects'), redirectsContent, 'utf8');

  console.log(`✅ Generated ${generatedCount} Physical Cloudflare Edge Static HTML Pages in ./dist!`);
  console.log(`✅ Written _redirects fallback rules for Cloudflare Pages.`);
}

generateEdgePages().catch(err => {
  console.error("Error generating edge pages:", err);
  process.exit(1);
});
