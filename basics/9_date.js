let myDate=new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2023,0,23,6,56)
console.log(myCreatedDate2.toLocaleString());

let myDate2=new Date("03-12-2023")
console.log(myDate2.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})