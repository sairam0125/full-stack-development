//Async and Await

// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// },5000)
// console.log(40);
// console.log(50);

// setInterval(()=>{
    
//     document.writeln("hello ");
// },1500);
//! promies

let p1= new Promise((resolve,reject)=>{});
console.log(p1);

let p2=new Promise((resolve,reject)=>{
        resolve("success");
});
console.log(p2);
p2.then((response)=>{
    console.log(response);
}).catch((error)=>{
    consoie.log(error);
}).finally(()=>console.log("finally printing for both"));

let p3=new Promise((resolve,reject)=>{
    reject("Failures");
});
// console.log(p3);
