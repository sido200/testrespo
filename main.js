let img1=document.querySelector(".w1")
let img2=document.querySelector(".w2")
let btn1w=document.querySelector(".btn1w")
let btn2w=document.querySelector(".btn2w")
let exw=document.querySelector(".wh")
let btnl=document.querySelector(".btnl")
let exl=document.querySelector(".ex ul")
let exz=document.querySelector(".ex .z1")
let btnz=document.querySelector(".btnz")
let img1z=document.querySelector(".iz1")
let img2z=document.querySelector(".iz2")
let btnlk=document.querySelector(".btnlk")
let exlk=document.querySelector(".ex a")
btn1w.addEventListener("click",()=>{
    img1.classList.remove("active")
    img2.classList.add("active")
    exw.classList.remove("aex")
})

btn2w.addEventListener("click",()=>{
    img1.classList.add("active")
    img2.classList.remove("active")
    exw.classList.add("aex")
  
})
btnl.addEventListener("click",()=>{
    exl.classList.toggle("ul")
    exl.classList.toggle("off-css")
    console.log('hi');
   if(exl.classList.value==="ul"){
    btnl.innerText="css off"
   }
   if(exl.classList.value==="off-css"){
    btnl.innerText="css on"
   }
   
})
btnz.addEventListener("click",()=>{
   
    exz.classList.toggle("az")
    img1z.classList.toggle("active")
    img2z.classList.toggle("active")
  
})
btnlk.addEventListener("click",()=>{
    exlk.classList.toggle("a")
  
   
})
