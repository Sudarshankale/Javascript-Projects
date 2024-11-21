const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

const timer = document.querySelector("#timer")

let minutes = 25;

let second = 0;
let timerId;

console.log(timer,"timer")

start.addEventListener("click",()=>{
    setInterval(()=>{
        second--;
        console.log(second);
        console.log(minutes);
        timer.innerHTML = `${minutes}:${second}`;
    },100);
})