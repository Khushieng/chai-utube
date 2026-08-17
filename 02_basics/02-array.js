const hero = ["thor", "spiderman", "ironman"]
const dc = ["batman", "flash", "superman"]
//hero.push(dc)
// console.log(hero);
// console.log(hero[3][1]);

const myhero = hero.concat(dc)
//console.log(myhero);

const allmyhero = [...hero,...dc]
//console.log(allmyhero);

const another_array = [1,23,4,4[5,6,8], 6,[56,56, [3,4,89]]
const realanother_array = another_array.flat
console.log(another_array);
