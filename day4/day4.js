// //! without parameters and arguments
// function demo(){    //^ function declaration
//     console.log("hello iam function demo()");

// }
// demo(); //^ function calling 

// ! with parameters and arguments
// function addnums(a,b){
//     console.log(a+b);

// }
// addnums(5,6);

// function addtocart(){
//     document.body.style.backgroundColor='grey';
//     alert("background color");
// }
// function remove(){
//     document.body.style.backgroundColor='white';
// }

// function isPalindrome(str){
//     let revstr="";
//     for(let i=str.length-1;i>=0;i--){
//         revstr +=str[i];
//     }
//     if(str==revstr){
//         console.log("palindrome");
//         console.log(str);
        
//     }
//     else{
//         console.log("not a palindrome");
    
//     }


// };
// isPalindrome('madam');

// //^ anonymus function
// let x=function(){
//     console.log("function expression");
// };
// x();//function invoking


// ! IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();//! IIFE can be executed for only one time.

// ^ arrow function

// let demo=()=>{console.log('Arrow function')}
// demo();
// let demo1=_=>{console.log('Arrow function')}//^ can use _ instead of ()
// demo1();
// let demo2=()=>console.log('Arrow function')//^ can remove{}
// demo2();
// leta=10
// let demo3=a=>console.log(a)//^can remove() if we have only one parameter
// demo3();
// let b=11,c=12;
// let demo4=(a,b)=>console.log(a,b)//^ use only when there are two
// demo4();

// //! return-implicit return, explicit return.
// function add(a,b){
//     a+b;
// }
// let x=add(5,5);
// console.log(x);

let x=(a,b) => a+b;
console.log(x(10,30));


let y=(a,b)=>{return a+b;}
console.log(y,(3,3));