# projects related to dom 

[click]https://stackblitz.com/edit/stackblitz-starters-dmkzmite?file=01_colorChange%2Findex.html
```javascript project 1
const buttons =document.querySelectorAll('.button')
const body =document.querySelector('body')
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  });
});

```

```javascript project 2

const form =document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')
  if(height===' '||height<0||isNaN(height)){
    results.innerHTML='invalid'
  }else if(weight===' '||weight<0||isNaN(weight)){
    results.innerHTML='invalid'
  }else{
    const bmi =((height*weight)/100).toFixed(2);
    results.innerHTML=`${bmi}`
  }
})
```
```javascript project 1
const clock =document.getElementById('clock')

setInterval(function(){
  let date = new Date()
console.log(date.toLocaleTimeString)
clock.innerHTML= date.toLocaleTimeString();
},1000)

```

