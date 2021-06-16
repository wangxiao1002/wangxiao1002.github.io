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
    "revision": "2bf4e2a789612cfa75a8d091374b1d02"
  },
  {
    "url": "about.html",
    "revision": "72397c994b3fe437af341208194fa1ff"
  },
  {
    "url": "archives.html",
    "revision": "14215f46a91da695a0c10ea73f8f0732"
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
    "url": "assets/img/thread-status.15457188.png",
    "revision": "154571881d3d73e385ab8dbb11e6515b"
  },
  {
    "url": "assets/js/1.61b14a89.js",
    "revision": "f881d7734d4c282f2febafdfd47d10bf"
  },
  {
    "url": "assets/js/10.43329d9a.js",
    "revision": "62b5422c6b161de4552a406253f0abae"
  },
  {
    "url": "assets/js/11.2ee4ce6c.js",
    "revision": "f5781e3770cd31159aa8fb48ea4f8371"
  },
  {
    "url": "assets/js/12.c9b54ef4.js",
    "revision": "c2eb36829fa9c713d82d86412be19be2"
  },
  {
    "url": "assets/js/13.827befcd.js",
    "revision": "57df27fc50930a54627bdb3a85f10aaa"
  },
  {
    "url": "assets/js/14.b5ceb027.js",
    "revision": "b1217905beba0150f0cd5df6a4b95096"
  },
  {
    "url": "assets/js/15.32e9db2d.js",
    "revision": "9dcca386d9ad1bb97597d4c9e7bdc5a5"
  },
  {
    "url": "assets/js/16.4948722d.js",
    "revision": "45cbe960f3892b95e9afd35f4d551bf7"
  },
  {
    "url": "assets/js/17.3c96bb29.js",
    "revision": "834b212b3f62ac8f2432394ee8ed00a6"
  },
  {
    "url": "assets/js/18.f1e61bad.js",
    "revision": "a64853fac31371a58b0d0a11b042f5ae"
  },
  {
    "url": "assets/js/19.d9323b5e.js",
    "revision": "a065d0cf41ee634ff0fdaafcc767553d"
  },
  {
    "url": "assets/js/2.ee80831d.js",
    "revision": "05546e80fccd28b1f7c25c408095401d"
  },
  {
    "url": "assets/js/4.dae42146.js",
    "revision": "4fb0a70f8fa69a5a448c4441a4f2fca2"
  },
  {
    "url": "assets/js/5.0b287f21.js",
    "revision": "dc2033e52fc2abaf277ec3337d14aa97"
  },
  {
    "url": "assets/js/6.f310cb34.js",
    "revision": "f7fcb5ae2fed7016d7d91933dd904626"
  },
  {
    "url": "assets/js/7.6c80255d.js",
    "revision": "0d749e8bcd0c22172cb7ecab34f13dfd"
  },
  {
    "url": "assets/js/8.ea59b30c.js",
    "revision": "bc1ac318df930d9b80f045038c039b76"
  },
  {
    "url": "assets/js/9.a6cf4b6f.js",
    "revision": "31e842c8a2322054edb9c18e29cc9776"
  },
  {
    "url": "assets/js/app.46f7e288.js",
    "revision": "d53134d953235bd348699a9d5c8fdc03"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "8b877e4d6244e857eb7bdca4e9ddfd55"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "cc254bd1445ca314f20c645aa7d677b8"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "b0da63c36bef7595864a0ec9fc3a148d"
  },
  {
    "url": "index.html",
    "revision": "7a31f3d6081f3050992f11e293814c86"
  },
  {
    "url": "java/Java-Thread.html",
    "revision": "b0435380e90dc18a2a7cd06a70f22efe"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "1ddae7a2df9578769418fc9560c817b0"
  },
  {
    "url": "tag/index.html",
    "revision": "9fde1c5e421c1c94601ebcd65d554dca"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "6fdb326d8b0c9b429597eda9275650f3"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "c81fb088074fc7f4b9b11159c528eb3c"
  },
  {
    "url": "tags.html",
    "revision": "f8a5af13655b690e6d9e0d19c1151d18"
  },
  {
    "url": "timeline/index.html",
    "revision": "aee226f5c28b9abdd311ef170929639d"
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
