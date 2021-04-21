'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "02b71023bd6980c703fac4d063b4e208",
"index.html": "d54084ac35e28c54d2920989e233abc5",
"/": "d54084ac35e28c54d2920989e233abc5",
"main.dart.js": "05f0120d251f5a162f76900ca1fffc27",
"favicon.png": "788654921cebc74be2ff1eb246e67e1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f0c9211be62de2269207b8b14263dd7b",
".git/config": "69b185941cab85be90a3139b58702503",
".git/objects/61/c347dfedc33e227d0015e7f09fda95b970bdf9": "2fa7bb3e451a243f6c1a566e10e18a9b",
".git/objects/68/5553b9dd7baa7c220b97d0a0696c4ca517e271": "e454c3b576f86016a6642e77eede5c0d",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/03/1aa51104a7d40fd6724514779786fba45e7f9e": "6d84ad706736c0247e51e7cf2b7bf59b",
".git/objects/9b/a0c5a013d729984a19a68dfa69aaee841a1677": "572031714bcfe1bc7439009c6a2997cf",
".git/objects/6a/e9cbea47bb5e8fae4ba733de73bb3a27d93a12": "7d78660fcf9b672d3d66bd2f45bb38a3",
".git/objects/6a/e597cde5da01d9bbd435dac9ef865407bed070": "8274e6599d02beab3ea0edb931324451",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/56/88b77a5057f77bf5cde701514fad889655c9d4": "4f51d17bd0271eabd918c517292b1e96",
".git/objects/56/3751d27157900bea4c2f3a671571f064d8b94c": "6f208365bb0d88e71770f95393e4db9b",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/34/c6a0648d90fc2665432e2f5f9f1be6020295fe": "ed56d0f50c8338c8968e428f683ad2ae",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/ad/bb63738501b3ddec5c9e58e83593cbb89f50d4": "2ff51ffe9b628088b38fac05c24a8df3",
".git/objects/d7/5e3fed848ea129eaea06bda32686487db1dee2": "0d828e1f17d803cfcbec2899d6da4007",
".git/objects/bc/d8e26ac9d05308ce2830bf060b0797b813912c": "4942d257337dddd00a299c4d85bcf593",
".git/objects/ee/0c61b39606ab65f38aac43c11e0b3c0f8614a1": "228a271a5486eec0a857309775e2db42",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/e3/b237448e27d30b5ee2aef6929c9648184ccf8e": "7193ec79cc3386c2aba2f6ee5a8f48fb",
".git/objects/cf/9672ab9c050f35cae937abe00701d81f6a1819": "150820aead553d89f46d2cd8e46455de",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/73/d60c55d18cc956f07e39ee09d1332eb371ecf8": "31e2f3f9a4bea8c6e5d1efadad11b7e6",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/de171091bb64aee4f7cb92c3ca3663c4d4972f": "b3cf76e26ab5ad5ae6753c06a7cd5dc6",
".git/objects/00/b9021a06df6a09fa4e2cbe66f1225c714684f5": "6a6af414ed7fac06a7e404a246d35614",
".git/objects/6e/374c8a6c48862429a9c39456e8bb87ed2a9a10": "77d17804d15832f22f6a8d356f255b0b",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/36/562d147080adc7bf8129efd890fb53c200a54c": "831d9cefead873c5b1131004e9f2db32",
".git/objects/5c/4a10b7c9024594de34bdea2f17e4e0d0a1390c": "697035d3138aee3232cc477e24ea47bb",
".git/objects/09/9fa9661defac1fe0607b465e2eca7d9fb805d4": "20eb9b6cc5594cb57243489dea833e2c",
".git/objects/91/7ec7312ef02a7aba37af479f076570acb96ba2": "03ef967d80c0099417454969e4ab9e74",
".git/objects/98/c578617945b70035cc33363bf74146da152cad": "564542136dd53c22f0c74c6ffae32d17",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/d3/0055a9e8129a14109dccc385222c2ef159922c": "a55f665f645c2cba325101b53ccfd0a9",
".git/objects/a0/a9d241eac6507b16a9c6a7ed64d5e83fdbf7ca": "6b6aa66265a15209f0272bb126928202",
".git/objects/a7/e795e20ae31714458407d942e05a941f31999c": "9a5f70b9ef457de055524210aeb2f8e2",
".git/objects/dd/919863c5ec56162a3dad9d9c4e596a9524c02b": "8affd572991d454076c3db210b150ba8",
".git/objects/d2/b47461965de05ab8e66da60df65e3f2796cd59": "f08513a8341fd206ece47628a47d2234",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e1/6d56538682acf1e5f2b9aec070732a0fa66b5c": "8fd32335887beb1628891a7da0aaa4da",
".git/objects/f9/86d0adb20f6351e701dd316557511dcf6460a5": "08457394bdcb406b0e7b236c05e1b325",
".git/objects/79/dcff5b25baa60e271928b12d3d0077d8741620": "d40ed2a1720bd79b1a8996c63215d913",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/ec96604000a010acc44319f4355a1c4416b80a": "2cf0d7d1a97a47a8eb9d669a71a94d79",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/1e/44876698543e1eec15e9a18c9bb85cd9ca8755": "4ba5518cd406fc187dd99bcd7f1001d6",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/2e/cfcec0050234a2d43c02f005a2985604f21974": "b34527958214d6de02786f1b3ba9723f",
".git/objects/22/1bf8d7ce9adfdeeb2d4f863756b5e158b97f13": "c7222e239ad99ec7899233c1e013fea4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "1e02c6875ab47f845d4635d710c32d0f",
"assets/AssetManifest.json": "d29e0e3e5cbb05a37c7d135020bec3fe",
"assets/NOTICES": "c6e9196fe234a80a635ffdbe627370bb",
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
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/Roboto_Mono/RobotoMono-VariableFont_wght.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/assets/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf": "f7f9444826ffa286aa3569c60c75995b",
"assets/assets/finder.png": "e9b1602008faa9b6832a7df84bddd70c",
"assets/assets/dart-logo-banner1.jpg": "8be3b9bbcb788c5fc801819f1c19c717",
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
"assets/assets/macintosh.png": "f1bef589596d6c0ce57b87924e45914c",
"assets/assets/folder.png": "a61d3d6a106be631197087bab64c4e17",
"assets/assets/apple.png": "67310892c76ee9ab0e88441c0671a699",
"assets/assets/linkedIn.png": "af1775644c8e26210e10b202eaa283af",
"assets/assets/c.png": "c3d00838ee827eea7a693a15d44f9d11",
"assets/assets/wa.png": "b9b68afb7af060e35399b020b3b08ec5",
"assets/assets/trash.png": "d0c36e90ea5f4e6ba873bd7fbfb3b572",
"assets/assets/pic.png": "97495cef336903ac72d377a338c63b31",
"assets/assets/ceeb.png": "cef0480373fd123d18e3cce7ed98a135",
"assets/assets/kotlin.png": "73d0bc49708d2044cf022cab1743e698",
"assets/assets/bg.jpg": "7b8c2b04b19624222d836d4c4ed9284c"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
