//Service Worker
/*self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('GestionComida')
      .then(function(cache){
        cache.addAll([
          '/',
          '/index.html',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
          'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
          '/css/style.css',
          '/manifest.json',
          'https://static.chollometro.com/threads/thread_full_screen/default/11732_1.jpg',
          'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js',
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
          '/js/script.js'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(res){
        return res;
      })
  );
});
*/