'use strict';
/**
 * Sticky header that slides into view only when the user scrolls up
 */

document.addEventListener('DOMContentLoaded', function () {
  (function stickyHeader() {
    var previous = window.scrollY;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        $('.site-header').addClass('sticky');
        if (window.scrollY > previous) {
          $('.site-header').removeClass('header--fixed');
        }
        if (window.scrollY <= previous) {
          $('.site-header').addClass('header--fixed');
        }
      } else {
        $('.site-header').removeClass('sticky');
        $('.site-header').removeClass('header--fixed');
      }
      previous = window.scrollY;
    });
  })();

  // MOBILE NAVIGATION
  $(function ($) {
    $('.menu-btn').on('click', function () {
      $('.site-nav').toggleClass('menu--active');
      $('.site-nav__item').toggleClass('site-nav__item--active');
      $('.menu-btn span:first-child').toggleClass('opened');
      $('.menu-btn span:nth-child(2)').toggleClass('hidden');
      $('.menu-btn span:last-child').toggleClass('opened');
    });
  });

  $(function ($) {
    $('.menu-link').on('click', function () {
      $('.responsive-menu').toggleClass('expand');
      $('.site-nav').toggleClass('menu--active');
      $('.menu-btn span:first-child').removeClass('opened');
      $('.menu-btn span:nth-child(2)').removeClass('hidden');
      $('.menu-btn span:last-child').removeClass('opened');
    });
  });

  var $aboutSection = $('#about');
  var $mouse = $('.mouse');

  $mouse.addClass('fade-in');

  $aboutSection.waypoint(function (direction) {
    if (direction == 'down') {
      $mouse.addClass('fade-out');
      $mouse.removeClass('fade-in');
    } else {
      $mouse.removeClass('fade-in');
      $mouse.removeClass('fade-out');
    }
  }, { offset: '60%' });

  // ABOUT ME SECTION //
  var $about = $('.about-section p');
  var $aboutTitle = $('.about-section-header');
  var $skillsTitle = $('.about-text__subtitle');
  var $skillsList = $('.skills-list ul');
  var $skillIcon = $('.tech-icon-wrapper');

  $about.waypoint(function (direction) {
    if (direction == 'down') {
      $about.addClass('fade-in');
      $about.removeClass('fade-out');
      $aboutTitle.addClass('enter-up');
      $aboutTitle.removeClass('fade-out');
      $skillsTitle.addClass('enter-up');
      $skillsTitle.removeClass('fade-out');
      $skillIcon.addClass('slide-up');
    } else {}
  }, { offset: '70%' });

  // PROJECTS SECTION //
  var $projectsTitle = $('.projects-section-header');
  var $projects = $('.projects-gallery-intro');
  var $gallery = $('.gallery');

  $projects.waypoint(function (direction) {
    if (direction == 'down') {
      $projects.addClass('fade-in');
      $projects.removeClass('fade-out');
      $projectsTitle.addClass('enter-up');
      $projectsTitle.removeClass('fade-out');
      $gallery.addClass('fade-in');
      $gallery.removeClass('fade-out');
    } else {}
  }, { offset: '70%' });

  // CONTACT SECTION //
  var $contact = $('.contact-section p');
  var $contactTitle = $('.contact-section-header');
  var $emailBtn = $('.btn-contact');
  var $socialIcons = $('.social-icon');

  $contact.waypoint(function (direction) {
    if (direction == 'down') {
      $contact.addClass('fade-in');
      $contact.removeClass('fade-out');
      $contactTitle.addClass('enter-up');
      $contactTitle.removeClass('fade-out');
      $emailBtn.addClass('fade-in');
      $emailBtn.removeClass('fade-out');
      $socialIcons.addClass('fade-in');
      $socialIcons.removeClass('fade-out');
    } else {}
  }, { offset: '80%' });

  // PROJECTS PAGE - SUMMARY SECTION //
  var $projectSummaryRight = $('.summary-right');
  var $projectSummaryLeft = $('.summary-left');
  var $fullSummary = $('.details__full-summary p');

  $projectSummaryRight.waypoint(function (direction) {
    if (direction == 'down') {
      $projectSummaryLeft.addClass('enter-up');
      $projectSummaryRight.addClass('fade-in');
    } else {}
  }, { offset: '80%' });

  $fullSummary.waypoint(function (direction) {
    if (direction == 'down') {
      $fullSummary.addClass('fade-in');
    } else {}
  }, { offset: '80%' });

  // PROJECTS PAGE - TECH SECTION //
  var $techTitle = $('.tech-section-header');
  var $details = $('.details-wrapper');
  var $techIcon = $('.tech-icon-wrapper');

  $details.waypoint(function (direction) {
    if (direction == 'down') {
      $techTitle.addClass('enter-up');
      $techTitle.removeClass('fade-out');
      $techIcon.addClass('slide-up');
    } else {}
  }, { offset: '80%' });

  var scroll = new SmoothScroll('a[data-scroll]', { easing: 'easeOut' });

  var year = new Date().getFullYear() || null;

  document.querySelector('.site-footer').innerText = 'Site design by James Byrne. © ' + year;
});