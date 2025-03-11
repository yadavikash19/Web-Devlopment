//Prototypes in JS

//A javascript object is an entity having state and behaviour(properties and method)
//JS Objects jave a special property called prototype- prototype khud ek object h jiske andr khud ki properties hongi
//We can set prototype using _ _proto_ _

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

    
}