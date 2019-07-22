$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    autoplay: 2000,
    dots: true,
    // dotsEach: true,
    responsiveClass:true,
    // responsive: {
    //   0: {
    //     items: 1      },
    //   600: {
    //     items: 3      },
    //   1000: {
    //     items: 4      },
    //   1200: {
    //     items: 5      }
    // }
  });
  AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
});

function initialize() {
  var uluru = {lat: 49.597914, lng:8.474448}
  var mapOptions = {
    center: new google.maps.LatLng(49.597914,8.474448),
    zoom: 15
  }
  var map = new window.google.maps.Map(document.getElementById('map'), mapOptions)
  var marker = new window.google.maps.Marker({
    position: uluru, map: map, icon: '../img/Location.svg'
  })
} 

google.maps.event.addDomListener(window, "load", initialize)

$(document).on("click", ".navbar-toggler", function () {
  if($(this).hasClass("collapsed")) {
    
    $('.header').css('margin-top', '-100px')
    $('.header-comptetence').css('margin-top', '-100px')                p As project delivery methods have evolved, so has project leadership. Hybrid approaches have emerged, where traditional Waterfall project and program managers are now faced with the prospect of having a portion of their work use iterative Agile approaches. On the other side, Agile Scrum Masters and product managers executing rapid iterations of new products have to now contend with budgets, financial forecasts, release schedules and business case benefits, as well as with aligning implementation of products with other projects across the enterprise. 

    $('.pharma-section-1').css('margin-top', '-100px')
    $('#white-logo').attr('src', 'img/white-logo.png')
    $('.navbar').removeClass('bg-light')
  } else {
    $('.header').css('margin-top', '0')
    $('.header-comptetence').css('margin-top', '0')
    $('#white-logo').attr('src', 'img/ZPS-1.png')
    $('.navbar').addClass('bg-light')
    $('.navbar').addClass('navbar-light')
    $('.navbar').removeClass('navbar-dark')
    $('.pharma-section-1').css('margin-top', '0')
  }
  
})
$(document).on("click", ".tabs-title a", function (e) {
  e.preventDefault();
  $(this).closest('.tabs-title').find('a').removeClass('is-open')
  $(this).addClass('is-open')
  $(this).closest('.sliderOptions').find('.tabs-title').removeClass('is-open')
  $('.options-desc').removeClass('is-open')
  $(this).closest('.sliderOptions').find('.tabs-title' + $(this).attr('href')).addClass('is-open')
  $($(this).attr('href')).addClass('is-open')
})

$(document).on("click", ".tab-title", function(e) {
  e.preventDefault();
  $(this).closest('.tabs-title').find('span').removeClass('active-teams')
  $(this).find('span').addClass('active-teams')
})
