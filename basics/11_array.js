const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

//spread(....) same as concat
const all_heros2=[...marvel_heros,...dc_heros]
console.log(all_heros2);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(6)
console.log(real_array);


console.log(Array.isArray("Deepak")); //check array or not
console.log(Array.from("Deeapk")); //convert into array
console.log(Array.from({name:"Deepak"})); //interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));