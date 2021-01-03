var filereader = require('./fileReader.js');
var input = filereader.readFile('../Assignments/Input/Day1.txt');

// loop over input number array
for (let index = input.length; index >= 0; index--) {
    const element = parseInt(input[index]);

    // find the value that adds up to 2020
    var number2 = parseInt(input.find(number => parseInt(number) + element === 2020 ))

    if(number2){
        // log the result
        console.log(element * number2);

        // stop the searching
        return;
    };
}