const myObject={
    js:"javascript",
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
//using forin
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// foreach loop

const coding=["js","cpp","ruby","java"]

coding.forEach(function(val){
    console.log(val);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


const myCoding=[
    {
        lanName:"javascript",
        lanFile:"js"
    },
    {
        lanName:"c++",
        lanFile:"cpp"
    },
    {
        lanName:"python",
        lanFile:"ph"
    },
]

myCoding.forEach((item)=>{
    console.log(item.lanName);
})