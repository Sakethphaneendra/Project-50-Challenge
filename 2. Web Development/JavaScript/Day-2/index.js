let number = Math.floor((Math.random(1,100)*100)+1)
let Attmpts= 4

let btn = document.getElementById("Btn").onclick = function(){
    let guess = document.getElementById("number").value;
   if(Attmpts!=0){

    document.getElementById("Attmpts").textContent = Attmpts
    if(guess>number){
        document.getElementById("hint").textContent = ` Hint : ${guess} is Very High ${number}`
        Attmpts--;
        
    }
    else if (guess<number){
        document.getElementById("hint").textContent = ` Hint : ${guess} is Very Low`
        Attmpts--;
    }
    else{
        document.getElementById("hint").textContent = ` Hint : ${guess} is Correct in ${Attmpts} Attmts `
    }
    } 
    else{
        document.getElementById("hint").textContent = `Losser Answer is ${number}`
    }
    
}