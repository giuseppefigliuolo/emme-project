// "use-strict";
// document.addEventListener("DOMContentLoaded", () => {
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
    console.log("ciao");
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
if (
  window.location.href.includes("lukania.html") ||
  window.location.href.includes("time-is-now.html") ||
  window.location.href.includes("progetto-3.html")
) {
  const imageSlider = () => {
    const imgSlider = document.querySelector(".img-slider");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const imgs = document.querySelectorAll(".single-project__body__img-container img");

    // toggle handler for gallery to appear
    imgSlider.addEventListener("click", evt => {
      if (evt.target === imgSlider) {
        imgSlider.classList.toggle("hidden");
      }
    });

    imgs.forEach(el =>
      el.addEventListener("click", evt => {
        imgSlider.classList.toggle("hidden");
        slideNum = evt.target.src.replace("http://127.0.0.1:5500/dist/img/", "").match(/\d+/)[0];
        swipeJs();
        console.log(slideNum);
        return slideNum;
      })
    );
  };
  imageSlider();
}

menuHandler();
setViewHeight();
scrollHandler();

let slideNum;
const swipeJs = () => {
  var mySwiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  mySwiper.slideTo(`${slideNum - 1}`, false, false);
};
// });

//
