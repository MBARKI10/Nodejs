// const fs = require('fs');

// var data = fs.readFileSync('input5.txt');
// console.error(data.toString());

// console.log('app is done :)');

const fs = require('fs');

fs.readFile('input5.txt',function(err,data){
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

console.log('app is done avec success ;)');