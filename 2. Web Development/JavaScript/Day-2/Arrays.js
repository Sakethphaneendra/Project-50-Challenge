// [...]  Spread Operator used to unpack the elements in arrays and strings 

let food = ["ladies finger","Potatoes","Chicken","Fish","Eggs"]

for(let oo in food){
    console.log(food[oo],end=" ")
}
let drinks = ["Orange juice","Bottle-o-Water"]

console.log([...food] + [...drinks])
