const crypto= require("crypto"); 

const randomValue= crypto.randomBytes(8).toString("hex"); //toString() is a method mtlb obiously function is a method
console.log(randomValue); //931d811510d8c28f

const hashValue= crypto.createHash("sha256").update("viki").digest("hex");
console.log(hashValue); //e28200d81cb7d992d0c875b53bec5c49d2da0a250ec3328a2811fc8cee8a6b91

const hashValue2= crypto.createHash("sha256").update("viki").digest("hex");
console.log(hashValue2); //e28200d81cb7d992d0c875b53bec5c49d2da0a250ec3328a2811fc8cee8a6b91