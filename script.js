// -------------------- Part 1: Basics --------------------

// Variables & Conditionals
let userName = prompt("Enter your name:");
if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello, Guest!");
}

// -------------------- Part 2: Functions --------------------

// Function 1: Greeting
function greetUser(name) {
    document.getElementById("output").textContent = `Welcome, ${name}!`;
}

// Function 2: Calculate Total
function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log("Total: $" + calculateTotal([10, 20, 30]));

// -------------------- Part 3: Loops --------------------

// Loop 1: Countdown (for loop)
function startCountdown() {
    let countdownText = "";
    for (let i = 5; i >= 1; i--) {
        countdownText += i + " ";
    }
    document.getElementById("countdown").textContent = countdownText;
}

// Loop 2: Array Iteration (forEach)
["JS", "HTML", "CSS"].forEach((lang) => {
    console.log("I am learning " + lang);
});

// -------------------- Part 4: DOM Manipulation --------------------

// DOM Interaction 1: Add Event Listener
document.getElementById("greetBtn").addEventListener("click", function () {
    greetUser(userName || "Guest");
});

// DOM Interaction 2: Start Countdown
document.getElementById("countBtn").addEventListener("click", startCountdown);

// DOM Interaction 3: Dynamically Change Page Style
document.body.style.backgroundColor = "#f9f9f9";
