// let userDetails={
//     name:"Sairam",
//     age:"19",
//     city:"Warangal"
// }

// console.log(userDetails);
// console.log(typeof(userDetails));

// let x=JSON.stringify(userDetails);
// console.log(x);
// console.log(x.name);
// console.log(typeof(x));

// let y=JSON.parse(x);
// console.log(y);

// localStorage.setItem("User1","Sairam");
// localStorage.setItem("User2","Shankar");
// localStorage.setItem("User3","Siddhu");
// localStorage.setItem("User4","Snehith");
// localStorage.setItem("User5","prashanth");
// localStorage.setItem("User6","Aravind");

// localStorage.removeItem("Name");

// let user5= localStorage.getItem("User4");
// console.log(user5);

// localStorage.clear();

sessionStorage.setItem("user1","rohan");
sessionStorage.setItem("user2","hemanth");
sessionStorage.setItem("user3","ganesh");

let exuser=sessionStorage.getItem("user1");
console.log(exuser);

sessionStorage.removeItem("user2");

// sessionStorage.clear();
