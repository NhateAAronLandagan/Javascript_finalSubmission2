// Nav toggle menu
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeBtn = document.querySelector("#close-menu-btn");

hamburgerBtn.addEventListener('click', () => header.classList.toggle("show-mobile-menu"));
closeBtn.addEventListener('click', () => hamburgerBtn.click());

// Nav color changing
const header2 = document.querySelector("header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header2.classList.add("scrolled");
    } else {
        header2.classList.remove("scrolled");
    }
});

// Dark-light mode toggle
const toggleButton = document.querySelector('.switch-input');

toggleButton.addEventListener('change', () => {
  document.body.classList.toggle("dark",toggleButton.checked)
});


const swiperHome = new Swiper('.homeSwiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
  autoplay: {
    delay: 900,
  }
});
