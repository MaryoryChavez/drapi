const slidebody = document.querySelector('#slider-header');

function sliderMotor() {
    let slides = document.querySelectorAll(".slider > .slider-item");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 4000);

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slider-item';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slider-item slider-item--current';
    }
    var prev = document.querySelector('.controls-btn--prev'),
        next = document.querySelector('.controls-btn--next');
    next.onclick = function () {
        nextSlide();
    }
    prev.onclick = function () {
        prevSlide();
    }
}

if (typeof (slidebody) != 'undefined' && slidebody != null) {
    sliderMotor();
} else {
    console.log('no-slider');
}

document.querySelector('#menu-button').addEventListener('click', function () {
    const menu = document.querySelector('#menu-lateral');
    menu.classList.remove('closeMenu');
    menu.classList.add('openMenu');
});

document.querySelector('#back').addEventListener('click', function () {
    const menu = document.querySelector('#menu-lateral');
    menu.classList.remove('openMenu');
});