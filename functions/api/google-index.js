// ⚡ CLOUDFLARE EDGE WORKER: GOOGLE INDEXING API (v3) REAL-TIME DISPATCHER
// Endpoint: https://pristinethelords.in/api/google-index

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

// Base64URL encoding helper
function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function onRequest(context) {
  const { env, request } = context;
  const serviceAccountKeyJson = env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKeyJson) {
    return new Response(JSON.stringify({
      status: "READY_FOR_CREDENTIALS",
      message: "Google Indexing API Edge Dispatcher is live. To enable automatic RS256 OAuth JWT publishing, add GOOGLE_SERVICE_ACCOUNT_KEY in Cloudflare Dashboard (Settings > Environment Variables).",
      supportedUrls: CANONICAL_URLS,
      documentation: "https://developers.google.com/search/apis/indexing-api/v3/prereqs",
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
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

    // Format PEM private key for subtle.importKey
    const pemHeader = "-----BEGIN PRIVATE KEY-----";
    const pemFooter = "-----END PRIVATE KEY-----";
    const pemContents = creds.private_key
      .replace(pemHeader, "")
      .replace(pemFooter, "")
      .replace(/\s/g, "");
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

    const signature = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      new TextEncoder().encode(signatureInput)
    );

    const encodedSignature = base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
    const jwt = `${signatureInput}.${encodedSignature}`;

    // Exchange JWT for Google OAuth2 Access Token
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

    // Publish URL_UPDATED notifications for all canonical paths
    for (const targetUrl of CANONICAL_URLS) {
      const gResp = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: targetUrl,
          type: "URL_UPDATED"
        })
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
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: err.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
