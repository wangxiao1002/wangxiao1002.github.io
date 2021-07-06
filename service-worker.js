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
    "revision": "cf438d28bd36d3311edcfc8f8ee6761d"
  },
  {
    "url": "about.html",
    "revision": "7f8f79b38c5ad0812df4953da1a3337c"
  },
  {
    "url": "archives.html",
    "revision": "0e26457f564f4e7723fff52710cd4cc4"
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
    "url": "assets/js/17.745d4b8d.js",
    "revision": "3bf9982e6381c0aa4fccb0947a648fbf"
  },
  {
    "url": "assets/js/18.132c49f5.js",
    "revision": "42451f05b25b4a97f2fb25c81cc2c88f"
  },
  {
    "url": "assets/js/19.d00ad5a0.js",
    "revision": "41b91af22dc62c2663a83f1765c9ba2f"
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
    "url": "assets/js/app.919ba4df.js",
    "revision": "31231fcb581cf7d7fceb1733fc451965"
  },
  {
    "url": "avatar.jpg",
    "revision": "9b0ca84bc3beba897a127b64b00ad92d"
  },
  {
    "url": "categories/index.html",
    "revision": "7c1f032e202c301852141c026be87f16"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "b7d161b151bbd5d29b8bc7a48747aef6"
  },
  {
    "url": "categories/lifeTime/index.html",
    "revision": "2ae3f36403543c3d2d7f89c23b21c64c"
  },
  {
    "url": "categories/理论知识/index.html",
    "revision": "fb9c21f9a722ff2a935080a96074e36d"
  },
  {
    "url": "index.html",
    "revision": "4072783ed06de099a8521b3378bb06df"
  },
  {
    "url": "java/java-TheadPool.html",
    "revision": "18b795e759d13119fcb258ee65e02237"
  },
  {
    "url": "java/Java-Thread.html",
    "revision": "80cfc3db8b4f1688696dc814e213dfce"
  },
  {
    "url": "lifetime/restart.html",
    "revision": "42edf4403cf56bbfd68966e5a6ec70cb"
  },
  {
    "url": "tag/index.html",
    "revision": "a9a4113e939de9c3873e5757101552de"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "25847fada5c50c935085f10ce891898a"
  },
  {
    "url": "tag/lifeTime/index.html",
    "revision": "93ebcb79bd2dbeaf8df3da6e7999dc32"
  },
  {
    "url": "tag/Thread/index.html",
    "revision": "bad63adb7b98605fdb1f16cc9c21c841"
  },
  {
    "url": "tag/理论知识/index.html",
    "revision": "cd964f60f118f62785a725a2a5b4cb6c"
  },
  {
    "url": "tags.html",
    "revision": "41ae5e148e4a0d6a449553cbe6095f0b"
  },
  {
    "url": "timeline/index.html",
    "revision": "082e08e46fe9943a70360bf3cd2c541e"
  },
  {
    "url": "理论知识/规则引擎.html",
    "revision": "66f887f9c93159c266e3420181addfd2"
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
