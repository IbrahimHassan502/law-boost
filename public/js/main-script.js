"use strict";
// mobile menu functionality
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navMenu = document.querySelector(".nav-menu");

mobileMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("-translate-y-full");
  navMenu.classList.toggle("opacity-0");
});
// instution reivews owl carosuel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    margin: 30,
    center: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
});
