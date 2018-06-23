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

var precacheConfig = [["/assets/fonts/AvenirLTStd-Black.WOFF","9b10cb75fc6673ac6232c403414d47ee"],["/assets/fonts/AvenirLTStd-Black.ttf","ef633425708ac19a74eccbd1b8760112"],["/assets/fonts/AvenirLTStd-Book.WOFF","0fad9ff0e759d27d8910d17ac9e62298"],["/assets/fonts/AvenirLTStd-Book.ttf","44fc7778fc32affb91a9e8f41cb434b3"],["/assets/fonts/AvenirLTStd-Light.WOFF","eb94871a126b4fa557995d7eedac5be4"],["/assets/fonts/AvenirLTStd-Light.ttf","8bb6bf5d1f46260ba6fb7f0835c3eeb2"],["/assets/fonts/AvenirNextLTRegular.eot","9c6e9c54fa6c5d09aa36babef34419ae"],["/assets/fonts/AvenirNextLTRegular.svg","b323893d4b95476ba92e9e1ab968e932"],["/assets/fonts/AvenirNextLTRegular.ttf","c0ce51eb8fbf51df243df4cf4a0a4fa6"],["/assets/fonts/AvenirNextLTRegular.woff","5b38db4534ebcde2da17df19c7d067b4"],["/assets/fonts/AvenirNextLTRegular.woff2","fe4f3d3e037eb12ea2bd9bfdcb9a4bcf"],["/assets/images/Cocksure-1.png","64c130dc4b5abb471130fa368cb6da22"],["/assets/images/Cocksure-2.png","635d0aa05ad80c662fd35ccd13fbeee0"],["/assets/images/Cocksure-3.png","6d572021021049d1c2e8ff95e5f2ccff"],["/assets/images/Cocksure-4.png","e27bb0b72690fcb8fa6e2e2b34c24ba8"],["/assets/images/JB-logo.png","8bdc463f612a8db2bf922592e35560a5"],["/assets/images/cocksure.jpg","a1411ed830073427513f771d2f5af2c9"],["/assets/images/codepen.svg","e925884dbe76865ed11723330700a784"],["/assets/images/csswizardry.svg","ea0a7c691cc9e46c82c1724f8a500973"],["/assets/images/devices/cocksure-brewing-co/combo-1000.png","9cc6723b0ff9c8e6b87e6949ac200e9b"],["/assets/images/devices/cocksure-brewing-co/combo-400.png","37d5d9a2b7c5db7c3c022ac33f85113d"],["/assets/images/devices/cocksure-brewing-co/combo-600.png","38f2ece48a42459b1e0064a970b9c021"],["/assets/images/devices/cocksure-brewing-co/iMac.JPG","51e21f7a309df23f93a8f3b016466119"],["/assets/images/devices/cocksure-brewing-co/iPad.JPG","9de35ff7cbf427eabf16230ba14d967e"],["/assets/images/devices/cocksure-brewing-co/laptop.JPG","63899138ec5efcdaa122e64605f5b241"],["/assets/images/devices/cocksure-brewing-co/phone.JPG","e77c16ad3cbdb6b161dc88b3ffe634fd"],["/assets/images/devices/keyboard-drumkit/combo-1000.png","fdbaa183bf3166cafd4abda32f4c2133"],["/assets/images/devices/keyboard-drumkit/jamesbyrne89.github.io-JS-Drumkit-.png","1c8cdec0a3cd59f97ca42bcaa865f08f"],["/assets/images/devices/local-weather-app/combo-1000.png","dd70fcc97d73dc200955698789f7f568"],["/assets/images/devices/local-weather-app/combo-400.png","5df5ef2ab2e061e833649e04abca37fb"],["/assets/images/devices/local-weather-app/combo-600.png","31e5e6439ef56969f6af14a02c4d3ed2"],["/assets/images/devices/local-weather-app/combo.png","bc0710916bcdf761954a533f45a40dcd"],["/assets/images/devices/local-weather-app/iMac.JPG","498f106beb2e2b9375d70a156b07ef29"],["/assets/images/devices/local-weather-app/iPad.JPG","5d70c5e62a9c5bcd04f4e497aaaa8d6e"],["/assets/images/devices/local-weather-app/iPhone.JPG","62fff221d4811976d3a6bef63c7a1364"],["/assets/images/devices/pomodoro-clock/combo-1000.png","eec2f99bad8a7230d084d25048418c2b"],["/assets/images/devices/pomodoro-clock/combo-400.png","48b55929383f69d2ce90f82c03907d3b"],["/assets/images/devices/pomodoro-clock/combo-600.png","2a0b27ab5b0530f0b0789a79f7e178d5"],["/assets/images/devices/pomodoro-clock/combo.png","d3232608d7ef08f1089dd0a543eb255b"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(Laptop with HiDPI screen).png","61cd0251a167c9e57dfb3cdecfb1a178"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(iPad).png","822e15dbe46a9c30d37f8ba58ffb9ceb"],["/assets/images/devices/pomodoro-clock/jamesbyrne89.github.io-Pomodoro-Clock-(iPhone 6).png","723b59e5abf703fba03442748ff22369"],["/assets/images/devices/redditdev/combo-1000.png","27fdd7a0a201e09ad41b8e05e4b04f4f"],["/assets/images/devices/redditdev/combo-400.png","1a8d321dbd8499da5c38891b21d15c4a"],["/assets/images/devices/redditdev/combo-600.png","71f7ff1769ae0782cdc23da6b1a1946c"],["/assets/images/devices/redditdev/combo.png","6dd6c4e93ae38cf67874d1e790da062b"],["/assets/images/devices/redditdev/iMac.JPG","ba03433a2d52d06f17ea69357ecbb9f4"],["/assets/images/devices/redditdev/iPad.JPG","e18b11505b1de35f89ec1b118d6de1ad"],["/assets/images/devices/redditdev/iPhone.JPG","def9e991b4ae94b8266c33ede37ef063"],["/assets/images/devices/tic-tac-toe/combo-1000.png","ff472a71fcd40d15b36618630d2fc65c"],["/assets/images/devices/tic-tac-toe/combo-400.png","236156c56b38c28ca3763ce073d57d57"],["/assets/images/devices/tic-tac-toe/combo-600.png","521922c6581a45f2120eb949fec031d9"],["/assets/images/devices/tic-tac-toe/combo.png","6a94b7386e91db30d37e150fce92c619"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(Laptop with HiDPI screen).png","653db9de24c120a4ed29fb35daab3573"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(iPad).png","79a558c74f62d4b590de665e71b65384"],["/assets/images/devices/tic-tac-toe/jamesbyrne89.github.io-Tic-Tac-Toe-(iPhone 6).png","a28be0bff295d1f101d15e3a6b5cd4be"],["/assets/images/devices/todo-list/combo-1000.png","7d9e09461171b8eb98ab401378a4bf7f"],["/assets/images/devices/todo-list/combo-400.png","287ce227ba907131a1e48afa3eb21a61"],["/assets/images/devices/todo-list/combo-600.png","60d7c057cb0fbb1b3348a97465b9ed91"],["/assets/images/devices/todo-list/combo.png","5941e011675aa947fd1ca526da21d1e8"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(Laptop with HiDPI screen).png","7a519600797341f180553fed389ed360"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(iPad).png","1f42b887495fec2d4e068f6a9464a413"],["/assets/images/devices/todo-list/jamesbyrne89.github.io-ToDo-List-(iPhone 6).png","98ad61e3de8fb6691a693b334af1a5bd"],["/assets/images/devices/wikipedia-viewer/combo-1000.png","aa95acb6d2a3c2d99f83a4958a556b5e"],["/assets/images/devices/wikipedia-viewer/combo-1000_compressed.png","aa95acb6d2a3c2d99f83a4958a556b5e"],["/assets/images/devices/wikipedia-viewer/combo-400.png","318adfef1fe072c5bf9e12af5b460b82"],["/assets/images/devices/wikipedia-viewer/combo-400_compressed.png","318adfef1fe072c5bf9e12af5b460b82"],["/assets/images/devices/wikipedia-viewer/combo-600.png","4bd7e1b6ebb8cf323d0189485be596ff"],["/assets/images/devices/wikipedia-viewer/combo-600_compressed.png","4bd7e1b6ebb8cf323d0189485be596ff"],["/assets/images/devices/wikipedia-viewer/combo.png","ef56debf67bd88d18bdfc43de958b520"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(Laptop with HiDPI screen).png","374284c43e506004db63825d0b31fc3c"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(iPad).png","8cf832e140cbf77da6f4482b339551c9"],["/assets/images/devices/wikipedia-viewer/jamesbyrne89.github.io-Wikipedia-Viewer-(iPhone 6 Plus).png","0bbc968ae65139e90496dc21cb38c197"],["/assets/images/facebook.svg","502086ef55ae9789e549c737134a71cb"],["/assets/images/flickr.svg","8a652120869d321473e9a8fb5e7ce745"],["/assets/images/github.svg","0c18ba5634717442e23ba26292973b7d"],["/assets/images/html5.svg","5088ff566e4292e2a4d8993fff5ccc18"],["/assets/images/icons/android-chrome-192x192.png","9622722bd975006bbb115739e03bf860"],["/assets/images/icons/android-chrome-512x512.png","d562cd57e0ebef7b735285fbbf730126"],["/assets/images/icons/apple-touch-icon.png","793e3b7ae15b92ee9a7be655e05b8dce"],["/assets/images/icons/favicon-16x16.png","8034131162cc331abc30e35d0cb1035b"],["/assets/images/icons/favicon-32x32.png","78cee12bae9c88bacb7bf729dcf52b97"],["/assets/images/icons/logo-16x16.png","1bed751028d682d98c11b50b2d7decf6"],["/assets/images/icons/logo-192x192.png","9622722bd975006bbb115739e03bf860"],["/assets/images/icons/logo-32x32.png","6887cf09b76d2812bdd56f10599b8a08"],["/assets/images/icons/logo-64x64.jpg","0519642feffddff0d9ef826165fbaf41"],["/assets/images/icons/logo-64x64.png","e57ba82ab7be6cef2f210d5e8c0417fc"],["/assets/images/icons/logo.jpg","478cc9f33d59608616217fc556f972a3"],["/assets/images/icons/mstile-150x150.png","b2c464829e3348b182b72525019301c2"],["/assets/images/icons/safari-pinned-tab.svg","e4ad086c3e489599423dbec2cb23a3fe"],["/assets/images/instagram.svg","785a2a6fd6677a881d46d62479344421"],["/assets/images/javascript.svg","58bdb8153bf4b80c425cb5ef65f9cf35"],["/assets/images/keyboard_drumkit.jpg","f0f16c47fc64b88d0c1a6781c243afce"],["/assets/images/linkedin.svg","508ebe61304a7b540cad53b249ae0997"],["/assets/images/local_weather_app.jpg","d81c5b3c4ad329ed0be1b1d79c62282d"],["/assets/images/palette.jpg","cc7f5750a30b2f5361d0e7a468e6f9e8"],["/assets/images/pinterest.svg","ed82f4dcd2bbc7c6d9f6e99da845ff39"],["/assets/images/pomodoro_clock.jpg","0a1182fc7f33cce955c26fd881f3321a"],["/assets/images/random_quote_machine.jpg","484d0d486e9060d58442a4c369f9db14"],["/assets/images/redditdev.jpg","ef82ea469e72a6cec752e2fcee11de89"],["/assets/images/russell_wilson_tribute.jpg","6decef24189fcdf92800cb73606a4c52"],["/assets/images/sass.svg","2b8d5b6f444d1425e455209b99ee3e67"],["/assets/images/tic_tac_toe.JPG","b357d9fed85a0a4eb4aedc061f2b9c58"],["/assets/images/todo_list.jpg","67db51c95a8de583292a7d2592987c29"],["/assets/images/twitter.svg","132cce968f27ed7b2f8a277888ab6e3a"],["/assets/images/wikipedia_viewer.jpg","065dd7732486b28278ab902be99fe2f7"],["/assets/scripts/app-96f64d5912.js","96f64d59128d277dd521e6f6a317a5d0"],["/assets/scripts/vendor/jquery.lazyload.min.js","89c45121934ed4664ff3ca811a008226"],["/assets/scripts/vendor/jquery.waypoints.min.js","7d05f92297dede9ecfe3706efb95677a"],["/assets/scripts/vendor/lazysizes.min.js","a7eee71ce2d89cb79c5eabd594b766f0"],["/assets/scripts/vendor/smooth-scroll.polyfills.min.js","d36c2d4f2762500ed5fea65453b34873"],["/assets/styles/styles-6e130845e3.css","833389ba68c84ea2fed25a04c2b54618"],["/index.html","63c02457dc365f2b80398c2c19dc064c"],["/projects/cocksure-brewing-co/index.html","4afa38efa48bfaea88c6115425bf3077"],["/projects/keyboard-drumkit/index.html","56d5745c158d5779eba4c689c2d39a22"],["/projects/local-weather-app/index.html","cb1b643ae48cbd2f862926469b4246c8"],["/projects/pomodoro-clock/index.html","92a33ac274861abd3930e171d5d6d09c"],["/projects/redditdev/index.html","7b9e3430949198b444987c833cdf7eec"],["/projects/tic-tac-toe/index.html","efbe8c3f48470c2e87a1943255f7b8af"],["/projects/todo-list/index.html","22a81ec2fc95f31132a866b47dec379b"],["/projects/wikipedia-viewer/index.html","d6ef39651e9797179810de472bbd4e8e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







