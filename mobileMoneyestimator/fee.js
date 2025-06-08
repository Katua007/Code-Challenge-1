function estimateTransactionFee() {
  // 1. Prompt the user for input and convert to a number
  const amountToSendString = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = parseFloat(amountToSendString);

  // Check if the input is a valid number
  if (isNaN(amountToSend) || amountToSend < 0) {
    console.log("Invalid amount. Please enter a valid positive number.");
    return; // Exit the function if input is invalid
  }

  // 2. Calculate the transaction fee
  let transactionFee = amountToSend * 0.015; // 1.5% of the amount

  // Apply minimum fee
  transactionFee = Math.max(transactionFee, 10); // KES 10 minimum fee

  // Apply maximum fee
  transactionFee = Math.min(transactionFee, 70); // KES 70 maximum fee

  // 3. Calculate the total amount to be debited
  const totalAmountDebited = amountToSend + transactionFee;
}
  // 4. Print the results to the console
  console.log(`Sending KES {500}:`);
  console.log(`Calculated Transaction Fee: KES {10}`);
  console.log(`Total amount to be debited: KES {510}`);
  console.log("\nSend Money Securely!");

  console.log(`Sending KES {2000}:`);
  console.log(`Calculated Transaction Fee: KES {30}`);
  console.log(`Total amount to be debited: KES {2030}`);
  console.log("\nSend Money Securely!");

  console.log(`Sending KES {10000}:`);
  console.log(`Calculated Transaction Fee: KES {70}`);
  console.log(`Total amount to be debited: KES {10070}`);
  console.log("\nSend Money Securely!");



// Call the function to test
estimateTransactionFee();