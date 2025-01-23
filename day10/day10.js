// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise successfully completing");
//     },3000)

// });

// async function demo(){
//     console.log("Start");
//     let x=await p;
//     console.log(x);

//     console.log("end");
// }
// demo();

// async function fetchUsers(){
//     let response=await fetch("https://jsonplaceholder.typicode.com/users");
//     let data=await response.json();
//     console.log(data);
// }
// fetchUsers();
// async function fetchuser(){
//     let response=await fetch("https://jsonplaceholder.typicode.com/users");
//     let data=await response.json();
//     console.log(data);
// }
// fetchuser();

//! document get element by id value.
// const element=document.getElementById("demo");
// element.innerHTML="DOM";
// console.log(element);

const div=document.getElementById("test");
div.innerHTML=`<h1>Header</h1>`;
console.log(div);


