const inputbox = document.querySelector("#input");
const button = document.querySelectorAll(".btn");

let string ="";

let arr = Array.from(button);


arr.forEach(button => {
        button.addEventListener("click",(e)=>{
            if(e.target.innerHTML == "="){
                string = eval(string);
                inputbox.value = string;
            }
            else if(e.target.innerHTML == "C"){
                string = "";
                inputbox.value= string;
            }
            else if(e.target.innerHTML == "del"){
                string = string.substring(0,string.length-1);
                inputbox.value = string;
            }
            else{
                string += e.target.innerHTML;
                inputbox.value = string;
            }
        })
});
