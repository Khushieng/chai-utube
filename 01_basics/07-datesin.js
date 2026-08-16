//Dates

let myDate  = new Date()
//console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2026, 7 , 16, 5 ,8)
let myCreatedDate = new Date("2026-07-16")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getYear());
// console.log(newDate.getDay() +1);

//  `${newDate,getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: 'long'
    

})
