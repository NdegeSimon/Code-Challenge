
let minimumFee = 10;
let maximumFee = 70;


function estimateTransactionFee(amountToSend) {
    // Calculate 1.5% of the amount
    let fee = 0.015 * amountToSend;

    
    if (fee < minimumFee) {
        fee = minimumFee;
    } 
    
    else if (fee > maximumFee) {
        fee = maximumFee;
    }

    // Calculate total amount to be debited (amount + fee)
    let total = amountToSend + fee;

    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
}

// Prompt the user to enter the amount to send
let input = prompt("Unatuma Ngapi? (KES):");

let amount = Number(input);


estimateTransactionFee(amount);
