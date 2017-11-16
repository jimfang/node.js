

var mymodule = require('./filter_module.js');

var callback = function (err, list){
    if (err){
        return console.error('There was an error:', err)
    } 

    list.forEach( function(file) {
        console.log(file);
    });    
}

mymodule(process.argv[2], process.argv[3], callback);
