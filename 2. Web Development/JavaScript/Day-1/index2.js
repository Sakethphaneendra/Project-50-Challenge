/*
    How to input user data
    1. window prompt (easy was)
    2.html textbox (professional way)

*/

// let username =  window.prompt("What's Your user name ")
// document.getElementById("MyId").textContent = `Welcome ${username}`

// or we can use textbox and submit button

document.getElementById("submitt").onclick = function(){
    let user = document.getElementById("textbox").value;
    let user2 = document.getElementById("textbox2").value;
    document.getElementById('MyId').textContent = `${user} Loves ${user2}`
}

document.getElementById("clear").onclick = function(){
    document.getElementById("textbox").value = "";
    document.getElementById("textbox2").value ="";
}


// Type Casting 
//  (Number,String,Boolean) 

let x = "20"
let y = 20
let z = true
console.log(x, typeof x );
x = Number(x);
console.log(x, typeof x );

let x2 = Number(prompt());
console.log(x2 , typeof x2 );
