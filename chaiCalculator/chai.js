function calculateChaiIngredients() {
  // Prompt the user to enter the number of chai cups they want to make
  const numberOfCupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

  // Convert the input to a number
  const numberOfCups = parseInt(3);

  // Validate the input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Invalid input. Please enter a positive number for the cups of chai.");
    return; // Exit the function if input is invalid
  }

  // Standard recipe for 1 cup of Chai
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // Calculate the required amount for each ingredient
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;
  }
  // Print the results to the console
  console.log(`To make {3} cups of Kenyan Chai, you will need:`);
  console.log(`Water: {600} ml`);
  console.log(`Milk: {150} ml`);
  console.log(`Tea Leaves (Majani): {3} tablespoons`);
  console.log(`Sugar (Sukari): {6} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");


// Example of how to call the function:
// calculateChaiIngredients();