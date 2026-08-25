// const coding = ["js", "rubj", "das", "gux"]

//  const value = coding.forEach ((index) => {
//     // console.log(index);
//     return index
// })
// console.log(value);

const mynums = [1, 2, 3, 4, 5, 5, 6, 7, ]

// const newnum = mynums.filter( (num) => {
//    return  num>4
    
// } )

// const newnum = []
// mynums.forEach( (num) => {0
// if (num >4){
//     newnum.push(num)
// }
// })
// console.log(newnum);

const book = [
    {title: 'book one', gener: 'DAA', publish: '1981', edition: 204},
    {title: 'book two', gener: 'DBMS', publish: '1982', edition: 2003},
    {title: 'book three', gener: 'ASC', publish: '1984', edition: 1906},
    {title: 'book four', gener: 'COI', publish: '1985', edition: 2009},
    {title: 'book five', gener: 'C++', publish: '1986', edition: 2007},
    {title: 'book six', gener: 'SCI', publish: '1987', edition: 2000},
    {title: 'book seven', gener: 'KAA', publish: '1988', edition: 1901},

];
let userBook  = book.filter( (kk) => kk.gener === 'DAA')

userBook  = book.filter( (kk) => kk.edition >= 2000)

console.log(userBook);