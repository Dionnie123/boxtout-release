'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b911af444ce523f0b28d4fd9bb96ce03",
"assets/AssetManifest.json": "4046a3a2c8e2b59de2bd7f7308bc1930",
"assets/assets/login_bg.jpg": "a95e9e210951287f0c91faa1a63537fd",
"assets/assets/logo.png": "44a060f34fd18bc790d2b9b9a4e4f77a",
"assets/assets/register_bg.jpg": "4969275ff46a4ada797414a95b0a426c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "105ba5629615577496e69c48a1b3eaf8",
"assets/NOTICES": "32aaa1a7230855e6a86404e1df00aefa",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"boxtout_release/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"boxtout_release/.git/config": "13e89203b80ddd35dc276b51b48c2958",
"boxtout_release/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"boxtout_release/.git/FETCH_HEAD": "d0545a09eb2c3a68239e5ae5add8a5b6",
"boxtout_release/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"boxtout_release/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"boxtout_release/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"boxtout_release/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"boxtout_release/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"boxtout_release/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"boxtout_release/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"boxtout_release/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"boxtout_release/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"boxtout_release/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"boxtout_release/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"boxtout_release/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"boxtout_release/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"boxtout_release/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"boxtout_release/.git/index": "583f46da67d2e0f92cda048693aa4db0",
"boxtout_release/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"boxtout_release/.git/logs/HEAD": "6e8bf34d85a1ac5843bb7c0d19bbb980",
"boxtout_release/.git/logs/refs/heads/main": "6e8bf34d85a1ac5843bb7c0d19bbb980",
"boxtout_release/.git/logs/refs/remotes/origin/HEAD": "39858ba4ef22bfd7f586f54c537ad872",
"boxtout_release/.git/logs/refs/remotes/origin/main": "d14c7bc42104e331489675c5de3d38d3",
"boxtout_release/.git/objects/46/cb4a156e5fc0b41551acf883e80d0626a3b40b": "971217078f7cd9208214d773a0de25c5",
"boxtout_release/.git/objects/57/f2bf7fb3bd4a09cea4e6a669e7b81b8f74ef71": "0a9c779b7de5c2ab3566dace29d6ee80",
"boxtout_release/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"boxtout_release/.git/objects/f9/7b5df44adf03d3a3d3e2c1d11dd748bbcf17fb": "78ab2412de75e91c948a3834d9599a3b",
"boxtout_release/.git/refs/heads/main": "a68ee15f316ab7b4533a63c58902e0e5",
"boxtout_release/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"boxtout_release/.git/refs/remotes/origin/main": "a68ee15f316ab7b4533a63c58902e0e5",
"boxtout_release/LICENSE": "f444bb01b206457adf066a3171767f4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ff612376a0722d3706ca41895b77ac9",
"/": "1ff612376a0722d3706ca41895b77ac9",
"main.dart.js": "aeeaa7a5ac86d9edeec90e0ff0ae51f6",
"manifest.json": "971986143f99c66e919c2c69e0bbb3ca",
"version.json": "61520211d675b50c3297cbcbf69cfe06"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
