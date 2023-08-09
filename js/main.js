let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let textMoon = document.querySelector(".textMoon");

window.onload = function () {
  if (screenY <= 0) {
    textMoon.style.display = "none";
  }
  if (scrollY > 0) {
    scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value * 1.1 + "px";
  boat.style.left = value * 4 + "px";
  boat.style.top = value * 0.6 + "px";
  textMoon.style.fontSize = value + "px";

  if (value >= 67) {
    textMoon.style.fontSize = 67 + "px";
    textMoon.style.position = "fixed";
    if (value > 402) {
      textMoon.style.display = "none";
    } else {
      textMoon.style.display = "block";
    }
  } else {
  }

  if (value >= 96) {
    document.querySelector(".main").style.background =
      "linear-gradient(to top, #200016, #225b84)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
  let hed = document.getElementById("hed");
  if (value > 600) {
    hed.classList.remove("header");
    hed.classList.add("headerAfter");
  } else {
    hed.classList.remove("headerAfter");
    hed.classList.add("header");
  }
};

////////

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();
