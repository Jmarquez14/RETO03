let titulo = document.getElementById('titulo')
let campoTxt = document.getElementById('campoTxt')
let btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    let campoUsuario = campoTxt.value
    if(campoUsuario != ''){
        titulo.innerHTML = 'Bienvenido '+ campoUsuario +' , este es tu listado de tareas:'
    }else{
        alert('Completa tu nombre.')
    }
    
})

let tarea1 = document.getElementById('tarea1')
let tarea2 = document.getElementById('tarea2')
let tarea3 = document.getElementById('tarea3')
let tarea4 = document.getElementById('tarea4')
let tarea5 = document.getElementById('tarea5')
let tarea6 = document.getElementById('tarea6')
let tarea7 = document.getElementById('tarea7')
let tarea8 = document.getElementById('tarea8')
let tarea9 = document.getElementById('tarea9')
let tarea10 = document.getElementById('tarea10')


tarea1.addEventListener('click', ()=>{
    if(tarea1.checked){
        tarea.style.textDecoration = 'line-through' 
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 1 y te levantaste.')
    }
    else{
        tarea.style.textDecoration = 'none'
    }
    
})
tarea2.addEventListener('click', ()=>{
    if(tarea2.checked){
        tareatxt2.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 2 y desayunaste.')
    }else{
        tareatxt2.style.textDecoration = 'none'
    }
})
tarea3.addEventListener('click', ()=>{
    if(tarea3.checked){
        tareatxt3.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 3 y almorzaste.')
    }else{
        tareatxt3.style.textDecoration = 'none'
    }
})
tarea4.addEventListener('click', ()=>{
    if(tarea4.checked){
        tareatxt4.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 4 y te fuiste.')
    }else{
        tareatxt4.style.textDecoration = 'none'
    }
})
tarea5.addEventListener('click', ()=>{
    if(tarea5.checked){
        tareatxt5.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 5 y diste el present.')
    }else{
        tareatxt5.style.textDecoration = 'none'
    }
})
tarea6.addEventListener('click', ()=>{
    if(tarea6.checked){
        tareatxt6.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 6 y fuiste a hacer las compras.')
    }else{
        tareatxt6.style.textDecoration = 'none'
    }
})
tarea7.addEventListener('click',()=>{
    if(tarea7.checked){
        tareatxt7.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 7 y viste los vídeos del día.')
    }else{
        tareatxt7.style.textDecoration = 'none'
    }
})
tarea8.addEventListener('click', ()=>{
    if(tarea8.checked){
        tareatxt8.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 8 y cenaste en la pc.')
    }else{
        tareatxt8.style.textDecoration = 'none'
    }
})
tarea9.addEventListener('click', ()=>{
    if(tarea9.checked){
        tareatxt9.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 9 y te bañaste.')
    }else{
        tareatxt9.style.textDecoration = 'none'
    }
    
})
tarea10.addEventListener('click', ()=>{
    if(tarea10.checked){
        tareatxt10.style.textDecoration = 'line-through'
        alert('Bien '+ campoTxt.value+ ', completaste la tarea 10 y te dormiste.')
        alert('No hay mas tareas por realizar.')
        
    }else{
        tareatxt10.style.textDecoration = 'none'
        
    }
    
})






