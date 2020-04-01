// var fs = require('fs');

// fs.open('input7.txt','r+',function(err,fd){
//     if (err) {
//         console.error(err);
        
//     }
//     console.log('file openned !!');
// });

var fs = require('fs');

console.log('openning file');

fs.stat('input.txt',function(err,stats){
    if (err) {
        console.error(err);
    }
    console.log(stats);
    console.log('file succsess');
    console.log(stats.isBlockDevice());
    console.log(stats.isCharacterDevice());
    console.log(stats.isDirectory());
    console.log(stats.isFIFO());
    console.log(stats.isSocket());
    console.log(stats.isSymbolicLink());
    
})