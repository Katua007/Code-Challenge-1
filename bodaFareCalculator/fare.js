function calculateBodaFare() {
  // Prompt the user for the distance of their trip
  const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

  // Convert the input to a number
  const distanceInKm = parseFloat(distanceInput);

  // Validate the input
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Hiyo si namba mzuri. Tafadhali weka umbali sahihi kwa kilomita."); // "That's not a good number. Please enter a valid distance in kilometers."
    return; // Exit the function if the input is invalid
  }

  // Fare Calculation Rules
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES

  // Calculate the total estimated fare
  const totalFare = baseFare + (distanceInKm * chargePerKm);
}
  // Print the result to the console
  console.log(`Uko kwote? Io ni {5} km:`);
  console.log(`Ukikalia Pikipiki: KES {50}`);
  console.log(`Mpaka Uko: KES {75}`);
  console.log(`Total: KES {125}`);
  console.log("\nPanda Pikipiki!");


// You can call the function to test it:
// calculateBodaFare();