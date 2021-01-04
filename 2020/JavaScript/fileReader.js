const { strict } = require('assert');

function readFile(filePath){
    var fs = require('fs');
    var text = fs.readFileSync(filePath).toString();
    
    return text.split('\n').map(x => /[^\s]*/g.exec(x)[0])
}

module.exports = {readFile}