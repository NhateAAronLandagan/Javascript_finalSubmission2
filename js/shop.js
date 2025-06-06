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

// Alert for buy button
// const buyButton = document.getElementById('buyButton')

// buyButton.addEventListener('click', function() {
//   alert('Order placed successfully');
// });

// Dark-light mode toggle
const toggleButton = document.querySelector('.switch-input');

toggleButton.addEventListener('change', () => {
  document.body.classList.toggle("dark",toggleButton.checked)
}); 

// Increment & Decrement Quantity counter
const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');
const counterInput = document.getElementById('counter');
const buyButton = document.getElementById('buyButton')
const cartButton = document.getElementById('cartButton');
const text = document.getElementById('text');

let counter = 0;


decrementButton.addEventListener('click', function () {
  counter -= 1;
  counterInput.textContent = counter;
});

incrementButton.addEventListener('click', function () {
  counter += 1;
  counterInput.textContent = counter;
});

buyButton.addEventListener('click', function() {
  if (counter === 0) {
    alert('Invalid Order, Please input quantity!')
  } else if (counter <= -1) {
    alert('Invalid Parameters. Please try again!')
  } else {
    alert('Order Placed successfully!')
  }
});


  // Conditions 
cartButton.addEventListener('click', function () {
  if (counter === 0) {
    alert('Cannot add to cart, Please input quantity!');

  } else if (counter <= -1) {
    alert('Add to cart failed, Invalid Parameters.');

  } else {
  const paragraphText = document.createElement('p');
  paragraphText.textContent = 'Added to cart successfully!';
  text.appendChild(paragraphText);

  // Style
  paragraphText.style.color = 'green';
  paragraphText.style.margin = '1rem 0 0 0';
  }
});