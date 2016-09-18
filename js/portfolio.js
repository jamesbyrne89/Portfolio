$(document).ready();

$("img.lazy").lazyload();

// ABOUT ME SECTION //

var $about = $('#about p');

 $about.waypoint(function(direction){
 	if (direction == 'down'){
$about.addClass('intro');
$about.removeClass('fadeOut');
} else {
	$about.removeClass('intro');
	$about.addClass('fadeOut');
}
 }, {offset: '70%'});


// SKILLS SECTION //

 var $skillstitle = $('.skillstitle');

 $skillstitle.waypoint(function(direction){
 	if (direction == 'down'){
$skillstitle.addClass('animated fadeIn');
$skillstitle.removeClass('fadeOut');
} else {
	$skillstitle.removeClass('fadeIn');
	$skillstitle.addClass('fadeOut');
}
 }, {offset: '70%'});


var $listItemOne = $('#list-item-1');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemOne.addClass('sideintro', 'delayed-text-1')
$listItemOne.removeClass('animated fadeOut')
} else {
$listItemOne.removeClass('sideintro', 'delayed-text-1')
$listItemOne.addClass('animated fadeOut')
}
 }, {offset: '60%'});


 var $listItemTwo = $('#list-item-2');

 $skillstitle.waypoint(function(direction){
 	if (direction == 'down'){
$listItemTwo.addClass('sideintro', 'delayed-text-2')
$listItemTwo.removeClass('animated fadeOut')
 } else {
 	$listItemTwo.removeClass('sideintro', 'delayed-text-2')
$listItemTwo.addClass('animated fadeOut')
}
}, {offset: '60%'});


 var $listItemThree = $('#list-item-3');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemThree.addClass('sideintro', 'delayed-text-3');
$listItemThree.removeClass('animated fadeOut')
 } else {
 	$listItemThree.removeClass('sideintro', 'delayed-text-3')
$listItemThree.addClass('animated fadeOut')
}
}, {offset: '60%'});

 var $listItemFour = $('#list-item-4');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemFour.addClass('sideintro', 'delayed-text-4');
$listItemFour.removeClass('animated fadeOut')
 } else {
 	$listItemFour.removeClass('sideintro', 'delayed-text-4')
$listItemFour.addClass('animated fadeOut')
}
}, {offset: '60%'});

 var $listItemFive = $('#list-item-5');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemFive.addClass('animated bounceInRight', 'delayed-text-5');
$listItemFive.css('opacity' , 1);
 } else {
 	$listItemFive.removeClass('animated bounceInRight', 'delayed-text-5')
$listItemFive.css('opacity' , 0);
}
}, {offset: '60%'});


var $listItemSix = $('#list-item-6');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemSix.addClass('animated bounceInRight', 'delayed-text-6');
$listItemSix.css('opacity' , 1);
 } else {
 	$listItemSix.removeClass('bounceInRight', 'delayed-text-6')
$listItemSix.css('opacity' , 0);
}
}, {offset: '60%'});


  var $listItemSeven = $('#list-item-7');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemSeven.addClass('animated bounceInRight', 'delayed-text-7');
$listItemSeven.css('opacity' , 1);
 } else {
 	$listItemSeven.removeClass('bounceInRight', 'delayed-text-7')
$listItemSeven.css('opacity' , 0);
}
}, {offset: '60%'});

var $listItemEight = $('#list-item-8');

 $skillstitle.waypoint(function(direction){
 		if (direction == 'down'){
$listItemEight.addClass('animated bounceInRight', 'delayed-text-8');
$listItemEight.css('opacity' , 1);
 } else {
 	$listItemEight.removeClass('bounceInRight', 'delayed-text-8')
$listItemEight.css('opacity' , 0);
}
}, {offset: '60%'});


//PROJECTS SECTION //

 var $projectsGrid = $('#rig');

 $projectsGrid.waypoint(function(direction){
 		if (direction == 'down'){
$projectsGrid.addClass('intro');
 	$projectsGrid.removeClass('animated fadeOut')
$projectsGrid.css('opacity' , 1);
 } else {
 	$projectsGrid.addClass('animated fadeOut')
$projectsGrid.css('opacity' , 0);
}
}, {offset: '60%'});

// CONTACT SECTION //

 var $contactMe = $('#contact-left');

 $contactMe.waypoint(function(direction){
 		if (direction == 'down'){
$contactMe.addClass('animated bounceInLeft slow');
$contactMe.css('opacity' , 1);
 } else {
 	$contactMe.removeClass('bounceInLeft')
$contactMe.css('opacity' , 0);
}
}, {offset: '60%'});


var $emailBtn = $('#contactbutton');

 $emailBtn.waypoint(function(direction){
 		if (direction == 'down'){
$emailBtn.addClass('animated bounceInRight slow');
$emailBtn.css('opacity' , 1);
 } else {
 	$emailBtn.removeClass('bounceInRight')
$emailBtn.css('opacity' , 0);
}
}, {offset: '60%'});


var $socialOne = $('.fa-twitter');

 $socialOne.waypoint(function(direction){
 		if (direction == 'down'){
$socialOne.addClass('animated bounceInRight', 'delayed-text-1')
$socialOne.css('opacity' , 1);
} else {
$socialOne.removeClass('animated bounceInRight', 'delayed-text-1')
$socialOne.css('opacity' , 0);
}
 }, {offset: '70%'});


var $socialOne = $('.fa-twitter');

 $socialOne.waypoint(function(direction){
 		if (direction == 'down'){
$socialOne.addClass('animated bounceInRight', 'delayed-text-1')
$socialOne.css('opacity' , 1);
} else {
$socialOne.removeClass('animated bounceInRight', 'delayed-text-1')
$socialOne.css('opacity' , 0);
}
 }, {offset: '70%'});

var $socialTwo = $('.fa-instagram');

 $socialTwo.waypoint(function(direction){
 		if (direction == 'down'){
$socialTwo.addClass('animated bounceInRight', 'delayed-text-2')
$socialTwo.css('opacity' , 1);
} else {
$socialTwo.removeClass('animated bounceInRight', 'delayed-text-2')
$socialTwo.css('opacity' , 0);
}
 }, {offset: '70%'});

var $socialThree = $('.fa-flickr');

 $socialThree.waypoint(function(direction){
 		if (direction == 'down'){
$socialThree.addClass('animated bounceInRight', 'delayed-text-3')
$socialThree.css('opacity' , 1);
} else {
$socialThree.removeClass('animated bounceInRight', 'delayed-text-3')
$socialThree.css('opacity' , 0);
}
 }, {offset: '70%'});

var $socialFour = $('.fa-linkedin-square');

 $socialThree.waypoint(function(direction){
 		if (direction == 'down'){
$socialFour.addClass('animated bounceInRight', 'delayed-text-4')
$socialFour.css('opacity' , 1);
} else {
$socialFour.removeClass('animated bounceInRight', 'delayed-text-4')
$socialFour.css('opacity' , 0);
}
 }, {offset: '70%'});

var $socialFive = $('.fa-github');

 $socialFive.waypoint(function(direction){
 		if (direction == 'down'){
$socialFive.addClass('animated bounceInRight', 'delayed-text-5')
$socialFive.css('opacity' , 1);
} else {
$socialFive.removeClass('animated bounceInRight', 'delayed-text-5')
$socialFive.css('opacity' , 0);
}
 }, {offset: '70%'});

