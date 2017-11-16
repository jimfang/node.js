

var fs = require('fs')
var path = require('path')  

module.exports = function(directory, extension, ocallback)
{   
    fs.readdir(directory, function(err, list){          
        if(err) {
            return ocallback(err);
        }
        else {
            list = list.filter(function (file){
                if(path.extname(file) === '.' + extension) return true;
            })
            return ocallback(null, list);
        }
    })
}

 
