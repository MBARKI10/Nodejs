//Asynchronized

var fs = require('fs');

fs.readFile('input5.txt',function(err,data){
    if (err) {
        return console.error(err);
    }
    console.log('synch data read', + data.toString());
});


//synchronized
var data = fs.readFileSync('input5.txt');

console.log('synch read', + data.toString());

console.log('app anded !!');

