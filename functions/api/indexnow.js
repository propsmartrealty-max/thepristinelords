// ⚡ CLOUDFLARE EDGE API: REAL-TIME SEARCH ENGINE INDEXING DISPATCHER
// Endpoint: https://pristinethelords.in/api/indexnow

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
  const payload = {
    host: "pristinethelords.in",
    key: "pristinelordsindexnowkey2026",
    keyLocation: "https://pristinethelords.in/pristinelordsindexnowkey2026.txt",
    urlList: CANONICAL_URLS
  };

  try {
    const indexNowResponse = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    const status = indexNowResponse.status;

    return new Response(JSON.stringify({
      success: status === 200 || status === 202,
      statusCode: status,
      message: "Search Engine IndexNow broadcast successfully dispatched from Cloudflare Edge",
      totalUrlsSubmitted: CANONICAL_URLS.length,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
