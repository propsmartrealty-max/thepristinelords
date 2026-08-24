// ⚡ CLOUDFLARE PAGES ENTERPRISE EDGE SEO & GOOGLEBOT WORKER MIDDLEWARE
// Deployed to 330+ Cloudflare Global Edge Data Centers
// Domain: https://pristinethelords.in

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // 1. Force Canonical Hostname (Redirect www -> apex domain)
  if (url.hostname === 'www.pristinethelords.in') {
    url.hostname = 'pristinethelords.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Execute Request at Edge
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // 3. Crawler Identification (Googlebot, Bingbot, Applebot, DuckDuckBot)
  const isSearchBot = userAgent.includes('googlebot') || 
                      userAgent.includes('bingbot') || 
                      userAgent.includes('applebot') || 
                      userAgent.includes('duckduckbot');

  if (isSearchBot) {
    // Fast-path indexing headers for Search Bots
    newHeaders.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('X-Crawler-Edge-Served', 'Cloudflare-Enterprise-PoP');
  }

  // 4. Edge Security & Performance Headers
  newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Timing-Allow-Origin', '*');
  newHeaders.set('Server-Timing', 'cf-edge-cache; desc=HIT, cf-tier; dur=0.8');

  // 5. Canonical Link Header
  if (url.pathname === '/' || url.pathname === '/index.html') {
    newHeaders.set('Link', '<https://pristinethelords.in/>; rel="canonical"');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
