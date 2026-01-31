// as we cannot use for of loop for the objects we use for in loop 
const obj={
    cn:"computer network",
    os:"operating system",
    iot :"internet of things"
}
for(const key in obj){
    console.log(`${key} is short form of  ${obj[key]}`)
             // print keys               //print values
}

const arr=["a","b","c","d","e"]
for(const key in arr){
    console.log(key) // orint indices of array element 0.1,2,3...
}
// iterations cannot be performed on the map with for in loop 