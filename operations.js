let value = 9
let negValue = -value
console.log(negValue);
console.log(2**5);// 2**5 means 2 to the power 5 //  ** act as power function

let a = "Hiii"
let b = " Prateek"
let c = a + b
console.log(c);

console.log("1" + 5);//output => 15
console.log("1" + "5");//output => 15
//these are not proper ways to write a code .avoid it.
console.log("1" + 5 + 5);//output => 155 , coz if first is string then after that js will convert very thing as string 
console.log(1 + 5 + "5");//output => 155 
console.log("5" + (3+5) + (2**2));//output => 584
console.log("5" + ((3+5) + (2**2)));//this is the proper way to write a code //output => 512

console.log(+true);// output => 1 , due to + operator , true converted to boolean value
//console.log(true+); error
console.log(+"");// output => 0 , +"" converts an empty string to 0 because JS treats empty strings as zero when coerced into a number.
console.log(+"Hiii");// output => NaN ,+"Hiii" results in NaN because "Hiii" is not a valid numeric value.
let d = +"Hiii"
console.log(typeof d);// output => Number
let valueD = Number(d)
console.log(valueD);// output NaN

console.log("way of Defining same value in 3  num");
/*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not correct way to write 
*/
let x = 3
let y1 = x++;
console.log(x);//output => 4
console.log(y1);//output => 3 //in x++, the increment operator increments and returns the value before incrementing.
let z = 3
let y2 = ++z
console.log(z);//output => 4
console.log(y2);//output => 4 // in ++x, the increment operator increments and returns the value after incrementing.
