'use strict';

$(document).ready();

$(window).scroll(function () {

  if ($(window).scrollTop() > 800) {
    $('.mobile-nav').addClass('sticky');
  } else {
    $('.mobile-nav').removeClass('sticky');
  }
});

// MOBILE NAVIGATION
$(function ($) {
  $('.menu-btn').on('click', function () {
    $('.responsive-menu').toggleClass('expand');
    $('.menu-btn span:first-child').toggleClass('opened');
    $('.menu-btn span:nth-child(2)').toggleClass('hidden');
    $('.menu-btn span:last-child').toggleClass('opened');
  });
});

$(function ($) {
  $('.menu-link').on('click', function () {
    $('.responsive-menu').addClass('expand');
    $('.menu-btn span:first-child').removeClass('opened');
    $('.menu-btn span:nth-child(2)').removeClass('hidden');
    $('.menu-btn span:last-child').removeClass('opened');
  });
});

$(function ($) {
  $('.menu-link').click(function () {
    $('.responsive-menu').toggleClass('expand');
  });
});

$("img.lazy").lazyload({
  threshold: -900
});

// RESPONSIVE NAVIGATION

$(window).scroll(function () {
  var sticky = $('header'),
      scroll = $(window).scrollTop();
  if (scroll >= 850) {
    sticky.addClass('fixed');
    sticky.fadeIn(100);
  } else {
    sticky.removeClass('fixed');

    sticky.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
  }
});

// SLIDE IN ANIMATIONS

// This function needs fixing!!!

function animateIn(el, offset) {
  var $element = $(el);

  $element.waypoint(function (direction) {
    if (direction == 'down') {
      $element.addClass('sideintro', 'delayed-text-5');
      $element.removeClass('animated fadeOut');
    } else {
      $element.removeClass('sideintro', 'delayed-text-5');
      $element.addClass('animated fadeOut');
    }
  }, { offset: offset });
}

var $welcome = $('#welcome-container');

$welcome.waypoint(function (direction) {
  if (direction == 'up') {
    $welcome.addClass('intro');
    $welcome.removeClass('fadeOut');
  } else {
    $welcome.removeClass('intro');
    $welcome.addClass('fadeOut');
  }
}, { offset: '2%' });

var $aboutSection = $('#about');
var $mouse = $('.mouse');

$aboutSection.waypoint(function (direction) {
  if (direction == 'down') {
    $mouse.addClass('animated fadeOut');
  } else {
    $mouse.removeClass('animated fadeOut');
  }
}, { offset: '60%' });

// ABOUT ME SECTION //

var $about = $('#about p');

$about.waypoint(function (direction) {
  if (direction == 'down') {
    $about.addClass('intro');
    $about.removeClass('fadeOut');
  } else {
    $about.removeClass('intro');
    $about.addClass('fadeOut');
  }
}, { offset: '70%' });

// SKILLS SECTION //

var $skillstitle = $('.skills-left');

$skillstitle.waypoint(function (direction) {
  if (direction == 'up') {
    $skillstitle.removeClass('intro');
    $skillstitle.addClass('fadeOut');
  } else {
    $skillstitle.addClass('intro');
    $skillstitle.removeClass('fadeOut');
  }
}, { offset: '70%' });

var $listItemOne = $('#list-item-1');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemOne.addClass('sideintro', 'delayed-text-1');
    $listItemOne.removeClass('animated fadeOut');
  } else {
    $listItemOne.removeClass('sideintro', 'delayed-text-1');
    $listItemOne.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemTwo = $('#list-item-2');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemTwo.addClass('sideintro', 'delayed-text-2');
    $listItemTwo.removeClass('animated fadeOut');
  } else {
    $listItemTwo.removeClass('sideintro', 'delayed-text-2');
    $listItemTwo.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemThree = $('#list-item-3');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemThree.addClass('sideintro', 'delayed-text-3');
    $listItemThree.removeClass('animated fadeOut');
  } else {
    $listItemThree.removeClass('sideintro', 'delayed-text-3');
    $listItemThree.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemFour = $('#list-item-4');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemFour.addClass('sideintro', 'delayed-text-4');
    $listItemFour.removeClass('animated fadeOut');
  } else {
    $listItemFour.removeClass('sideintro', 'delayed-text-4');
    $listItemFour.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemFive = $('#list-item-5');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemFive.addClass('sideintro', 'delayed-text-5');
    $listItemFive.removeClass('animated fadeOut');
  } else {
    $listItemFive.removeClass('sideintro', 'delayed-text-5');
    $listItemFive.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemSix = $('#list-item-6');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemSix.addClass('sideintro', 'delayed-text-6');
    $listItemSix.removeClass('animated fadeOut');
  } else {
    $listItemSix.removeClass('sideintro', 'delayed-text-6');
    $listItemSix.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemSeven = $('#list-item-7');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemSeven.addClass('sideintro', 'delayed-text-7');
    $listItemSeven.removeClass('animated fadeOut');
  } else {
    $listItemSeven.removeClass('sideintro', 'delayed-text-7');
    $listItemSeven.addClass('animated fadeOut');
  }
}, { offset: '60%' });

