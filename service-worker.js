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
    "revision": "8e3090092dd6553a8177bd76ab1176f3"
  },
  {
    "url": "about.html",
    "revision": "37cc791093d1084679a3ab86b5603f98"
  },
  {
    "url": "archives.html",
    "revision": "12d4158751b227af07d368827747f72f"
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
    "url": "assets/js/10.b2db9a7e.js",
    "revision": "341aa5e12b8d6282ef06000279a30c62"
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
    "url": "assets/js/13.61c94b55.js",
    "revision": "df789cb4a128cfeba4520223bd31f61b"
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
    "url": "assets/js/17.9ee471a0.js",
    "revision": "d7dcf47f2c7d932e7634bc335ea37079"
  },
  {
    "url": "assets/js/18.132c49f5.js",
    "revision": "42451f05b25b4a97f2fb25c81cc2c88f"
  },
  {
    "url": "assets/js/19.b105688a.js",
    "revision": "2e36192880e63ba015a4b74b9931bcb3"
  },
  {
    "url": "assets/js/2.ee80831d.js",
    "revision": "05546e80fccd28b1f7c25c408095401d"
  },
  {
    "url": "assets/js/20.9e0c9777.js",
    "revision": "815191992914bc941e389b1647edda57"
  },
  {
    "url": "assets/js/21.29ed6343.js",
    "revision": "1bd0b2220b27c70d6cd3473f6444407d"
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
    "url": "assets/js/app.cbade490.js",
    "revision": "121031fbb0893bfe167a4cd485b20bc3"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "f55cd2565681ca16deae93f0e70edb30"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "1752aac3ace13b58ce113fed45d14ce3"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "4964f15dc89e9c40cfe62bbc4bcdf258"
  },
  {
    "url": "categories/理论知识/index.html",
    "revision": "e6df54abdc2c6b6c9922446e1a0023d4"
  },
  {
    "url": "index.html",
    "revision": "efb4d49ecf2986913739cb784f3cef94"
  },
  {
    "url": "java/java-TheadPool.html",
    "revision": "3b4b4d0d3e65e36f6f7773253c9e22b6"
  },
  {
    "url": "java/Java-Thread.html",
    "revision": "96ecba0356995839a891caa052c5e9b8"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "2dff308d94bfbd4a933200683c68f064"
  },
  {
    "url": "tag/index.html",
    "revision": "d1ca2fa823a46b3008753f7facdc692a"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "38b1ba1ead087927f0fc3e27ad4545b4"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "4cd39d2c4ea04faa427366c1dc10e050"
  },
  {
    "url": "tag/Thread/index.html",
    "revision": "1c35a5813f0dc0ed2316eba645276105"
  },
  {
    "url": "tag/理论知识/index.html",
    "revision": "3c4365dd70e83b5137706783dc95d6fe"
  },
  {
    "url": "tags.html",
    "revision": "43bb05b5b17f032500809e1d0bfdb431"
  },
  {
    "url": "timeline/index.html",
    "revision": "b073d7df559087a312575d7be64b60ef"
  },
  {
    "url": "理论知识/规则引擎.html",
    "revision": "2b821738a343f3405aadb0b68c59ae55"
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
