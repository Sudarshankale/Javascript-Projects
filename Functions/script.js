// function myfunction(){
//     console.log("I am Sudarshan kale");
//     console.log("Call me SK");
// }

// myfunction();   
// myfunction();


//i want to send msg

// function myfunction(msg){
//     console.log(msg);
// }

// myfunction("I am sudarshan  ");

//Write a function for Add two numbers

// function add(a,b){
//     //let Sum= console.log(`Sum of ${a} and ${b} is ${a+b}`);
//     let sum =a+b;
//     return sum;
// }
// let sum=add(12,20);
// add(5,7);


//Arrow Function
//for add
// const ArrowSum = (a,b)=>{
//     return a+b;
// }

// console.log(ArrowSum(4,5));
// //ArrowSum(4,5);

//Arrow function for Multiplication

// const Mul=(a,b)=>{
//     return a*b;
// }

// console.log(Mul(3,2));

//Que: Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string
//create an arrow function to perform the same task

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Sudarshan");


//Same task Using Arrow function

// const countVowels = (str)=>{
    
//     let count=0;
//     for(const char of str){
//             if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            
//                 count++;
//             }
//     }
//     console.log(count);
// }
// countVowels("Sudarshan");


//forEach loop

// let arr=[1,2,3,4,5];
// arr.forEach(function prinVal(val){
//     console.log(val);
// })

//Que for a given array of numbers , print the square of each value using the forEach loop

//let arr=[1,2,3,4,5];

// arr.forEach(function PrintSquare(val){
//     console.log(val*val);
// })

//Same using Arrow function

// arr.forEach((num)=>{
//     console.log(num*num);
// })


//one more way
// let num=[12,13,14];
//  let CalcSqr=(num)=>{
//     console.log(num*num);
//  }

//  num.forEach(CalcSqr)

//Map Method

// let num=[1,2,3,4,5];
// console.log("Old Array=",num);
// let newNum=num.map((value)=>{
//     return value*value;
// })
// console.log("New Array=",newNum);


//Filter method
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newArr=arr.filter((val)=>{
//     return val%2===0;
// })

// console.log(newArr);



//Reduce method
// let arr=[1,2,3,4];
// const output =arr.reduce((result,current)=>{
//     return result+current;
// })

// console.log(output);

///Que we are given array of marks of students. Filte out of the marks of students that scored 90+

// let marks=[90,45,79,95,69,98];

// let Above90=marks.filter((val)=>{
//     return val>90;
// })

// console.log(Above90);


///Qude take a number n as input from user. Create an array of numbers from 1 to n 
//use the reduce method to calculate sum of all numbers in the array;
//Use the reduce metod to calculate product of al numbers in the array

let n =prompt("Enter the number");

let arr =[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
})

console.log("sum=",sum);

let fact = arr.reduce((res,curr)=>{
    return res*curr;
})

console.log("Factorial=",fact);