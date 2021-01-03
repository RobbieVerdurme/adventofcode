function readFile(filePath){
    var fs = require('fs');
    var text = fs.readFileSync(filePath).toString();
    return text.split('\n');
}

module.exports = {readFile}