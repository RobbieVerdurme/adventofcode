var filereader = require('./fileReader.js')
var filelines = filereader.readFile('../Assignments/Input/Day3.txt');

// counter
var treeCount = 0;

// loop filelines
for (let lineNumber = 0; lineNumber < filelines.length; lineNumber++) {
    const element = filelines[lineNumber];

    // per line down move 3 to the right.
    // If you to over the element length repeat the same pattern repeats to the right many times
    var elementIndex = (lineNumber * 3) % element.length
    
    // get symbol
    var symbol = element[elementIndex];

    // check symbol
    if(symbol === "#")
        treeCount++;
}

// log result
console.log(treeCount);