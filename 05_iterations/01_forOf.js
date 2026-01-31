//for of loop 
const arr =[1,2,3,4]
for (const element of arr) {
    console.log(`${element}`)
}

//map - it is also an object in js. it stores only unique values 
const map =new Map()
map.set('1',"a")
map.set('2',"b")
map.set('3',"c")
console.log(map)
for (const [key,value] of map) {
    console.log(`${key}->${value}`)
}
// for of loop can iterate arrays , maps , strings but cannot iterate objects 