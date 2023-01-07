const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".header__menu-button");

const toggleMenu = () => {
	menu.classList.toggle("visible");
};

openBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
