// function x(){
//     var a=10;
//     let b=20;
//     console.log(a,b);
//     function y(){
//         let p="js";                 
//         let q="react";
//         console.log(p,q);
//             function z(){
//                 const username="Sairam";
//                 console.log(username);
//                 console.log(a);
//                 console.log(q);
//         }
//         z();
//     }
//     y();
   
// }
// x();

//! arrays

const users=["sairam","siddhu","prasanth","abhishek","snehith"];
for(let i=0;i<=users.length;i++){
    console.log(users[i]);
}

const x=users.map((user)=>{
    return user;
});
console.log(x);

let y=users.forEach((user)=>{
    console.log(user);
    return user;
});
console.log(y); 
//! array methods

// users.push("kittu");
// console.log(users);

// users.pop("abhishek");
// console.log(users);

// users.shift("sairam");

// users.unshift("prasanth");

// let frontend=["html","css","js","reactjs","angular","vue"];
// let backend=["nodejs","expressjs","java","php","golang"];
// let database=["mongodb","oracle","MySQL"];
// let fullstack=frontend.concat(backend,database);
// console.log(fullstack);

//! Objects

// let userDetails={
//     name:"Sairam",
//     age:"19",
//     city:"hyderabad",
//     address:{
//         area:"maisammaguda",
//         street:"1",
//         pincode:"500043"
//     }

// };
// console.log(userDetails.address.pincode);
// console.log(userDetails.name);

//! nested object

let car={
        brand:"BMW",
        capacity:"5",
        Model:"sedan",
        price:{
                carprice:"50000$"
        }
}

//! create an array of objects
let user=[
    {
        name:"sairam",
        City:"Warangal",
    },
    {
        name:"Siddhu",
        City:"Hyderabad",
    },
    {
        name:"Prashanth",
        City:"Vijayawada",
    },
 ]

