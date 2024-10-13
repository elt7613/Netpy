document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.section-2 .slider-container .slider');
    const slides = document.querySelectorAll('.section-2 .slider-container .slide');
    const prevBtn = document.querySelector('.section-2 .slider-container .prev');
    const nextBtn = document.querySelector('.section-2 .slider-container .next');
    let currentSlide = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSliderPosition();
    }

    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSliderPosition();
    }

    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToPrevSlide();
        if (e.key === 'ArrowRight') goToNextSlide();
    });

    // Optional: Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) goToNextSlide();
        if (touchEndX - touchStartX > 50) goToPrevSlide();
    });
});