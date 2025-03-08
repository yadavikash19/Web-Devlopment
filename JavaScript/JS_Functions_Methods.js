//Functions in JS- Block of code that performs a specific task, can be invoked whenever needed

//Function Definition
function sum( a, b){
    console.log("Welcome to sum funciton... your output is generating in 3 2 1...");
    let c=a+b;
    return c;
}

let x= sum(2,3);
console.log(x);

let a="HEY";
console.log(isNaN(a));

//fnx params-> like local variables of function-> block scope

//Arrow funciton:- a compact alternative to a traditional function expression

const MULTI = (a,b) =>{
    console.log(a*b);
}
// let y=MULTI(2,3);
// console.log(y); //in case of return statement in arrow funciton
MULTI(2,3);

//forEach Loop in Arrays

// arr.forEach(callBackFunction); 
//CallBackFunction: Here, it ia a function to execute for each element in the array
//A callback is a function passes as an argument to another function

// array.forEach(val => {
//     console.log("DO TASK");
// });

// function can be passed a parameter in javascript

let arr= [1,2,3,4,5];
arr.forEach( (val, idx, arr)=>{
    console.log(val*2, idx, arr);
})
//not for script

//High order function/Methods- that take other functions as a parameter or return it

//-----------------------------------------------------
//Some more array methods
//MAP (similar to foreach)- Creates a nrew array with the results of some operation. The value its callback returns are used to form new array

let nums= [1,2,3,4];
let new_nums= nums.map( (val)=>{
    return val*2;
})
console.log(new_nums);

//FILTER- Creates a new array of elements that give true for a condition/filter. Eg- all even numbers

let even_nums= nums.filter( (val)=>{
    return val%2==0;
})
console.log(even_nums);

//Reduce- Performs some operation & reduces the array to a single value. It returns that single value
let sum_nums= nums.reduce( (res, curr) => {
    return res + curr;
})
console.log(sum_nums);

const big= nums.reduce( (prev,curr) => {
    return prev>curr?prev:curr;
})
console.log(big);