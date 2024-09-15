document.querySelector(".nav > img").addEventListener("click",()=>{
    document.querySelector(".page1 > .menu").classList.toggle("open")
})

document.querySelector(".page1 > .menu").addEventListener("click",()=>{
    document.querySelector(".page1 > .menu").classList.remove("open")
})