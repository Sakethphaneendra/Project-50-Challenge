let passwordLength = 15

let StrongPassword = ""

let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = lowercase.toUpperCase()
let numbers = "1234567890"
let symbols = "!@#$%^&*|"

let merge = [lowercase + uppercase +numbers +symbols].toString();

for(let i=0;i<passwordLength-4;i++){
    let randomIndex = Math.floor(Math.random(1,merge.length)*merge.length)+1
    StrongPassword = StrongPassword +merge[randomIndex]
}

    let lowercase2 = Math.floor(Math.random(1,uppercase.length)*uppercase.length)
    let uppercase2 = Math.floor(Math.random(1,uppercase.length)*uppercase.length)
    let numbers2 = Math.floor(Math.random(1,numbers.length)*numbers.length)
    let symbols2 = Math.floor(Math.random(1,symbols.length)*symbols.length)
    StrongPassword = StrongPassword+ lowercase[lowercase2] + uppercase[uppercase2] + numbers[numbers2] + symbols[symbols2]

console.log(StrongPassword)

