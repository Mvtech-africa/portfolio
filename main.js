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




















  //  number count

  const counters = document.querySelectorAll('.counter');

function animateCount(element, target, duration) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentNumber = Math.floor(progress * target);
    element.textContent = currentNumber.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString(); // ensure final value
    }
  }

  requestAnimationFrame(update);
}

// Intersection Observer to trigger all counters at once
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => {
        const targetNumber = parseInt(counter.dataset.target, 10);
        animateCount(counter, targetNumber, 1000); // 3 seconds animation
      });
      obs.unobserve(entry.target); // Stop observing after trigger
    }
  });
}, { threshold: 1.0 });

counters.forEach(counter => observer.observe(counter));




















//  circel pointer on projectd



const currentCircle = null;

  function showCircle(e) {
    const project = e.currentTarget;
    project.classList.add('hover');
    moveCircle(e);
  }

  function moveCircle(e) {
    const project = e.currentTarget;
    const circle = project.querySelector('.circle');
    const rect = project.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position the circle centered on cursor
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  }

  function hideCircle(e) {
    const project = e.currentTarget;
    project.classList.remove('hover');
  }








  // ------------------- faq code--------------------

    
  function toggleDropdown(menuId) {  
    const menu = document.getElementById(menuId);  
    const angleIcon = document.getElementById(`angle${menuId.charAt(menuId.length - 1)}`);  
    
    if (menu.style.display === "block") {  
        menu.style.display = "none";  
        angleIcon.style.transform = "rotate(0deg)";  
    } else {  
        menu.style.display = "block";  
        angleIcon.style.transform = "rotate(-180deg)";  
    }  
  }

















  