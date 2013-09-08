jQuery(document).ready(function ($) {

  // cache some variables
  var links = $('.navigation').find('li'),
      slide = $('.slide'),
      button = $('.button'),
      mywindow = $(window),
      htmlbody = $('html,body');

  // parallax these element's `background-image`
  slide.each(function() {
    // if the element has a `background-image`
    if ( $(this).css('background-image') != 'none' ) {
      // and a `data-stellar-background-ratio` has not been defined
      if ( !( $(this).data('stellar-background-ratio') ) ) {
        // apply a default `data-stellar-background-ratio`
        $(this).attr('data-stellar-background-ratio', '0.5');
      }
    }
  });

  // init stellar
  $(window).stellar();

  slide.waypoint(function (event, direction) {

    dataslide = $(this).attr('data-slide');

    if (direction === 'down') {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    }
    else {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }

  });

  mywindow.scroll(function () {
    if (mywindow.scrollTop() === 0) {
      $('.navigation li[data-slide="1"]').addClass('active');
      $('.navigation li[data-slide="2"]').removeClass('active');
    }
  });

  function goToByScroll(dataslide) {

    var currentPosition = -1*($('html').offset().top);
    var clickedPosition = $('.slide[data-slide="' + dataslide + '"]').offset().top + 20;

      if ( clickedPosition>currentPosition ) {
        htmlbody.stop().animate ( {
        scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 20
        }, 2000, 'easeInOutQuint');
      } else {
        console.log("up");
        htmlbody.animate ( {
        scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
      }, 2000, 'easeInOutQuint'); 
    }
  }

  links.on("click", function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

  button.on("click", function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

});