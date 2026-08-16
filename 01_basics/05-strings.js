const name = "hitesh"     
const repoCount = 56
//console.log( `hello my is ${name}and my repo count is $
   // {repoCount}`);

const gameName = String('htsan=u=v')
//console.log(gameName[4]);
//console.log(gameName.__proto__);

//console.log (gameName.length);
//console.log (gameName.toUpperCase());
//console.log (gameName .charAt(3));
//console.log (gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-4, 7)
console.log(anotherString);

const newStringOne = "    htisg    " 
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com%20chaudhry"

console.log(url.replace('%20', '-'));
console.log(url.includes('hh'));
console.log(gameName.split('='));