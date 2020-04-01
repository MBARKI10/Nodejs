const net = require('net');

var server = net.createServer((socket)=>{
    socket.end('thanks have a nice day !! :)');
}).on('error',(err)=>{
  throw err ;
});


server.listen(()=>{
    adresse = server.address();
    console.log('the server is ranning... :', adresse);
});