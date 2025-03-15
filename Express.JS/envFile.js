// Environment Variables

//process is global object in nodejs- we can access envrionment varuable by process.env file

// console.log(process);  //yhi smjhn ah ki kya h kya nhi

//=================================================
import express from "express";
const app = express();


app.get("/", (req,res) => res.send("<h1>Hello World!</h1>")); //routing k liye get method, ab two paarmeters- 1st- path- home page:- "/

const PORT= process.env.PORT || 3000;  //process obj get krlega
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})

//server running at- $env:PORT=3000; node --watch .\envFile.js
//set PORT=3001 && node --watch .\app.js

//import 'dotenv/config'
//require('dotenv').config()

//For newer people:-
//--env-file syntax
// and env variables as:- VARUABKE=value separated by new line