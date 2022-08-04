$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 7,
    loop: true,
    margin: 5,
    freeDrag: true,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 7,
        nav: false,
      },
    },
  });
});

// init Isotope
var $grid = $(".item-details").isotope({
  // options
});
// filter items on button click
$(".item-menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue,  layoutMode: 'fitRows' });
});
