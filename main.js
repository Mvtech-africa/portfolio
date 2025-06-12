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