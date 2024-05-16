// // 1. Function Declartion
// // 2. Function Expression
// /*
// // The FE(Function Expression) is used for single time used function
// //  and reduce the wasting name declartion

//   Saves as Value or variable
// */

// // 1. FD Declartion 

// let num = [1,25,36,4,75,63,7,8,93,4]

// let number = num.filter(function (element){
//     return Math.pow(element,2) !== 0;
// })

// setTimeout(function (){
//     console.log("Odd Numbers")
// },3000)


// console.log(number)



// // Arrow Functions are More Simpler way to used function expressions


// let hello = function (){
//     console.log("hello world");
// }
// hello();

// // USing Arrow Function  without parameters

// let hello2 = ()=>{
//     console.log("Hello World2")
// }
// hello2();

// // Using Arrow Function  with parameters
// let hello3 = (username)=>{
//     console.log(`Hello ${username}`)
// }
// hello3("Saketh");



// Using Arrow funtion with map and reduce

let num = [1,3,5,6,3,5,2,4]

let nenum = [1,3,5,6,3,5,2,4].map((value)=>
    console.log(Math.pow(value,2))
);
let pronum = num.reduce((value1,value2)=>
    value1+value2
);
console.log(pronum)



