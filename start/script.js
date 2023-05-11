


let btn = document.getElementById('btn')
let time = (t) => {
    return t * 1000
}

setTimeout(()=>{
    console.log('timeout 5 second')
}, time(5))


btn.onclick = (()=>{
    console.log('click')
})