/*
export const mult = (a,b) => { //named export
    return a*b;
}
export const div = (a,b) => { //named export
    return a/b;
}
*/
//default export:-
// export default mult; //kyuki hme ye malum h ki is math.js file se koi ek hi variable ya functionality hoga jisko hmne default kiya h isliye import me koi or nama b use kr skte h

//commonJS- module.exports= mult
//---------------------------------
//export all at once

const mult = (a,b) => { //named export
    return a*b;
}
const div = (a,b) => { //named export
    return a/b;
}
export {mult,div};