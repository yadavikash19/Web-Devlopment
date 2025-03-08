// DOM Manipulation

// Attributes
let H1= document.querySelector("#H1");
console.log(H1);

let attribute= H1.getAttribute("id");
console.log(attribute);

let nameAttri= H1.getAttribute("name");
console.log(nameAttri);

H1.setAttribute("name","new_name");

// -------------------------------------------------------------
//Style

H1.style.backgroundColor="blue"; 
H1.style.textDecoration="underline"; 

//access n change done
//------------------------------------------------------------
//Insert Elements
// node.append( el ) //adds at the end of node (inside)
// node.prepend( el ) //adds at the start of node (inside)
// node.before( el ) //adds before the node (outside)
// node.after( el ) //adds after the node (outside)
let appendButton= document.createElement("button");
let prependButton= document.createElement("button");
let beforeButton= document.createElement("button");
let afterButton= document.createElement("button");
appendButton.innerText= "Append Button";
prependButton.innerText= "Prepend Button";
beforeButton.innerText= "Before Button";
afterButton.innerText= "After Button";  
// console.log(newButton);

let div= document.querySelector("div");
div.append(appendButton)
div.prepend(prependButton)
div.before(beforeButton)
div.after(afterButton)

//read appendChild() and removeChild()
//------------------------------------------------------------
//Delete Elements
afterButton.remove();
//------------------------------------------------------------
//classList
console.log('hey');
let ele= document.querySelector(".para");
let attri= ele.getAttribute("class");
console.log(ele);
console.log(attri);

ele.classList.add("new_className");