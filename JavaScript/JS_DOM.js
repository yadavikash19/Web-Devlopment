//Window Object- The window object reprents an open window in browser. It is browser's object (not JavaScript's) & is automatically created by browser
//It is a global object with lots of properties & methods

// console.log ek window object hi hai- code knows that clog is window's object, no need to write like this-
// let window={
//     key:value,
// }

window.console.log("HEY!!");
// window.alert("HEY!"); //SO console.log n alert are part of window's object

//DOM-
//When a web page is loaded, browser creatse a Documnet Object Model of page-
//we can access each n every thing of html page
//all elements of html become a special object in javascript file which named as Document


// console.log -> print - element ko print krane ke liye`
// console.dir -> print prop n methods of special objects like document - object ko print krane ke liye

console.log(window);
console.dir(window.document);

console.log(document);

console.log(document.body);
console.dir(document.body);

console.log(document.body.childNodes[1]);

document.body.style.backgroundColor="aqua";

// document.body.childNodes[1].innerText = "HEY"; //dynamic changes n manipulation - we do it by use of DOM

//----------------------------------------------------------------------------------------------
//DOM Manipulation
// Selecting by ID- 
document.getElementById("H1").style.backgroundColor="brown";
let yo= document.getElementById("H1");
console.log(yo);
console.log('hey');
console.dir(yo);
// Selecting by Class-
let cilas= document.getElementsByClassName("yo");
console.log(cilas);
console.log('hey2');
console.dir(cilas);
// document.getElementsByClassName("yo").style.innerText="YOYOYO";

//By Tag
// document.getElementsByTagName("span").style.backgroundColor="pink";

//----------------------------------------------------------------------------------------------
//QUERY SELECTOR

let elements= document.querySelector("p"); //first element - return that
console.dir(elements);

let elementsAll= document.querySelectorAll("p"); //all elements - returns all nodes of that tag
console.dir(elementsAll);
//----
let elementsByClass= document.querySelector(".yo"); 
console.log(elementsByClass);
let elementsByID= document.querySelector("#H1"); 
console.log(elementsByID);

//----------------------------------------------------------------------------------------------
// DOM Manipulation
// Properties- get,set,change
// tagName : returns tag for element nodes
console.log(elementsByID.tagName);

//========
// innerText : returns the text content of the element and all its children
console.dir(document.body.firstChild); // we are getting text node
// IN DOM- we get 3 nodes- text node, comment node, elements node
console.log('hey2');
console.log(document.querySelector("div").children);

let elementsByTag= document.querySelector("div");
console.log(elementsByTag.innerText);

//========
// innerHTML : returns the plain text or HTML contents in the element
console.log(elementsByTag.innerHTML);


//========
// textContent : returns textual content even for hidden elements
console.log(elementsByTag.textContent);

//----------------------------------------------------------------------------------------------
