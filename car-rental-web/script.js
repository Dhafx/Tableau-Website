const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => navbar.classList.toggle("sticky", window.scrollY > 0));

const menu = document.querySelector(".menu");
const toogleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toogleMenu);
document.querySelector(".close-btn").addEventListener("click", toogleMenu);

document.querySelectorAll(".menu a").forEach((link) => link.addEventListener("click", toogleMenu));
