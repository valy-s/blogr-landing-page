const menu = document.querySelector(".menu-icons");
const menuImgs = document.querySelectorAll(".menu-icons img");
const mobileMenu = document.querySelector(".nav-links");

const subMenu = document.getElementById("connect");
const subMenuLinks = document.querySelector(".sub-menu");

function toggleMenu(x, y) {
  x.forEach((img) => {
    img.classList.toggle("hide");
  });
  y.classList.toggle("hide");
}

menu.addEventListener("click", () => {
  toggleMenu(menuImgs, mobileMenu);
});

subMenu.addEventListener("click", () => {
  subMenuLinks.classList.toggle("hide");
  if (subMenu.classList.contains("fa-angle-down")) {
    subMenu.classList.remove("fa-angle-down");
    subMenu.classList.add("fa-angle-up");
  } else {
    subMenu.classList.remove("fa-angle-up");
    subMenu.classList.add("fa-angle-down");
  }
});

const hero = document.querySelector(".hero");
const nav = document.querySelector("header");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px 0px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
appearOptions);

appearOnScroll.observe(hero);
