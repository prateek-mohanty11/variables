let score1 = 33//saved as integer 
let score2 = "33"//saved as string
let score3 = "33abc"//not a pure number but saved as a string //also applicable for "Prateek" a string ,can not be convrt into a num
let score4 = null//saved as object
let score5 = undefined//saved as undefined
let score6 = true

console.log(typeof score1);//output - number
console.log(typeof (score1));//output - number
console.log(typeof (score2));//output - string

let valueInNum2 = Number(score2)
console.log(typeof valueInNum2);//it will show score2 as number 
console.log(valueInNum2);

let valueInNum3 = Number(score3)//js wil convert score3 into number datatype but its integer value will be Not a number(NaN)
console.log(typeof valueInNum3);
console.log(valueInNum3);

console.log("From here null,undefined and boolean");

console.log(typeof score4);
let valueInNum4 = Number(score4)
console.log(typeof valueInNum4); 
console.log(valueInNum4);//display num value as 0 

console.log(typeof score5);
let valueInNum5 = Number(score5)
console.log(typeof valueInNum5); 
console.log(valueInNum5);//js wil convert score5 into number datatype but its integer value will be Not a number(NaN)

console.log(typeof score6);
let valueInNum6 = Number(score6)
console.log(typeof valueInNum6);
console.log(valueInNum6);// true => 1 ; false => 0
//"33" => 33
//"33abc" => NaN
// true => 1 ; false => 0

//let true = 1//here true as a variable , because true is a reserved word
let isTrue = 1
let booleanIsTrue1 = Boolean(isTrue)
console.log(booleanIsTrue1);

console.log("from here empty , strings");

let empty = ""//the output will be false coz ,empty will pass the value 0. //giving space will pass value 1
let booleanIsTrue2 = Boolean(empty)
console.log(booleanIsTrue2);

let isString = "any string like Prateek"//the output will be true coz ,empty will pass the value 1
let booleanIsTrue3 = Boolean(isString)
console.log(booleanIsTrue3);

console.log("Conversion of number into strings");

let someNum = 55
let stringNum = String(someNum)
console.log(stringNum);//the output will be number (55)
console.log(typeof stringNum);//the datatype will be string
