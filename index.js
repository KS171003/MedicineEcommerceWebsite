let carts = document.querySelectorAll(".addToCart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".count").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".count").textContent = 1;
  }
}
let openShopping = document.querySelector(".cart");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCart = document.querySelector(".listCart");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
let products = [
  {
    id: 1,
    name: "ProductName",
    image: "1.png",
    price: 1200,
  },
  {
    id: 2,
    name: "ProductName",
    image: "2.png",
    price: 2200,
  },
  {
    id: 3,
    name: "ProductName",
    image: "3.png",
    price: 3200,
  },
  {
    id: 4,
    name: "ProductName",
    image: "4.png",
    price: 4200,
  },
  {
    id: 5,
    name: "ProductName",
    image: "5.png",
    price: 5200,
  },
  {
    id: 6,
    name: "ProductName",
    image: "6.png",
    price: 6200,
  },
];
