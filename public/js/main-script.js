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
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 30,
    center: false,
    loop: true,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 60 },
      1024: { items: 2, stagePadding: 120 },
    },
  });
});

//reivews owl carosuel
$(document).ready(function () {
  $(".reviews").owlCarousel({
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 30,
    center: false,
    loop: true,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 60 },
      1024: { items: 2, stagePadding: 60 },
    },
  });
  $(".reviews-2").owlCarousel({
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 30,
    center: false,
    loop: true,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 60 },
      1024: { items: 2, stagePadding: 60 },
    },
  });
});
// ========= faq functionality
const faqContainer = document.querySelector(".faq-container");
faqContainer.addEventListener("click", (e) => {
  const faqBox = e.target.closest(".faq-box");
  const answerBox = faqBox.querySelector(".answer-box");
  const answerBoxHeight = answerBox.querySelector(".answer-box p").offsetHeight;

  faqBox.classList.toggle("answer-showed");
  answerBox.classList.toggle("opacity-0");
  answerBox.classList.remove("h-0");
  if (faqBox.classList.contains("answer-showed")) {
    answerBox.style.height = `${answerBoxHeight}px`;
  } else {
    answerBox.style.height = `0`;
  }
});
