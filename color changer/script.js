let button = document.querySelectorAll(".div");
const body = document.querySelector("body");

button.forEach((div)=>{
    div.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id==="red"){
            body.style.background=e.target.idt;
        }
        if(e.target.id==="green"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="blue"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="yellow"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="pink"){
            body.style.background=e.target.id;
        }
    })
})