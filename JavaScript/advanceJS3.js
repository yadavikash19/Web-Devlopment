//Async-Await
//async function always returns a promise

//async function myFunc(){....}

//await pauses the execution of its surrounding async function until the promise is settled


async function hello() {
    console.log("HELLO");
}

function API(){
    //tasks
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("DATA FETCHED...");
            resolve(200);
        }, 2000);
    }); 
}

async function getWeatherData(){
    await API();
    await API();
    await API();

}
//----------------
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataID);
            resolve("Successful");
        }, 2000);
    })
}

async function getAllData(){
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);
}

//-------------
// IIFE: Immediately Invoked Function Expression- is a function that is called immediately as soon as it is defined

/*
(function) ();

(function(){
    // ...
})();

(()=>{
    // ...
})();
(async ()=>{
    // ...
})();
*/


(async function (){
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);
})();