
// Task 1 — Smart Attendance Checker


function checkExamEligibility(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }
}

checkExamEligibility(80, true);


// Task 2 — Mobile Password Strength Checker


let password = "Abc12345";

let hasUppercase = false;
let hasNumber = false;

for (let char of password) {

    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    }

    if (char >= '0' && char <= '9') {
        hasNumber = true;
    }
}

if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}



// Task 3 — Find Second Largest Number


let numbers = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondLargest = 0;

for (let num of numbers) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }

    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest:", secondLargest);



// Task 4 — Bus Seat Booking System


let seats = [false, false, false, false, false, false, false, false, false, false];

let seatNumber = 4;

if (seats[seatNumber - 1] === true) {

    console.log("Seat Already Booked");

} else {

    seats[seatNumber - 1] = true;
    console.log("Seat Booked Successfully");
}



// Task 5 — ATM Cash Withdraw Logic


function withdrawMoney(balance, amount) {

    if (amount > balance) {
        return "Insufficient Balance";
    }

    if ((balance - amount) < 1000) {
        return "Minimum Balance Should Be 1000";
    }

    return "Withdraw Successful";
}

console.log(withdrawMoney(10000, 9500));



// Task 6 — Product Search Engine

let products = ["iphone", "samsung", "realme", "oppo"];

let searchProduct = "realme";

let found = false;

for (let product of products) {

    if (product.toLowerCase() === searchProduct.toLowerCase()) {
        found = true;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}


// Task 7 — Voting Eligibility System


let age = 22;
let hasVoterId = true;
let citizenship = "Indian";

if (age >= 18) {

    if (hasVoterId === true) {

        if (citizenship === "Indian") {
            console.log("Eligible to Vote");
        } else {
            console.log("Citizenship Invalid");
        }

    } else {
        console.log("No Voter ID");
    }

} else {
    console.log("Under Age");
}


// Task 8 — Online Food Order Bill


function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100;

    let total =
        foodPrice +
        gstAmount +
        deliveryCharge -
        discount;

    return "Total Bill : ₹" + total;
}

console.log(calculateBill(400, 5, 40, 10));



// Task 9 — Reverse Word Without reverse()


let word = "javascript";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {

    reversedWord += word[i];
}

console.log(reversedWord);



// Task 10 — Mini Instagram Like System


let totalLikes = 120;

let liked = false;

function toggleLike() {

    liked = !liked;

    liked ? totalLikes++ : totalLikes--;

    console.log(liked ? "Liked ❤️" : "Like 🤍");

    console.log("Total Likes:", totalLikes);
}

toggleLike();
toggleLike();