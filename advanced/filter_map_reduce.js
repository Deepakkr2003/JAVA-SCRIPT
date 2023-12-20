const coding = ["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
    console.log(item);
    return item
})
// console.log(values);


//filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4) // simple using of filter

// const newNums=myNums.filter((num)=>{
//     return num>4  //using filter through object,if we use object then we have to return the value
// })



// using filter with the help of foreach
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

console.log(newNums);



// Map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums2=myNumbers.map((num)=>num+10)

//chaining of map
const newNums2=myNumbers
                .map((num)=>num*10)
                .map((num)=>num+2)
                .filter((num)=>num>=40)
console.log(newNums2);



//Reduce

const myNums1=[1,2,3]
// const myTotal=myNums1.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

//reduce using arrow 
const myTotal=myNums1.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);