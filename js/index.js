"use-strict";
document.addEventListener("DOMContentLoaded", () => {
  const menuHandler = () => {
    const menu = document.querySelector(".sidemenu");
    const menuBtn = document.querySelector(".topbar__menu");
    const closeMenu = document.querySelector(".sidemenu__close-logo");
    const menuToggles = [menuBtn, closeMenu];

    menuToggles.forEach(el =>
      el.addEventListener("click", evt => {
        !menu.classList.contains("menu__active") ? menu.classList.toggle("menu__active") : menu.classList.toggle("menu__active");
      })
    );
    document.addEventListener("click", evt => {
      if (
        menu.classList.contains("menu__active") &&
        !evt.target.parentNode.className.includes("topbar") &&
        !evt.target.parentNode.className.includes("sidemenu")
      ) {
        menu.classList.toggle("menu__active");
        console.log(evt.target.parentNode.className);
      }
    });
  };

  const setViewHeight = () => {
    const body = document.querySelector(".landing");
    const sidemenu = document.querySelector(".sidemenu");

    if (window.location.href.includes("index")) {
      body.style.height = `${window.innerHeight - document.querySelector(".topbar").clientHeight}px`;
    }
    sidemenu.style.height = `${window.innerHeight}px`;
  };

  const scrollHandler = () => {
    const topbarLogo = document.querySelector(".topbar__logo");
    const topbarFullLogo = document.querySelector(".topbar p");
    // gallery variables
    if (window.location.href.includes("index")) {
      window.addEventListener("scroll", evt => {
        const gallery = document.querySelector(".project__gallery__img-container");
        const landingDescriptionPos = document.querySelector(".landing__description h2").offsetTop;
        const videoPos = document.querySelector(".project__video").offsetTop;
        let lastScroll = landingDescriptionPos;
        const movingGallery = (startToScrollPos, EndToScrollPos, galleryToMove) => {
          if (window.scrollY >= startToScrollPos && window.scrollY < EndToScrollPos) {
            const newScroll = window.scrollY;
            const galleryLeftPos = parseInt(getComputedStyle(galleryToMove).left, 10);
            if (newScroll > lastScroll && galleryLeftPos > -850) {
              galleryToMove.style.left = `${galleryLeftPos - 3}px`;
            } else if (newScroll < lastScroll && galleryLeftPos < 5) {
              galleryToMove.style.left = `${galleryLeftPos + 3}px`;
            }
            lastScroll = newScroll;
          }
        };
        movingGallery(landingDescriptionPos, videoPos, gallery);
        movingGallery(
          document.getElementById("time-is-now").offsetTop,
          document.querySelector("#chi-sono").offsetTop,
          document.querySelector("#trd-project .project__gallery__img-container")
        );
      });
    }

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
  };

  // Gallery: Image-slider
  const imageSlider = () => {
    const imgSlider = document.querySelector(".img-slider");
    const imgs = document.querySelectorAll(".single-project__body__img-container img");

    imgs.forEach(img =>
      img.addEventListener("click", evt => {
        imgSlider.classList.toggle("hidden");
        swipeJs();
      })
    );

    let immagini = [];
  };

  menuHandler();
  setViewHeight();
  scrollHandler();
  imageSlider();

  const swipeJs = () => {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };
});

//
