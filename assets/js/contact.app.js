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
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});