import express from "express";
import path from "path";

//creating instance
const app = express();


const staticPath= path.join(import.meta.dirname, "public"); 
app.use(express.static(staticPath))
// app.use("/public",express.static(staticPath))

app.use(express.urlencoded({extended:true})); 

/*
app.get("/contact", (req,res) => {
    console.log(req.query);
    res.redirect("/");
    // res.send(`Name is ${req.query.name} & message is ${req.query.message}`)
});
*/ 
app.post("/contact", (req,res) => {
    res.send(req.body);  //undefined
    // res.redirect("/");
});

//get me kya ho rha h ki chice upar url me show krengi joki shi nhi h or url long accept b nhi krti

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})
