window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav"),
    menuItem = document.querySelectorAll(".nav-li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    menu.classList.toggle("nav-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      menu.classList.toggle("nav-active");
    });
  });
});
