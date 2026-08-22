// Immediately Invoked Function Expression (IIFE)


(function chai(){
    console.log(   `db connected`);
})();

( (name) =>{
    console.log(`tb not connected ${name}`);
})("sonz")

