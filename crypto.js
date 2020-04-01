// const crypto = require('crypto');

// const secret = 'mohamed';

// const hash = crypto.createHmac('sha256','secret').update('hello mohamed mbarki').digest('hex');

// console.log(hash)

// const crypto = require('crypto');

// const cipher = crypto.createCipher("aes192",'mohamed');

// var encrypted = cipher.update('welcome in nodeJS tutorial ','utf8','hex');

// encrypted+= cipher.final('hex');

// console.log(encrypted);

const crypto = require('crypto');

const decipher = crypto.createDecipher("aes192",'mohamed');

var encrypted = "ffdd5e384ed65b24410c6ab909d700964cc42aa2b6684e4a734ed959b95ce722";
var decrypted = decipher.update(encrypted,'hex','utf8');

decrypted+= decipher.final('utf8');

console.log(decrypted);


