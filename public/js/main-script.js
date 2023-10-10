"use strict";
// mobile menu functionality
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navMenu = document.querySelector(".nav-menu");

mobileMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("-translate-y-full");
  navMenu.classList.toggle("opacity-0");
});
