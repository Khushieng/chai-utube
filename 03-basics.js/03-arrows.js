const user = {
    username: "sonu",
    price:34,
    WelcomeMessage: function(){
      //  console.log(`${this.username} , welcome to website `);
        //console.log(this);
    }

}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()
// console.log(this);

// function chai(){
//     let username = "som"
//     console.log(this.username);

// }
// chai()



// const chai = function(){
//     let username = "gopu"
//     console.log(this.username);
// }


const chai =  () =>{
    let username = "gopu"
    console.log(this);
}
//chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)


console.log(addTwo(4, 2));

const mrArray = [4, 65, 6. 2]



