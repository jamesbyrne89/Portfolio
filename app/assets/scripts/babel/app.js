'use strict';

/**
 * Sticky header that slides into view only when the user scrolls up
 */

(function stickyHeader() {
    var previous = window.scrollY;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 180 && window.scrollY > previous) {
            $('.site-header').removeClass('sticky');
            previous = window.scrollY;
        } else if (window.scrollY > 180 && window.scrollY < previous) {
            $('.site-header').addClass('sticky');
            previous = window.scrollY;
        } else if (window.scrollY < 180) {
            $('.site-header').removeClass('sticky');
            previous = window.scrollY;
        } else {
            return;
        }
    });
})();

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
    }, {
        offset: offset
    });
}

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
}, {
    offset: '60%'
});

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
        $aboutTitle.addClass('slide-left');
        $aboutTitle.removeClass('fade-out');
        $skillsTitle.addClass('slide-left');
        $skillsTitle.removeClass('fade-out');
        $skillIcon.addClass('slide-up');
    } else {
        // $about.removeClass('fade-in');
        // $about.addClass('fade-out');
        // $aboutTitle.addClass('fade-out');
        // $aboutTitle.removeClass('slide-left');
        // $skillsTitle.addClass('fade-out');
        // $skillsTitle.removeClass('slide-left');
        // $skillIcon.removeClass('slide-up');

    }
}, {
    offset: '70%'
});

//PROJECTS SECTION //

var $projectsTitle = $('.projects-section-header');
var $projects = $('.projects-gallery-intro');
var $gallery = $('.gallery');

$projects.waypoint(function (direction) {
    if (direction == 'down') {
        $projects.addClass('fade-in');
        $projects.removeClass('fade-out');
        $projectsTitle.addClass('slide-left');
        $projectsTitle.removeClass('fade-out');
        $gallery.addClass('fade-in');
        $gallery.removeClass('fade-out');
    } else {
        // $projects.removeClass('fade-in');
        // $projects.addClass('fade-out');
        // $projectsTitle.addClass('fade-out');
        // $projectsTitle.removeClass('slide-left');
        // $gallery.removeClass('fade-in');
        // $gallery.addClass('fade-out');
    }
}, {
    offset: '70%'
});

// CONTACT SECTION //

var $contact = $('.contact-section p');
var $contactTitle = $('.contact-section-header');
var $emailBtn = $('.btn-contact');
var $socialIcons = $('.social-icon');

$contact.waypoint(function (direction) {
    if (direction == 'down') {
        $contact.addClass('fade-in');
        $contact.removeClass('fade-out');
        $contactTitle.addClass('slide-left');
        $contactTitle.removeClass('fade-out');
        $emailBtn.addClass('fade-in');
        $emailBtn.removeClass('fade-out');
        $socialIcons.addClass('fade-in');
        $socialIcons.removeClass('fade-out');
    } else {
        // $contact.removeClass('fade-in');
        // $contact.addClass('fade-out');
        // $contactTitle.addClass('fade-out');
        // $contactTitle.removeClass('slide-left');
        // $emailBtn.removeClass('fade-in');
        // $emailBtn.addClass('fade-out');
        // $socialIcons.removeClass('fade-in');
        // $socialIcons.addClass('fade-out');
    }
}, {
    offset: '80%'
});