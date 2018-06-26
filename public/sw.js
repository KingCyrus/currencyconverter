
const cacheName = 'cache-v1';

const cacheFiles = [
    '/src/js/app.js',
    '/index.html',
    '/src/css/index.css',
    ];

self.addEventListener('install', (event)=>{
	console.log('Service worker installing');
	event.waitUntil(
    caches.open(cacheName).then(cache =>{
    	return cache.addAll(cacheFiles);
    })
	)
});