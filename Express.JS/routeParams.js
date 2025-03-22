import express from "express";
import path from "path";

//creating instance
const app = express();


const staticPath= path.join(import.meta.dirname, "public"); 
app.use("/public",express.static(staticPath))

app.get("/profile/:username", (req,res) => { //[Object: null prototype] { username: 'vikash' }
    console.log(req.params);
    // console.log(req.params.username);
    res.send(`<h1>You typed ${req.params.username}</h1>`);
}); //dynamic route se access kiya

app.get("/profile/:username/article/:slug", (req,res) => { 
    console.log(req.params);
    const formatedSlug= req.params.slug.replace(/-/g," "); //global replacement
    res.send(`<h1>Article ${formatedSlug} written by ${req.params.username}</h1>`);
});

app.get("/", (req,res)=>{
    console.log(req.query);
    res.send("<h1>HELLO</h1>");
})

// express hme automatically ek object return krta h jaha pe dynamic url is called property or key

const PORT= 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})
