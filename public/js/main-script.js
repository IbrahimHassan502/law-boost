"use strict";
// ============ mobile menu functionality ============
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navMenu = document.querySelector(".nav-menu");

mobileMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("-translate-y-full");
  navMenu.classList.toggle("opacity-0");
});
// ============ statistics counting functinality ============
let e = 0;
$(window).scroll(function () {
  let countr = $("#counter");
  let oTop = $(countr).offset().top - window.innerHeight;
  if (e == 0 && $(window).scrollTop() >= oTop) {
    $(".count .counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(
                now
                  .toFixed(1)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            },
          }
        );
    });
    e = 1;
  }
});
// ============ why-we-are-bette phone animation ============
const fadeIns = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  [...fadeIns].forEach((fadeIn) => {
    const fadeInParentTop = fadeIn
      .closest(".fade-in-parent")
      .getBoundingClientRect().top;
    if (fadeInParentTop <= window.innerHeight * 0.8) {
      fadeIn.classList.remove("translate-y-full");
      fadeIn.classList.remove("opacity-0");
    }
  });
  console.log(fadeIns[0].getBoundingClientRect());
  console.log(window.innerHeight);
});

// ============ instution reivews owl carosuel ============
$(document).ready(function () {
  $(".instit-reviews").owlCarousel({
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2500,
    smartSpeed: 1500,
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

//============ reivews owl carosuel ============
$(document).ready(function () {
  $(".reviews").owlCarousel({
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2500,
    smartSpeed: 1500,
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
    autoplayHoverPause: true,
    autoplayTimeout: 2100,
    smartSpeed: 1500,
    margin: 30,
    center: false,
    loop: true,
    startPosition: -1,
    slideBy: -1,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 60 },
      1024: { items: 2, stagePadding: 60 },
    },
  });
});
// ============ faq functionality ============
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
