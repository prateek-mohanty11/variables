const name = "Prateek"
const repoCount = 7
// console.log(name + repocount + " yoo"); //dont use this format
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name[0]);
const anotherName = new String('Yoyo')
console.log(anotherName[0]);
console.log(anotherName.__proto__);
console.log(anotherName.length);//an function to measure the length of string
console.log(name.toUpperCase());//an functon to make the string upper case
console.log(anotherName.charAt(2));
console.log(anotherName.indexOf('o'));

/* const newString =  anotherName.substring(1,4)
console.log(newString);*/ //you can write this or else bellow one
console.log(anotherName.substring(1,4));

const newString = name.slice(-6,4)
console.log(newString);


