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


function loginUsername (Username){
    if(Username == undefined){
        console.log("please enter username");
        return
    }
    return `${Username} just logged in`
}
// console.log(loginUsername())


function calculatorCartPrice(...num1){
    return num1
}
// console.log(calculatorCartPrice(23, 450, 567));

const user = {
    name: "serum",
   price: 354,
}

function handleObject(anyobject){
    console.log(`Product is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user)

const myNewArray = [200,300,4000]
function returnanyvalue(getarray){
    return getarray[1]
}
console.log(returnanyvalue(myNewArray));

