const menu = document.getElementById('menu')
const lista = document.getElementById('lista')

menu.addEventListener('click', ()=>{
    if (lista.classList.contains('hidden')) {
        lista.classList.remove('hidden')
    }else lista.classList.add('hidden')
})

const btn = document.getElementById('btnmore')
const plates = document.getElementById('morePlates')

btn.addEventListener('click', ()=>{
    if (plates.classList.contains('hidden')) {
        plates.classList.remove('hidden')
        btn.innerHTML = 'Show less'
    }else{
        plates.classList.add('hidden')
        btn.innerHTML = 'load more'
    }
})

const modal = document.getElementById('modal')
const cerrar = document.getElementById('cerrar')

setTimeout(()=>{
    modal.classList.remove('hidden')
}, 2000)

cerrar.addEventListener('click', ()=>{
    modal.classList.add('hidden')
})