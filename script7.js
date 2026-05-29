// 1. E-Commerce Product Filter (API)

async function productFilter() {
  try {
    let res = await fetch("https://fakestoreapi.com/products/");
    let products = await res.json();

    products
      .filter(
        (item) => item.price > 100 && item.category === "electronics"
      )
      .forEach((item) => {
        console.log(item.title, "-", item.price);
      });
  } catch (err) {
    console.log(err);
  }
}

productFilter();


// 2. Online Shopping Cart Total

let cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

let totalBill = cart.reduce(
  (total, item) => total + item.price * item.qty,
  0
);

console.log("Total Bill:", totalBill);


// 3. Employee Salary Dashboard

let employees = [
  { name: "John", salary: 25000 },
  { name: "Sam", salary: 50000 },
  { name: "Ravi", salary: 45000 },
  { name: "Kumar", salary: 30000 }
];

let highSalaryEmployees = employees
  .filter((emp) => emp.salary > 40000)
  .map((emp) => emp.name);

console.log(highSalaryEmployees);


// 4. Food Delivery App

let hotels = [
  { hotel: "A2B", rating: 4.1 },
  { hotel: "KFC", rating: 4.7 },
  { hotel: "Dominos", rating: 4.3 }
];

let bestHotel = hotels.find((h) => h.rating > 4.5);

console.log(bestHotel);


// 5. Student Pass/Fail System

let marks = [45, 67, 89, 90, 34];

let allPassed = marks.every((mark) => mark >= 35);

console.log("All Passed:", allPassed);


// 6. OTP Verification System

let otpList = [1234, 4567, 7890, 9876];
let enteredOtp = 4567;

console.log(otpList.includes(enteredOtp));


// 7. Movie Booking Timer

let count = 10;

let bookingTimer = setInterval(() => {
  console.log(count);

  if (count === 0) {
    clearInterval(bookingTimer);
    console.log("Booking Closed");
  }

  count--;
}, 1000);


// 8. Instagram Like Counter

let likes = 0;

let likeCounter = setInterval(() => {
  likes++;
  console.log("Likes:", likes);

  if (likes === 10) {
    clearInterval(likeCounter);
  }
}, 1000);


// 9. Login Authentication

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}


// 10. Weather App Simulation

let internet = true;

let weatherPromise = new Promise((resolve, reject) => {
  if (internet) {
    resolve("Weather Data");
  } else {
    reject("No Internet");
  }
});

weatherPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// 11. Amazon Product Search

let products = [
  "shirt",
  "jeans",
  "tshirt",
  "mobile",
  "formal shirt"
];

let search = "shirt";

let result = products.filter((item) =>
  item.toLowerCase().includes(search.toLowerCase())
);

console.log(result);


// 12. YouTube Video Duration

let videos = [10, 20, 30, 40];

let totalWatchTime = videos.reduce(
  (total, video) => total + video,
  0
);

console.log("Total Watch Time:", totalWatchTime);


// 13. Swiggy Order Status

let orderStatus = "Preparing";

switch (orderStatus) {
  case "Placed":
    console.log("Order Placed");
    break;

  case "Preparing":
    console.log("Food is being prepared");
    break;

  case "Out for Delivery":
    console.log("Delivery Partner is on the way");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");
}


// 14. WhatsApp Chat Analyzer

let chats = ["hi", "hello", "where", "ok", "bye"];

console.log("Total Messages:", chats.length);

for (let i = 0; i < chats.length; i++) {
  console.log(chats[i]);
}


// 15. Netflix Age Restriction

let age = 20;

console.log(
  age >= 18 ? "Watch Movie" : "Access Denied"
);


// 16. Flipkart Product Sorting

let prices = [1200, 450, 9999, 2500, 700];

prices.sort((a, b) => a - b);

console.log(prices);


// 17. Employee Attendance

let attendance = [
  "present",
  "absent",
  "present"
];

let attendanceCount = attendance.reduce(
  (acc, status) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  },
  {}
);

console.log(attendanceCount);


// 18. Banking System

let balance = 10000;

function deposit(amount) {
  balance += amount;
  console.log("Deposited:", amount);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("Withdrawn:", amount);
  } else {
    console.log("Insufficient Balance");
  }
}

function checkBalance() {
  console.log("Balance:", balance);
}

deposit(5000);
withdraw(3000);
checkBalance();


// 19. Zomato Rating Checker

let hotelRatings = [4.5, 2.8, 4.7, 3.9];

let lowRating = hotelRatings.some(
  (rating) => rating < 3
);

console.log(lowRating);


// 20. Real API Product Cards

async function displayProducts() {
  let res = await fetch(
    "https://fakestoreapi.com/products/"
  );

  let data = await res.json();

  let cards = data
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" width="100">
        <h3>${item.title}</h3>
        <p>₹${item.price}</p>
      </div>
    `
    )
    .join("");

  document.body.innerHTML += cards;
}

// displayProducts();


// 21. Small E-Commerce Logic

let cartItems = [];

async function ecommerceProject() {
  let res = await fetch(
    "https://fakestoreapi.com/products/"
  );

  let products = await res.json();

  // Filter Category
  let electronics = products.filter(
    (p) => p.category === "electronics"
  );

  console.log("Electronics:", electronics);

  // Search
  let searchResult = products.filter((p) =>
    p.title.toLowerCase().includes("shirt")
  );

  console.log("Search:", searchResult);

  // Sort
  let sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
  );

  console.log("Sorted:", sortedProducts);

  // Add To Cart
  cartItems.push(products[0]);
  cartItems.push(products[1]);

  console.log("Cart:", cartItems);

  // Total
  let total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  console.log("Cart Total:", total);
}

