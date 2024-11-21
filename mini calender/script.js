let month = document.querySelector(".month")
let weekday = document.querySelector(".day")
let daydate = document.querySelector(".date")
let year = document.querySelector(".year")

window.addEventListener("DOMContentLoaded",()=>{
    const date = new Date();
    console.log(date,"date")

    year.textContent = date.getFullYear();
    daydate.textContent = date.getDate();
    month.textContent = date.toLocaleDateString("en-US",{month:"long"})
    weekday.textContent = date.toLocaleDateString("en-US",{weekday:"long"}) 
    // day.textContent - date.getDay("en-US",{day:"long"});
    
})