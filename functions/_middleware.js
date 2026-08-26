// ⚡ CLOUDFLARE ENTERPRISE EDGE ROUTING & ADVANCED PERFORMANCE MIDDLEWARE
// Production Domain: https://pristinethelords.in

const CLEAN_KEYWORD_SLUGS = [
  // 🎯 Core Pristine The Lords Baner Semantic Slugs
  '/pristine-the-lords-baner-luxury-apartments',
  '/pristine-the-lords-baner-project-overview',
  '/pristine-the-lords-baner-3-bhk-luxury-apartments',
  '/pristine-the-lords-baner-4-5-bhk-sky-villas',
  '/pristine-the-lords-baner-master-layout-floor-plans',
  '/pristine-the-lords-baner-luxury-amenities-sky-lounge',
  '/pristine-the-lords-baner-specifications-mivan-italian-marble',
  '/pristine-the-lords-baner-pashan-link-road-location',
  '/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi',
  '/pristine-the-lords-baner-nri-real-estate-investment',
  '/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore',
  '/pristine-the-lords-baner-keyword-search-directory',
  '/pristine-the-lords-baner-maharera-p52100078557-status',
  '/pristine-the-lords-baner-faqs-price-possession',
  '/pristine-the-lords-baner-brochure-download-pdf',
  '/pristine-the-lords-baner-banking-institutional-financing',
  '/pristine-the-lords-baner-contact-sales-office',

  // 🌍 NRI International Gateways
  '/pristine-the-lords-baner-nri-investment-dubai-uae',
  '/pristine-the-lords-baner-nri-investment-usa',
  '/pristine-the-lords-baner-nri-investment-uk',
  '/pristine-the-lords-baner-nri-investment-singapore',
  '/nri-investment-dubai-uae',
  '/nri-investment-usa',
  '/nri-investment-uk',
  '/nri-investment-singapore',

  // 📚 Authority Real Estate Knowledge Articles
  '/pristine-the-lords-baner-pashan-link-road-investment-guide',
  '/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison',
  '/pristine-the-lords-baner-nri-fema-investment-guide',
  '/pristine-the-lords-baner-maharera-due-diligence-checklist',
  '/pristine-the-lords-baner-mivan-construction-technology',
  '/baner-pashan-link-road-luxury-real-estate-investment-guide',
  '/3-bhk-vs-4-bhk-luxury-apartments-pune-roi-comparison',
  '/nri-fema-real-estate-investment-guide-pune-india',
  '/maharera-due-diligence-checklist-luxury-apartments-pune',
  '/mivan-construction-technology-vs-conventional-brickwork',

  // Alternate legacy mappings for seamless zero-regression crawlability
  '/pristine-the-lords-3-bhk-luxury-apartments-baner',
  '/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune',
  '/pristine-the-lords-master-layout-floor-plans',
  '/pristine-the-lords-luxury-amenities-sky-lounge',
  '/pristine-the-lords-specifications-mivan-italian-marble',
  '/pristine-the-lords-baner-pashan-link-road-location',
  '/pristine-the-lords-transit-commute-hinjewadi-balewadi',
  '/pristine-the-lords-nri-real-estate-investment-pune',
  '/pune-luxury-real-estate-market-sweep-above-2-crore',
  '/pristine-the-lords-maharera-p52100078557-construction-status',
  '/pristine-the-lords-faqs-price-carpet-area-possession',
  '/pristine-the-lords-brochure-download-pdf'
];

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

  // 2. Identify Crawlers and Bots for Fast-Path Delivery
  const isSearchBot = userAgent.includes('googlebot') || 
                      userAgent.includes('bingbot') || 
                      userAgent.includes('applebot') || 
                      userAgent.includes('duckduckbot') ||
                      userAgent.includes('baiduspider') ||
                      userAgent.includes('yandexbot');

  // 3. Handle Clean SEO Keyword Slugs (Rewrite internally to SPA index.html)
  if (CLEAN_KEYWORD_SLUGS.includes(url.pathname)) {
    if (env && env.ASSETS) {
      const assetUrl = new URL('/index.html', request.url);
      const response = await env.ASSETS.fetch(assetUrl);
      const newHeaders = new Headers(response.headers);

      // Enterprise Canonical & Microdata Headers
      newHeaders.set('Link', `<https://pristinethelords.in${url.pathname}>; rel="canonical", <https://fonts.googleapis.com>; rel="preconnect", <https://fonts.gstatic.com>; rel="preconnect"; crossorigin, <https://static.wixstatic.com>; rel="preconnect"; crossorigin`);
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
      newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');

      if (isSearchBot) {
        newHeaders.set('X-Crawler-Priority', 'High-Speed-Edge-SSR');
      }

      return new Response(response.body, {
        status: 200,
        headers: newHeaders
      });
    }
  }

  // 4. Execute Standard Request at Edge
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // Security & Performance Headers
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
