
var sum = 0

//console.log(process.argv);

// print process.argv
process.argv.forEach(function (val, index, array) {
    if(index >= 2){
        //console.log(val + ":" + sum);
        sum += Number(val)
    }
})

console.log(sum)