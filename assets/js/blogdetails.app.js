document.addEventListener("scroll", (event) => {
    let lastKnownScrollPosition = window.scrollY;
    let headerEl = document.querySelector('.custom-header-outer');
    if(lastKnownScrollPosition > headerEl.offsetHeight){
        headerEl.classList.add('sticky-header')
    }else{
        headerEl.classList.remove('sticky-header')
    }
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});