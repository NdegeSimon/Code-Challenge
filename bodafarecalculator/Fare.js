
console.log("Unafika wapi Mkubwa KiloMeter Ngapi");

// Declare the base fare for a boda ride the charge per kilometer
let busFare = 50;


let chargePerKm = 15;


let Kilometer = 10;


function calculateBodaFare(Kilometer) {
    // Calculate total fare using base fare and per km charge
    let totalFare = busFare + (Kilometer * chargePerKm);
    
    // Log distance information
    console.log(`Uko kwote? Io ni ${Kilometer} km:`);
    
    // Log base fare
    console.log(`Ukikalia Pikipiki Ksh ${busFare}`);
    
    // Log breakdown of fare calculation
    console.log(`Mpaka Uko: Ksh ${busFare} + ${Kilometer} x ${chargePerKm}`);
    
   
    console.log(`Total Fare: Ksh ${totalFare}`);
    
    
    console.log("Panda PikiPiki!");
}

// Call the function with the given distance
calculateBodaFare(Kilometer);
