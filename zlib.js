// const zlib = require('zlib');

// const fs = require('fs');

// const gzip = zlib.createGzip();

// const input = fs.createReadStream('input5.txt');

// const output = fs.createWriteStream('input5.txt.gz');

// input.pipe(gzip).pipe(output);

// console.log('done ;)');

const zlib = require('zlib');

const fs = require('fs');

const unzip = zlib.createUnzip();

const input = fs.createReadStream('input5.txt.gz');

const output = fs.createWriteStream('input7.txt');

input.pipe(unzip).pipe(output);

console.log('done comp ;)');