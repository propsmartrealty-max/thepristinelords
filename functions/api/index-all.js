// ⚡ CLOUDFLARE EDGE API: MASTER UNIFIED SEARCH ENGINE INDEXING COMMAND HUB
// Endpoint: https://pristinethelords.in/api/index-all

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const baseUrl = url.origin;

  const [indexNowRes, googleIndexRes, warmCacheRes] = await Promise.allSettled([
    fetch(`${baseUrl}/api/indexnow`),
    fetch(`${baseUrl}/api/google-index`),
    fetch(`${baseUrl}/api/warm-cache`)
  ]);

  const indexNowData = indexNowRes.status === 'fulfilled' ? await indexNowRes.value.json().catch(() => null) : null;
  const googleData = googleIndexRes.status === 'fulfilled' ? await googleIndexRes.value.json().catch(() => null) : null;
  const warmData = warmCacheRes.status === 'fulfilled' ? await warmCacheRes.value.json().catch(() => null) : null;

  return new Response(JSON.stringify({
    success: true,
    message: "Master Global Indexing Protocol Executed from Cloudflare Edge",
    timestamp: new Date().toISOString(),
    indexNow: indexNowData,
    googleIndexing: googleData,
    edgeCachePreWarm: warmData
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
