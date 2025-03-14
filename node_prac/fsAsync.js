//Async Crud today

//syntax: fs.writeFile(path, data, options, callback); //callback to deal with errors- function with err paarmeters
//syntax: fs.readFile(path, options, callback); //A function with err,data paarmeters
//syntax: fs.appendFile(path, data, options, callback); //A function with err,data paarmeters

const fs= require("fs"); 
const path= require("path");

const filename= "newAsync.txt";
const filePath= path.join(__dirname,filename);

fs.writeFile(filePath, "This is initial Data", "utf-8", 
    (err)=>{
        if(err) console.error(err);
        else console.log("File has been saved");
    });
fs.readFile(filePath, "utf-8", (err,data)=>{
    if(err) console.error(err);
    else console.log(data);
});

fs.appendFile(filePath, "\nThis is updated Data", "utf-8", 
    (err)=>{
        if(err) console.error(err);
        else console.log("File has been saved 2");
    });

/*
!Important:-
Output-
File has been saved
File has been saved
This is initial Data

Reason- 
Your code is asynchronous, meaning the operations do not execute sequentially. Let's break it down:

Why is the output like this?
fs.writeFile starts first (async)

It writes "This is initial Data" to newAsync.txt.
Since it's async, the next lines execute before it's necessarily completed.
fs.readFile starts

It tries to read the file immediately after calling writeFile, but since writeFile is not necessarily done yet, the read might execute before writeFile completes.
fs.appendFile starts

It appends "\nThis is updated Data" to the file, but after fs.readFile has already printed the file content.
That's why the output does not include "This is updated Data".

*/

/*
So- 
const fs = require("fs");
const path = require("path");

const filename = "newAsync.txt";
const filePath = path.join(__dirname, filename);

fs.writeFile(filePath, "This is initial Data", "utf-8", (err) => {
    if (err) console.error(err);
    else {
        console.log("File has been saved");

        // Now read the file after writing is done
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) console.error(err);
            else {
                console.log(data);

                // Now append to the file after reading is done
                fs.appendFile(filePath, "\nThis is updated Data", "utf-8", (err) => {
                    if (err) console.error(err);
                    else console.log("File has been updated");
                });
            }
        });
    }
});


*/

// fs.unlink(path, callback);
// fs.unlink(filePath, (err)=>{
//     if(err) console.error(err);
//     else console.log("File has been deleted");
// });