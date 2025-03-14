/*
console.log("HELLO WORLD");

let arr= [1,2,3,4,5];
console.log(arr.map((num)=>num*5));
*/
//=========================================================

/*
// console.log(global);
global.console.log("subscribe");
globalThis.console.log("subscribe");


console.log(globalThis.process); // node k sab methods properties ko access krna like- console.log(window.document);
//same-
console.log(process);
*/

//console.log(globalThis.module); //undefined- //we can use only when we use commonJS
// As React is all about components..Like this node is all about modules

//console.log(module);
//=========================================================
// const {add,mult}= require("./math")

// const {add,sub,mult,div}= require("./math");
const math= require("./math");

console.log(math.add(5,10));
console.log(math.sub(5,10));
console.log(math.mult(5,10));
console.log(math.div(5,10));

//==========================================================
/*
Path Module Features:- (__filename,__directory)
path.parse()- returns an object with details about a given path including root, dir, base, ext, name
path.join()- Joins multiple path segments into one using the appropriate sepaartor (\)
path.resolve()- Resolves a sequence of paths into an absolute path, starting from the current directory
path.extname()- Extracts the file extension from a given path
path.basename()- Returns the last part of a path (eg- file name with extension)
path.dirname()- Returns the directory part of a path
path.sep- Returns the platform-specific path segment separtor (\)

*/

const path= require("path");
console.log(__dirname);
console.log(__filename);

const filePath= path.join("folder","students","data.txt");
console.log(filePath);

const parseData= path.parse(filePath);
const resolvePath= path.resolve(filePath);
const extname= path.extname(filePath);
const basename= path.basename(filePath);
const dirname= path.dirname(filePath);

console.log({parseData,resolvePath,extname,basename,dirname});