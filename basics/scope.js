let a=300

if(true){
    let a=10
    const b=20
    var c=30
    console.log("inner:", a);
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="deepak"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username="deepak"
    if(username==="deepak"){
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++ interesting +++++++++++++++++


console.log((addone(5)));
function addone(num){
    return num+1
}


// addTwo(5)  //can't excess the value of function like this
const addTwo=function(num){  //also called expression
    return num+2
}
