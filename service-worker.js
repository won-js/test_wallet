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

importScripts("/test_wallet/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/test_wallet/workbox-v3.6.3"});

importScripts(
  "/test_wallet/precache-manifest.a302a1c4d5187a03f6c449c2aeb86d2c.js"
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

workbox.routing.registerNavigationRoute("/test_wallet/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
