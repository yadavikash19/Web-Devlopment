const os= require("os"); //os module me method ko use krne k liye, usko import krna hai phle

console.log("Platform:", os.platform());
console.log("User:", os.userInfo());

console.log("CPU Architecture:", os.arch());

console.log("Free Memory:", os.freemem(), "bytes");

console.log("Total Memory:", os.totalmem(), "bytes");

console.log("System Uptime:", os.uptime(), "seconds");

console.log("Home Directory:", os.homedir());

console.log("Host Name:", os.hostname());

console.log("Network Interfaces:", os.networkInterfaces());

console.log("CPU Info:", os.cpus());

console.log("Temporary Directoryt:", os.tmpdir());

console.log("Operating system:", os.type());


