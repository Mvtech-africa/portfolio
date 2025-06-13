const menuToggle = document.getElementById("menu-toggle");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const popupMenu = document.getElementById("menu");


menuToggle.addEventListener("click", () => {
  toggleMenu();
});



function toggleMenu () {

 

  if (popupMenu.classList.contains("open")) {
    popupMenu.classList.remove("open");
    openIcon.classList.add("visible");
    closeIcon.classList.remove("visible");
  } else {
    popupMenu.classList.add("open");
    openIcon.classList.remove("visible");
    closeIcon.classList.add("visible");
  }

  
}












//  mobile screen carousel



 const images = [
    'b4.jpg',
    'b4.jpg',
    'b4.jpg',
    'b4.jpg',
    'b4.jpg'
  ];

  const track = document.getElementById('track');
  const slideWidth = 310; // 270 + 2*20 margin
  let position = 0;
  const slides = [];

  // Create slides
  images.forEach((src) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');
    img.src = src;
    slide.appendChild(img);
    track.appendChild(slide);
    slides.push(slide);
  });

  function updateClasses() {
    slides.forEach(slide => slide.className = 'slide');
    if (slides[position]) slides[position].classList.add('slide', 'active');
    if (slides[position - 1]) slides[position - 1].classList.add('slide', 'prev');
    if (slides[position + 1]) slides[position + 1].classList.add('slide', 'next');
  }

  function updatePosition() {
    track.style.transform = `translateX(calc(50% - ${position * slideWidth + slideWidth / 2}px))`;
    updateClasses();
  }

  function nextSlide() {
    position = (position + 1) % images.length;
    updatePosition();
  }

  let autoSlide = setInterval(nextSlide, 3000);

  updatePosition();