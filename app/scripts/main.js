'use strict';

console.log('\'Allo \'Allo!');

// http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.old-piano-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

  $('.typography-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  $('.studioPics').slick({
    })

  $('.bigMap-slideshow').slick({
      autoplay: true
    });

  $('.sprayFade').slick({
    });

  $('.photB').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 4
  });

});
