"use strict";function animateIn(e,s){var a=$(e);a.waypoint(function(e){"down"==e?(a.addClass("sideintro","delayed-text-5"),a.removeClass("animated fadeOut")):(a.removeClass("sideintro","delayed-text-5"),a.addClass("animated fadeOut"))},{offset:s})}!function(){var e=window.scrollY;window.addEventListener("scroll",function(){if(window.scrollY>180&&window.scrollY>e)$(".site-header").removeClass("sticky"),e=window.scrollY;else if(window.scrollY>180&&window.scrollY<e)$(".site-header").addClass("sticky"),e=window.scrollY;else{if(!(window.scrollY<180))return;$(".site-header").removeClass("sticky"),e=window.scrollY}})}(),$(function(e){e(".menu-btn").on("click",function(){e(".responsive-menu").toggleClass("expand"),e(".menu-btn span:first-child").toggleClass("opened"),e(".menu-btn span:nth-child(2)").toggleClass("hidden"),e(".menu-btn span:last-child").toggleClass("opened")})}),$(function(e){e(".menu-link").on("click",function(){e(".responsive-menu").addClass("expand"),e(".menu-btn span:first-child").removeClass("opened"),e(".menu-btn span:nth-child(2)").removeClass("hidden"),e(".menu-btn span:last-child").removeClass("opened")})}),$(function(e){e(".menu-link").click(function(){e(".responsive-menu").toggleClass("expand")})}),$("img.lazy").lazyload({threshold:-900});var $welcome=$("#welcome-container");$welcome.waypoint(function(e){"up"==e?($welcome.addClass("intro"),$welcome.removeClass("fadeOut")):($welcome.removeClass("intro"),$welcome.addClass("fadeOut"))},{offset:"2%"});var $aboutSection=$("#about"),$mouse=$(".mouse");$mouse.addClass("fade-in"),$aboutSection.waypoint(function(e){"down"==e?($mouse.addClass("fade-out"),$mouse.removeClass("fade-in")):($mouse.removeClass("fade-in"),$mouse.removeClass("fade-out"))},{offset:"60%"});var $about=$(".about-section p"),$aboutTitle=$(".about-section-header"),$skillsTitle=$(".about-text__subtitle"),$skillsList=$(".skills-list ul");$about.waypoint(function(e){"down"==e?($about.addClass("fade-in"),$about.removeClass("fade-out"),$aboutTitle.addClass("slide-left"),$aboutTitle.removeClass("fade-out"),$skillsTitle.addClass("slide-left"),$skillsTitle.removeClass("fade-out"),$skillsList.addClass("fade-in"),$skillsList.removeClass("fade-out")):($about.removeClass("fade-in"),$about.addClass("fade-out"),$aboutTitle.addClass("fade-out"),$aboutTitle.removeClass("slide-left"),$skillsTitle.addClass("fade-out"),$skillsTitle.removeClass("slide-left"),$skillsList.addClass("fade-out"),$skillsList.removeClass("fade-in"))},{offset:"70%"});var $projectsTitle=$(".projects-section-header"),$projects=$(".projects-section p"),$gallery=$(".gallery");$projects.waypoint(function(e){"down"==e?($projects.addClass("fade-in"),$projects.removeClass("fade-out"),$projectsTitle.addClass("slide-left"),$projectsTitle.removeClass("fade-out"),$gallery.addClass("fade-in"),$gallery.removeClass("fade-out")):($projects.removeClass("fade-in"),$projects.addClass("fade-out"),$projectsTitle.addClass("fade-out"),$projectsTitle.removeClass("slide-left"),$gallery.removeClass("fade-in"),$gallery.addClass("fade-out"))},{offset:"70%"});var $contact=$(".contact-section p"),$contactTitle=$(".contact-section-header"),$emailBtn=$(".btn-contact"),$socialIcons=$(".social-icon");$contact.waypoint(function(e){"down"==e?($contact.addClass("fade-in"),$contact.removeClass("fade-out"),$contactTitle.addClass("slide-left"),$contactTitle.removeClass("fade-out"),$emailBtn.addClass("fade-in"),$emailBtn.removeClass("fade-out"),$socialIcons.addClass("fade-in"),$socialIcons.removeClass("fade-out")):($contact.removeClass("fade-in"),$contact.addClass("fade-out"),$contactTitle.addClass("fade-out"),$contactTitle.removeClass("slide-left"),$emailBtn.removeClass("fade-in"),$emailBtn.addClass("fade-out"),$socialIcons.removeClass("fade-in"),$socialIcons.addClass("fade-out"))},{offset:"80%"});