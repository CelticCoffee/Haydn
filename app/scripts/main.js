'use strict';

console.log('\'Allo \'Allo!');

// http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.old-piano-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    autoplay: true
  });

  $('.typography-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true
  });

  $('.studioPics').slick({
    autoplay: true
  });

  $('.bigMap-slideshow').slick({
      infinite: true,
      autoplay: true
    });

  $('.sprayFade').slick({
    nfinite: true,
    autoplay: true
    });

  $('.photB').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: true
  });

});
