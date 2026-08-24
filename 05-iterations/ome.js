//for 

for( let index = 0 ; index <= 10; index++ ){
    const element = index;
    if (element == 5){
       // console.log("maji aa gya")
    }
   // console.log(element);
}

for ( let i = 0; i< 4 ; i++){
 // console.log(`Outer loop value: ${i}`);
  for( j = 2; j< 5; j++){
    //console.log(`innerloop value${j } and inner ${j}`);
   // console.log(i + '*' +j + ' = ' +i*j);
  }
}
let Array = ["A","Apple", "bor"]
console.log(Array.length);
for (let index = 0; index < Array.length; index++){
    const element = Array[index];
   // console.log(element);
}

//break and continue

for (let i = 1; i< 12; i++){
    if (i == 7){
        console.log(`detected 7`);
        break
    }
    console.log(`value of i is ${i}`);

}

