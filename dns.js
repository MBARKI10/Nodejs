// const dns = require('dns');

// dns.lookup('www.google.com',(err,adresses,family)=>{
//     console.log('the adresses :' ,adresses);
//     console.log('the family is :' , family);
// });

const dns = require('dns');

dns.resolve4('www.google.com',(err,adresses)=>{
if (err)throw err; {
    console.log(`adresses :${JSON.stringify(adresses)}`);
    adresses.forEach((a)=>{
        dns.reverse(a,(err,hostnames)=>{
            if (err) {
                throw err;
            };
            console.log(`reserve for ${a}:${JSON.stringify(hostnames)}`)
        });
    });
}

});