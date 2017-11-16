
var fs = require('fs')

//console.log(process.argv[2]);
var buff = fs.readFileSync(process.argv[2])

var sContent = buff.toString()
var lines = sContent.split('\n')
// new lines = total - 1
console.log(lines.length-1)
