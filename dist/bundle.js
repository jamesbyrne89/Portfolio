/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  /*  Sticky header */
  var siteHeader = document.querySelector('.site-header');

  (function stickyHeader() {
    var previous = window.scrollY;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        siteHeader.classList.add('sticky');
        if (window.scrollY > previous) {
          siteHeader.classList.remove('header--fixed');
        }
        if (window.scrollY <= previous) {
          siteHeader.classList.add('header--fixed');
        }
      } else {
        siteHeader.classList.remove('sticky');
        siteHeader.classList.remove('header--fixed');
      }
      previous = window.scrollY;
    });
  })();

  /* Responsive menu */
  var siteNav = document.querySelector('.site-nav');
  var menuBtn = document.querySelector('.menu-btn');
  var menuLink = document.querySelectorAll('.menu-link');
  var menuBars = document.querySelectorAll('.menu-btn span');

  function toggleMenuIcon() {
    menuBars[0].classList.toggle('opened');
    menuBars[1].classList.toggle('hidden');
    menuBars[2].classList.toggle('opened');
  }

  function menuItemClickHandler() {
    siteNav.classList.toggle('menu--active');
    toggleMenuIcon();
  }

  menuBtn.addEventListener('click', menuItemClickHandler);

  menuLink.forEach(function (link) {
    link.addEventListener('click', menuItemClickHandler);
  });

  /* Scroll animations */
  function waypoint(target, className) {
    var peek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
    target = document.querySelectorAll(target);
    if (target === null) {
      return;
    }
    target.forEach(function (el) {
      var scrolled = window.scrollY + window.innerHeight * peek;
      var waypoint = el.getBoundingClientRect().top + window.scrollY;
      var scrolledPast = window.scrollY > waypoint + el.offsetHeight;
      if (scrolled > waypoint) {
        el.classList.add(className);
      }
    });
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.addEventListener('scroll', function () {
    debounce(waypoint('.section-header', 'enter-up', 0.8));
    debounce(waypoint('.about-text__subtitle', 'enter-up', 0.8));
    debounce(waypoint('.about-section p', 'fade-in', 0.8));

    debounce(waypoint('.tech-icon-wrapper', 'slide-up', 0.8));
    debounce(waypoint('.projects-gallery-intro', 'fade-in', 0.8));
    debounce(waypoint('.gallery', 'fade-in', 0.8));

    debounce(waypoint('.contact-text p', 'fade-in', 0.8));
    debounce(waypoint('.btn-contact', 'fade-in', 0.95));
    debounce(waypoint('.social-icons-wrapper', 'fade-in', 0.95));
  }, { passive: true });

  // Smooth scroll
  var scroll = new SmoothScroll('a[data-scroll]', { easing: 'easeOut' });

  var year = new Date().getFullYear() || null;

  document.querySelector('.site-footer').innerText = 'Site design by James Byrne. © ' + year;
});

/***/ })
/******/ ]);