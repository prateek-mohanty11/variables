console.log(3
    +3);//dont write this , the code will not be readable and easy to understand
console.log("Prateek");
 
let name = "Prateek"//string datatype
let age = 18//integer datatype
let isLoggedIn = false//boolean datatype

//Primitive datatype
//number //range of number in memory is 2^53 , for more bigger numbers bigint is used
//string => writtn in ""
//boolean => either true or false
//null =>standalone value , its not zero , it is represention of empty value
//undefined => not assigned value of a variable
//symbol => used for uniqueness

//object

console.log(typeof "Prateek");
console.table([typeof "Prateek"]);
console.log(typeof null); //interview qns ...null is a object
console.log(typeof undefined);

//symbol
let id = Symbol('12345')
let anotherId = Symbol('12345')
console.log(id === anotherId);//output => false coz , giving same value still symbols make uniqueness to them

//Non Primitive or Reference type

let a = ["Prateek", "Prince", "Coffee buddies"]
console.table([a]);

//Object
let myObj = {
    name: "Prateek",
    age: 18
}// inside the curly braces those are objects and ',' should be given

const myFunction = function () {--
    console.log("HIii");
}
console.log(typeof myFunction);
