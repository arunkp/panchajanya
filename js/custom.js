$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: false,
      navigation: false,
      autoPlay : true,
      transitionStyle : "fade"

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});