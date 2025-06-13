const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
  if (index >= 0 && index < slideCount) {
    slides.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
  }
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
  if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
});
