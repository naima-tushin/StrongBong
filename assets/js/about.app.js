document.addEventListener("scroll", (event) => {
    let lastKnownScrollPosition = window.scrollY;
    let headerEl = document.querySelector('.custom-header-outer');
    if(lastKnownScrollPosition > headerEl.offsetHeight){
        headerEl.classList.add('sticky-header')
    }else{
        headerEl.classList.remove('sticky-header')
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:6,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:6,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$(document).ready(function () {

    //home filter isotop
    $('.home-filter-sec').isotope({
      itemSelector: '.gallery_product',
      layoutMode: 'fitRows'
    });
  
    $('.link_box .filter-button').click(function () {
      //ACTIVE CLASS
      $('.link_box .filter-button').removeClass('active');
      $(this).addClass('active');
  
      var selector = $(this).attr('data-filter');
      $('.home-filter-sec').isotope({
        filter: selector
      });
      return false;
    })
//slick carousel
$('.testmonia-image-sec').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    asNavFor: '.feedback-content-sec'
  });
  $('.feedback-content-sec').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testmonia-image-sec',
    // dots: true,
    // focusOnSelect: true
  });
})

document.querySelector('.video-closing-btn').addEventListener('click', function(e){
    const video = document.getElementById('about-us-video');
    video.pause();
})




document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});