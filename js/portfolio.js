$(document).ready()

$(function() {
$(document).scroll(function() {
  var distancefromtop = $(this).scrollTop();
  if (distancefromtop > $(window).height()*0.4) {
    $('.about-myself').fadeTo( 1000, 1 );
  } else {
    $('.about-myself').fadeTo( 1000, 0 );
  }
});
});

/*
$(function() {
$(document).scroll(function() {
  var distancefromtop = $(this).scrollTop();
  if (distancefromtop > $(window).height()*2.6) {
    $('.rig').animate({ opacity: 1 })
  } else {
    $('rig').animate({ opacity: 0 })
  }
});
});
});
