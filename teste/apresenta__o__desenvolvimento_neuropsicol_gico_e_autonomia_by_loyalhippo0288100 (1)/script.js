let currentSlideIndex = 1;
const totalSlides = 6;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideNumber = document.getElementById('slide-number');

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');    

    if (n > totalSlides) currentSlideIndex = totalSlides;
    if (n < 1) currentSlideIndex = 1;

    slides.forEach(slide => slide.classList.remove('current-slide'));
    slides[currentSlideIndex - 1].classList.add('current-slide');

    slideNumber.textContent = `${currentSlideIndex} / ${totalSlides}`;
    prevBtn.disabled = currentSlideIndex === 1;
    nextBtn.disabled = currentSlideIndex === totalSlides;
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

showSlide(currentSlideIndex);