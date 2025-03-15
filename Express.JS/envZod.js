
import {z, ZodError} from "zod";

const ageSchema= z.number().min(18).max(100).int();

const userAge= 17; //kya is schema me meri value fit aata h ya nahi

// const parseUserAge= ageSchema.parse(userAge);          //why parse- kyu sirf validate nhi balki transform b kr rha h- "18", lastIndexof,trim,uppercase---- par zod me sab ek line me ho jata h or wo b PARSE me 
// const {data, error, success}= ageSchema.safeParse(userAge);
// console.log(data/error/success); //individually access krna pdega bas difference ye h

// console.log(parseUserAge);

//parse method ek exception throw krta h jisko hme catch krna hota h

try{
    const parsedUserAge= ageSchema.parse(userAge);
    console.log(parsedUserAge);
} catch (error){
    //instance is a javascript operator used to check if an object is an instance of a specific class or constructor
    if(error instanceof ZodError){
        console.log(error.issues[0].message); //Display error message only
    } else {
        console.log("Unexpected error", error);
    }
}