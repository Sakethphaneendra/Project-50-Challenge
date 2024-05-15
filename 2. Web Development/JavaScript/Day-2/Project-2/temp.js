document.getElementById("submitbtn").onclick= function(){
    // Find which one is Checked
    
    let TextBox = document.getElementById("TempValue")
    let C2F = document.getElementById("C2F")
    let F2C = document.getElementById("F2C")
    let result = document.getElementById("answer")

    if(C2F.checked){
        result.innerHTML =Math.floor((TextBox.value * 9/5) + 32) + "f";
    }
    else{
        result.innerHTML = Math.floor((TextBox.value -32) * (5/9)) +"c";
    }
}