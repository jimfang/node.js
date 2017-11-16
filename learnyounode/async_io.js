
function finishedReading(error, fileData){

    if(error) {
        return console.error(error);
    }

    // operatre content
    var lines = fileData.toString().split('\n')
    // new lines = total - 1
    console.log(lines.length-1)
}



var fs = require('fs')

fs.readFile(process.argv[2], finishedReading)

