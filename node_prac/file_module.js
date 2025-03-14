//FS Module- allows us to work with file system- read,write,update,delete & watch files
//utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols and emojis

const fs= require("fs");
const path= require("path");

// fs.writeFileSync(fileURLToPath,DataTransfer,options);
//options means kis format me read krna chahte ho

const filename= "new.txt";
const filename2= "new2.txt";
const filePath= path.join(__dirname,filename2);

// fs.writeFileSync(filename, "This is the initial Data", "utf-8");
console.log(__dirname);
fs.writeFileSync(filePath, "Creating file with help of path + file modules", "utf-8");
//==================

fs.appendFileSync(filePath,"\nNew line","utf-8");
//=================

const readFile= fs.readFileSync(filePath,"utf-8");
console.log(readFile);
// console.log(readFile.toString());

//=================
//const fileDelete= fs.unlinkSync(filename); //new.txt gone from our server side

//=================
fs.writeFileSync(filename, "This is the initial Data", "utf-8");
newUpdatedFileName= "UpdatedNew.txt";
const renameFile= fs.renameSync(filePath, newUpdatedFileName )

//another way- pass the new file path inside of new file name
/*
const newUpdatedFileName= "UpdatedName.txt";
const newFilePath= path.join(__dirname, newUpdatedFileName);
const renameFile= fs.renameSync(oldFilePath, newFilePath);
*/