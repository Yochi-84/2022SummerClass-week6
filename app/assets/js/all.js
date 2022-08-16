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

let studentSwiper = new Swiper(".studentSwiper", {
  slidesPerView: 'auto',
});
let commentSwiper = new Swiper(".commentSwiper", {
  slidesPerView: 'auto',
});
let imageSwiper = new Swiper(".imageSwiper", {
  controller: {
    control: [studentSwiper, commentSwiper],
    by: 'container'
  },
  cssMode: true,
  slidesPerView: 'auto',
  rewind: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
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