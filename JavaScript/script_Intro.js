//Console.log is used to log (print) a message to the console
console.log('hey');

// Variables in JS- Variables are container for data
// Var: Variable can be re-declared & updated. A global scope variable. 
// let : Variable cannot be re-declared but can be updated. A block scope variable. 
// const : Variable cannot be re-declared or updated. A block scope variable

//Data Types in JS
// Number, String, Boolean, Undefined, Null, BigInt, Symbol
// Primitive- 7 
// Non Primitive- Objects- Collecition of values, Arrays, Functions

let age = 22;
console.log(age);
console.log(typeof age);

let fullName= "VIKASH YADAV"
console.log(fullName);
console.log(typeof fullName);

let isFollow= true;
console.log(isFollow);
console.log(typeof isFollow);

let x;
console.log(x);
console.log(typeof x);

let y= null;
console.log(y);
console.log(typeof y);

let a= BigInt("123");
console.log(a);
console.log(typeof a);

let b= Symbol("123");
console.log(b);
console.log(typeof b);

let student= { //key: value -: PAIRS
    name: "vikash",
    age: 22,
    cgpa: 9
}
console.log(student);

console.log(student["name"]);
console.log(student["name","age"]);
console.log(student.name);

student["age"]++;
console.log(student["age"]);

student.sex="M";
console.log(student);
