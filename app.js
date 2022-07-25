// //setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

//setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navAHrefClose = document.getElementById("href-close");

//show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

//close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

navAHrefClose.addEventListener("click", function () {
  navbar.classList.remove("showNav");
});

//smooth scrolling
