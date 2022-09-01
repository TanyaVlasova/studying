const slider = document.querySelector('.slider');
let activeSlide = null;
slider.addEventListener('click', showSlide);

function showSlide(event) {
    const slide = event.target.closest('.slide');
    if (!slide) return;
    if (activeSlide) {
        activeSlide.classList.remove('active');
    }
    activeSlide = slide;
    activeSlide.classList.add('active');
}