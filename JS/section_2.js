document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.section-2 .slider-container .slider');
    const slides = document.querySelectorAll('.section-2 .slider-container .slide');
    const prevBtn = document.querySelector('.section-2 .slider-container .prev');
    const nextBtn = document.querySelector('.section-2 .slider-container .next');
    let currentSlide = 0;
    const slideIntervalTime = 3000; // Time interval in milliseconds (3 seconds)
    let autoSlideInterval;

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

    // Add event listeners for buttons
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    // Add automatic slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start automatic sliding when page loads
    startAutoSlide();

    // Optional: Pause auto-slide on hover over the slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
            stopAutoSlide();
            startAutoSlide(); // Reset auto slide timer on manual navigation
        }
        if (e.key === 'ArrowRight') {
            goToNextSlide();
            stopAutoSlide();
            startAutoSlide(); // Reset auto slide timer on manual navigation
        }
    });

    // Optional: Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            goToNextSlide();
            stopAutoSlide();
            startAutoSlide(); // Reset auto slide timer on manual navigation
        }
        if (touchEndX - touchStartX > 50) {
            goToPrevSlide();
            stopAutoSlide();
            startAutoSlide(); // Reset auto slide timer on manual navigation
        }
    });
});
