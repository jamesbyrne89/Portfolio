/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/fonts/AvenirLTStd-Black.ttf","ef633425708ac19a74eccbd1b8760112"],["/assets/fonts/AvenirLTStd-Book.ttf","44fc7778fc32affb91a9e8f41cb434b3"],["/assets/fonts/AvenirLTStd-Light.ttf","8bb6bf5d1f46260ba6fb7f0835c3eeb2"],["/assets/fonts/AvenirNextLTRegular.eot","9c6e9c54fa6c5d09aa36babef34419ae"],["/assets/fonts/AvenirNextLTRegular.svg","b323893d4b95476ba92e9e1ab968e932"],["/assets/fonts/AvenirNextLTRegular.ttf","c0ce51eb8fbf51df243df4cf4a0a4fa6"],["/assets/fonts/AvenirNextLTRegular.woff","5b38db4534ebcde2da17df19c7d067b4"],["/assets/images/Cocksure-1.png","1e08bdffdd88126f0b072df9c569655e"],["/assets/images/Cocksure-2.png","dc86e0f6b76e77ca847bfd6a78f6a073"],["/assets/images/Cocksure-3.png","b460b8d1df061a4733db9e2ecbbf1f4f"],["/assets/images/Cocksure-4.png","b03d0495c0f78180dfd179170c673016"],["/assets/images/JB-logo.png","c38ed55b44e26a1f33df969af35430f7"],["/assets/images/cocksure.jpg","a1411ed830073427513f771d2f5af2c9"],["/assets/images/codepen.svg","5171e7c7ba01781e8cfed46c49f18f92"],["/assets/images/csswizardry.svg","ed5d6aec4a9e2c934a212713de175890"],["/assets/images/devices/cocksure-brewing-co/combo-1000.png","26aac81b06096c7fb0acd9e670719ddc"],["/assets/images/devices/cocksure-brewing-co/combo-400.png","35b54ee29311b4ea9f1b29c9e592937b"],["/assets/images/devices/cocksure-brewing-co/combo-600.png","05502b459090e19d64f4ff59a22cbad6"],["/assets/images/devices/keyboard-drumkit/combo-1000.png","c66d583ee8c6741620390dc6508eced1"],["/assets/images/devices/keyboard-drumkit/jamesbyrne89.github.io-JS-Drumkit-.png","d39832082b3104a598720f906c718990"],["/assets/images/devices/local-weather-app/combo-1000.png","861a3a44fe417630d37f2fa7e31efc4e"],["/assets/images/devices/local-weather-app/combo-400.png","595d06993a9c2b37879a2c0064370111"],["/assets/images/devices/local-weather-app/combo-600.png","69332588eb186c924b8fb111116f3205"],["/assets/images/devices/local-weather-app/combo.png","0bb6b3ccfff3e1dc5935ac018f1c60c9"],["/assets/images/devices/pomodoro-clock/combo-1000.png","d2c4072646dc730d141ebcbfec1568f6"],["/assets/images/devices/pomodoro-clock/combo-400.png","37a811b47f0b70b87342da875dc6146f"],["/assets/images/devices/pomodoro-clock/combo-600.png","a724f706c4308bfb9f4f59d47ec607da"],["/assets/images/devices/pomodoro-clock/combo.png","3be7aa383341abb6a98e045dbd43583d"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(Laptop with HiDPI screen).png","37ac46538a161226a4dbeccaa4a1e24b"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(iPad).png","24d57c40340ae593fc92978c14af13d9"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(iPhone 6).png","cddb83d8f87de6447d6389763aa7d71b"],["/assets/images/devices/redditdev/combo-1000.png","7db2ff14cf9b300aa23d501c4026c916"],["/assets/images/devices/redditdev/combo-400.png","d098f7e0a71a67bd8dbdc030fb092858"],["/assets/images/devices/redditdev/combo-600.png","1ab37e019fec324913e6f9a70ad68afb"],["/assets/images/devices/redditdev/combo.png","92445cd04a082a2a0b4785b99f5c7d0b"],["/assets/images/devices/tic-tac-toe/combo-1000.png","60248dd1e435b94496a8c1b132217095"],["/assets/images/devices/tic-tac-toe/combo-400.png","01d6a6b24a13c1b4ce68a3cba690728b"],["/assets/images/devices/tic-tac-toe/combo-600.png","0594dfc56ce3dc4ac5390bafd24b8fa2"],["/assets/images/devices/tic-tac-toe/combo.png","80904aac91694b0a56b7f027f4ef119c"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(Laptop with HiDPI screen).png","f01479b72048c2ecd67f6c575144cf2f"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(iPad).png","1c083dfa96cdb6b870c5bac4e7a0fb60"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(iPhone 6).png","89db773072db7ac2cab9b4ddeb949c05"],["/assets/images/devices/todo-list/combo-1000.png","dfc757285a405af7afcaabf7ec5fa0f8"],["/assets/images/devices/todo-list/combo-400.png","0b833b8e82319210c8d9df3795732f91"],["/assets/images/devices/todo-list/combo-600.png","a4e3b575451895422661917cf099a59b"],["/assets/images/devices/todo-list/combo.png","8bda0daff69d5ebeff1d65bd81d436ea"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(Laptop with HiDPI screen).png","5c4c0087dac3fff5c14b744ec36e934c"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(iPad).png","530432f153417e05def8e4052861c5ac"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(iPhone 6).png","e53fb1ade50a1ecf050fab35a46db308"],["/assets/images/devices/wikipedia-viewer/combo-1000.png","1c766bf4778a4b662a490261289edf8e"],["/assets/images/devices/wikipedia-viewer/combo-1000_compressed.png","ace56a03f5a8d0ccfc72e9878b05e57e"],["/assets/images/devices/wikipedia-viewer/combo-400.png","eaea4c566df233a88827fe39bb00f564"],["/assets/images/devices/wikipedia-viewer/combo-400_compressed.png","3e13a0b51f00321bebdc03571e622eee"],["/assets/images/devices/wikipedia-viewer/combo-600.png","b85335eab5d4833989c192c38ca4494d"],["/assets/images/devices/wikipedia-viewer/combo-600_compressed.png","1a37217f5f50eb6d94af10a18c049ebf"],["/assets/images/devices/wikipedia-viewer/combo.png","ac43cd5347afb219806652f5567028a1"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(Laptop with HiDPI screen).png","d8c79a32b8c6b3df8d74772fdca9af0d"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(iPad).png","4f5b1aa95fb9ab2867f52030766e64c8"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(iPhone 6 Plus).png","a130e9168e16d2a955e4f2a4e4f65fde"],["/assets/images/facebook.svg","08283f29a3ed0c46aa8ebdd012c8e673"],["/assets/images/flickr.svg","7ed827ca62b8c15eea69193b2314825a"],["/assets/images/github.svg","5000027e2b2aa72a7ed0c607e7e884ce"],["/assets/images/html5.svg","5088ff566e4292e2a4d8993fff5ccc18"],["/assets/images/icons/logo-16x16.png","629010108585db5c1d8adf170cf53dec"],["/assets/images/icons/logo-32x32.png","3e22b064a3791201dc03c5f74638646e"],["/assets/images/icons/logo-64x64.png","1b7db3bf29e75b23563f191af2d87b0c"],["/assets/images/instagram.svg","39386f92094f2ada04e3842567ffa7d4"],["/assets/images/javascript.svg","58bdb8153bf4b80c425cb5ef65f9cf35"],["/assets/images/keyboard_drumkit.jpg","f0f16c47fc64b88d0c1a6781c243afce"],["/assets/images/linkedin.svg","b4f5f1d1fba6095d9ce79ae4fd2a707c"],["/assets/images/local_weather_app.jpg","d81c5b3c4ad329ed0be1b1d79c62282d"],["/assets/images/palette.jpg","cc7f5750a30b2f5361d0e7a468e6f9e8"],["/assets/images/pinterest.svg","fcc4f491cef2a36ffda12b85e9bb6313"],["/assets/images/pomodoro_clock.jpg","0a1182fc7f33cce955c26fd881f3321a"],["/assets/images/random_quote_machine.jpg","806ee3923644f7eeb12b731c9bf5239c"],["/assets/images/redditdev.jpg","ef82ea469e72a6cec752e2fcee11de89"],["/assets/images/russell_wilson_tribute.jpg","902c0214546125de274d6f2b4e19771d"],["/assets/images/sass.svg","685e4374268702eca2212b731772e05e"],["/assets/images/todo_list.jpg","67db51c95a8de583292a7d2592987c29"],["/assets/images/twitter.svg","fd7a03b29b9c67657a310b96c8daf354"],["/assets/images/wikipedia_viewer.jpg","065dd7732486b28278ab902be99fe2f7"],["/assets/scripts/app-e03ad02aeb.js","e03ad02aeb571fe7a8b9009357f3641a"],["/assets/scripts/vendor/jquery.lazyload.min.js","89c45121934ed4664ff3ca811a008226"],["/assets/scripts/vendor/jquery.waypoints.min.js","7d05f92297dede9ecfe3706efb95677a"],["/assets/scripts/vendor/lazysizes.min.js","a7eee71ce2d89cb79c5eabd594b766f0"],["/assets/scripts/vendor/smooth-scroll.polyfills.min.js","d36c2d4f2762500ed5fea65453b34873"],["/assets/styles/styles-2059f26762.css","bd3aa402e84b30b53cefc49ba67cd510"],["/index.html","c937a1ac0d35c795b01ca08ec8bd79de"],["/projects/cocksure-brewing-co/index.html","4afa38efa48bfaea88c6115425bf3077"],["/projects/keyboard-drumkit/index.html","56d5745c158d5779eba4c689c2d39a22"],["/projects/local-weather-app/index.html","cb1b643ae48cbd2f862926469b4246c8"],["/projects/pomodoro-clock/index.html","92a33ac274861abd3930e171d5d6d09c"],["/projects/redditdev/index.html","7b9e3430949198b444987c833cdf7eec"],["/projects/tic-tac-toe/index.html","efbe8c3f48470c2e87a1943255f7b8af"],["/projects/todo-list/index.html","22a81ec2fc95f31132a866b47dec379b"],["/projects/wikipedia-viewer/index.html","d6ef39651e9797179810de472bbd4e8e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







