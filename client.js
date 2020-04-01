const net = require('net');

var client = net.connect({port: 62562},()=>{
    console.log('connected :)');
    client.write('hi i am client /n');
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end
});

client.on('end',()=>{
    console.log('disconnected :( ');
});