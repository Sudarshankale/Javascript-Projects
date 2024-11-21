// let btn = document.querySelector("#btn");

// btn.onclick = () =>{
//     console.log("Button Clicked");
//     let a = 5;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("You are inside div");
// }

//Event Object

// let btn = document.querySelector("#btn");

// btn.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY)
//     }

// let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log("You are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY)
// }
    

//Event Listeners
////add event listeners
// let btn = document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
// })

// btn.addEventListener("click",(evt)=>{
//     console.log("Button Clicked-by Handeler 2");
//     console.log(evt.type);

// })


////Remove Event Listeners

// let btn = document.querySelector("#btn");

// // create 4 event listner remove 3rd handler

// btn.addEventListener("click",()=>{
//     console.log("Button Clicked-by Handeler 1");
// })

// btn.addEventListener("click",()=>{
//     console.log("Button Clicked-by Handeler 2");
// })

// const handler3=()=>{
//     console.log("Button Clicked-by Handeler 3");
// }

// btn.addEventListener("click",handler3);

// const handeler4 =()=>{
//     console.log("Button Clicked-by Handeler 4");
// }
// btn.addEventListener("click",handeler4);

// btn.removeEventListener("click",handler3);
// btn.removeEventListener("click",handeler4);


//****Practice Question */
//Create a toggle button that changees the screen to dark-mode when clicked & light-mode when clicked again

//using only javascript
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currentMode="light";
// modeBtn.addEventListener("click",()=>{
//     if(currentMode==="light"){
//         currentMode="dark";
//         body.style.backgroundColor="black";
//     }
//     else{
//         currentMode="light";
//         body.style.backgroundColor="white";
//     }
//     console.log(currentMode);
// })

//Using classes

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode="light";
modeBtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
})
