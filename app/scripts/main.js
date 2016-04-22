'use strict';

console.log('\'Allo \'Allo!');

// http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.old-piano-slider').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

  $('.navbar').affix({
    offset: {
      top: function () {
        return (this.top = $('.hero_container').outerHeight(true))
      }
    }
  })



}); // $(document).ready
