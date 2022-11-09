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

importScripts("/won-js/test_wallet/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/won-js/test_wallet/workbox-v3.6.3"});

importScripts(
  "/won-js/test_wallet/precache-manifest.ce8b1ca6df31dd389a2d1087973a6025.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/won-js/test_wallet/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
