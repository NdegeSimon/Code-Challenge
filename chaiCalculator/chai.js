console.log('Karibu! How many cups of Chai Bora would you like to make?')
let cups=6;

let milk = 50;      
let water = 200;
let teaLeaves = 2;   


function calculateChaiIngredients(){
    if(cups > 0){
       let totalMilk="milk*cups";
       let totalWater="water*cups";
       let totalTeaLeaves="teaLeaves*cups";
   

    console.log(`To make ${cups} cups of tea you will need:`);
    console.log(`${totalMilk}ml of milk`);
    console.log(`${totalWater}ml of water`);
    console.log(`${totalTeaLeaves}ml of tea leaves`);
    }else{

    console.log("Please enter a valid number of Cups");

    
}
 }

 calculateChaiIngredients();