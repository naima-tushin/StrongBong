document.addEventListener("scroll", (event) => {
    let lastKnownScrollPosition = window.scrollY;
    let headerEl = document.querySelector('.custom-header-outer');
    if(lastKnownScrollPosition > headerEl.offsetHeight){
        headerEl.classList.add('sticky-header')
    }else{
        headerEl.classList.remove('sticky-header')
    }
});

$('.home-blog-sec').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
  })

  $('.gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    focusOnSelect: true,
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

      $('.video-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'iframe',
        // other options
           gallery:{
          enabled:true
        }
      });

  })

  document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});