var $listItemEight = $('#list-item-8');

$skillstitle.waypoint(function (direction) {
  if (direction == 'down') {
    $listItemEight.addClass('sideintro', 'delayed-text-8');
    $listItemEight.removeClass('animated fadeOut');
  } else {
    $listItemEight.removeClass('sideintro', 'delayed-text-8');
    $listItemEight.addClass('animated fadeOut');
  }
}, { offset: '60%' });

//PROJECTS SECTION //


var $projectsGrid = $('#rig');

$projectsGrid.waypoint(function (direction) {
  if (direction == 'down') {
    $projectsGrid.addClass('intro');
    $projectsGrid.removeClass('animated fadeOut');
    $projectsGrid.css('opacity', 1);
  } else {
    $projectsGrid.addClass('animated fadeOut');
    $projectsGrid.css('opacity', 0);
  }
}, { offset: '60%' });

// CONTACT SECTION //

var $contactMe = $('.contact-left');

$contactMe.waypoint(function (direction) {
  if (direction == 'down') {
    $contactMe.addClass('intro');
    $contactMe.removeClass('animated fadeOut');
  } else {
    $contactMe.removeClass('intro');
    $contactMe.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $emailBtn = $('#contactbutton');

$emailBtn.waypoint(function (direction) {
  if (direction == 'down') {
    $emailBtn.addClass('intro');
    $emailBtn.removeClass('animated fadeOut');
  } else {
    $emailBtn.removeClass('intro');
    $emailBtn.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $socialOne = $('.fa-twitter');

$socialOne.waypoint(function (direction) {
  if (direction == 'down') {
    $socialOne.addClass('sideintro', 'delayed-text-1');
    $socialOne.removeClass('animated fadeOut');
  } else {
    $socialOne.removeClass('sideintro', 'delayed-text-1');
    $socialOne.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $socialTwo = $('.fa-instagram');

$socialTwo.waypoint(function (direction) {
  if (direction == 'down') {
    $socialTwo.addClass('sideintro', 'delayed-text-2');
    $socialTwo.removeClass('animated fadeOut');
  } else {
    $socialTwo.removeClass('sideintro', 'delayed-text-2');
    $socialTwo.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $socialThree = $('.fa-flickr');

$socialThree.waypoint(function (direction) {
  if (direction == 'down') {
    $socialThree.addClass('sideintro', 'delayed-text-3');
    $socialThree.removeClass('animated fadeOut');
  } else {
    $socialThree.removeClass('sideintro', 'delayed-text-3');
    $socialThree.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $socialFour = $('.fa-linkedin-square');

$socialFour.waypoint(function (direction) {
  if (direction == 'down') {
    $socialFour.addClass('sideintro', 'delayed-text-4');
    $socialFour.removeClass('animated fadeOut');
  } else {
    $socialFour.removeClass('sideintro', 'delayed-text-4');
    $socialFour.addClass('animated fadeOut');
  }
}, { offset: '80%' });

var $socialFive = $('.fa-github');

$socialFive.waypoint(function (direction) {
  if (direction == 'down') {
    $socialFive.addClass('sideintro', 'delayed-text-5');
    $socialFive.removeClass('animated fadeOut');
  } else {
    $socialFive.removeClass('sideintro', 'delayed-text-5');
    $socialFive.addClass('animated fadeOut');
  }
}, { offset: '80%' });