function sayMyName(){
    console.log("D");
    console.log("e");
    console.log("e");
    console.log("p");
    console.log("a");
    console.log("k");
}

//sayMyName()

// function addTwoNumbers(no1,no2){
//     console.log(no1+no2);
//}

function addTwoNumbers(no1,no2){
    let result=no1+no2
    console.log("DEEPAK");
    return result
}

const result=addTwoNumbers(3,5)
//console.log(`Result:${result}`);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Deepak"));



function calculateCartPrice(...nums1){ //using rest operator
    return nums1
}
console.log(calculateCartPrice(200,400,500))

const user={
    username:"deepak",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username:"Sam",
    price:4332
})


const myNewArray=[220,400,500,430]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));