document.getElementById("btn").onclick = function(){
    let value = document.getElementById("val").value;
    console.log(value)

    // Added Random Number to number of Dices
    let dices =[]
    for(let i=0;i<value;i++){
        dices[i] = Random()
    }
    console.log(dices)
    document.getElementById("love").textContent = dices

    // Show Images
    let images = document.getElementById("images")
    let phots=[]
   for(let i=0;i<dices.length-1;i++){
    let val = `<img src=${dices[i]}.png>` 
        phots = [phots + val]
   }
   images.innerHTML = phots
}

function Random(){
    let dice = Math.floor(Math.random(1,6)*6)+1
    return dice
}