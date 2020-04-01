buf = new Buffer(26);

for (let i = 0; i < buf.length; i++) {
    buf[i] = i + 100;
    
}

console.log(buf.toString('utf8',0,6));
console.log(buf.toString('ascii',0,6));
console.log(buf.toString('ascii'));