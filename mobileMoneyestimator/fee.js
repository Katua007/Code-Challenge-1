// fee.js
// Calculates mobile money transaction fees based on the amount sent
function estimateTransactionFee() {
  // Ask user how much they want to send
  const amountToSend = parseFloat(prompt("Enter amount to send (KES):"));

  // Validate amount input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount greater than 0.");
    return;
  }

  // Fee logic: 1.5% of amount, min 10, max 70
  const percentageFee = amountToSend * 0.015;
  const fee = Math.max(10, Math.min(70, percentageFee));
  const totalDebit = amountToSend + fee;

  // Output fee and total amount details
  console.log("Mobile Money Transaction Summary:");
  console.log(`- Amount to Send: KES ${amountToSend}`);
  console.log(`- Transaction Fee: KES ${fee}`);
  console.log(`- Total Amount Debited: KES ${totalDebit}`);
  console.log("Thank you for using mobile money!");
}
