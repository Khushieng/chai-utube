const userEmail = ""
if(userEmail){
    console.log("got email");
}else {
    console.log("d'not got email");
}


// // falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//true values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyobj = {}
  if (Object.keys(emptyobj).length === 0){
     console.log("object is empty");
  }

  // Nullish Coalescing Operator (??): null undefined
  //val1 = 4 ?? 9
 // val1 = null ?? 10
// val1 =  undefined ?? 23
// console.log(val1);

// Ternary Operator
// condieion ? true: false
const TeaPrice = 299
TeaPrice >= 90 ? console.log("less than 90") : console.log
("more than 90")

