const myArr=[4,5,3,2,6]
//Array creates shallow copy

const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(7,8.5,6)
console.log(myArr[2]);

// Array methods

myArr.push(7)
myArr.pop()
myArr.unshift(5)
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr=myArr.join() //change array into string
console.log((myArr));
console.log(newArr);

//slice,spice
const myn=[0,1,2,3,4,5,6]
console.log("A ",myn);

const myn1=myn.slice(1,4)
console.log(myn1);
console.log("B ",myn);
const myn2=myn.splice(1,4) 
//(splice)print last range also and trim that portion from main array
console.log(myn2);
console.log("C ",myn);
