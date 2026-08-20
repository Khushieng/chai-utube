function saymyName(){
   console.log("S");
   console.log("O");
   console.log("N");
   console.log("m");
}

//saymyName()

// function addTwoNumber(number1, number2){
//    console.log(number1+ number2); 
// }
//  const result = addTwoNumber(3, 5)
// console.log("Result: ", result);

function addTwoNumber(number1, number2){
//    let result = number1 + number2 
//    return result
     return  number1 +number2
}
 const result = addTwoNumber(2, 6)

// console.log("Result: ", result);


function loginUser(name){
    if(name == undefined){
        console.log("please enter name");
        return
    }
    return `${name} just logged in`
}

console.log(loginUser("sonu"))
