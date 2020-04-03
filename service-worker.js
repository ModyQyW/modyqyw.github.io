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
    "revision": "205933bbea2062f7dc3645b64522273b"
  },
  {
    "url": "about/index.html",
    "revision": "8f77db093761228890bd06d495bfb004"
  },
  {
    "url": "alipay.jpeg",
    "revision": "7f30ed013baa3e7611a3aa950e686ebf"
  },
  {
    "url": "assets/css/0.styles.c4c570e1.css",
    "revision": "3e0f42a0873851372f82017ed3fc09cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ed12b04d.js",
    "revision": "56b9b293a1a28c982dda65191ae174f5"
  },
  {
    "url": "assets/js/11.60c574bb.js",
    "revision": "6d57a949ce3831ba6f32104f51a6a97d"
  },
  {
    "url": "assets/js/12.4799f4e8.js",
    "revision": "61f621ffa7815bd54af4f4b68bf87fa3"
  },
  {
    "url": "assets/js/13.ca2061dd.js",
    "revision": "f2910d1a0a7c6e613ce872bbc004a462"
  },
  {
    "url": "assets/js/14.b2989bd3.js",
    "revision": "a2cf273823d97aee6347e99772209bdb"
  },
  {
    "url": "assets/js/15.20eb4ecc.js",
    "revision": "dbc0cca3202b85a175bf503c1b2b377b"
  },
  {
    "url": "assets/js/16.6edc1b3f.js",
    "revision": "92cc0afa43e8705c781ee6d0b0603eb9"
  },
  {
    "url": "assets/js/17.da9bf9b3.js",
    "revision": "b1ba45044dace4996b3e43349d185838"
  },
  {
    "url": "assets/js/18.ba08c17a.js",
    "revision": "9994dccc21e0765fcbc0499a02837a30"
  },
  {
    "url": "assets/js/19.a4074d3e.js",
    "revision": "2cfc39b3761cef32efc218492bc2db77"
  },
  {
    "url": "assets/js/2.e9044257.js",
    "revision": "5c3296f28b86d3b3540b257f0ef5b321"
  },
  {
    "url": "assets/js/20.a905d5ed.js",
    "revision": "f47e0c349fdd3621a385dea523cf8823"
  },
  {
    "url": "assets/js/21.822184e7.js",
    "revision": "f5f3182bfb0084f71a2e16a6e22a8a3d"
  },
  {
    "url": "assets/js/22.eb349db1.js",
    "revision": "63e126aff52830edfe5677db8fd4d268"
  },
  {
    "url": "assets/js/23.b231f573.js",
    "revision": "342cc745f5e852cd69d14e73768a7fc2"
  },
  {
    "url": "assets/js/24.7b37243f.js",
    "revision": "34b9353fa0f6d1038ff573a7812318ab"
  },
  {
    "url": "assets/js/25.273ce54b.js",
    "revision": "723feffba79555832d8544a4652bbe18"
  },
  {
    "url": "assets/js/26.b83439f5.js",
    "revision": "d177bba3694bb175f2afc298995fc985"
  },
  {
    "url": "assets/js/27.a8d80293.js",
    "revision": "843646f2121b6d57d3c9a31fb5faf5bb"
  },
  {
    "url": "assets/js/28.8b4cbc66.js",
    "revision": "be0e25a31aee2871c8e17c344ac722a0"
  },
  {
    "url": "assets/js/29.4172fc55.js",
    "revision": "8e590bceff66475928427113da1ec16c"
  },
  {
    "url": "assets/js/3.d5c81d7e.js",
    "revision": "695e41abfcd634e3f3261f9a85f99931"
  },
  {
    "url": "assets/js/30.6831e46c.js",
    "revision": "54ff88335c49570aad801870f2f81da8"
  },
  {
    "url": "assets/js/31.f199db2f.js",
    "revision": "8fcd948f1ab590902d8cfc6537577efa"
  },
  {
    "url": "assets/js/32.f988341c.js",
    "revision": "0516c0b0a8e1edabee36bec04ea175e8"
  },
  {
    "url": "assets/js/33.2435ee43.js",
    "revision": "0787e3d4bd0375b6b00bd0c0fb8d8542"
  },
  {
    "url": "assets/js/34.4b7fb94d.js",
    "revision": "013b1c433ab31653e49b765d3231185c"
  },
  {
    "url": "assets/js/35.a6fc0c17.js",
    "revision": "370454b7002e0e4bb389f08f750d7489"
  },
  {
    "url": "assets/js/36.540e3ace.js",
    "revision": "23cdbc67d489ab391857e0ac03ff302f"
  },
  {
    "url": "assets/js/37.4ddd3246.js",
    "revision": "3d2de6e3b11cad493a0c85d0d8c11f53"
  },
  {
    "url": "assets/js/38.f778afa5.js",
    "revision": "c0501eeb20c04aec04c969548eff1148"
  },
  {
    "url": "assets/js/39.67bf1ad2.js",
    "revision": "1486a5eff683347007b1d232d0e57e1b"
  },
  {
    "url": "assets/js/4.88040f2a.js",
    "revision": "0295be18f58531ca623d7b673e80efe7"
  },
  {
    "url": "assets/js/40.117f4879.js",
    "revision": "4184c92d65259f5ed82109dd237253b7"
  },
  {
    "url": "assets/js/41.21c728e2.js",
    "revision": "7e5ced9a7df47761a172dbd515b517a4"
  },
  {
    "url": "assets/js/42.fb48bf29.js",
    "revision": "83f694c3b45074a9215126f4a56b4817"
  },
  {
    "url": "assets/js/43.051563ae.js",
    "revision": "5cfe48d1f8f28d9f53983ba42008ce46"
  },
  {
    "url": "assets/js/44.02fd5f73.js",
    "revision": "df5185b0462de2e4416427311c054ade"
  },
  {
    "url": "assets/js/45.a8cda81c.js",
    "revision": "e4e15cb6ae829f89dcc6789df3d377e6"
  },
  {
    "url": "assets/js/46.5f7bf1d8.js",
    "revision": "06d4ffd3b9c332390cb98af9906c4169"
  },
  {
    "url": "assets/js/47.2ea1bf17.js",
    "revision": "c00e04c39dae139af704c0fa584229d2"
  },
  {
    "url": "assets/js/48.c7bd8876.js",
    "revision": "0ec3a337afe028c606aab0638967ec3d"
  },
  {
    "url": "assets/js/49.07cdf1bd.js",
    "revision": "85770e0d35fb7e6f3496f885bcebe1dd"
  },
  {
    "url": "assets/js/5.0d343df4.js",
    "revision": "a877072142bec252c528634edcded48b"
  },
  {
    "url": "assets/js/6.6e1655f1.js",
    "revision": "8e46c55c558794ab09a63ab9fafb3ebd"
  },
  {
    "url": "assets/js/7.6cb973d9.js",
    "revision": "b1300d9e0b21376ada8b23e0371694b4"
  },
  {
    "url": "assets/js/8.59dcac71.js",
    "revision": "297e12a44bf585209f02798e549c7dba"
  },
  {
    "url": "assets/js/9.d739213e.js",
    "revision": "12e841d5bdbf7ea1822c308b520c3d90"
  },
  {
    "url": "assets/js/app.f8dfceeb.js",
    "revision": "178c72eaab41cb7cf587957372ea72a8"
  },
  {
    "url": "coding-basis/algorithm/index.html",
    "revision": "d9cbe3aafa2d9a0775fcbe474cd9c0d1"
  },
  {
    "url": "coding-basis/browser/index.html",
    "revision": "d7ae7104daa72944d61a2eed94c36951"
  },
  {
    "url": "coding-basis/computer/index.html",
    "revision": "9621630cfe0e233e5873b7f261488694"
  },
  {
    "url": "coding-basis/css/index.html",
    "revision": "281abe65923035b658080c51fb48cdb9"
  },
  {
    "url": "coding-basis/data-structure/index.html",
    "revision": "230eefd69dcaa6fb0aa902e93b6b899a"
  },
  {
    "url": "coding-basis/git/index.html",
    "revision": "db0d23f686dbc0c695f19d6ca2f2a9ea"
  },
  {
    "url": "coding-basis/html/index.html",
    "revision": "65c0bb22ff79b25088a25a3f66de2fc2"
  },
  {
    "url": "coding-basis/internet/index.html",
    "revision": "08d7783c4f1230dc64b3356ac2ca513b"
  },
  {
    "url": "coding-basis/js/index.html",
    "revision": "b911407b7f3ee1608a2121f9b6ceb32d"
  },
  {
    "url": "coding-basis/math/index.html",
    "revision": "1efd8206de0cbbc80be1e5855bf9d18c"
  },
  {
    "url": "coding-basis/package-manager/index.html",
    "revision": "37037f4fee443ef1b83fb510ddbf487b"
  },
  {
    "url": "combat/egg-backend/index.html",
    "revision": "d9f3d13f3125022647b6fbd8da54ee0b"
  },
  {
    "url": "combat/expo-todo-list/index.html",
    "revision": "0b083d83ccca1b7e06ee5ed72a4ddacb"
  },
  {
    "url": "combat/koa-backend/index.html",
    "revision": "3c2ad87dd87403cbbed5fa27b3e19c1a"
  },
  {
    "url": "combat/react-material-todo-list/index.html",
    "revision": "7a2decbe9ae44bb69df0492d0facacf4"
  },
  {
    "url": "combat/taro-todo-list/index.html",
    "revision": "ad7e22e6ecc914061b0176e078606992"
  },
  {
    "url": "combat/umi-admin/index.html",
    "revision": "02e038ee58bed5022bca26f11db73526"
  },
  {
    "url": "combat/uni-app-todo-list/index.html",
    "revision": "21bad1b1feb711784f40b6fc7a474cc0"
  },
  {
    "url": "combat/vue-element-todo-list/index.html",
    "revision": "7565a1bb1fa9bcc9015ebf09d1b7e689"
  },
  {
    "url": "combat/vue-vuetify-admin/index.html",
    "revision": "581fd43fd1b7bfccba3678fa2ddcbfbb"
  },
  {
    "url": "donate/index.html",
    "revision": "64042044d74d34a89fa47943673cecb6"
  },
  {
    "url": "front-end/av/index.html",
    "revision": "11db389b449675f3efd43e6528927d2e"
  },
  {
    "url": "front-end/build/index.html",
    "revision": "967d6673e0eb8559650e37fc969a916d"
  },
  {
    "url": "front-end/environment/index.html",
    "revision": "82191de6afc19d58328cc4b46a51f3a9"
  },
  {
    "url": "front-end/expo/index.html",
    "revision": "37cc2bdecc2a396a75ccc3a59aa23ad2"
  },
  {
    "url": "front-end/jquery-bootstrap/index.html",
    "revision": "b70d4fd8f6742ced14a61c0b7ebaa681"
  },
  {
    "url": "front-end/koa-and-egg/index.html",
    "revision": "0c5ea7c1ad4ec83ace4e2190249fb624"
  },
  {
    "url": "front-end/lib/index.html",
    "revision": "4be6518ad780c8f6cb50670737c66b93"
  },
  {
    "url": "front-end/monitor/index.html",
    "revision": "e95c1870900330f86d15aa4dc541d55a"
  },
  {
    "url": "front-end/optimization/index.html",
    "revision": "21b037187700b4b7e5e6762c86b1d892"
  },
  {
    "url": "front-end/react-native/index.html",
    "revision": "2d56b21d65ad93d76cf2c04fc47d95da"
  },
  {
    "url": "front-end/react/index.html",
    "revision": "179295262bd0679272c8be2a042fe1dd"
  },
  {
    "url": "front-end/roadmap/index.html",
    "revision": "faa46445a192f4653e3250cec10e61ef"
  },
  {
    "url": "front-end/safety/index.html",
    "revision": "ff112e7e5d87ebd9537f502aebe87135"
  },
  {
    "url": "front-end/taro/index.html",
    "revision": "214f513975f2a92ccd6aade82962342d"
  },
  {
    "url": "front-end/technology-stack/index.html",
    "revision": "f279415cd4d709dd8994d9b864768eaa"
  },
  {
    "url": "front-end/typescript/index.html",
    "revision": "f0e58107b31f97d61631e615dc77fb47"
  },
  {
    "url": "front-end/uni-app/index.html",
    "revision": "7610fa213d9bb6e9a44b5a0cd3550e02"
  },
  {
    "url": "front-end/vue/index.html",
    "revision": "da5df6a2d298434641dd0c8941f36a87"
  },
  {
    "url": "icons/WatchDogs144.png",
    "revision": "d704ff717952fa96040aa1c6fddf9637"
  },
  {
    "url": "icons/WatchDogs168.png",
    "revision": "b09dbb799494ae17bc367cec7338e0e2"
  },
  {
    "url": "icons/WatchDogs192.png",
    "revision": "61b0baf4d740d52ed1ba9025f8f29dc0"
  },
  {
    "url": "icons/WatchDogs256.png",
    "revision": "c6bd2511e6a4c6f465bc5e5617e3823b"
  },
  {
    "url": "icons/WatchDogs48.png",
    "revision": "fac55b4516bf8f0f07e91a70e4521a4c"
  },
  {
    "url": "icons/WatchDogs72.png",
    "revision": "4ca4869aff4a0732aa2739c1e6feb16c"
  },
  {
    "url": "icons/WatchDogs96.png",
    "revision": "d09ba1af2951546a9251896cc06f9c2b"
  },
  {
    "url": "index.html",
    "revision": "3da5b5ab7d719728332b85a815fae7e5"
  },
  {
    "url": "links/index.html",
    "revision": "e7ca77ce238e0779c33bdefe7c2f212a"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "tittle-tattle/index.html",
    "revision": "fe6e9ffdff79fb9d1977fd314b9adbcf"
  },
  {
    "url": "wechat.png",
    "revision": "0f4b2820f6834430361f3ddb268f6684"
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
