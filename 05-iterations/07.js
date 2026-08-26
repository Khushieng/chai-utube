const mynums = [1, 2, 3, 4, 5, ]

// const nums = mynums.map((num ) => num+5)

const nums = mynums
                .map((num) => num-1)
                .map((num => num +8))
                .filter((num) => num<=24) 
console.log(nums);