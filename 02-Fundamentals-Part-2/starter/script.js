'use strict';

/* The following examples show how strict mode catches extra errors.
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive.`);
const interface = 'Test'
const private = 'Test'
*/

//Functions
function logger() {
    console.log(`My name is Jonas`);
}
logger(); // calling/running/invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Declared
function calcAge1(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge1(1991);
console.log(age1);

//Anonymus
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
