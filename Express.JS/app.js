import express from "express";

//creating instance
const app = express();

// app- This variable holds the created Express app, which you can use to:
// Define routes- app.get(), app.post(), etc
// configure- middleware- app.use()
// start the server- app.listen()

app.get("/", (req,res) => res.send("<h1>Hello World!</h1>")); //routing k liye get method, ab two paarmeters- 1st- path- home page:- "/",about page:- "/about" and 2nd- callback function- (req,res)- jab b koi route ko hit krega to hum res send krdenge joki h yha HEllo world
//express js khud itna kabil h ki wo khud smjh jaye ki hm kya request send kr rhe h

app.get("/about", (req,res) => res.send("<h1>Hello About Page</h1>"));
app.get("/contact", (req,res) => {
    return res.send("<h1>Hello Contact Page</h1>");
});


// ab server ko listen krna pdega- means- agr koi ye local host pe jake isko hit kr rha h to hme active to rhna pdega na ki agr kisi ne request kri h to hmko sunna to pdega
const PORT= 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})
