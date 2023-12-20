const user={
    username:"Deepak",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username+"sam"
// user.welcomeMessage()

// console.log(this);

//can't use this in function but we can use in object

// function chai(){
//     let username="Deepak"
//     console.log(username);
// }

const chai=()=>{  //arrow function
    let username="Deepak"
    console.log(this.username);
}
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }


// const addTwo = (num1,num2) => num1+num2  //implicit retrun
const addTwo = (num1,num2) => (num1+num2) //same as above
console.log(addTwo(3,4));