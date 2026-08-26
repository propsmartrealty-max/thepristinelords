// ⚡ CLOUDFLARE ENTERPRISE HTMLREWRITER EDGE SSR & ADVANCED SEO ENGINE
// Production Domain: https://pristinethelords.in

const ROUTE_SEO_MAP = {
  '/': {
    title: "THE LORD'S | PRISTINE DEVELOPERS | 3 & 4.5 BHK LUXURY RESIDENCES BANER PASHAN LINK ROAD PUNE",
    description: "THE LORD'S BY PRISTINE DEVELOPERS IN PASHAN - BANER LINK ROAD, PUNE. 3 & 4.5 BHK ULTRA LUXURY MARBLE RESIDENCES IN 34-STOREY MONOLITH TOWERS. FINANCED BY CAPRI GLOBAL CAPITAL LIMITED. MAHARERA: P52100078557.",
    canonicalUrl: "https://pristinethelords.in/"
  },
  '/pristine-the-lords-baner-project-overview': {
    title: "PRISTINE THE LORDS BANER | PROJECT OVERVIEW & 34-STOREY ELEVATION | PRISTINE DEVELOPERS",
    description: "EXPLORE THE LORD'S BY PRISTINE DEVELOPERS ON BANER-PASHAN LINK ROAD PUNE. ICONIC 34-STOREY HIGH-RISE ELEVATION, PALATIAL ITALIAN MARBLE RESIDENCES, AND SCENIC BANER HILL VIEWS. MAHARERA P52100078557.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-project-overview"
  },
  '/pristine-the-lords-baner-3-bhk-luxury-apartments': {
    title: "PRISTINE THE LORDS 3 BHK LUXURY APARTMENTS BANER PASHAN LINK ROAD PUNE | 1,554 SQ.FT",
    description: "SANCTIONED 1,554 SQ.FT RERA CARPET 3 BHK LUXURY RESIDENCES AT THE LORD'S BANER PASHAN LINK ROAD. IMPORTED STATUARIO MARBLE FLOORING, SGU SOLAR GLASS BALCONIES & 34-STOREY VIEWS. STARTING ₹ 2.57 CR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-luxury-apartments"
  },
  '/pristine-the-lords-baner-4-5-bhk-sky-villas': {
    title: "PRISTINE THE LORDS 4.5 BHK SKY VILLAS & PALATIAL PENTHOUSES BANER PUNE | 2,005 SQ.FT",
    description: "EXCLUSIVE 2,005 SQ.FT RERA CARPET 4.5 BHK PALATIAL SKY VILLAS AT THE LORD'S BY PRISTINE DEVELOPERS BANER. DUAL BALCONIES, PRIVATE ELEVATOR ACCESS & LEVEL 34 SKY PROMENADE. STARTING ₹ 3.55 CR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-4-5-bhk-sky-villas"
  },
  '/pristine-the-lords-baner-master-layout-floor-plans': {
    title: "PRISTINE THE LORDS BANER MASTER LAYOUT & SANCTIONED FLOOR PLANS | BLUEPRINTS",
    description: "VIEW SANCTIONED ARCHITECTURAL BLUEPRINTS, 3 & 4.5 BHK FLOOR PLANS, UNIT ORIENTATIONS & SITE MASTER LAYOUT FOR THE LORD'S BY PRISTINE DEVELOPERS PASHAN BANER PUNE. MAHARERA P52100078557.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-master-layout-floor-plans"
  },
  '/pristine-the-lords-baner-luxury-amenities-sky-lounge': {
    title: "PRISTINE THE LORDS 20+ LUXURY AMENITIES & LEVEL 34 SKY LOUNGE | BANER PUNE",
    description: "DISCOVER 20+ SIGNATURE RESIDENTIAL AMENITIES AT THE LORD'S BANER: LEVEL 34 SKY LOUNGE, FITNESS FORGE GYM, PRIVATE RESIDENT DOLBY THEATRE, SPA, BADMINTON & SMASH COURTS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-luxury-amenities-sky-lounge"
  },
  '/pristine-the-lords-baner-specifications-mivan-italian-marble': {
    title: "PRISTINE THE LORDS SPECIFICATIONS: MIVAN TECH & IMPORTED ITALIAN MARBLE",
    description: "10-TIER ARCHITECTURAL SPECIFICATIONS OF THE LORD'S BY PRISTINE DEVELOPERS: MIVAN MONOLITHIC CONCRETE, STATUARIO ITALIAN MARBLE, GROHE/KOHLER FITTINGS, YALE DIGITAL LOCKS & SGU GLASS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-specifications-mivan-italian-marble"
  },
  '/pristine-the-lords-baner-pashan-link-road-location': {
    title: "PRISTINE THE LORDS BANER-PASHAN LINK ROAD LOCATION & CONNECTIVITY MAP",
    description: "PRISTINE THE LORDS PRIME LOCATION: BESIDE WAKESHWAR TEMPLE, BANER-PASHAN LINK ROAD, SOMESHWARWADI, PASHAN, PUNE 411008. 5 MINS TO BANER HIGH STREET, 15 MINS TO HINJEWADI IT PARK.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-location"
  },
  '/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi': {
    title: "PRISTINE THE LORDS COMMUTE MATRIX: 15 MINS TO HINJEWADI & BALEWADI HIGH STREET",
    description: "REAL-TIME TRANSIT MATRIX FROM THE LORD'S BANER: 12 MINS TO MUMBAI-PUNE HIGHWAY, 15 MINS TO HINJEWADI PHASE 1, 5 MINS TO BALEWADI HIGH STREET, 25 MINS TO SHIVAJINAGAR.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi"
  },
  '/pristine-the-lords-baner-nri-real-estate-investment': {
    title: "PRISTINE THE LORDS NRI REAL ESTATE INVESTMENT GATEWAY PUNE (DUBAI, USA, UK, SG)",
    description: "OFFICIAL NRI & OCI REAL ESTATE DESK FOR THE LORD'S BANER PUNE. 100% REPATRIABLE NRE/NRO INVESTMENT, RBI FEMA COMPLIANCE, HIGH RENTAL YIELDS & DEDICATED WEALTH ADVISORY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-real-estate-investment"
  },
  '/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore': {
    title: "PUNE LUXURY REAL ESTATE MARKET SWEEP ABOVE 2 CRORE | PRISTINE THE LORDS BANER",
    description: "IN-DEPTH PUNE LUXURY REAL ESTATE MARKET ANALYSIS FOR RESIDENCES ABOVE ₹ 2 CRORE. PRICE TRENDS, CARPET EFFICIENCIES, APPRECIATION BENCHMARKS & WHY BANER-PASHAN OUTPERFORMS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore"
  },
  '/pristine-the-lords-baner-keyword-search-directory': {
    title: "PRISTINE DEVELOPERS PUNE KEYWORD SEARCH & BUYER INTENT DIRECTORY",
    description: "COMPLETE GOOGLE SEARCH QUERY DIRECTORY FOR PRISTINE DEVELOPERS PUNE PORTFOLIO: THE LORD'S BANER, O2 WORLD KHARADI, ALLURE, I-LIFE, YOO AKURDI, KYRA VIMAN NAGAR & AP81.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-keyword-search-directory"
  },
  '/pristine-the-lords-baner-maharera-p52100078557-status': {
    title: "PRISTINE THE LORDS MAHARERA P52100078557 VERIFICATION & CONSTRUCTION STATUS",
    description: "OFFICIAL MAHARERA COMPLIANCE REPORT FOR THE LORD'S BY PRISTINE DEVELOPERS (REG NO: P52100078557). VERIFIED COMMENCEMENT CERTIFICATE, TITLE CLEARANCES & AUDITED ESCROW BACKING.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-maharera-p52100078557-status"
  },
  '/pristine-the-lords-baner-faqs-price-possession': {
    title: "PRISTINE THE LORDS BANER FAQS: PRICING, POSSESSION DATE & CARPET AREA",
    description: "VERIFIED BUYER FAQS FOR THE LORD'S BY PRISTINE DEVELOPERS: 3 & 4.5 BHK ALL-INCLUSIVE COST SHEETS, POSSESSION TIMELINES, MAINTENANCE, STAMP DUTY, GST & PAYMENT SCHEDULES.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-faqs-price-possession"
  },
  '/pristine-the-lords-baner-brochure-download-pdf': {
    title: "DOWNLOAD PRISTINE THE LORDS OFFICIAL MASTER BROCHURE & BLUEPRINTS PDF",
    description: "INSTANT DOWNLOAD FOR THE LORD'S BY PRISTINE DEVELOPERS OFFICIAL MASTER BROCHURE PDF: SANCTIONED FLOOR PLANS, SPECIFICATIONS, AMENITIES, MASTER LAYOUT & RERA DETAILS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-brochure-download-pdf"
  },
  '/pristine-the-lords-baner-banking-institutional-financing': {
    title: "PRISTINE THE LORDS INSTITUTIONAL FINANCING BY CAPRI GLOBAL CAPITAL LIMITED (CGCL)",
    description: "THE LORD'S IS INSTITUTIONALLY FINANCED BY CAPRI GLOBAL CAPITAL LIMITED (CGCL). APPROVED FOR ATTRACTIVE HOME LOAN PACKAGES ACROSS ALL MAJOR INDIAN NATIONALIZED & PRIVATE BANKS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-banking-institutional-financing"
  },
  '/pristine-the-lords-baner-contact-sales-office': {
    title: "CONTACT PRISTINE THE LORDS SALES OFFICE | VIP SITE VISIT BOOKING BANER PUNE",
    description: "CONNECT DIRECTLY WITH PRISTINE DEVELOPERS VIP SALES DESK FOR THE LORD'S PASHAN BANER. SCHEDULE A PRIVATE 3D SITE TOUR OR SAMPLE FLAT VISIT. CALL +91-9209090022.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-contact-sales-office"
  },
  '/pristine-the-lords-baner-nri-investment-dubai-uae': {
    title: "PRISTINE THE LORDS NRI DUBAI & UAE INVESTMENT DESK | PUNE LUXURY HOMES",
    description: "DIRECT NRI REAL ESTATE INVESTMENT GATEWAY FOR UAE & DUBAI RESIDENTS INVESTING IN THE LORD'S BANER PUNE. ATTRACTIVE DIRHAM-TO-INR PARITY & REPATRIATION SUPPORT.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-dubai-uae"
  },
  '/pristine-the-lords-baner-nri-investment-usa': {
    title: "PRISTINE THE LORDS NRI USA & SILICON VALLEY INVESTMENT GATEWAY PUNE",
    description: "USD WEALTH ADVISORY FOR US-BASED NRIS & OCIS INVESTING IN HIGH-GROWTH WEST PUNE REAL ESTATE AT THE LORD'S BANER-PASHAN LINK ROAD.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-usa"
  },
  '/pristine-the-lords-baner-nri-investment-uk': {
    title: "PRISTINE THE LORDS NRI UK & LONDON INVESTMENT GATEWAY PUNE",
    description: "STERLING GBP INVESTMENT GATEWAY FOR UK NRIS INVESTING IN 3 & 4.5 BHK PALATIAL RESIDENCES IN BANER PUNE WITH TIMELESS MARBLE CRAFTSMANSHIP.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-uk"
  },
  '/pristine-the-lords-baner-nri-investment-singapore': {
    title: "PRISTINE THE LORDS NRI SINGAPORE INVESTMENT GATEWAY PUNE",
    description: "SINGAPORE SGD WEALTH ALLOCATION ADVISORY FOR THE LORD'S BY PRISTINE DEVELOPERS IN BANER PASHAN LINK ROAD PUNE.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-singapore"
  },
  '/pristine-the-lords-baner-pashan-link-road-investment-guide': {
    title: "BANER-PASHAN LINK ROAD LUXURY REAL ESTATE INVESTMENT GUIDE 2026 | PRISTINE RESEARCH",
    description: "IN-DEPTH RESEARCH REPORT: WHY BANER-PASHAN LINK ROAD IS PUNE'S TOP LUXURY REAL ESTATE INVESTMENT CORRIDOR. CAPITAL APPRECIATION, METRO CONNECTIVITY & HNI MIGRATION.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-investment-guide"
  },
  '/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison': {
    title: "3 BHK VS 4.5 BHK LUXURY RESIDENCES ROI & RENTAL YIELD COMPARISON | PUNE",
    description: "FINANCIAL COMPARISON OF 1,554 SQ.FT 3 BHK VS 2,005 SQ.FT 4.5 BHK RESIDENCES AT THE LORD'S BANER. RENTAL YIELD BENCHMARKS (4.8% GROSS), CAPITAL GAINS & HNI RESALE LIQUIDITY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison"
  },
  '/pristine-the-lords-baner-nri-fema-investment-guide': {
    title: "2026 NRI & OCI FEMA REAL ESTATE INVESTMENT GUIDE FOR PUNE INDIA | PRISTINE LEGAL",
    description: "STEP-BY-STEP LEGAL ROADMAP FOR DUBAI, USA, UK & SINGAPORE NRIS BUYING RESIDENTIAL PROPERTY IN INDIA. RBI REGULATIONS, FEMA COMPLIANCE, NRE REPATRIATION & TAX EXEMPTIONS.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-nri-fema-investment-guide"
  },
  '/pristine-the-lords-baner-maharera-due-diligence-checklist': {
    title: "MAHARERA DUE DILIGENCE CHECKLIST FOR LUXURY APARTMENT BUYERS IN PUNE",
    description: "BUYER'S GUIDE TO VERIFYING MAHARERA REGISTRATIONS, 70% ESCROW COMPLIANCE, COMMENCEMENT CERTIFICATES & TITLE DEEDS BEFORE INVESTING IN PUNE RESIDENTIAL PROPERTY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-maharera-due-diligence-checklist"
  },
  '/pristine-the-lords-baner-mivan-construction-technology': {
    title: "MIVAN ALUMINIUM FORMWORK VS CONVENTIONAL BRICKWORK IN HIGH-RISE TOWERS",
    description: "ENGINEERING STUDY: WHY PRISTINE DEVELOPERS USES 100% CAST-IN-SITU REINFORCED MONOLITHIC CONCRETE (MIVAN TECH) FOR SEISMIC RESILIENCE, ZERO SEEPAGE & HIGH CARPET AREA EFFICIENCY.",
    canonicalUrl: "https://pristinethelords.in/pristine-the-lords-baner-mivan-construction-technology"
  }
};

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const cf = request.cf || {};

  // 1. Force Canonical Hostname (301 Permanent www -> apex domain)
  if (url.hostname === 'www.pristinethelords.in') {
    url.hostname = 'pristinethelords.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Identify Search Bots & Social Crawlers
  const isSearchBot = userAgent.includes('googlebot') || 
                      userAgent.includes('bingbot') || 
                      userAgent.includes('applebot') || 
                      userAgent.includes('duckduckbot') ||
                      userAgent.includes('baiduspider') ||
                      userAgent.includes('yandexbot') ||
                      userAgent.includes('twitterbot') ||
                      userAgent.includes('facebookexternalhit') ||
                      userAgent.includes('linkedinbot') ||
                      userAgent.includes('whatsapp');

  const cleanPath = url.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const matchedSeo = ROUTE_SEO_MAP[cleanPath];

  // 3. Handle Clean Programmatic SEO Keyword Slugs via Cloudflare HTMLRewriter
  if (matchedSeo && env && env.ASSETS) {
    const assetUrl = new URL('/index.html', request.url);
    const originResponse = await env.ASSETS.fetch(assetUrl);

    // 🚀 CLOUDFLARE HTMLREWRITER: Instant Server-Side Edge Transformation
    const rewriter = new HTMLRewriter()
      .on('title', {
        element(e) {
          e.setInnerContent(matchedSeo.title);
        }
      })
      .on('meta[name="title"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.title);
        }
      })
      .on('meta[name="description"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.description);
        }
      })
      .on('link[rel="canonical"]', {
        element(e) {
          e.setAttribute('href', matchedSeo.canonicalUrl);
        }
      })
      .on('meta[property="og:title"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.title);
        }
      })
      .on('meta[property="og:description"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.description);
        }
      })
      .on('meta[property="og:url"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.canonicalUrl);
        }
      })
      .on('meta[name="twitter:title"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.title);
        }
      })
      .on('meta[name="twitter:description"]', {
        element(e) {
          e.setAttribute('content', matchedSeo.description);
        }
      });

    const transformedResponse = rewriter.transform(originResponse);
    const newHeaders = new Headers(transformedResponse.headers);

    // Set Enterprise Edge Performance & Security Headers
    newHeaders.set('Link', `<${matchedSeo.canonicalUrl}>; rel="canonical", <https://fonts.googleapis.com>; rel="preconnect", <https://fonts.gstatic.com>; rel="preconnect"; crossorigin, <https://static.wixstatic.com>; rel="preconnect"; crossorigin`);
    newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('X-XSS-Protection', '1; mode=block');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Timing-Allow-Origin', '*');
    newHeaders.set('X-Edge-PoP', cf.colo || 'GLOBAL-EDGE');
    newHeaders.set('X-Edge-Country', cf.country || 'IN');
    newHeaders.set('X-Edge-City', cf.city || 'Pune');
    newHeaders.set('X-SSR-Engine', 'Cloudflare-HTMLRewriter-Edge-SSR');
    newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');

    if (isSearchBot) {
      newHeaders.set('X-Crawler-Priority', 'High-Speed-Edge-SSR');
    }

    return new Response(transformedResponse.body, {
      status: 200,
      headers: newHeaders
    });
  }

  // 4. Fallback Standard Edge Execution
  const response = await next();
  const newHeaders = new Headers(response.headers);

  newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  newHeaders.set('X-XSS-Protection', '1; mode=block');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Timing-Allow-Origin', '*');
  newHeaders.set('X-Edge-PoP', cf.colo || 'GLOBAL-EDGE');
  newHeaders.set('X-Edge-Country', cf.country || 'IN');

  if (isSearchBot) {
    newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('X-Crawler-Priority', 'High-Speed-Edge-SSR');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
