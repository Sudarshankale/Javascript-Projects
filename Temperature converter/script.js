let celcius = document.querySelector("#cel");
let kelvin = document.querySelector("#kel");
let faranheit = document.querySelector("#far");

celcius.addEventListener("input",()=>{
    let c = parseFloat(celcius.value);
    let k = c + 273.15;
    let f = (c*9/5)+32;
    kelvin.value = k;
    faranheit.value = f;
})  

kelvin.addEventListener("input",()=>{
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = k-273.15 * 9/5 +32;
    celcius.value = c;
    faranheit.value = f;
})  
faranheit.addEventListener("input",()=>{
    let f = parseFloat(faranheit.value);
    let c = (f-32) * 5/9;
    let k = (f-32) * 5/9+273.15;
    celcius.value = k;
    kelvin.value = k;
})  