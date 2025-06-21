const img=document.querySelector("#img")
const butt=document.querySelector("#butt")
const input=document.querySelector("#input")
const h1=document.querySelector("h1")
butt.addEventListener("click",()=>{
    if(input.value===""){
        h1.innerHTML="enter a pokemon"
        img.src=""
        img.computedStyleMap.display="block"
        return;
    }
 let pokemon=input.value.trim().toLowerCase()
 let url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`
 let p=fetch(url)

    p.then((resolve)=>{
     if(!resolve.ok){
        throw new Error(`${pokemon} is not a pokemon`)
        h1.innerHTML=`${pokemon} is not a pokemon`
        img.src=""
    }
    
    return resolve.json()
}).then((data)=>{
    console.log(data)
   let pic=data.sprites.front_default
   img.src=pic
   h1.innerHTML=`${data.name}`

}).catch((error)=>{
    console.log(error)
    h1.innerHTML=`${pokemon} is not a pokemon`
    img.src=""
    img.computedStyleMap.display="block"
})
})
