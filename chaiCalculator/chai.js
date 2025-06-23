// chai.js
// This function calculates how much water, milk, tea leaves, and sugar is needed for a given number of chai cups
function calculateChaiIngredients() {
  // Ask user how many cups of chai they want
  const numberOfCups = parseInt(prompt("How many cups of chai do you want to make?"));

  // Check if input is a valid positive number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number greater than 0.");
    return;
  }

  // Ingredient calculations per cup
  const water = numberOfCups * 200; // milliliters of water
  const milk = numberOfCups * 50;   // milliliters of milk
  const teaLeaves = numberOfCups;   // tablespoons of tea leaves
  const sugar = numberOfCups * 2;   // teaspoons of sugar

  // Output the required ingredient amounts
  console.log(`To make ${numberOfCups} cups of chai:`);
  console.log(`- Water: ${water} ml`);
  console.log(`- Milk: ${milk} ml`);
  console.log(`- Tea Leaves: ${teaLeaves} tbsp`);
  console.log(`- Sugar: ${sugar} tsp`);
}
