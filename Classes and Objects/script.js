//object
// const student = {g
//     FullName : "Sudarshan kale",
//     marks : 80.0,
//     printMarks:function(){
//         console.log("marks= ",this.marks);
//     }
// }


//Prototypes in js 

// const employee = {
//     calTax(){
//         console.log("Tax rate is 10%");
//     }
// }

// const Sudarshan = {
//     salary:50000
// }

// const chetan = {
//     salary : 40000
// }


// Sudarshan.__proto__=employee;
// chetan.__proto__=employee;

// Sudarshan.calTax();

//Classes

class ToyotaCar{
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar();

let lexus = new ToyotaCar();

