// Service worker de Christmatic : "réseau d'abord" pour que le site reste toujours à jour.
// Seule la page /offline est gardée en cache, affichée quand il n'y a plus de connexion.
const CACHE = 'christmatic-v1'
const OFFLINE_URL = '/offline'

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(OFFLINE_URL)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  // On ne s'occupe que de la navigation vers une page du site ; vidéos YouTube, API et fichiers passent tels quels.
  if (req.mode !== 'navigate') return
  event.respondWith(
    fetch(req).catch(() => caches.open(CACHE).then((cache) => cache.match(OFFLINE_URL)))
  )
})
