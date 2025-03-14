/*
The http module in Node.js allows developers to create an HTTP server and handle client requests and server responses. It provides methods and properties to work with HTTP requests and responses, enabling the creation of REST APIs, web pages, and 
other networked applications.
A web server is software or hardware that serves web content (HTML, CSS, JavaScript, etc.) to clients (usually browsers) over the internet or an intranet. It uses protocols like HTTP/HTTPS to handle requests and responses.
*/

const http= require("http");

//main methods:
const server= http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hey I am viki bhoi... FUTURE MILLIONAIRE</h1>");
        res.end();
    }
    if(req.url ==="/about"){
        res.setHeader("Content-Type", "text/plain");
        res.write("About me");
        res.end();
    }
});
//bts its a Event Emitter

const PORT= 3000;
server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})

/*
package.json is a configuration file used in Node.js projects.
 • It contains metadata about the project and information on project dependencies.
 • Go to your project folder and use npm init to initialize the project or to create package.json
Name, Version, Description (”name”, “version”, “description”):
 • Specifies the name and version of the project.
 • Helps uniquely identify and version the project.
Entry Point (”main”):
 • Specifies the main entry point file for the application.
 • The file executed when the application starts.
Scripts:
 • Contains custom scripts for various tasks (e.g., running tests, starting the server).
 • Provides shortcuts for common development tasks.
Author, License, and More:
 • Information about the project's author, license, repository, and other metadata.
 • Useful for documentation and collaboration.
You can also use npm init -y to create package.json quickly

*/