var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: ".speakers-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-speakers-next",
    prevEl: ".swiper-speakers-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
    },
    631: {
      slidesPerView: 2,
    },
  },
});

const burger = document.querySelector(".burger");
const modal = document.querySelector("#header-modal");
const btnClose = document.querySelector(".close-btn");

const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
};

burger.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
