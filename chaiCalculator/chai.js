// Greet the user and ask how many cups of tea they want to make
console.log('Karibu! How many cups of Chai Bora would you like to make?');

// Declare the number of cups of tea the user wants
let cups = 6;

// Ingredients required per cup
let milk = 50;       
let water = 200;     
let teaLeaves = 2;   

function calculateChaiIngredients() {
    
    if (cups > 0) {
        // Multiply each ingredient amount by the number of cups
        let totalMilk = milk * cups;
        let totalWater = water * cups;
        let totalTeaLeaves = teaLeaves * cups;

        // Print the ingredients needed
        console.log(`To make ${cups} cups of tea you will need:`);
        console.log(`${totalMilk}ml of milk`);
        console.log(`${totalWater}ml of water`);
        console.log(`${totalTeaLeaves}g of tea leaves`);
    } else {
        
        console.log("Please enter a valid number of cups");
    }
}

// Call the function to calculate and display ingredients
calculateChaiIngredients();
