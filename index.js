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

// Higher order functions

//Functions as Data

/*
Javascript function behave like any other data type in the language; we can assign functions to var and we can reassign them to new variable
example;
*/

const checkThatTwoPlusTwoEqualIsFourAMillionTimes = ()=>{
    for (let i = 0; i <= 1000000; i++) {
        if( ( 2 + 2 ) !=4 ){
            console.log("Something has gone very wrong : ( ")
        }
        
    }
}
const isTwoPlusTwo = checkThatTwoPlusTwoEqualIsFourAMillionTimes;
isTwoPlusTwo();

console.log(isTwoPlusTwo.name)

//Functions as Parameter

//Call back functions

const addTwo = num=>{
 return num + 2;
}

const checkConsistentOutput = (func, val)=>{
    const checkA = val +2;
    const checkB = func(val);

    //using ternery operator if chkA is equal to chkB . if true return the result of call back func if false use string "inconsist result"
    return checkA===checkB ? func(val) : "inconsistent results";
}
//finally use console with two arguments addtwo and a number
console.log(checkConsistentOutput(addTwo,10));

// introduction to iterators 
// .forEach()  .map() and filter()