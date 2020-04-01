const crypto = require('crypto');

const {privatekey, publickey} = crypto.generateKeyPairSync('ec',{
    namedCurve : 'sect239k1' 
});


const sign = crypto.createSign('SHA256');
sign.write('some data to sign');
sign.end();
const signature = sign.sign(privateKey, 'hex');

const verify = crypto.createVerify('SHA256');
verify.write('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature, 'hex'));