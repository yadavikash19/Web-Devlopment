//for LOOP
for(let i=0; i<5; i++){
    console.log(i);
    
}

//for-of Loop

let str= "VIKASH";
for(let val of str){
    console.log(val);
    
}
let namee= "YADAV"
let len=0
for(let i of namee){
    len++;
}
console.log(len);

//for in loop- give keys of an object
let student= {
    Name:"VIKASH",
    Roll:29,
}
for(let i in student){
    console.log(student[i]); 
}

//-----------------------------------------------------------
//Strings

let NOM= "VIKASH"
let AAKHIRI= 'YADAV'

console.log(NOM.length);
console.log(NOM[0]);

//Template Literals- string created with backtick(`)
//String Interplotation- To create strings by doing substitution of placeholders
let a=100;
console.log(`SEE THIS THING :- ${a}`);

//Tab:- /t

//String Methods in JS

let yo="Yoyo Yoyo";
console.log(yo.toUpperCase());
console.log(yo.toLowerCase());
console.log(yo.trim()); //removes the white spaces from start and end

console.log(yo.slice(0,3));
let yo2="SIMI";
console.log(yo.concat(yo2));

console.log(yo.replace("y","b"));
console.log(yo.replaceAll("y","b"));

console.log(yo.charAt(2));