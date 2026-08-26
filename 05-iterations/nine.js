const my = [1, 2, 3, 4, ]

// const nums = my.reduce(function(accumulator, currentvalue){
//     console.log(    `acc:${accumulator} and ${currentvalue}`);
//     return accumulator + currentvalue
// } ,2 )

const nums = my.reduce((acc, curr) => acc + curr,0 )
// console.log(nums);


const shopping = [
    {
        itemName: "scef",
        price : 290
    },
    {
        itemName: "set",
        price : 940
    },
   
]

const bill = shopping.reduce((acc, item) => acc + item.price ,0 ) 
console.log(bill);
