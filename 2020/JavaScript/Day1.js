var input = require("../Assignments/Input/Day1_input.js");
// SOLUTION 1 
input.find(number => {
    var number2 = input.find(number2 => number + number2 === 2020)
    
    if(number2)
        console.log(number * number2);
})

// SOLUTION 2
// loop over input number array
for (let index = input.length; index >= 0; index--) {
    const element = input[index];

    // find the value that adds up to 2020
    var number2 = input.find(number => number + element === 2020 )

    if(number2){
        // log the result
        console.log(element * number2);

        // stop the searching
        return;
    };
}