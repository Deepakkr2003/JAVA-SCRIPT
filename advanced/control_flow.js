//if

const isUserLoggedIn=true
if(2=="2"){
    console.log("executed");
}

// < , > , <= , >= , == , != , ===  ,!== ,

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;

    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// falsy values(assume to be flase)
// flase ,0 , -0 , BigInt , 0n , "" , null , undefined ,NaN


//truthy values
// "0" , 'flase' , " " , [] , {} , function(){}


const userEmail=[]
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObt={}
if(Object.keys(emptyObt).length===0){
    console.log("Object is empty");
}


// Nullish coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
val1= undefined ?? null

console.log(val1);


// Terniary operator
// condition ? true : flase

const icePrice=100
icePrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
