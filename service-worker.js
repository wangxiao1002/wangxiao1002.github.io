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
    "revision": "a8aecbcf43f272bbd463419e4f9de78e"
  },
  {
    "url": "about.html",
    "revision": "dea5e5fb33910ddc6304de0ceaf0ce49"
  },
  {
    "url": "archives.html",
    "revision": "424489070f58d6006a34ea58ea48694c"
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
    "url": "assets/js/10.1990e4e5.js",
    "revision": "6af5286468b592b48e8eb6e98a92b235"
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
    "url": "assets/js/13.56d5b734.js",
    "revision": "df031120c53728a517a53a4eee5feadc"
  },
  {
    "url": "assets/js/14.cb6765f9.js",
    "revision": "f89526f4c5505dec0250b623b6566367"
  },
  {
    "url": "assets/js/15.13d188e7.js",
    "revision": "ecd1652d81f94ac7bf6f475b3bdb0b54"
  },
  {
    "url": "assets/js/16.6ca87467.js",
    "revision": "e1878f403c3c0855340e32bd51cf352b"
  },
  {
    "url": "assets/js/17.36669fa1.js",
    "revision": "3e9d96bdc2e2e944e32e6233c76887cc"
  },
  {
    "url": "assets/js/18.45c5c82b.js",
    "revision": "46f8c843ebef5a801b05cb556ac15499"
  },
  {
    "url": "assets/js/19.6bd1231c.js",
    "revision": "e427defafe84b11939d9cd9d0a65e625"
  },
  {
    "url": "assets/js/2.ee80831d.js",
    "revision": "05546e80fccd28b1f7c25c408095401d"
  },
  {
    "url": "assets/js/20.39f491ad.js",
    "revision": "90d1c0bb673885b0275ac166284d7cac"
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
    "url": "assets/js/app.1d7a81ef.js",
    "revision": "8788a3d04be8150d0441b66c7454d191"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "312cac02c1b24c7939df99b7204f9948"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "29ead777c45206dabb158bc621c02ffd"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "af3976147c0c0734dc3e8ff0743c0147"
  },
  {
    "url": "categories/理论知识/index.html",
    "revision": "69f04946c2bcec61c4c6c25b8cf9207c"
  },
  {
    "url": "index.html",
    "revision": "7ae7d00370d24c2b428f04690081f266"
  },
  {
    "url": "java/Java-Thread.html",
    "revision": "27232b573e2672c301e388fbc11d8db0"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "b5470858f3b2cd7778ec44fc71210229"
  },
  {
    "url": "tag/index.html",
    "revision": "bbaea5313cf8570d56758554bb879284"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "8d660465b4698a9ba511e0c7ff1ccd80"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "b6b68f29180847ea60a7e73a877a96b9"
  },
  {
    "url": "tag/理论知识/index.html",
    "revision": "fd1661258ea058b6e3a0288015aa1049"
  },
  {
    "url": "tags.html",
    "revision": "3ada6ca64ab12dc6ccee22838dea6cd8"
  },
  {
    "url": "timeline/index.html",
    "revision": "63a13099e60b83927a8758da08a8411e"
  },
  {
    "url": "理论知识/规则引擎.html",
    "revision": "517abf0a89e68f1a79a5b14894ea4ffd"
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
