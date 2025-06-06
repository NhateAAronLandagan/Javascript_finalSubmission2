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

// Form Validation
const contactInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const contactButton = document.querySelector('.contact-button');
const userMessage = document.getElementById('message');

function isValidName (name) {
  const namePattern = /^[a-zA-Z\s]+$/ //Name regex
  return namePattern.test(name);
}

function isValidEmail (email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Email regex
  return emailPattern.test(email);
}

contactButton.addEventListener ('click', function () {
  const username = contactInput.value.trim();
  const email = emailInput.value.trim();

  if (username === '') {
    userMessage.textContent = 'Name required! Please fill the form.'
  } else if (email === '') {
    userMessage.textContent = 'Email required! Please fill the form.'
  }
  else if (!isValidName(username)) {
    userMessage.textContent = 'Invalid input. Please fill the form properly.'
  } else if (!isValidEmail(email)) {
    userMessage.textContent = 'Invalid email format.'
  } else {
    userMessage.textContent = `Hello, ${username} Thank you for subscribing!`
    userMessage.style.color='darkgreen';
  }
});

// Alert button
const customizeButton = document.querySelector('.customize-button');

customizeButton.addEventListener('click', function () {
  alert('Car Configuration Page coming soon!')
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
