# Code-Challenge-1
# Week 1 Code Challenge

This repository contains my solutions for the Week 1 JavaScript Code Challenges. Each challenge is designed to test fundamental JavaScript concepts, including user input, basic arithmetic, conditional logic, and console output.

## Prerequisites

Before running these solutions, ensure you have:

* **Node.js** installed on your machine (for running JavaScript files outside a browser). You can download it from [nodejs.org](https://nodejs.org/).
* A **web browser** (like Chrome, Firefox, or Edge) if you prefer to run the JavaScript in the console.

## Project Structure

The repository is organized with a dedicated folder for each challenge, containing its respective JavaScript file.

.
├── README.md
├── chaiCalculator/
│   └── chai.js
├── bodaFareCalculator/
│   └── fare.js
└── mobileMoneyEstimator/
└── fee.js


## How to Run the Solutions

To run any of the challenges:

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/your-username/Code-Challenge-1.git](https://github.com/your-username/Code-Challenge-1.git)
    cd Code-Challenge-1
    ```
    (Replace `<https://github.com/your-username/Code-Challenge-1.git>` with the actual URL of your repository.)

2.  **Navigate to the challenge folder:**
    For example, to run the Chai Bora Calculator:
    ```bash
    cd chaiCalculator
    ```

3.  **Execute the JavaScript file:**
    Using Node.js:
    ```bash
    node chai.js
    ```
    Alternatively, you can open the `chai.js` file (or any other challenge's `.js` file) in your web browser's developer console and run it there.

4.  **Follow the prompts:**
    The script will prompt you for input in your console or browser.

## Challenge 1: Chai Bora Ingredient Calculator ☕

This challenge involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

### Standard Recipe for 1 Cup of Chai:

* **Water:** 200 ml
* **Milk:** 50 ml
* **Tea Leaves (Majani):** 1 tablespoon
* **Sugar (Sukari):** 2 teaspoons

### Task:

Implement a JavaScript function named `calculateChaiIngredients` that:

* Prompts the user for the number of chai cups.
* Takes `numberOfCups` as an argument.
* Calculates required amounts for water, milk, tea leaves, and sugar.
* Prints the results to the console in a clear format.

### Example Interaction (for an input of 3 cups):

User is prompted: Karibu! How many cups of Chai Bora would you like to make?
User enters: 3
Console Output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!


## Challenge 2: Boda Boda Ride Fare Estimator 🛵

This challenge involves creating a simple program to estimate the fare for a boda boda ride.

### Fare Calculation Rules:

* **Base Fare:** KES 50 (applied to every ride).
* **Per Kilometer Charge:** KES 15 for every kilometer traveled.

### Task:

Implement a JavaScript function named `calculateBodaFare` that:

* Prompts the user to enter the distance of their trip in kilometers.
* Takes `distanceInKm` as an argument.
* Calculates the total estimated fare using the formula: `totalFare = baseFare + (distanceInKm * chargePerKm)`.
* Prints the result to the console in a user-friendly format.

### Example Interaction (for a trip of 5 km):

User is prompted: Unafika wapi Mkubwa? Kilometer ngapi?:
User enters: 5
Console Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!


## Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

This challenge involves creating a simplified estimator for mobile money transaction fees.

### Simplified Fee Structure:

* The basic transaction fee is 1.5% of the transaction amount.
* **Minimum Fee:** KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
* **Maximum Fee:** KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.

### Task:

Implement a JavaScript function named `estimateTransactionFee` that:

* Prompts the user to enter the amount of money they wish to send.
* Takes `amountToSend` as an argument.
* Calculates the transaction fee based on the 1.5% rule, adhering to the minimum (KES 10) and maximum (KES 70) fee limits.
* Calculates the total amount that will be debited (`amount to send + transaction fee`).
* Prints the results to the console.

### Example Interactions & Outputs:

User is prompted: `Unatuma Ngapi? (KES):`

#### Scenario 1: User enters 500

(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!


#### Scenario 2: User enters 2000

(1.5% of 2000 = 30. Fee is KES 30.)
Console Output:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030

Send Money Securely!


#### Scenario 3: User enters 10000

(1.5% of 10000 = 150. Fee becomes KES 70 due to maximum.)
Console Output:
Sending KES 10000:
Calculated Transaction Fee: KES 70
Total amount to be debited: KES 10070

Send Money Securely!


## Version Control and Submission

* All solutions are committed and pushed to this GitHub repository.
* The repository structure adheres to the specified requirements.

---

**Author:** Cyril Katua
**Date:** June 7, 2025