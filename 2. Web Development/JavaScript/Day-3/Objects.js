// Objects are the collection of similar data related either values and/or method together

let person1 = {
    name : "JayaSree",age:21,sex:"female",isStudent:true, 
    says : () => console.log("Hey, Im Jayasree"),
}
let person2 = {
    name : "Reddy Hema",age:21,sex:"female",isStudent:true, 
    says : () => console.log("Hey there, This is Hema Reddy "),
}
let person3 = {
    name : "Sahitya",age:21,sex:"female",isStudent:1, 
    says : () => console.log("Hey, Im Sahitya"),
}
console.log(person1 , person2 , person3);
person1.says() , person2.says() , person3.says();
