console.log(process.arch);
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(process.cwd());
console.log(process.execPath);
console.log(process.uptime());


console.log(`uptime ${process.uptime()}`);
console.log(`hrtime ${process.hrtime()}`);


process.argv.forEach((value,index,array)=>{
      console.log(`${index},${value}`);
});