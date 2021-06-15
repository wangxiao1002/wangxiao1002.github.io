/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f82006fb86d5a4ca075ca426c73e33ae"
  },
  {
    "url": "about.html",
    "revision": "3f98f943ff15736594f6ce336e62bf1f"
  },
  {
    "url": "archives.html",
    "revision": "649bcbb0ec42a073c856d013d4feaac6"
  },
  {
    "url": "assets/css/0.styles.a78d8d92.css",
    "revision": "89638c024908f09bce4748ff1d607e0e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.61b14a89.js",
    "revision": "f881d7734d4c282f2febafdfd47d10bf"
  },
  {
    "url": "assets/js/10.8b893b37.js",
    "revision": "3cba4a267106402e408c7b3eda4597f8"
  },
  {
    "url": "assets/js/11.495f273b.js",
    "revision": "bf559109c231afed2605319b5143eb3e"
  },
  {
    "url": "assets/js/12.bbd63c0c.js",
    "revision": "5f3634d95dc95f91b7e56e5fe4ca45c7"
  },
  {
    "url": "assets/js/13.cabdfdf4.js",
    "revision": "2bb65ce30cb9c77f310f3c2618e9c004"
  },
  {
    "url": "assets/js/14.36bef61e.js",
    "revision": "cf4d49b5ec4a8358ea0844d3d13b2194"
  },
  {
    "url": "assets/js/15.e65fd8f5.js",
    "revision": "e1d8f8ac508a3b6399dbf9deee4596f3"
  },
  {
    "url": "assets/js/16.93e25ad2.js",
    "revision": "a80a14296eb44ad96a3fa0688ec031e7"
  },
  {
    "url": "assets/js/17.7ef88e30.js",
    "revision": "f7846f3c0afc62d86ba229ea5b62239b"
  },
  {
    "url": "assets/js/18.8a5421ff.js",
    "revision": "e330daa1da62c71ba92dc6e0a4fd134e"
  },
  {
    "url": "assets/js/2.96025490.js",
    "revision": "a1ef0f952a2e78f4fa58f6e085584eac"
  },
  {
    "url": "assets/js/4.27d0d34d.js",
    "revision": "03d8299970d8bdc0f65135f7fb48775a"
  },
  {
    "url": "assets/js/5.4b1e0136.js",
    "revision": "1d0bdc466e1baa42f2cb498366a45609"
  },
  {
    "url": "assets/js/6.75223e2b.js",
    "revision": "b0946a7e694d86280d127b8f2128192d"
  },
  {
    "url": "assets/js/7.5f4a889b.js",
    "revision": "e9268b9bf59636e9f1afde29d8231390"
  },
  {
    "url": "assets/js/8.ae4ad89f.js",
    "revision": "eadce9891cc45216b4580373dc99219e"
  },
  {
    "url": "assets/js/9.dd164d99.js",
    "revision": "00d6e2ba60a4df0a3d44d0bc58e7178a"
  },
  {
    "url": "assets/js/app.a2622f4a.js",
    "revision": "31f6bc33d4b9d9a118e598d2766d5ede"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "42594b76527feebe9383481032d278d0"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "e16100cc073f2886d94e98320d01585c"
  },
  {
    "url": "index.html",
    "revision": "308c8b674ff7642694362050943381b3"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "c77caaa4f5a885ccb8dd53c75650518b"
  },
  {
    "url": "tag/index.html",
    "revision": "1a7e7e3e4c7218bcb18e43354a294d48"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "bd9a4617a6d19a932485c864228245af"
  },
  {
    "url": "tags.html",
    "revision": "0f292dd637e3383a6b2dbc6a58281447"
  },
  {
    "url": "timeline/index.html",
    "revision": "26b7372566cf272548ec117bd638566e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
