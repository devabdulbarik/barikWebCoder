
$(document).ready(function() {

    $('.track__content-area').waypoint(function(direction) {
        if(direction == "down" && screen.width>900) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    }, {offset: "15%;"});
});

// $(document).ready( function() {
//     /* Check width on page load*/
//     if ( $(window).width() < 900) {
//      $('nav').removeClass('sticky');
//     }
//     else {}
//  });

//  $(window).resize(function() {
//     /*If browser resized, check width again */
//     if ($(window).width() < 900) {
//      $('nav').removeClass('sticky');
//     }
//     else {$('nav').removeClass('sticky');}
//  });
/*
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
    }
  })


  screen.width < 960
  */