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
  $(".instit-reviews").owlCarousel({
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 2500,
    margin: 30,
    center: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
});

//reivews owl carosuel
$(document).ready(function () {
  $(".reviews").owlCarousel({
    nav: false,
    // autoplay: true,
    // autoplayTimeout: 2500,
    margin: 30,
    center: true,
    loop: false,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
    },
  });
  $(".reviews-2").owlCarousel({
    rtl: true,
    nav: false,
    // autoplay: true,
    // autoplayTimeout: 2500,
    margin: 30,
    center: true,
    loop: false,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
    },
  });
});
