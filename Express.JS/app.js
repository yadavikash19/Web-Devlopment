import express from "express";
import path from "path";

//creating instance
const app = express();

//In newer version of Node.js (14.8+), you can use top-level await without needing to wrap it in an async function

//ES Modules- Caveats
// fetch API to fetch the data and promises return so using await
const response = await fetch("https://official-joke-api.appspot.com/random_joke");
const json= await response.json();   //jo result milta h usko json me convert krte h or wait
console.log(json);

const staticPath= path.join(import.meta.dirname, "public"); 
app.use(express.static(staticPath))  //Alternate way- jisme hmne public folder ka absolute path pass kiya h
app.use("/public",express.static(staticPath))  //jab hame /public url path pr dikhana ho
// app.use(express.static("public"))  //it is a middleware

//=========================
// app- This variable holds the created Express app, which you can use to:
// Define routes- app.get(), app.post(), etc
// configure- middleware- app.use()
// start the server- app.listen()


//routing k liye get method, ab two paarmeters- 1st- path- home page:- "/",about page:- "/about" and 2nd- callback function- (req,res)- jab b koi route ko hit krega to hum res send krdenge joki h yha HEllo world
app.get("/", (req,res) => { 
    // console.log(import.meta.dirname);
    // console.log(import.meta.url);
    // const __filename= new URL(import.meta.url).pathname //URL ka instance create kr rhe h-- to get absolute path
    // console.log(__filename);

    const homePagePath= path.join(import.meta.dirname, "public","index.html");  //ye use kiya-import.meta.dirname- taki directory ka absolute path kiya jaye

    res.sendFile(homePagePath);
}); 
//express js khud itna kabil h ki wo khud smjh jaye ki hm kya request send kr rhe h

app.get("/about", (req,res) => res.send("<h1>Hello About Page</h1>"));
app.get("/contact", (req,res) => {
    console.log(import.meta.dirname); // __dirname not defined in express
    console.log(import.meta.url); 
    const __filename= new URL(import.meta.url).pathname;
    console.log(__filename);

    return res.send("<h1>Hello Contact Page</h1>");
});


// ab server ko listen krna pdega- means- agr koi ye local host pe jake isko hit kr rha h to hme active to rhna pdega na ki agr kisi ne request kri h to hmko sunna to pdega
const PORT= 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})
