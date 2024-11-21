//Array

//Make an array of marks of student

// let Marks=[54,78,90,53,89];
// console.log(Marks);
// console.log(Marks.length);//Length is an Property 

// let heroes= ["ironman","thor","hulk","shaktiman","spiderman"];

///Indices
// let Marks=[54,78,90,53,89];
//     Marks[0];

//     //change the value of array element

//     Marks[3]=60;


//Looping in array

//print the all elements of array
// let heroes= ["ironman","thor","hulk","shaktiman","spiderman"];

//     for(let i=0;i<heroes.length;i++){
//         console.log("i=",heroes[i]);
//     }

//Using for-of loop
// let heroes= ["ironman","thor","hulk","shaktiman","spiderman"];
// for(let hero of heroes){

//     console.log(hero);
// }


//More on it

// let cities=["pune","Ahmetnagar","Mumbai","delhi","hyderabad","Rahuri"];

// for(let city of cities)
// {
//     console.log(city.toUpperCase());
// }



//Que For a given array with marks of students [85,97,44,37,76,60]
//find the average marks of the entire class

// let marks=[85,97,44,37,76,60];
// let sum=0;

// for(let i=0;i<marks.length;i++)
// {
//     sum=sum+marks[i];
// }
// console.log("Sum=",sum);
// let avg=sum/marks.length;
// console.log("The average of the marks is",avg);

//same using for of loop
// let marks=[85,97,44,37,76,60];
// sum=0;
// for(let val of marks)
// {
//     sum=sum+val;
// }

// console.log("Average=",sum/marks.length);


//for a given array with prices of 5 items 
//All items have an offer of 10% off on them. Change the array to store final price after applying offer.
//using for-of loopl

// let items=[250,645,300,900,50]

// let i=0;

// for(let val of items)
// {

//     // console.log(`value at index ${idx} = ${val}`);
//      let offer=val/10;
//      items[i]=items[i]-offer;
//      console.log(`value after offer = ${items[i]}`);
//      i++;
// }


//Using for loop
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){

//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
//     console.log("Value after applying offer=",items[i]);
// }

// console.log(items);



//Array Methods

//let foodItems=["patato","apple","litchi","tomato"];

// console.log(foodItems);
// //push()
// foodItems.push("Chips","paneer","papaya");
// console.log(foodItems);


// console.log(foodItems);
// //pop()
// let deletedItem=foodItems.pop();
// console.log(foodItems);
// console.log("Deleted Item=",deletedItem);


//toString():-It convert Array into String
// console.log(foodItems);
// console.log(foodItems.toString());


//Concat():-It Joins multiple arrays & return result
// let fruit=["apple","litchi","mango"];
// let Vegis=["tomato","patato"];
// fruitVeg=fruit.concat(Vegis);
// console.log(fruitVeg);

//unshift():-Add items at start
// let fruit=["apple","litchi","mango"];
// console.log(fruit);
// fruit.unshift("banana");
// console.log(fruit);

//shift():-It delet items from first

// let fruit=["apple","litchi","mango"];
// console.log(fruit);
// let delet=fruit.shift();
// console.log("Delete=",delet);
// console.log(fruit);


//slice():- It return a piece of array

// let fruitVeg=["apple","litchi","mango","tomato","patato","chili"];
// console.log(fruitVeg);

// console.log(fruitVeg.slice(0,2));

//splic():- It change the original array{add,delete,replace}

let array=[1,2,3,4,5,6,7];
// array.splice(2,2,111,112);
// console.log(array);         

//Add element
// array.splice(2,0,101);

//Delete Element
// array.splice(3,1);
// console.log(array);
//Replace element

// array.splice(3,1,101);
// console.log(array);


m