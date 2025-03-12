//Prototypes in JS

//A javascript object is an entity having state and behaviour(properties and method)
//JS Objects jave a special property called prototype- prototype khud ek object h jiske andr khud ki properties hongi
//We can set prototype using _ _proto_ _- jo dusri object obj2 h jisko hm prototype bna rhe honge, us obj ki function hm apne first object use kr payenge
//*If object & prototype have same method, object's method will be used

const student={
    fullName: "viki",
    marks: 100,
    printMarks: function() {
        console.log("marks = ", this.marks);
    },
};

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
    calcTax2: function(){
        //both are same method to define the functions
    }
}

const karanArjun={
    salary:50000,
    
}

karanArjun.__proto__ = employee;
//obj2.proto = obj1;
//jis obj ke funciton hum use krna chahte h usko hm dusre obj ka prototype set krdenge
// it means we have set obj1 as a protype of obj2

//prototype is a special property that every javascript object has, its type is reference to one object

const karanArjun2={
    salary:50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
}
karanArjun2.__proto__ = employee;
//*If object & prototype have same method, object's method will be used

//---------------------------------------------------------
//Classes in JS
//Class is a program-code template for creating objects.
//Those objects will have some state(variables) & some behaviour(functions) inside it

class car{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}
let obj= new car();
let obj2= new car();
obj2.setBrand("yo");
//---------------------------------------------------------

//Constructor() method- automatically invoked by new
//initializes object- jab new object create create ho rhi ho- us time pe kuch kaam krwana chahte h, kuch properties ko set krna chahte h ya initialise krna chahte h

class parent{
    constructor(brand){
        console.log("Creating new object");
        this.brand=brand;
    }
}

let child1= new parent();
let child2= new parent("child2");

//---------------------------------------------------------
//Inheritance in JS- passign down properties & methods from parent class to child class

class Parent{
    hello(){
        console.log("Hello!!");
    }
    work(){
        console.log("So much work");
    }
}
class Child extends Parent{
    work(){
        console.log("Not so much");
    }
}

let OBJ= new Child(); //OBJ.hello():- Hello!!

//If child & parent have same method, child's methpd will be used(Method overriding)

//---------------------------------------------------------
//Super keyword- The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

class Person{
    constructor(name){
        console.log("Enter parent constructor");
        this.species= "Homo Sapiens"
        this.name= name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{  
    constructor(name){
        console.log("Enter child constructor");
        super(name); //to invoke parent class constructor
        console.log("Exit child constructor");
        // this.name= name;
    }
    //agar child class me constructor banante h toh us constructor ka zaruri h ki wo SUPER ko use krke parent class ke constructor ko phle call kre child_constructor me exit hone se phle
    work(){
        super.eat();
        console.log("WORK");
    }
}

let engObj= new Engineer("vikash");

//-------------------------------------------------------
//Ques1- 

let data= "secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data = ",data);
    }

}
let student1 = new User("viki","viki@gmail.com");
let student2 = new User("simi","simi@gmail.com");

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="some new value";
    }
}
let admin1= new Admin("admin1","admin1@gmail.com");

//-------------------------------------------------------
//Error Handling-
let a=5;
let b=6;

console.log(a+b);

//try-catch blocks

try{
    console.log(a+c);
}catch(err){
    console.log(err);
}
console.log(a+b);
