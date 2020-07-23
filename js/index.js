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
    const body = document.querySelector(".landing");
    const sidemenu = document.querySelector(".sidemenu");

    // console.log(`${window.innerHeight - document.querySelector(".topbar").clientHeight}px`);
    body.style.height = `${window.innerHeight - document.querySelector(".topbar").clientHeight}px`;
    sidemenu.style.height = `${window.innerHeight}px`;
  };

  const scrollHandler = () => {
    const topbarLogo = document.querySelector(".topbar__logo");
    const topbarFullLogo = document.querySelector(".topbar p");
    // gallery variables
    const gallery = document.querySelector(".project__gallery__img-container");
    const landingDescriptionPos = document.querySelector(".landing__description h2").offsetTop;
    const videoPos = document.querySelector(".project__video").offsetTop;
    let lastScroll = landingDescriptionPos;

    window.addEventListener("scroll", evt => {
      if (window.scrollY !== 0) {
        topbarLogo.classList.add("hidden");
        topbarFullLogo.classList.remove("hidden");
      } else {
        topbarLogo.classList.remove("hidden");
        topbarFullLogo.classList.add("hidden");
      }
      // Gallery-scroll handler
      if (window.scrollY >= landingDescriptionPos && window.scrollY < videoPos) {
        const newScroll = window.scrollY;
        const style = getComputedStyle(gallery);
        const galleryLeftPos = parseInt(style.left, 10);
        if (newScroll > lastScroll) {
          gallery.style.left = `${galleryLeftPos - 3}px`;
        } else {
          gallery.style.left = `${galleryLeftPos + 3}px`;
        }
        lastScroll = newScroll;
      }
    });
  };

  menuHandler();
  setViewHeight();
  scrollHandler();
});

//
