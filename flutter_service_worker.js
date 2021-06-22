'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9fe0c9f22eaeee679d4e63f65387d6c2",
".git/config": "d94513d966eadd88c7a32cd925f50646",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d273a4f3d5a724d9103862f395ca1d59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8320d74d61f077b776cb319ef2830b58",
".git/logs/refs/heads/main": "8320d74d61f077b776cb319ef2830b58",
".git/logs/refs/remotes/origin/HEAD": "6f4d52cb3b127647d6d2f9e530d70a5e",
".git/logs/refs/remotes/origin/main": "287855697b57a096799569f1b6f1f2b2",
".git/objects/0a/40b6dfeeb9838ce2cc96790af0d1d93ecec06c": "e8d471da202e00cbe6d398afb2263f24",
".git/objects/0c/d81b7cbd38d12881bda71e79ee86c352b5f719": "72e3fbd88bcdd5d2fa256a2fea4e117d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/044f46925dae3fd3aff31d6396d9b3fc18a60d": "f3c2c8e0a917c9b7569ddecebf01018a",
".git/objects/2d/3678890d6b05c04f79b83385564dcccee742dd": "de480f74b35a628233e0460eebff057c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/efadaeb6cda0909513a20ed022e3788d981d1c": "10512d9a3f7ceeab20afb164ed82835d",
".git/objects/3d/7a7764881f1a2e4703c9ce547605e7932a4106": "fec81a962207729be057ddb76f4c8638",
".git/objects/45/439c511fe3630f4ad34d5907b384dcba029d6e": "4ff899cb3d626ea0b47d88381929648a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/3df86816e2d180ca38bd0b22dd6f5efc485ea6": "2c814ac2de07957d8b8d995edd9e653e",
".git/objects/49/eea3c2e205f892a1b3ba0430b2504713854afc": "3d3053e09013d65b13e3f4d02d35e4e9",
".git/objects/4e/90cbdbcea570196f7dbef03f784dbd0a63b0f7": "ed995900ab735d87821098447537c07d",
".git/objects/50/b66e9d5662bed5a8a8c3988b069befd107f56d": "5d46f59c7046c0ca4706c261358c4137",
".git/objects/69/354e5480eb4fbd30770d7d88839eccdd56f900": "7509e02ee4153a561d4d66ed87ea804f",
".git/objects/69/5e1a6de3fe290de8d89952d43017a53e3df60c": "c9fc6e33cb3ebc9ee79766a183e9a07d",
".git/objects/6a/9319d1cdc22d0b17a6ed4f7c74bd950845a2c2": "3f3e4ad1d28e2d6f207046efa60b3282",
".git/objects/6b/a343029e02807b916da0239d48c9928d7ac27b": "de373bc76241b1fba56e6d203efeeee0",
".git/objects/70/5744da4f84ddd65f2fac6406e0c43cc1d13792": "4d6b7ca7b8c8778d8893b3d6c20ff6fa",
".git/objects/78/9b489f0bcbab05c4c1d11ef1b0f7adddbf2cba": "f3d4272be8f4aa02080dd7a4b393cdba",
".git/objects/79/8412622608abbee53fbb57901a2c6ae9d4aaa9": "4a0ce69fe13032d85b582931c72522ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/80/9cde0fbb1752b1381e7f71a2bff26841f8f07e": "114f43378c9fc338293abe01cf80bc14",
".git/objects/84/1c38a6e4bc472c3dd44fd02e8225f83bfe578f": "f5c8bc71b63f9b1c8098857d5dba67f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1d98c2c4971d3de87a2e070c160aa7de30a000": "a9fc49277dbec7f5eea572da72815992",
".git/objects/90/2703dd88c2ab093ac6389720c2f9114eddadde": "4275e8b4cdd916982ea7593b7ed5b5db",
".git/objects/9d/517e58472789058f1572299fd87bb10448610e": "207ec23b9388a25f53bec1512c46ea4a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/01e523ed68a531fe48887c84c0713b7c9b86ec": "74083f05e92c61db087fb379f1e7d9ba",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e5d684930e66da29b002da91fc837d130d7ab9": "68b6d3cb4790f32e5cf891a652d45fc7",
".git/objects/b6/ee23a7c5e20d9df7d6372601dfba7336bc32b2": "52b7823ec1a2c595f2e3e8e4beed8c85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/f3348f01e85f2518f6eaddf99552cf099eb0b7": "811e651f2e9533491e7433b88dd439d2",
".git/objects/c5/96958a390a4956138e51254a7f283cf8b85046": "38366eaf9fbc94aaed6cfcb5abe09967",
".git/objects/c8/6e11c3a21c56b6a32b14b3a0d647ef167d8fcc": "dd51e7d63fa229a53e79c4c1fbd7bf81",
".git/objects/d3/d3666ee54d01c5ab78bf79b65df49b24e3fedf": "c9aafa09092c7769e4732c1bd903cce9",
".git/objects/d6/b1ffb9ed7662446766c842a80b20dca53db8a0": "8ffb56a07768f85fdcebcb861c3f0130",
".git/objects/d6/c4b9f949506e49cabf7588441321e1168931de": "e320b27064ae600480e56dd33c350861",
".git/objects/d9/1dc4ea51d26437beafdb38b2c2d25f69d18784": "4f8e05c834e10839c1546d6664947410",
".git/objects/da/7723ffe7b1135cdf55c498fad2ef7371b0c90e": "a32291aa69f37ac186bd7abd1fa28476",
".git/objects/dd/fa90277a678c5d6d9199341f4d744c4997c213": "536ff365b0dc8128be55f314c8600090",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/5e7395c995be63a4324b21209235c0fc8cb97f": "35cd9c5c590bc470138745bed927aea5",
".git/objects/f7/163de4b376c5a6ed92ad0851857d50d1cbc0b1": "3af6b5e7df223291a89f0b3d2783b836",
".git/objects/f9/a49097f7950e619c4270ee329fec19d6a2dd28": "c3eed1b2c9fdf600521577d9ca6e847e",
".git/objects/pack/pack-f7cc058c7fea5ca032bd8772712a19d7c0bd37c4.idx": "c64128b9b1efc316ed78e876d97050a4",
".git/objects/pack/pack-f7cc058c7fea5ca032bd8772712a19d7c0bd37c4.pack": "eb18b5b6c237c81784f02c69a52c556f",
".git/packed-refs": "9b7f3ea16700e24b773d51acbfc2a3e9",
".git/refs/heads/main": "8fb9ad30279779dc941867802e798e42",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8fb9ad30279779dc941867802e798e42",
"assets/AssetManifest.json": "60d2e3dcb8720a6981719aec3c6244eb",
"assets/assets/lobitos-prot.png": "9118db48381ce0b2907357df52ff3e51",
"assets/assets/lobitos-trit.png": "46f4dd121a4f48c1159550ee21b61c94",
"assets/assets/lobitos.png": "9571f05ac16912214ee2f407ac494557",
"assets/assets/peruMap.png": "01c4ae46e7186d94157a1dd2eb274a0e",
"assets/assets/piedritas-prot.png": "89141c294d4842f1ef2e38303d9ed11e",
"assets/assets/piedritas-trit.png": "0e568dc9c41c8632172f5d427f752e4a",
"assets/assets/piedritas.png": "0cf766ad7e050cb1f5cc318fb02ee6a4",
"assets/assets/spain.png": "fed7d0ce876bc8161c3b8658475c425f",
"assets/assets/uk.png": "6f382b2ddfdd4ea349ac9ca989da123a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "86c4088805d07df74adec61faadc8595",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "827b4292f6e6f85b27b64cc2972e2d0f",
"/": "827b4292f6e6f85b27b64cc2972e2d0f",
"main.dart.js": "6956d9e553fe1f2112ac5f54eb53563a",
"manifest.json": "b4f4631b4eb68b0281c1d377f0c0adf7",
"README.md": "f31a05253fdaea48d78332144ee2328f",
"version.json": "be7cdc5409f2dacdb627ae415c687347"
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
