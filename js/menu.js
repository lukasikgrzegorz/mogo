const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".header__menu-button");
const closeBtn = document.querySelector(".mobile-menu__close-button");

const toggleMenu = () => {
	menu.classList.toggle("visible");
};

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
