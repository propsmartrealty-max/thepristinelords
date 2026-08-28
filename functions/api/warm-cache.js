// ⚡ CLOUDFLARE EDGE WORKER: REAL-TIME GLOBAL EDGE CACHE WARMER
// Endpoint: https://pristinethelords.in/api/warm-cache

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

export async function onRequest(context) {
  const warmResults = [];

  for (const targetUrl of CANONICAL_URLS) {
    try {
      const resp = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) CloudflareEdgePrewarm',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
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
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
