"use strict";

const carousel = document.querySelector(".carousel");
const navigator = document.querySelector(".navigator");

// Event handlers
carousel.addEventListener("click", (e) => {
  const clicked = e.target.closest(".img-box");

  // Guard Clause
  if (!clicked) return;

  const imgNum = clicked.dataset.num;

  document
    .querySelectorAll(".img-box")
    .forEach((box) => box.classList.remove("open"));
  clicked.classList.add("open");

  document
    .querySelectorAll(".dot")
    .forEach((box) => box.classList.remove("open"));
  document.querySelector(`.dot--${imgNum}`).classList.add("open");
});

navigator.addEventListener("click", (e) => {
  const clicked = e.target.closest(".dot");

  // Guard Clause
  if (!clicked) return;

  const imgNum = clicked.dataset.num;

  document
    .querySelectorAll(".img-box")
    .forEach((box) => box.classList.remove("open"));
  document.querySelector(`.img-box--${imgNum}`).classList.add("open");

  document
    .querySelectorAll(".dot")
    .forEach((box) => box.classList.remove("open"));
  clicked.classList.add("open");
});
