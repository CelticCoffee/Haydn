use strict;

console.log('\'Allo \'Allo!');


// http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.old-piano-slider').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });
});
