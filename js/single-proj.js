"use-strict";
document.addEventListener("DOMContentLoaded", () => {
  const setViewHeight = () => {
    const body = document.querySelector(".landing");
    const sidemenu = document.querySelector(".sidemenu");

    // body.style.height = `${window.innerHeight - document.querySelector(".topbar").clientHeight}px`;
    sidemenu.style.height = `${window.innerHeight}px`;
  };

  const topbarLogo = document.querySelector(".topbar__logo");
  const topbarFullLogo = document.querySelector(".topbar p");
  window.addEventListener("scroll", evt => {
    const logoSwitch = () => {
      if (window.scrollY !== 0) {
        topbarLogo.classList.add("hidden");
        topbarFullLogo.classList.remove("hidden");
      } else {
        topbarLogo.classList.remove("hidden");
        topbarFullLogo.classList.add("hidden");
      }
    };
    logoSwitch();
  });

  const imageSlider = () => {
    const imgs = document.querySelectorAll(".single-project__body__img-container img");
    imgs.forEach(el => console.log(el));
  };
  imageSlider();
  setViewHeight();
});
