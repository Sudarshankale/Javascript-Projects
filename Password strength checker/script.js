const input = document.querySelector("#Password");
const output = document.querySelector("#output");

input.addEventListener("input",()=>{
    const password = input.value;
    console.log(password);
    if(password.length<8){
        output.innerText ="Password is very short";
        output.style.color = "red";
    }
    else{
        if(password.search(/[a-z]/)==-1){
            output.innerText="Password missing lowercase"
            output.style.color="red";

        }
        else  if(password.search(/[A-Z]/)==-1){
            output.innerText="Password missing Uppercase"
            output.style.color="red";
        }
        else  if(password.search(/[1-9]/)==-1){
            output.innerText="Password missing Number"
            output.style.color="red";
        }
        else  if(password.search(/[~\!\@\#\$\%\^\&\*\(\)\_\+]/)==-1){
            output.innerText="Password missing lowercase"
            output.style.color="red";
        }
        else{
            output.innerText="Password is strong";
            output.style.color="Green";
        }
    }
})