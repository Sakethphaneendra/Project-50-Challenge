// ForEach

let friuts = ["Apple","Bannana","Coconut","DrangonFruit"]

friuts.forEach(uppercase)

function uppercase(element,index,array){
    console.log(`${element}`);
}


//  Map Function
    
const dates = ["12-12-2023","27-12-2023","15-01-2024","22-02-2024"];
console.log(dates)

// But in AUE year comes first then month and date

let Auedates = dates.map(AUE);
console.log(Auedates)
function AUE(element,index,array){
    let date = element.split("-");
    return `${date[2]}-${date[1]}-${date[0]}`
}

// filter function return new array using boolean values only true or false

let ls = ["Saketh","Hema","JayaSree","Sahitya"];

let namee = ls.filter(len);
console.log(namee);

function len(element){
    return element.length >=5;
}

// reduce Function used to reduce the number of element in array to a single value

let marks = [32,54,76,98,36,87]
console.log(`Total Marks : ${marks.reduce(total)}`);
function total(previous, next){
    console.log(previous +" "+next)
    return previous+next;
}