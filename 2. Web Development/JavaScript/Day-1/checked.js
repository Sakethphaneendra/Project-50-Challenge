let checkbox = document.getElementById("Subb");
let r1 = document.getElementById("c1");
let r2 = document.getElementById("c2");
let r3 = document.getElementById("c3");


document.getElementById("submit").onclick = function(){
   
    if(checkbox.checked){
    document.getElementById("sd").textContent = "You are Subscribted to Bro Code";
    } 
    else{
        document.getElementById("sd").textContent = "You are Not Subscribted to Bro Code";
    }
    if(r1.checked){
        document.getElementById("sj").textContent = "You are Pay using Visa Card";
    }
    else if(r2.checked){
        document.getElementById("sj").textContent = "You are Pay using Master Card";
    }
    else{
        document.getElementById("sj").textContent = "You are Pay using Rupay Card";
    }
   
    
}
