// 手刻 item-tag
// const scrollContainer = document.querySelector(".item-tag ul");

// if (scrollContainer) {
//     scrollContainer.addEventListener("wheel", (evt) => {
//         evt.preventDefault();
//         scrollContainer.scrollLeft += evt.deltaY;
//     });
// }

document.querySelector('[data-bs-toggle="modal"]').onclick = () => document.querySelector('.navbar-collapse').classList.remove("show");

let programSwiper = new Swiper(".programSwiper", {
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 17,
  centeredSlides: false,
  grabCursor: true,
  mousewheel: true,
  breakpoints: {
    320: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 16
    }
  }
});

let imageSwiper = new Swiper(".imageSwiper", {
  cssMode: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: true,
  disableOnInteraction: false,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".feedback-controller",
    bulletElement: 'a',
    clickable: true,
  },
});

let studentSwiper = new Swiper(".studentSwiper", {
  cssMode: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: true,
  disableOnInteraction: false,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".feedback-controller",
    bulletElement: 'a',
    clickable: true,
  },
});

let courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  grabCursor: true,
  mousewheel: true,
  breakpoints: {
    320: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 16
    }
  }
});