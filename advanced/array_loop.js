// for of (array specify loop)

// ["","",""]  // element in array
 
// [{},{},{}]  // objects in array

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

// Maps

const map=new Map()
map.set('IN',"India")
map.set('US',"Unitedstate of America")
map.set('RSA',"South Africa")
map.set('AUS',"Australia")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}


// Objects are not iterable in for loop
// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }