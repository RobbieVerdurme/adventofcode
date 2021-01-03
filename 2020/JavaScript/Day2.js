var filereader = require('./fileReader.js')
var filelines = filereader.readFile('../Assignments/Input/Day2.txt');

// Part 1
var correctPasswords = 0;

for (let index = 0; index < filelines.length; index++) {
    const element = filelines[index];

    var regex = /([0-9]*)\-([0-9]*)\ ([a-zA-Z])\:(.*)/g.exec(element);
  
    // count the match
    var countLetterInPassword = char_count(regex[4], regex[3]); // 4 password / 3 letter

    // check if correct
    if(countLetterInPassword >= regex[1] && countLetterInPassword <= regex[2]) // 1 minCount / 2 MaxCount
        correctPasswords++
}

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log("Part 1 answer : " + correctPasswords);

// Part 2
var correctPasswordsPart2 = 0;
for (let index = 0; index < filelines.length; index++) {
    const element = filelines[index];

    var regex = /([0-9]*)\-([0-9]*)\ ([a-zA-Z])\:(.*)/g.exec(element);

    var index1 = regex[1];
    var index2 = regex[2];
    var password = regex[4];
    var letter = regex[3];

    // check if correct
    if((password[index1] === letter && password[index2] !== letter) || (password[index1] !== letter && password[index2] === letter)) {
        correctPasswordsPart2++
    }
}
console.log("Part 2 answer : " + correctPasswordsPart2)