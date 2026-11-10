// Necessário para o celular oferecer "Instalar app". Não guarda nada offline: o painel sempre busca dados novos.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => {})
