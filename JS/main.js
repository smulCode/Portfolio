"use strict";
//hamburger-menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//navbar scroll events

const header = document.querySelector("header");
// const header = document.querySelector(".bar");
const navLogo = document.querySelector(".nav-logo");
const sectionOne = document.querySelector(".section-hero");

const faders = document.querySelectorAll(".fade-in");

const sectionOneOptions = {
  rootMargin: "-500px 0px 0px 0px",
};

const sectionOneObservers = new IntersectionObserver(function (
  entries,
  sectionOneObservers
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      navLogo.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
      navLogo.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObservers.observe(sectionOne);

//fade-in content
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px 300px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
