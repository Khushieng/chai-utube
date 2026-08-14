//Primitive

//7 types: string, Number, Boolean, null, Undefined, Symbol, Bigint

const score = 1000
const scoreValue = 1000.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('356')
const anotherId = Symbol('356')
console.log(id== anotherId); 

const bigNumber = 74889623n



//Reference(non-primitive)

//Array, Objects, functions

const heros = ["shaktiman","naagraj","doga"];
let myobj={
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof myFunction);

