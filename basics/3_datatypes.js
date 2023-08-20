let score="33abc"

console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN(not a number)
//tru => 1; false=> 0

let isLoggedIn = 1

let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

//1 => true; 0 => false
//"Deepak" => true

let s=33
let sa=String(s)
console.log(sa);
console.log(typeof sa);


// *************************Operations*******************

let value = 3
let negValue = -value
console.log(negValue);
console.log(2**3); //power of 2

let str1 = "Hello"
let str2 = " Deepak"
let str3 = str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true); //1
console.log(+""); //0