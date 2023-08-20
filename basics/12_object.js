//singleton(made from constructor)

//object literals

const mySym=Symbol("Key1")

const JsUser={
    name:"Deepak",
    "Full name":"Deepak Kumar",
    age:18,
    [mySym]:"MyKey1",  //use of symbols in object
    location:"Bhagalpur",
    email:"Deepak@eil.com",
    isLoggedIn:false,
    lastLogininDays:["Monday","Tuesday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]); //only acees by this method
console.log(JsUser[mySym]);

JsUser.email="Deepak@gooe.com"
//Object.freeze(JsUser)  //avoid changing of data
JsUser.email="Deepak@microft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());