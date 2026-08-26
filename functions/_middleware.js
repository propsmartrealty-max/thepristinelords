// ⚡ CLOUDFLARE ENTERPRISE EDGE ROUTING & CLEAN KEYWORD URLS MIDDLEWARE
// Production Domain: https://pristinethelords.in

const CLEAN_KEYWORD_SLUGS = [
  '/pristine-the-lords-3-bhk-luxury-apartments-baner',
  '/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune',
  '/pristine-the-lords-master-layout-floor-plans',
  '/pristine-the-lords-luxury-amenities-sky-lounge',
  '/pristine-the-lords-specifications-mivan-italian-marble',
  '/pristine-the-lords-baner-pashan-link-road-location',
  '/pristine-the-lords-transit-commute-hinjewadi-balewadi',
  '/pristine-the-lords-nri-real-estate-investment-pune',
  '/pune-luxury-real-estate-market-sweep-above-2-crore',
  '/pristine-the-lords-baner-keyword-search-directory',
  '/pristine-the-lords-maharera-p52100078557-construction-status',
  '/pristine-the-lords-faqs-price-carpet-area-possession',
  '/pristine-the-lords-brochure-download-pdf',
  '/nri-investment-dubai-uae',
  '/nri-investment-usa',
  '/nri-investment-uk',
  '/nri-investment-singapore',
  '/baner-pashan-link-road-luxury-real-estate-investment-guide',
  '/3-bhk-vs-4-bhk-luxury-apartments-pune-roi-comparison',
  '/nri-fema-real-estate-investment-guide-pune-india',
  '/maharera-due-diligence-checklist-luxury-apartments-pune',
  '/mivan-construction-technology-vs-conventional-brickwork'
];

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // 1. Force Canonical Hostname (301 Permanent www -> apex domain)
  if (url.hostname === 'www.pristinethelords.in') {
    url.hostname = 'pristinethelords.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Handle Clean SEO Keyword Slugs (Rewrite internally to SPA index.html)
  if (CLEAN_KEYWORD_SLUGS.includes(url.pathname)) {
    if (env && env.ASSETS) {
      const assetUrl = new URL('/index.html', request.url);
      const response = await env.ASSETS.fetch(assetUrl);
      const newHeaders = new Headers(response.headers);

      // Set Clean URL Canonical Header
      newHeaders.set('Link', `<https://pristinethelords.in${url.pathname}>; rel="canonical"`);
      newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
      newHeaders.set('X-Content-Type-Options', 'nosniff');
      newHeaders.set('Timing-Allow-Origin', '*');

      return new Response(response.body, {
        status: 200,
        headers: newHeaders
      });
    }
  }

  // 3. Execute Standard Request at Edge
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // Crawler Identification
  const isSearchBot = userAgent.includes('googlebot') || 
                      userAgent.includes('bingbot') || 
                      userAgent.includes('applebot') || 
                      userAgent.includes('duckduckbot');

  if (isSearchBot) {
    newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('X-Crawler-Priority', 'Enterprise-Fast-Path');
  }

  // Military-Spec Edge Security & Performance
  newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  newHeaders.set('X-XSS-Protection', '1; mode=block');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Timing-Allow-Origin', '*');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
