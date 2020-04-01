// const querystring = require('querystring');

// const someText = querystring.parse('name = mohamed & last name = mbarki');

// console.log(someText);


const querystring = require('querystring');

const someText = querystring.stringify({ 'name ': ' mohamed ',' last name ': ' mbarki' });

console.log(someText);
