"use strict";

const btn = document.querySelector(".btn-nav");
const nav = document.querySelector(".nav");
const navIcon = document.querySelector(".btn-nav-icon");
const navList = document.querySelector(".nav-list");

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-fade-in");
  navList.classList.toggle("nav-list-fade-in");
  navIcon.classList.toggle("nav-icon-clicked");
});
