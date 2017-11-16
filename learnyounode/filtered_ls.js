
var extFilter = process.argv[3]

function extension(element){
    var extName = path.extname(element)
    return extName === '.' + extFilter;
}

function callback_filter(error, list){
    if(error) {
        return console.error(error);
    }

    list.filter(extension).forEach(function(value) {
        console.log(value)
    });
}


var fs = require('fs')
var path = require('path')
var pathSupplied = process.argv[2]

fs.readdir(pathSupplied, callback_filter)
