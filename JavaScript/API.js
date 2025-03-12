//API- Application Programming Interface
//Example:- 
// Zomato -> Google Map API -> Google Maps
// API is like a messanger between these two
// If zomato needs data then it REQUEST API that API should ask system whether they can give data or not then API will ask Google and if system says YES then API gives google's data to zomato

// API just gives us the final things/ data

// API key- by which we can access the API data
//=============================================================

//Fetch API-
//The Fetch API provides an interface for fetching (sending/receiving) resources
//It uses Request and Response objects
//The fetch() method is used to fetch a resource (data)

// let promise = fetch(URL,[options])

const URL= "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

// let promise= fetch(URL)
// console.log(promise);

/*
const getCovidData= async () =>{
    console.log("getting data.....");
    let response= await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data.cases);
}
*/    

//response is basically an object that has various values

//network request means any request over the internet- in this we have various types- GET Request, Delete Request, Put Request, etc
//the request whose work is to only get the data- from server, api is GET REQUEST

//------------------
//Understanding Terms
//AJAX- Asynchronous JS & XML (previous data format in network request)
//JSON- Javascript Object Notation
//json() method: returns a second promise that resolves with the result of prasing the response body text as JSON (Input  is JSON, output is JS object)- 
// 1:- Response (JSON)
// 2:- JS Object

//BY PROMISE CHANING
let text= document.querySelector("#text");
let btn= document.querySelector("#btn")

function getCovidData2() {
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
}

btn.addEventListener("click",getCovidData2);

//--------------------
//HTTP Verbs- HyperText Transfer Protocol
//Response Status Code
//HTTP response headers also contain details about the responses such as content type, HTTP status code, etc
//Sending POST Request- https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#options

