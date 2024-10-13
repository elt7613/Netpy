document.addEventListener('DOMContentLoaded', () => {
    const logoWrapper = document.querySelector('.section-5 .logo-wrapper');
    const logos = Array.from(logoWrapper.children);
    const totalLogosWidth = logos.reduce((acc, logo) => acc + logo.offsetWidth + 50, 0); // Total width of all logos + gaps
    let currentPosition = 0;
    let direction = 1; // 1 for left-to-right, -1 for right-to-left

    // Clone logos for continuous scrolling
    const clonedLogos = logos.map(logo => logo.cloneNode(true));
    clonedLogos.forEach(logo => logoWrapper.appendChild(logo)); // Append cloned logos for seamless effect

    function animateLogos() {
        currentPosition += direction * 0.5; // Adjust speed of movement here

        // Switch direction when logos reach the end of the viewport
        if (currentPosition >= totalLogosWidth) { // When it reaches the end
            currentPosition = 0; // Reset to start
            direction = -1; // Change direction to right-to-left
        } else if (currentPosition <= 0) { // When it reaches the start
            direction = 1; // Change direction to left-to-right
        }

        logoWrapper.style.transform = `translateX(${-currentPosition}px)`;

        requestAnimationFrame(animateLogos);
    }

    // Start the animation
    requestAnimationFrame(animateLogos);
});
