// singleton

// object literals


const mySym = Symbol("key1")
const Jsuser = {
    "full-name":"khushu",
    [mySym ]:"myKey1",
    age:3,
    location: "goa"
}

// console.log(Jsuser.age)
// console.log(Jsuser["full-name"])
// console.log(typeof Jsuser[mySym])                                         

// Jsuser.location = "panji"
// Object.freeze(Jsuser)
// Jsuser.age = 2
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js")
}

console.log(Jsuser.greeting);