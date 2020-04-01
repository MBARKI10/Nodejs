var assert = require('assert');

function result(a,z,e,r){
    return a+z+e+r;
}

var expected = result(1,1,1,1);

assert(expected === 4, "the result of 1,1,1,1 = 4");