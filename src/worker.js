// ⚡ HIGH-END CLOUDFLARE EDGE SEO & ASSET WORKER
// Production Domain: https://pristinethelords.in
// Architecture: Native V8 Edge Isolates + HTMLRewriter SSR + 301 Canonical Guard + Asset Fallback

const CANONICAL_URLS = [
  "https://pristinethelords.in/",
  "https://pristinethelords.in/pristine-the-lords-baner-project-overview",
  "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-luxury-apartments",
  "https://pristinethelords.in/pristine-the-lords-baner-4-5-bhk-sky-villas",
  "https://pristinethelords.in/pristine-the-lords-baner-master-layout-floor-plans",
  "https://pristinethelords.in/pristine-the-lords-baner-luxury-amenities-sky-lounge",
  "https://pristinethelords.in/pristine-the-lords-baner-specifications-mivan-italian-marble",
  "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-location",
  "https://pristinethelords.in/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-real-estate-investment",
  "https://pristinethelords.in/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore",
  "https://pristinethelords.in/pristine-the-lords-baner-keyword-search-directory",
  "https://pristinethelords.in/pristine-the-lords-baner-maharera-p52100078557-status",
  "https://pristinethelords.in/pristine-the-lords-baner-faqs-price-possession",
  "https://pristinethelords.in/pristine-the-lords-baner-brochure-download-pdf",
  "https://pristinethelords.in/pristine-the-lords-baner-banking-institutional-financing",
  "https://pristinethelords.in/pristine-the-lords-baner-contact-sales-office",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-dubai-uae",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-usa",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-uk",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-investment-singapore",
  "https://pristinethelords.in/pristine-the-lords-baner-pashan-link-road-investment-guide",
  "https://pristinethelords.in/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison",
  "https://pristinethelords.in/pristine-the-lords-baner-nri-fema-investment-guide",
  "https://pristinethelords.in/pristine-the-lords-baner-maharera-due-diligence-checklist",
  "https://pristinethelords.in/pristine-the-lords-baner-mivan-construction-technology"
];

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

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
    const cf = request.cf || {};

    // 1. 🔒 Canonical Hostname & HTTPS Protocol Guard (301 Permanent Redirects)
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === 'www.pristinethelords.in') {
      url.hostname = 'pristinethelords.in';
      return Response.redirect(url.toString(), 301);
    }

    // 2. ⚡ Built-In Cloudflare API Endpoints
    if (url.pathname === '/api/indexnow') {
      return handleIndexNow();
    }
    if (url.pathname === '/api/google-index') {
      return handleGoogleIndex(env);
    }
    if (url.pathname === '/api/warm-cache') {
      return handleWarmCache(url.origin);
    }
    if (url.pathname === '/api/index-all') {
      return handleIndexAll(url.origin, env);
    }

    // 3. 🤖 Detect Search Engine Crawlers & Social Platform Scrapers
    const isSearchBot = userAgent.includes('googlebot') || 
                        userAgent.includes('google-inspectiontool') ||
                        userAgent.includes('mediapartners-google') ||
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

    // 4. 📦 Fetch Static Asset from Cloudflare Assets Binding
    let response = null;
    if (env.ASSETS) {
      // Try exact request first
      response = await env.ASSETS.fetch(request);

      // If 404 and cleanPath matched a programmatic route, fetch the physical pre-rendered HTML file!
      if ((!response || response.status === 404) && matchedSeo) {
        const routeSlug = cleanPath.replace(/^\//, '');
        const targetHtmlUrl = new URL(`/${routeSlug}/index.html`, request.url);
        response = await env.ASSETS.fetch(new Request(targetHtmlUrl, request));
      }

      // If still 404 on non-file path, serve index.html (SPA Fallback)
      if ((!response || response.status === 404) && !url.pathname.includes('.')) {
        const indexUrl = new URL('/index.html', request.url);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
      }
    }

    if (!response) {
      response = new Response("Not Found", { status: 404 });
    }

    // 5. 🚀 Real-time HTMLRewriter Edge SSR Transformation for HTML responses
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html') && matchedSeo) {
      const rewriter = new HTMLRewriter()
        .on('title', {
          element(e) { e.setInnerContent(matchedSeo.title); }
        })
        .on('meta[name="title"]', {
          element(e) { e.setAttribute('content', matchedSeo.title); }
        })
        .on('meta[name="description"]', {
          element(e) { e.setAttribute('content', matchedSeo.description); }
        })
        .on('link[rel="canonical"]', {
          element(e) { e.setAttribute('href', matchedSeo.canonicalUrl); }
        })
        .on('meta[property="og:title"]', {
          element(e) { e.setAttribute('content', matchedSeo.title); }
        })
        .on('meta[property="og:description"]', {
          element(e) { e.setAttribute('content', matchedSeo.description); }
        })
        .on('meta[property="og:url"]', {
          element(e) { e.setAttribute('content', matchedSeo.canonicalUrl); }
        })
        .on('meta[name="twitter:title"]', {
          element(e) { e.setAttribute('content', matchedSeo.title); }
        })
        .on('meta[name="twitter:description"]', {
          element(e) { e.setAttribute('content', matchedSeo.description); }
        });

      response = rewriter.transform(response);
    }

    // 6. 🛡️ Attach Enterprise Security, Core Web Vitals & Edge Geo Headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('X-XSS-Protection', '1; mode=block');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Timing-Allow-Origin', '*');
    newHeaders.set('Cache-Tag', 'pristine-the-lords, baner-pashan, luxury-real-estate-pune');
    newHeaders.set('X-Powered-By', 'Cloudflare-Edge-Enterprise-Worker');

    newHeaders.set('X-Edge-PoP', cf.colo || 'GLOBAL-EDGE');
    newHeaders.set('X-Edge-Country', cf.country || 'IN');
    newHeaders.set('X-Edge-City', cf.city || 'Pune');
    newHeaders.set('X-Edge-Lat', `${cf.latitude || '18.547'}`);
    newHeaders.set('X-Edge-Long', `${cf.longitude || '73.793'}`);

    if (matchedSeo) {
      newHeaders.set('Link', `<${matchedSeo.canonicalUrl}>; rel="canonical", <https://www.google.com>; rel="preconnect", <https://fonts.googleapis.com>; rel="preconnect", <https://fonts.gstatic.com>; rel="preconnect"; crossorigin, <https://maps.googleapis.com>; rel="preconnect", <https://static.wixstatic.com>; rel="preconnect"; crossorigin`);
      newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      newHeaders.set('X-SSR-Engine', 'Cloudflare-HTMLRewriter-Edge-SSR');
    }

    if (isSearchBot) {
      newHeaders.set('X-Crawler-Priority', 'High-Speed-Edge-SSR');
      newHeaders.set('Vary', 'Accept-Encoding, User-Agent');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};

