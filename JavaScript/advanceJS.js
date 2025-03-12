//callbacks, callback hell, promises, promises chaining, async wait
//Asynchornous things- async wait >> promise chains >> callback hell

// Synchronous- Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous
//Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
//Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

//in API- we request from API and need to fetch the data from API
// code 1
// code 2
// API - parallely run it
// code 3
// code 4

function hello(){
    console.log("HELLO");
}
setTimeout(hello, 2000);
console.log("second line");
//jo code time leta h usko asynchoronous me daal diya taki uske liye wait na krna pde

//-----------------------------------------------------------
//Callbacks- is a function passed as an argument to another function

/*
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum)

// calculator(1,2,sum()) //sumCallback is not a function at calculator 

//also
calculator(1,2,(a,b)=>{
    console.log(a+b);
})
// callback ke under pura function bnakr naam b pass kr skte h ya fir complete wo function b hum pass kr skte h
*/

//=======================================
/*
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);
*/
//========================================
/*
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);
*/
//========================================
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

//==========================================
function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));
//==============
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

//--------------------------------------------
//Callback Hell- Nested callbacks stacked below one another forming a pyramid structure- Pyramid of Doom- this programming becomes to understand & manage

// function getData(dataId) {
//     console.log("data : ",dataId);
// }
function getData(dataId){
    setTimeout(()=>{
        console.log("data : ",dataId);
    }, 2000);
}
/*
getData(1);
getData(2);
getData(3);
*/
//in this case we will get all the data at once but we want to done first operation then second
//SO-

function getData1(dataID, getNextData){

    setTimeout(()=>{
        console.log("data : ",dataID);
        if(getNextData){ // ✅ Only calls if getNextData exists
            getNextData(); 
        }
    }, 2000);

}
getData1(1, ()=>{
    getData1(2, ()=>{
        getData1(3, ()=>{
            getData1(4);
        });
    });
});


// getData1(1, getData1(2)); //NO- getData1(2) will immediately get execute n also give error

//aese syntax ko hme dekh k sikhna pdta h fir use apply krna pdta h or practical experience ke sath khud likhna sikhte h
let yo= document.querySelector("#myButton")
yo.addEventListener("click",()=>{
    document.body.style.backgroundColor="blue";
})