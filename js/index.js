"use-strict";
document.addEventListener("DOMContentLoaded", () => {
  const menuHandler = () => {
    const menu = document.querySelector(".sidemenu");
    const menuBtn = document.querySelector(".topbar__menu");
    const closeMenu = document.querySelector(".sidemenu__close-logo");
    const menuToggles = [menuBtn, closeMenu];

    menuToggles.forEach(el =>
      el.addEventListener("click", evt => {
        !menu.classList.contains("menu__active") ? menu.classList.add("menu__active") : menu.classList.remove("menu__active");
      })
    );
  };

  const setViewHeight = () => {
    const body = document.querySelector("body");
    body.style.height = window.innerHeight;
  };
  menuHandler();
  setViewHeight();
});

//
