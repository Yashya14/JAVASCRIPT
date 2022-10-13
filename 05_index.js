// console.log("this is my fivth file of javascript");

// // classes in js

// class car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }

// let myCar = new car("BMW",2022);
// // console.log(myCar.name);
// console.log(myCar);

// classlist in JS

// const cls = document.querySelector(".para");
// console.log(cls);
// // cls.classList.add("dark");
// console.log("added");
// cls.classList.remove("dark");
// const ans = cls.classList.contains("para");
// console.log(ans)

// const ans = cls.classList.toggle("dark")
// console.log(ans)

// adding html using JS

// const adding = document.querySelector(".para");
// // adding.innerHTML = "<li>new list</li>";
// adding.innerHTML += "<li>Add new list</li>";
// adding.innerHTML += "<li>Add second list</li>";

// const newpara = document.createElement("li");
// const newtxt = document.createTextNode("adding text");
// newpara.append(newtxt);
// console.log(newpara)
// console.log(newtxt)

// callback functions

// function myfun(callback){
//     console.log("this is my first function");
//     callback();
// }

// myfun(sec = () =>{
//     console.log("this is my second function");
// })

// getnum = (num1,num2,callback) => {
//     console.log(num1,num2);
//     callback(num1,num2)
// }

// add = (a,b) => console.log(a+b);

// getnum(10,20,add);

// callback hell in asyn prgm
// // console.log(10);

// const heading1 = document.querySelector(".heading1");
// setTimeout(()=>{
//     heading1.textContent = "hey yash";
//     heading1.style.color = "red";
// },1000)

// // callback hell
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "yash";
//     heading1.style.color = "red";
//     setTimeout(() => {
//         heading2.textContent = "tanu";
//         heading2.style.color = "orange";
//         setTimeout(() => {
//             heading3.textContent = "shubhu";
//             heading3.style.color = "green";
//             setTimeout(() => {
//                 heading4.textContent = "reya";
//                 heading4.style.color = "aqua";
//                 setTimeout(() => {
//                     heading5.textContent = "priya";
//                     heading5.style.color = "blue";
//                     setTimeout(() => {
//                         heading6.textContent = "yash";
//                         heading6.style.color = "red";
//                     }, 1000); 
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 1000);
// }, 2000);


// function chngetxt(element,text,color,time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject("element not found");
//             }
//         }, time);
//     })
// }

// chngetxt(heading1,"one","red",1000)
//     .then(()=>chngetxt(heading2,"two","orange",1000))
    // .then(()=>chngetxt(heading3,"three","green",1000))
    // .then(()=>chngetxt(heading4,"four","blue",1000))
    // .then(()=>chngetxt(heading5,"five","violet",1000))
    // .then(()=>chngetxt(heading6,"six","purple",1000))
    // .then(()=>chngetxt(heading7,"seven","aqua",1000))
    // .catch((error)=>{
    //     console.log(error);
    // })

// promise in javascript

// const bucket = ['coffee','chips','vegetables','rice','salt'];

// const friedricePromise = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetables") && bucket.includes("salt")) {
//         resolve("Fried rice");
//     }else{
//         reject("couldn't do it");
//     }
// })


// friedricePromise.then(
//     // when promise is resolve
//     (myfriedrice)=>{
//         console.log("lets eat ",myfriedrice);
//     },
//     (error)=>{
//         console.log(error);
//     } 
// )

// promise resolve and promise chaining

// const mypromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })


// Then() -- then method always return promise

// function mypromise() {
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }

// mypromise()
// .then((value=>{
//     console.log(value);
//     value += "bar";
//     return value;
// }))
// .then((value) =>{
//     console.log(value);
// })


