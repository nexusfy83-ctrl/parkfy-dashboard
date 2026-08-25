// Minimal service worker for the parking dashboard PWA.
// The dashboard always needs live data from Supabase, so this deliberately
// does NOT cache API responses — it only exists to satisfy the browser's
// "installable" requirement (a registered service worker with a fetch
// handler) so owners can add the dashboard to their home screen.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
