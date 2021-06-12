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
    "revision": "2ecf07b65b00515e230dc492b5a9ec85"
  },
  {
    "url": "about.html",
    "revision": "39758430ce63bfdf744f9a9f3929851e"
  },
  {
    "url": "archives.html",
    "revision": "22cc6208816103d6a0629f2259e6fce8"
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
    "url": "assets/js/13.f16ff573.js",
    "revision": "d631e8846728d8c78a1092b8126f68cb"
  },
  {
    "url": "assets/js/14.0cd90fe0.js",
    "revision": "7ce57b3331fdc219ba317304f8a2781f"
  },
  {
    "url": "assets/js/15.8338b4e3.js",
    "revision": "ffb7b4810dff6cad87390b8ad588a20d"
  },
  {
    "url": "assets/js/16.2aa8afb9.js",
    "revision": "bcc58bc3c156becf1751ae594099505e"
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
    "url": "assets/js/app.2a3b5b28.js",
    "revision": "ad2536a4413466d9f04799adcd69869d"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "8eb61003d90ac776a8352dc06b981cc2"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "577e6c767833eeeddb1e623aec805f25"
  },
  {
    "url": "index.html",
    "revision": "1256fc54db8525913d2688d92dba430c"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "4d90d487b9ea99c8260c14c7e2e9943e"
  },
  {
    "url": "tag/index.html",
    "revision": "2f092bd847783378f44a03bcb5b0cc2d"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "7e188a6cbfd0dd4ee1a411035eb49672"
  },
  {
    "url": "tags.html",
    "revision": "db18cd3700c0a3b09a8d714551bcb30f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7b34e8a7982bfc2188bd2b15d446cc1"
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
