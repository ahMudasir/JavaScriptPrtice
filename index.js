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
        //-------------------------------------------------------------------
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
        -------------------------------------------------------
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

        /*Functions as Parameter
        ---------------------------------------------------
        Call back functions */

        const addTwo = num=>{
        return num + 2;
        }

        const checkConsistentOutput = (func, val)=>{
            const checkA = val +2;
            const checkB = func(val);

        //using ternery operator if chkA is equal to chkB . if true return the result of call back func if false use string "inconsist result"
        //-----------------------------------------------------------
        return checkA===checkB ? func(val) : "inconsistent results";
        }
        //finally use console with two arguments addtwo and a number
        console.log(checkConsistentOutput(addTwo,10));

        /*
        introduction to iterators 
        --------------------------------------------------------
        .forEach():
        Executes a provided function once for each array element.
        It does not return a new array or modify the original array.
        Primarily used for side effects, such as logging elements or updating external variables.
        Cannot be stopped or broken out of once started.

        .map()  : 
        executes the same code on every element in an array and returns a new array with the updated elements.

        filter() :
        Creates a new array filled with elements that pass a test implemented by a provided function.
        It does not modify the original array.
        The callback function should return true to include the element in the new array, and false to exclude it.
        Primarily used for selecting elements from an array based on a specific condition.



        */


        /*
        The forEach Method:-

        */

        const gorceries = ['brown sugar', 'salt', 'cranberries', 'walnuts']

        gorceries.forEach(function(gorceryItem){
            console.log(' - ' + gorceryItem);
        })
        // another way using arrow functions
        // groceries.forEach(groceryItem => console.log(groceryItem));

        const fruits = ['mango', 'papaya', 'pineapple'];

        fruits.forEach(function(FruitItems){
            console.log('i want to eat '+ FruitItems);
        })

        // The .map() Method

        /*
        The second iterator we’re going to cover is .map(). When 
        Preview: Docs Loading link description
        .map()
        is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

        In the example above:

        numbers is an array of numbers.
        bigNumbers will store the return value of calling .map() on numbers.
        numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
        return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
        */

        const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

        // Create the secretMessage array below
        const secretMessage = animals.map(animal => animal[0]);

        console.log(secretMessage.join(''));

        const bigNumbers = [100, 200, 300, 400, 500];

        // Create the smallNumbers array below
        const smallNumbers = bigNumbers.map(num => num/100);

        console.log(smallNumbers)

        /*
        The .filter() Method
        10 min
        Another useful iterator method is 
        Preview: Docs Creates a new array with all elements that pass the test from the provided function.
        .filter()
        . Like 
        Preview: Docs Loading link description
        .map()
        , .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:
        const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

        const shortWords = words.filter(word => {
        return word.length < 6;
        });

        */

        const randomNumbers = [375, 200, 3.14, 7, 13, 852];

    // Call .filter() on randomNumbers below
    const smallNumber = randomNumbers.filter((num) => {
    return num < 250;
    });
    console.log(smallNumber)

    const favoriteWords = [
    "nostalgia",
    "hyperbole",
    "fervent",
    "esoteric",
    "serene",
    ];

    // Call .filter() on favoriteWords below

    const longFavoriteWords = favoriteWords.filter((word) => {
    return word.length > 7;
    });
    console.log(longFavoriteWords)
