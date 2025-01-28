console.log(2 > 1);
console.log("2" > 1);
console.log("02" < 1);

console.log("compare with null");

console.log(null > 0);//comparisons like < > <= >= convert null to a number 0
console.log(null == 0);// but equality check doesnt convert it to 0
console.log(null >= 0);

console.log("compare with undefined");

console.log(undefined > 0);//undefined will be converted to undefined
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("compare with empty string");

console.log("" > 0);//comparisons like < > <= >= convert  to a number 0
console.log("" == 0);// but equality check doesnt convert it to 0
console.log("" >= 0);
console.log("difference btwn == & ===");

// == and === are two different things
console.log("2" == 2);//check only values
console.log("2" === 2);//check values with datatype
