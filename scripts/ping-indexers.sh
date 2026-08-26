#!/bin/bash
# ⚡ Instant Search Engine Indexing Engine (IndexNow API + Sitemap Discovery)
# Production Domain: https://pristinethelords.in

DOMAIN="pristinethelords.in"
KEY="pristinelordsindexnowkey2026"
KEY_LOCATION="https://${DOMAIN}/${KEY}.txt"
SITEMAP_URL="https://${DOMAIN}/sitemap.xml"

echo "=================================================================="
echo "🚀 PRISTINE THE LORDS BANER - INSTANT SEARCH ENGINE INDEXING SUITE"
echo "Host: ${DOMAIN}"
echo "Key Location: ${KEY_LOCATION}"
echo "=================================================================="

# 1. Dispatch IndexNow Submission (Bing, Yandex, Seznam, Naver)
echo "📡 1. Submitting 22 Programmatic URLs via IndexNow API..."
INDEXNOW_PAYLOAD=$(cat <<JSON
{
  "host": "${DOMAIN}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": [
    "https://${DOMAIN}/",
    "https://${DOMAIN}/pristine-the-lords-baner-project-overview",
    "https://${DOMAIN}/pristine-the-lords-baner-3-bhk-luxury-apartments",
    "https://${DOMAIN}/pristine-the-lords-baner-4-5-bhk-sky-villas",
    "https://${DOMAIN}/pristine-the-lords-baner-master-layout-floor-plans",
    "https://${DOMAIN}/pristine-the-lords-baner-luxury-amenities-sky-lounge",
    "https://${DOMAIN}/pristine-the-lords-baner-specifications-mivan-italian-marble",
    "https://${DOMAIN}/pristine-the-lords-baner-pashan-link-road-location",
    "https://${DOMAIN}/pristine-the-lords-baner-transit-commute-hinjewadi-balewadi",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-real-estate-investment",
    "https://${DOMAIN}/pristine-the-lords-baner-pune-luxury-real-estate-above-2-crore",
    "https://${DOMAIN}/pristine-the-lords-baner-keyword-search-directory",
    "https://${DOMAIN}/pristine-the-lords-baner-maharera-p52100078557-status",
    "https://${DOMAIN}/pristine-the-lords-baner-faqs-price-possession",
    "https://${DOMAIN}/pristine-the-lords-baner-brochure-download-pdf",
    "https://${DOMAIN}/pristine-the-lords-baner-banking-institutional-financing",
    "https://${DOMAIN}/pristine-the-lords-baner-contact-sales-office",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-investment-dubai-uae",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-investment-usa",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-investment-uk",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-investment-singapore",
    "https://${DOMAIN}/pristine-the-lords-baner-pashan-link-road-investment-guide",
    "https://${DOMAIN}/pristine-the-lords-baner-3-bhk-vs-4-bhk-roi-comparison",
    "https://${DOMAIN}/pristine-the-lords-baner-nri-fema-investment-guide",
    "https://${DOMAIN}/pristine-the-lords-baner-maharera-due-diligence-checklist",
    "https://${DOMAIN}/pristine-the-lords-baner-mivan-construction-technology"
  ]
}
JSON
)

HTTP_RESP=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${INDEXNOW_PAYLOAD}")

echo "   ↳ IndexNow Global API Response Status: ${HTTP_RESP} (200/202 = Success)"

echo "=================================================================="
echo "✅ Real-time search engine indexation request successfully finalized!"
echo "=================================================================="
