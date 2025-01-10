//! higher order function.
// function hof(a){
//     return a;
// }
// let x=hof(function(){return "this is callback function"});
// // console.log(x);

// let b=function(){
//     console.log("anonymous function");
// };
// b();


// function add(callback){
//     return callback(5,10);

// };
// let x=add(function(a,b){return a+b});
// console.log(x);

//^ map can return but foreach doesnot return. forEach returns as undefined.
// let users=["Sairam","siddhu","aravind","rohan","snehith","shankar","aagam"];
//  /*let x=users.map((user)=>{
//      return user;
//      });
//     console.log(x);*/
//  let x=users.forEach((user)=>{
//      console.log(x);
//     });

var a=7;
let b=6;
function x(){
    var user="Ram";
    let company="google";
    const sal=15465312;
    console.log(user);
    console.log(company);
    console.log(sal);

    console.log(a,b);

}
x();
