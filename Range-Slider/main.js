"use strict";

// Selecting individual elements
const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const thumb = document.querySelector(".slider-thumb");
const allNum = document.querySelectorAll(".num");
const ball = document.querySelector(".ball");

// Functions
const sliderFunc = (e) => {
  const maxVal = slider.getAttribute("max");
  const val = +slider.value;

  allNum.forEach((num, i) => {
    if (i * 10 <= val) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });

  ball.style.left = val + "%";

  progress.style.width = val + "%";
  thumb.style.left = val + "%";
};

// Event listeners
slider.addEventListener("input", sliderFunc);
