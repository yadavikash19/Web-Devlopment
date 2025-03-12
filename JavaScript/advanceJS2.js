//Promises
//Promises is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell

// let promise new Promise( (resolve,reject)=>{....}) - function with two handlers
//*resolve & reject are callbacks provided by JS

/*
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
*/

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Successful")
    // reject("some error");
})
//promise- pending, fulfilled(resolved), rejected

function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataID);
            resolve("Successful");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    })
}

/*
let promise2= getData(2);
undefined
data :  2
promise2
Promise {<fulfilled>: 'Successful'}
*/

//--------------------------------------------------------------
// .then() & .catch()
// promise.then( (res) => {...}) -tabhi hoga tab promise fulfill hoga
// promise.catch( (err) => {...})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        resolve("DONE");
    })
}

let promise2 = getPromise();
promise2.then((res) => {
    console.log("Promise Fulfilled", res); //Promise Fulfilled DONE
});
promise2.catch((err) => {
    console.log("Promise Failed ", err);
});
//--------------------------------------------------------------

//Promise Chain

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("SUCCESS");
        }, 4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("SUCCESS");
        }, 4000);
    });
}

/*
console.log("Fetching data 1");
let p1= asyncFunc();
p1.then((res)=>{
    console.log(res);
    console.log("Fetching data 2");
    let p2= asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    })
    
})
*/

//
// Better way:-
console.log("Fetching data 1...");
asyncFunc().then((res) => {
    console.log("Fetching data 2...");
    asyncFunc2().then((res) => { })
})

// console.log("Fetching data 2");
// let p2= asyncFunc2();
// p1.then((res)=>{
//     console.log(res);
// })

//--------------------------------------
function getData1(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataID);
            resolve("Successful");
        }, 2000);
    })
}

getData1(1).then((res) => {
    console.log(res);
    getData1(2).then((res) => {
        console.log(res);
        getData1(3).then((res) => {
            console.log(res);
        })
    })
})

/*
//ALSO-
getData1(1).then((res)=>{
    getData1(2).then((res)=>{
        getData1(3);
    })
});
*/
//actual Chaining promises
getData1(1)
    .then((res) => {
        return getData1(2);
    })
    .then((res) => {
        return getData1(3);
    })
    .then((res) => {
        console.log("sucess");
    })