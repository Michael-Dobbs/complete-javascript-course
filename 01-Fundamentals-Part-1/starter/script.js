//Display
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

//variables
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
const PI = 3.1415;
var test = 'test';

//operators
const now = 2024;
const ageMike = 2024 - 1997;
const ageHarper = 2024 - 2001;
console.log(ageMike, ageHarper);
console.log(ageMike * 2, ageHarper / 10, 2 ** 3);
let x = 2;
let y = 4;
y += 1;
console.log(x <= y);

//strings
const fName = "Michael";
const job = 'IT Specialist';
const year = '2024';
let message = "I'm " + fName + ", a " + (year - 1997) + " year old " + job;
console.log(message);

//template literals using ``
const agenow = year - 1997
const messageLiteral = `I'm ${fName}, a ${agenow} year old ${job}.`;
console.log(messageLiteral);

//decisions
const age = 19;
if (age >= 16) {
    //CMD + CTRL + SPACE for emojis on MAC
    //Windows 10: Windows +
    console.log(`You are old enough to drive. 🚙`);
}
else {
    const yearsleft = 16 - age;
    console.log(`You are not old enough to drive 🚙. Please wait ${yearsleft} years.`);
}
if (age >= 21) {
    console.log(`You are old enough to drink. 🍺`);
}
else {
    const yearsleft = 21 - age;
    console.log(`You are not old enough to drink 🍺. Please wait ${yearsleft} years.`);
}