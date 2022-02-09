// Variable declaration and printing.

let name3 = "Daniel"
console.log(name3)

/* 
multiline comments 
can come here
*/

// VARIABLE DECORATION AND ASSIGNMENT

var surName = "Toloko";

var fullName = name3 + " " + surName;

console.log(fullName);

var something;      //variable decoration (undefined)

console.log(something);

something = "Everything"; // variable now assigned

console.log(something);

// DONE ARITHMETIC EXPRESSION

//TYPE CONVERSION.

var age2 = "21";

console.log(typeof age2)
age2 = Number(age2);

console.log(typeof age2)

var ageIncrease = age2 + 1;

console.log(ageIncrease)
// To be converted to string use String AND use Boolean
// for boolean

//FUNCTION

function sayHello(name, age){
    console.log("My name is ", name);
    console.log("And I am", age + " " + "Years Old");
}

sayHello("Dan", 22);
