import readline from "readline";
import fs from "fs";
import path from "path";

const rl = readline.createInterface({  //interface jispe hm kuch b read ya write kr ske
    input:process.stdin, 
    output:process.stdout
})

rl.question("Enter the file name : ", (filename)=>{
    rl.question("Data to be entered in this file : ",(data)=>{
        fs.writeFile(`${filename}.txt`,data,"utf-8",(err)=>{
            if(err){
                console.error(err);
            }else{
                console.log(`File "${filename}.txt" created successfully!`);
            }
            rl.close();
        });
    })
})

