// fare.js
// This function calculates boda boda fare using distance and fixed rates
function calculateBodaFare() {
  // Ask user for distance in kilometers
  const distance = parseFloat(prompt("Enter distance in kilometers:"));

  // Check if input is valid
  if (isNaN(distance) || distance <= 0) {
    console.log("Please enter a valid distance greater than 0.");
    return;
  }

  // Fare calculation: base fare + charge per km
  const baseFare = 50;        // flat fee in KES
  const perKmRate = 15;       // charge per kilometer in KES
  const distanceFare = distance * perKmRate;
  const totalFare = baseFare + distanceFare;

  // Show fare breakdown
  console.log("Fare Details:");
  console.log(`- Distance: ${distance} km`);
  console.log(`- Base Fare: KES ${baseFare}`);
  console.log(`- Distance Charge: KES ${distanceFare}`);
  console.log(`- Total Fare: KES ${totalFare}`);
}
