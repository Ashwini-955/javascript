

const name = ["abc","sdf","oer","wdew"]
name.forEach((element,index,arr) => {
    console.log(element,index,arr)
});
// for each is very important for arrays and objects 
const info =[
    {
        user:"ashu",
        age:20
    },
    {
        user:"ajay",
        age:21
    },
    {
        user:"raunak",
        age:21
    }
]
info.forEach((item)=>{
    console.log(`${item.user} has age ${item.age}`)
})