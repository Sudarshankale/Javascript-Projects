// //Access element by Id
// let heading=document.getElementById("heading");
// console.dir(heading);

// //Access element by class 
// let Info = document.getElementsByClassName("Info");
// console.dir(Info);

//Access by element

// let data=document.getElementsByTagName("p");
// console.log(data);


//**********Query Selector********* */

// let element=document.querySelector("p");
// console.log(element);

// let Info=document.querySelectorAll("Info");
// console.log(Info);

///DOM Manipulation//

//1 innerText
// let div = document.querySelector("div");
// console.dir(div);

// div.innerText;
// div.innerHTML;


//Que Create a H2 heading element with text- "Hello Javascript" .Append "From Apna College Students" to this Textusing JS.

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" From Sudarshan Kale";


//Que 2 Create 3 divs with common class name -"box",Access them and add some unique txt to each of them
// let divs = document.querySelectorAll(".box");
// console.dir(divs);

// let idx=1;
// k(let div of divs){
//     div.innerText= `new unique value ${idx}`;
//     idx++;
// }
// let idx=1;
// for(let i=0;i<divs.length;i++){
//     divs[i].innerText=`new unique value ${idx}`;
//     idx++;
// }


///Attribute///
//1 getAttribute(attr)
// let div=document.querySelector(".box");
// console.log(div);

// let clas=div.getAttribute("class");
// console.log(clas);


//Set Attribute//

// let div=document.querySelector("div");
// console.log(div);

// console.log(div.setAttribute("class","newClass"));




//style
//Node.style

//Access the div and change the style

// let div=document.querySelector("div");

// div.style.backgroundColor="red";
// div.style.fontSize="25px";




///Isert element

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div = document.querySelector("div");

//Add element at the end of div element
// div.append(newBtn)

//Add element in the div at start
// div.prepend(newBtn);

//Add element just before the div
// div.before(newBtn);

//Add element After the div
// div.after(newBtn);

//Delete node

// let p = document.querySelector("p");
// p.remove();


//Practice Quetion

//create a new button element.Give it a text "click me",background color of red & text color of white. 
///Insert the button as the first element inside the body tag 

// let btn = document.createElement("button");
// btn.innerText="Click me";
// let body=   document.querySelector("body");
// body.prepend(btn);
// //ye hum aise bhi likh sakte hai=>
// // let body=document.querySelector("body").prepend(btn);
// btn.style.backgroundColor="red";
// btn.style.color="white";
// console.dir(btn);



//Practice que 2=> Create a <p> tag in html, give it a class & some styling.
//create a new class in css and try to append this class to the <p> element
//Did you notice , how you overwrite the class name when you add a new one?
//Solve this probleem using classList


let para = document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class","newClass");
//when we use set attribute then we use new class but old styling get removed

//we solove this problem using classlist
para.classList;

para.classList.add("newClass");
