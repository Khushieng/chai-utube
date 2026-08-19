//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.name = "sonu"
tinderUser.isLoggedIn = false                         

// console.log(tinderUser);

const regularUser ={
    email: "r@gmail.com",
    fullname:{
        name:{
            fistname: "monu"
        }
    }

}

// console.log(regularUser.fullname.name);

const obj1 ={1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b"}

// const obj3 ={ obj1 ,obj2}
//const obj3 = Object.assign({}, obj1, obj2, )

const obj3 = {...obj1,...obj2 }

//console.log(obj3);

const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
