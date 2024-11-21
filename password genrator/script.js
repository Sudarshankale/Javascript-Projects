const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet  ="abcdefghijklmnopqrstuvwxyz";
const numberSet ="123456789";
const symbolSet = "~!@#$%^&*()_+/"        

const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperCase = document.querySelector("#upper-case");
const lowerCase = document.querySelector("#lower-case");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const button = document.querySelector("#btn");


const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const genratePassword = (password = "")=>{
    if (upperCase.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCase.checked) {
        password += getRandomData(lowerSet);
    }
    if (numbers.checked) {
        password += getRandomData(numberSet);
    }
    if (symbols.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length<totalChar.value) {
       return genratePassword(password)
    }

    
    passBox.innerText  = truncateString(password,totalChar.value)
}
genratePassword();


button.addEventListener("click",function(){
    genratePassword();
})

function truncateString(str,num){
    if(str.length>num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}