'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2ffdebdf9f89326749e97207f90cc095",
"assets/AssetManifest.bin.json": "91339d27ec40cf3621c82c51d8a19f36",
"assets/assets/A.png": "ff12a72a1b8581eadbc8427f0dd200d3",
"assets/assets/B.png": "98ba76f584efb618a2b5ae2dd44017fd",
"assets/assets/bg.png": "60c75490991d1ddcf02e60cab7c2e59c",
"assets/assets/C.png": "1077ecfac0751e3da9a341d02b7449f0",
"assets/assets/correct.mp3": "f6452ee7d16bff6b3371044205086bf8",
"assets/assets/crown.png": "d9688d3bd81a63eb58fbd190072ee64b",
"assets/assets/D.png": "8377365ac5669f604a35004bd6cd9eff",
"assets/assets/dart.png": "12d854edf4818cfc4beaf50a3cd1efd8",
"assets/assets/desktop.ini": "a8b68bb8227f630caa5573e62ec7558b",
"assets/assets/duration.png": "6ef3e7dcfea14312e89d84873672ed25",
"assets/assets/dynamite.png": "99343820d28e07b2620ad3de81295654",
"assets/assets/firebase.png": "d6321e28267322b597897462c96f482a",
"assets/assets/flutter.png": "ff1730c74a2d8a050824d6aa3f34bc7d",
"assets/assets/foxy.mp3": "10a82a186864f246a46f1a0f7610ef52",
"assets/assets/foxy.mp4": "9e53b42e462b5f2501ea36bc8a01df57",
"assets/assets/heart.png": "11c3f8375ea7f41541fbc3bd9ac88347",
"assets/assets/hint.png": "b087da3bf8bb81627afacc1e3ed2e5a6",
"assets/assets/image_upscaled.png": "de175938d199ebfda1b921f3b7468b13",
"assets/assets/lvl.png": "b76785320ec5e33641af6ea6be200ac7",
"assets/assets/menu.png": "14fda9234d3fb1aba309fa84f03a1f96",
"assets/assets/music1.mp3": "70e04250b983690b49e4e0c6321bdf5e",
"assets/assets/music2.mp3": "f8a6c25e29bd77d386bdb6f298aadf21",
"assets/assets/music3.mp3": "d02398221860122821a8b224f81e0a93",
"assets/assets/opt1.png": "74c4c783f184c1e9ce67ee601f5af47d",
"assets/assets/opt2.png": "98ec083ac9eebdcd863751383ff896fd",
"assets/assets/opt3.png": "cea1a42e6ef4dea5b53fd1a923fd84b6",
"assets/assets/opt4.png": "bf6e986e3a3775890ab368753d20442a",
"assets/assets/opt5.png": "729728b5c8e69d468609e5dcf60fbada",
"assets/assets/opt6.png": "44ee44f327c64053c932f97474a9cb21",
"assets/assets/setting.png": "11a1858d005ecf6b26d9f966e3ca39c6",
"assets/assets/tick.mp3": "b536eca0fd0adb0f0915cf69a8104daf",
"assets/assets/wrong.mp3": "9d34edfa15675bca31c2558da5895a21",
"assets/assets/yay.mp3": "d83afaf3946167039527aed06bdc69af",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a0f33400a451ecb3eeff78a4ac8d303e",
"assets/NOTICES": "0c9205981baedac66aed7749da8b4dd3",
"assets/packages/animated_leaderboard/assets/crown.svg": "ca8e024f0583f2f471d7997a00749732",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "ad39ce4935b895f5353e5ebb83d0de89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "26730b7bd3e126238b01113ca79f8150",
"/": "26730b7bd3e126238b01113ca79f8150",
"main.dart.js": "bb9fb6746c878db68c3fed664d41ca68",
"manifest.json": "c145d59c3ae6e4990c4e5dc5048d76cc",
"version.json": "612d57350c93c72eeb2aed90e319fe0a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
