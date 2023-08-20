// Primitive

// 7 types : string,Number,Boolean,null,undefined,symbol,BigInt
// Javascript are dynamicaaly typed language

const id=Symbol('123')
const id1=Symbol('123')
console.log(id);
console.log(id1);
console.log(id===id1);

const bigNumber=327648194092689374n  // it become BigInt


// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];


//creting objects
let myObj={
    name:"Deepak",
    age:21,
}


//creating function
const myFunction = function(){
    console.log("Hello World");
}