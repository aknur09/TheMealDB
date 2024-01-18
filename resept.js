const input=document.querySelector('input')
const root=document.querySelector('#root')
const btns=document.querySelectorAll('button')
const random=document.querySelector('#random')


const url='https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomUrl='https://www.themealdb.com/api/json/v1/1/random.php'
const letterUrl='https://www.themealdb.com/api/json/v1/1/search.php?f='

function getMeals(aty) {
    fetch (url+aty)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals);
            renderMeals(data.meals)
        })
}

input.onchange=()=>{
    getMeals(input.value)
}

function renderMeals(arr) {
    root.innerHTML=' '
    for (const obj of arr) {
        root.innerHTML+=`
        <li>
        <h5>${obj.strMeal}</h5>
        <img width="30%" src='${obj.strMealThumb}' />
        </li>`
    }
}



btns.forEach(btn=>{
    btn.onclick=()=>{
        console.log(letterUrl+btn.innerText);

        fetch(letterUrl+btn.innerText)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals);
            renderMeals(data.meals)
        })
    }
    
})  



function getMeal(id) {
    console.log(id);
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.meals);
       
    })
}

 
function getRandomMeal(){
    fetch(randomUrl)
       .then(res=>res.json())
       .then(data=>{
          console.log(data.meals);
          renderMeals(data.meals)
       })
}

random.onclick=()=>{
    root.innerHTML=''
    getRandomMeal()
}


