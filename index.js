//Reverse Loop 3210
let counter;

for ( counter=3; counter>=0; counter--){
    console.log(counter)
}
    // looping through arrays

    const vacationSpot = ['bali', 'paris', 'tulum'];

    for (let i =0;i<vacationSpot.length; i++){
        //string interpolatioin using lateral template
        console.log(`i would love to visit ${vacationSpot[i]}` )
    }
// Nested loops

//loop running inside another loop we call that a nested loop.

const boobsFollowers = ['jannu', 'mannu', 'tannu', 'sannu'];
const tinasFollowers = ['meena', 'mannu', 'tannu'];

const mutualFollowers = [];

for (let i = 0; i < boobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (boobsFollowers[i]===tinasFollowers[j]){
            mutualFollowers.push(boobsFollowers[i]);
        }
        
    }
    
}
console.log(mutualFollowers);