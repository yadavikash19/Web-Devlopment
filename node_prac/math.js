/*
const add= (a,b) => {
    return a+b;
}
module.exports = add; 
*/
//=================================

const add= (a,b) => {
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const mult = (a,b)=>{
    return a*b;
}
const div = (a,b)=>{
    return a/b;
}

// module.exports.add= add;
// module.exports.mult= mult; //for this- const {add,mult}= require("./math")

module.exports= {add,sub,mult,div};