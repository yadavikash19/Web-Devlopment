const fs= require("fs/promises");
const path= require("path");

const fileName= "fsAsyncAwait.txt";
const filePath= path.join(__dirname,fileName);

// fs.promises
// .readdir(file)
// .then((data)=> console.log(data))
// .catch((err)=> console.error(err));

const file= __dirname;
const readFolder= async () =>{
    try{
        const result= await fs.readdir(file);
        console.log(result);
    } catch(error){
        console.error("Error is",error);
    }
};

readFolder();

const writeFileExample = async () => {
    try{
        await fs.writeFile(filePath, "This is initial data","utf-8");
        console.log("File created succesfully");
    } catch(error){
        console.error(error);
    }
};

writeFileExample();

const ReadFileExample = async () => {
    try{
        const result= await fs.readFile(filePath, "utf-8");
        console.log(result);
    } catch(error){
        console.error(error);
    }
};

ReadFileExample();

const appendFileExample = async () => {
    try{
        await fs.appendFile(filePath, "\nThis is new data","utf-8");
        console.log("File updated succesfully");
    } catch(error){
        console.error(error);
    }
};

appendFileExample();