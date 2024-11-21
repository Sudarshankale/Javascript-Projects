const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const img = document.querySelector("#qr-img");

// console.log(input,button,img);

button.addEventListener("click",()=>{

    const inputVal = input.value;

    if(!inputVal){
        alert("Please enter the value")
    }
    else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
        img.src =`QR code for ${inputVal}`;
    }
})