// --- HELPER ENDPOINTS ---
async function handleIndexNow() {
  const payload = {
    host: "pristinethelords.in",
    key: "pristinelordsindexnowkey2026",
    keyLocation: "https://pristinethelords.in/pristinelordsindexnowkey2026.txt",
    urlList: CANONICAL_URLS
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });
    return new Response(JSON.stringify({
      success: res.status === 200 || res.status === 202,
      statusCode: res.status,
      totalUrlsSubmitted: CANONICAL_URLS.length,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

async function handleWarmCache(origin) {
  const warmResults = [];
  for (const targetUrl of CANONICAL_URLS) {
    try {
      const resp = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) CloudflareEdgePrewarm'
        }
      });
      warmResults.push({ url: targetUrl, status: resp.status, ok: resp.ok });
    } catch (e) {
      warmResults.push({ url: targetUrl, status: 500, error: e.message });
    }
  }
  return new Response(JSON.stringify({
    success: true,
    message: "Cloudflare Edge cache pre-warmed for all canonical programmatic routes",
    totalWarmed: warmResults.length,
    timestamp: new Date().toISOString(),
    results: warmResults
  }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}

function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function handleGoogleIndex(env) {
  const serviceAccountKeyJson = env && env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKeyJson) {
    return new Response(JSON.stringify({
      status: "READY_FOR_CREDENTIALS",
      message: "Google Indexing API Edge Dispatcher is live. To enable automatic RS256 OAuth JWT publishing, add GOOGLE_SERVICE_ACCOUNT_KEY in Cloudflare Dashboard (Settings > Environment Variables).",
      supportedUrls: CANONICAL_URLS,
      documentation: "https://developers.google.com/search/apis/indexing-api/v3/prereqs",
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }

  try {
    const creds = JSON.parse(serviceAccountKeyJson);
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: "RS256", typ: "JWT" };
    const claimSet = {
      iss: creds.client_email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now
    };

    const pemHeader = "-----BEGIN PRIVATE KEY-----";
    const pemFooter = "-----END PRIVATE KEY-----";
    const pemContents = creds.private_key.replace(pemHeader, "").replace(pemFooter, "").replace(/\s/g, "");
    const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

    const cryptoKey = await crypto.subtle.importKey(
      "pkcs8",
      binaryDer.buffer,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
    const signatureInput = `${encodedHeader}.${encodedClaimSet}`;
    const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, new TextEncoder().encode(signatureInput));
    const encodedSignature = base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
    const jwt = `${signatureInput}.${encodedSignature}`;

    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error(`Google OAuth failed: ${JSON.stringify(tokenData)}`);
    }

    const accessToken = tokenData.access_token;
    const indexingResults = [];
    for (const targetUrl of CANONICAL_URLS) {
      const gResp = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: targetUrl, type: "URL_UPDATED" })
      });
      const gData = await gResp.json();
      indexingResults.push({ url: targetUrl, status: gResp.status, response: gData });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Successfully broadcasted 26 URLs to Google Indexing API v3",
      totalSubmitted: indexingResults.length,
      timestamp: new Date().toISOString(),
      results: indexingResults
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

async function handleIndexAll(origin, env) {
  const [indexNowRes, googleIndexRes, warmCacheRes] = await Promise.allSettled([
    handleIndexNow(),
    handleGoogleIndex(env),
    handleWarmCache(origin)
  ]);
  const indexNowData = indexNowRes.status === 'fulfilled' ? await indexNowRes.value.json().catch(() => null) : null;
  const googleData = googleIndexRes.status === 'fulfilled' ? await googleIndexRes.value.json().catch(() => null) : null;
  const warmData = warmCacheRes.status === 'fulfilled' ? await warmCacheRes.value.json().catch(() => null) : null;

  return new Response(JSON.stringify({
    success: true,
    message: "Master Global Indexing Protocol Executed from Cloudflare Edge Worker",
    timestamp: new Date().toISOString(),
    indexNow: indexNowData,
    googleIndexing: googleData,
    edgeCachePreWarm: warmData
  }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}
