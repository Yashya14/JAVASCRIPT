// console.log("hello");

// // const url = "https://jsonplaceholder.typicode.com/albums";
// const URL = "./api.json";

// const xhr = new XMLHttpRequest;
// // console.log(xhr);
// xhr.open("GET",URL);

// // xhr.onreadystatechange = function() {
// //     // console.log(xhr.readyState); // 
// //     if(xhr.readyState === 4){
// //         // console.log(xhr.response);
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         console.log(typeof data);
// //     }
    
// // }

// xhr.onload = () =>{
//     if(xhr.status >=200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response); // JSON.parse()--> string to js object
//         console.log(data);
//     }else{
//         console.log("something went wrong");
//     }
// }

// xhr.onerror = () =>{
//     console.log("network error");
// }
// xhr.send();

// array map()
// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//     a  =  value * 2;
//     console.log(a);
// }

// Es6 

// spread (...) operator

// const car1 = ['bmw','audi','mini','volvo'];
// const car2 = ['honda','tesla'];

// const combine = [car1,...car2];
// console.log(combine)

// for of
// let txt = "";
// for (const x of car1) {
    // txt += x + " ";
// }

// console.log(txt);

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",

    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
};
  
person.lang = "english"; // set an obj property using a setter

console.log(person);

// cookies in javascript

document.cookie = "language=javascript; expires = sat, 13 Oct 2022 20:18:00 UTC";
document.cookie = "location=india";

// JSON String in js

let student = {
  name : "yash",
  age : 20,
  city : "nagpur"
}

let data = JSON.stringify(student);
console.log(data);