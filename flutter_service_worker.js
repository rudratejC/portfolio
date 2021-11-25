'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "02b71023bd6980c703fac4d063b4e208",
"index.html": "58fdb7d9b1aad820240fffd0ed4ded46",
"/": "58fdb7d9b1aad820240fffd0ed4ded46",
"main.dart.js": "eec39329c91468706b1b56d939ea1436",
"favicon.png": "788654921cebc74be2ff1eb246e67e1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f0c9211be62de2269207b8b14263dd7b",
"assets/AssetManifest.json": "54d0bdb11361d3af39486d65c4a58ff6",
"assets/NOTICES": "59514d6555aba28c1745f97a5649a39f",
"assets/FontManifest.json": "c06417f0d472c4a802c2878608e743de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/Roboto_Mono/RobotoMono-VariableFont_wght.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/assets/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf": "f7f9444826ffa286aa3569c60c75995b",
"assets/assets/finder.png": "e9b1602008faa9b6832a7df84bddd70c",
"assets/assets/dart-logo-banner1.jpg": "8be3b9bbcb788c5fc801819f1c19c717",
"assets/assets/udlogo.png": "6d0c520ca2e5f3e4814819c6993fcb45",
"assets/assets/python.jpg": "4e18c069fb4084f1fd285ed9965d6312",
"assets/assets/safari.png": "a63f7a8aa3174b8dd60ff25625672f10",
"assets/assets/settings.png": "e39bc39a088df7e72e3fe63ae52cc8cd",
"assets/assets/flutter.png": "fbd539fbfbf82b137f1cb56660738214",
"assets/assets/terminal.png": "c9ed7c4430685171060c4a3b78d78931",
"assets/assets/closeic.png": "8ef6f5c36c5d73f0343df72655b054eb",
"assets/assets/github.png": "f3a7bd20c453749c87c6730312d7ee53",
"assets/assets/java.jpg": "452a1db2e8194ab05fb687670b6c18ae",
"assets/assets/gmail.png": "32b950d96a70990f4875792fa123d4b1",
"assets/assets/android.jpg": "e54e0e0175eb8e747c524062cc07dda2",
"assets/assets/ceb1.png": "878839a18b18aae8a467ccae1d192ac3",
"assets/assets/macintosh.png": "f1bef589596d6c0ce57b87924e45914c",
"assets/assets/folder.png": "a61d3d6a106be631197087bab64c4e17",
"assets/assets/apple.png": "67310892c76ee9ab0e88441c0671a699",
"assets/assets/ceb2.png": "6b52a1017aed9773c649b17bea83274b",
"assets/assets/udb.png": "caaa4e5caabc47f66b45e9408ec778d9",
"assets/assets/ceb3.png": "23157c53f25aa448478e5b15fb3d66ac",
"assets/assets/ud1.png": "5cc4414fa8a7747b9ae9d5521e3e6ef8",
"assets/assets/ud0.png": "948e2a78dc7f54fbe2af564255430fb9",
"assets/assets/linkedIn.png": "af1775644c8e26210e10b202eaa283af",
"assets/assets/ca1.png": "4b5cb8bbf6227fe4dd82360267dcd8f5",
"assets/assets/ca3.png": "5d254627bc13399b84af2f75f515a136",
"assets/assets/CEB_Logo.png": "df35bc91ad7e8aa1c8e762c98631c326",
"assets/assets/cebb.jpg": "2083ffa00a67279044d8d28d9af09fea",
"assets/assets/ud2.png": "31e0d32e8ff7e690406bd741ebd260f1",
"assets/assets/ud3.png": "9d3bc9a621c74477cb4242d48ffd1f66",
"assets/assets/ca2.png": "45bb4532a1e925b3f078e67b0a15f985",
"assets/assets/c.png": "c3d00838ee827eea7a693a15d44f9d11",
"assets/assets/wa.png": "b9b68afb7af060e35399b020b3b08ec5",
"assets/assets/trash.png": "d0c36e90ea5f4e6ba873bd7fbfb3b572",
"assets/assets/pic.png": "97495cef336903ac72d377a338c63b31",
"assets/assets/ceeb.png": "cef0480373fd123d18e3cce7ed98a135",
"assets/assets/kotlin.png": "73d0bc49708d2044cf022cab1743e698",
"assets/assets/bg.jpg": "053d0b14eaf1dca83e7552bc586196c9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
