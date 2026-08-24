#!/bin/bash
# ⚡ Instant Search Engine Indexing Trigger for https://pristinethelords.in

DOMAIN="https://pristinethelords.in"
SITEMAP_URL="${DOMAIN}/sitemap.xml"

echo "=================================================================="
echo "🚀 PRISTINE THE LORDS BANER - INSTANT SEARCH ENGINE INDEX NOTIFIER"
echo "Target: ${DOMAIN}"
echo "Sitemap: ${SITEMAP_URL}"
echo "=================================================================="

echo "📡 1. Pinging Google Search Indexer..."
G_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.google.com/ping?sitemap=${SITEMAP_URL}")
echo "   ↳ Google Response Status: ${G_STATUS}"

echo "📡 2. Pinging Bing / IndexNow Engine..."
B_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.bing.com/ping?sitemap=${SITEMAP_URL}")
echo "   ↳ Bing Response Status: ${B_STATUS}"

echo "=================================================================="
echo "✅ All global search crawler notification pings dispatched!"
echo "=================================================================="
