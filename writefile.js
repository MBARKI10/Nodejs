var fs = require('fs');

var data ='hello mohamed mbarki mbarki';

var ws= fs.createWriteStream('output.txt');

ws.write(data,'UTF8');

ws.end();

ws.on('finich',function(){
 console.log('done successfuly !! :)');
});

ws.on('error',function(err){
    console.log(err.stack);
});

console.log('app finished !!');
