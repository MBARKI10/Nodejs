const event = require('events');

var eventEmitter = new event.EventEmitter();

var connectHandel = function connected(){
    console.log('event connect avec successfuly ;)');

    eventEmitter.emit('data received');
}

eventEmitter.on('connection',connectHandel);

eventEmitter.on('data received',function(){
    console.log('data received');
});

eventEmitter.emit('connection');
console.log('app is done ');