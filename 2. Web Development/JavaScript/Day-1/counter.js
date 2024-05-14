let val = 0
document.getElementById("B1").onclick =function(){
    val--
    document.getElementById("Display_Numbers").textContent = val

}
document.getElementById("B2").onclick =function(){
    val = 0
    document.getElementById("Display_Numbers").textContent = val
   

}
document.getElementById("B3").onclick =function(){
    val++
    document.getElementById("Display_Numbers").textContent = val

}