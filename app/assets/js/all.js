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


// reserve page 跳轉
let currentStep = 1;
function goStep1() {
  Array.from(document.querySelectorAll('[id^="reserve"]')).forEach(item => {
    item.classList.add('d-none');
  });
  document.querySelector('#reserveInfo').classList.remove('d-none');

  Array.from(document.querySelectorAll('[id^="steps-item"]')).forEach(item => {
    item.classList.remove('active', 'completed');
  });
  document.querySelector('#steps-item1').classList.add('active');
}

function goStep2() {
  Array.from(document.querySelectorAll('[id^="reserve"]')).forEach(item => {
    item.classList.add('d-none');
  });
  document.querySelector('#reservePay').classList.remove('d-none');

  Array.from(document.querySelectorAll('[id^="steps-item"]')).forEach(item => {
    item.classList.remove('active', 'completed');
  });
  document.querySelector('#steps-item1').classList.add('completed');
  document.querySelector('#steps-item2').classList.add('active');
}

function goStep3() {
  Array.from(document.querySelectorAll('[id^="reserve"]')).forEach(item => {
    item.classList.add('d-none');
  });
  document.querySelector('#reserveMessage').classList.remove('d-none');

  Array.from(document.querySelectorAll('[id^="steps-item"]')).forEach(item => {
    item.classList.remove('active', 'completed');
  });

  document.querySelector('#steps-item1').classList.add('completed');
  document.querySelector('#steps-item2').classList.add('completed');
  document.querySelector('#steps-item3').classList.add('active');
}