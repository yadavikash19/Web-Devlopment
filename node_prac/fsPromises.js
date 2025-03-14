const fs= require("fs");
// const fs= require("fs/promises");
const path= require("path");

const fileName= "fsPromises.txt";
const filePath= path.join(__dirname,fileName);

//why .then() & .catch()
//.then()- ensures clear chaining of multiple asynchronous operations
//.catch()- centralizes error handling, making it easy to debug and manage failures

/*
const file= __dirname;
fs.promises
.readdir(file)
.then((data)=> console.log(data))
.catch((err)=> console.error(err));
*/

/*
const fs = require("fs").promises;
const path = require("path");

const fileName = "newAsync.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "This is initial Data", "utf-8")
    .then(() => {
        console.log("File has been saved");
        return fs.readFile(filePath, "utf-8"); // Read after writing
    })
    .then((data) => {
        console.log(data);
        return fs.appendFile(filePath, "\nThis is updated Data", "utf-8"); // Append after reading
    })
    .then(() => {
        console.log("File has been updated");
    })
    .catch((err) => console.error(err)); // Centralized error handling

*/
//========================================

fs.promises
.writeFile(filePath, "This is a initial data", "utf-8")
.then(console.log("File created succesfully!"))
.catch((err)=> console.log(err));

fs.promises
.readFile(filePath, "utf-8")
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

