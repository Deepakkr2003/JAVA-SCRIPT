const name="Deepak"
const rp=50

//console.log(name+rp+"Kumar");

console.log(`Hello my name is ${name} and my rp is ${rp}`);


const name2="Deepak"
console.log(name2[0]);
console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt(2));
console.log(name2.indexOf('p'));

const newString=name2.substring(0,4)
console.log(newString);

const anotherString=name2.slice(-8,5)
console.log(anotherString);

const newstringone="   Deepak    "
console.log(newstringone);
console.log(newstringone.trim());

const url="https://deepak.com/hitesh%20kumar"
console.log(url.replace('%20','-'));

const a="Deepak-kumar-21441"
console.log(a.split('-'));