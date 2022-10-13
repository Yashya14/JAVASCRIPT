"use strict";

console.log("this is my fourth file");

// window methods in js

// alert("hello nagpur");
// blur("hey");

// const clr = setInterval(() => {
//     const date = new Date();
//     console.log("Toda is "+date)
// }, 3000);   // keeps executing code at certain inteval of time (as loop)

// let d = setTimeout(() => {
//     console.log("running.."); // executes code after a certain interval
// }, 2000);

// window.confirm("are you sure");
// window.close("do you want to close");
// window.open("https://hypercoderr.blogspot.com/?m=1/%20computer");

// let name = prompt("what is your name?","yash");
// window.scrollBy(100,0);
// window.scrollTo(50,0);
// clearInterval(clr);
// console.log("hello");
// clearTimeout(d);
// console.log("world");

// string templates in js

// let names = `hello 
// my name is 
// "yash"`;
// console.log(names);

// let firstname = "yash";
// let lastname = "pal";
// console.log(`good morning ${firstname} ${lastname}`);

// javascript for in loop -->objects

// const person = {
//     firstname : "yash",
//     lastname : "pal",
//     age : 20
// };

// let text = " ";
// // console.log(person);
// for(let x in person){
//     // console.log(person[x]);
//     // text += person[x];
// }

// for of loop -->array and strings,maps
// const person1 = ["yash","tanu","reya"];
// for(let x of person1){
//     console.log(x)
// }

// let lang = "javascript";
// for(let x of lang){
//     console.log(x);  // returns a char 
// }

// var a = new Set([10,20,30]); // objects
// const b = new Set(["yash","tanu","riiya"]);
// console.log(typeof(b))

// b.add("niki");
// console.log(b.values())

// map method holds key-value pairs in js  

// const person = new Map([
//     ["name",1],
//     ["age",2],
//     ["color",3]
// ]);

// console.log(typeof(person));
// person.set("id",4);
// let val = person.get("age");
// console.log(val); // retuns value of the key
// console.log(person.size);
// console.log(person.has("age")); // key exits in map-->returns true
// console.log(person.delete("color"));

// const person = {
//     firstname : "yash",
//     lastname : "pal",
//     fullname : function () {
//         // return this.firstname + " " + this.lastname
//         return this
//     }
// };

// console.log("₹");
// console.log(person);
// console.log(person.fullname());


// // arrow function 
// const hello = (a,b) =>{
//     // return "this is arrow function";
//     return a*b;
// }

// console.log(hello(10,20));