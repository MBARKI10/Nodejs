const tls = require('tls');

function connected(stream){
    if(stream){
    stream.write('GET/HTTP/1.0\n\r  HOST:encrypted.google.com:443\n\r\n\r');
    }else{
        console.log('connected failed');
    }
}
var dummy = this;
dummy.socket = tls.connect(443,'encrypted.google.com', function(){
    dummy.connected = true;
    if(dummy.socket.authorized){
       dummy.socket.setEncoding('utf8');
       connected(dummy.socket)
    }else{
        console.log(dummy.socket.authorisationError);
        connected(null);
    }
});

dummy.socket.addListener('data',function(data){
    console.log(data);
});

dummy.socket.addListener('error',function(error){
    if(!dummy.connected){
        connected(null);
    }
    console.log('socket failed to connect');
    console.log('err');
});

dummy.socket.addListener('close',function(){

});
