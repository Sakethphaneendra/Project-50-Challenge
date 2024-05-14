document.getElementById("roll").onclick = function(){
    document.getElementById("H2").textContent = ""
    let RandomNumber1 = Math.floor(Math.random(1)*6)+1;
    let RandomNumber2 = Math.floor(Math.random(1)*6)+1;
    let RandomNumber3 = Math.floor(Math.random(1)*6)+1;

    document.getElementById("H1").textContent = `${RandomNumber1}, ${RandomNumber2}, ${RandomNumber3}`
    
    if((RandomNumber3 == RandomNumber1) && (RandomNumber3 == RandomNumber2) ){
        document.getElementById("H2").textContent = "Winner"
    }
  
}
