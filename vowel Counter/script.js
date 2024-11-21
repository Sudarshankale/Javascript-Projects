let textarea = document.getElementById("textarea");

let button = document.getElementById("btn");

let output = document.getElementById("output");

button.addEventListener("click",()=>{
    if(textarea.value == ""){
        output.innerText = `Please Enter Some text !!!`;
        output.style.color = "red";
    }
    else{
        let val = textarea.value;
        let count = 0;
        for(let i=0 ; i<val.length; i++){
                if (val[i]=="a" || val[i]=="e"||val[i]=="i" ||val[i]=="o" ||val[i]=="u") {
                    count++;
                }
        }
        output.style.color = "green";
        output.innerText=`Total number of Vowels = ${count}`;
    }
})