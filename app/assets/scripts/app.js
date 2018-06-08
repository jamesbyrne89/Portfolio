'use strict';

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