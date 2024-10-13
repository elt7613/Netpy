const image = document.querySelector('.section-7-gif');
const text = document.querySelector('.section-7-text-overlay');
const button = document.querySelector('.section-7-button');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const textHeight = text.getBoundingClientRect().top;
    const imgHeight = image.getBoundingClientRect().top;

    if (scrollTop > lastScrollTop) { 
        if (textHeight > imgHeight) {
            image.style.transform = 'translateX(-500px) translateY(-250px) scale(1)';
        }
        text.style.transform = 'translateY(-90px)';
        text.style.fontSize = '16px';
        button.style.transform = 'translateY(-50px)';
        button.style.fontSize = '20px';
    } 
    else{    
        image.style.transform = 'translateX(0) translateY(0) scale(1)';
        text.style.transform = 'translateY(0)';
        text.style.fontSize = '16px';
        button.style.transform = 'translateY(0)';
        button.style.fontSize = '12px';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});