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

//decision making.
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

//Switch Statements
const day = 'monday';
switch (day) {
    case 'monday': // day === monday
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`Work 8 hours.`);
        console.log(`Go home`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Sleep in.`);
        console.log(`Wake up and enjoy the weekend`);
        break;
    default:
        console.log(`Something went wrong...try again.`);
        break;
}

//Conditional - Single line decision execution.
const size = 23;
size == 23 ? console.log(`The Clothes fit.`) : console.log(`They do not fit.`);

const fit = size == 23 ? '`The Clothes fit.`' : '`They do not fit.`';

console.log(`I tested whether the clothes fit for you. $(size == 23 ? 'The Clothes fit.' : 'They do not fit.').`);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 1);
console.log(Number('Jonas')); //Nan
console.log('String(23), 23');

//type coercion
console.log(`I am ` + 23 + ` years old`); //Converts 23 to string.
console.log('24' - '10' - 3); //Converts strings to numbers.
console.log('24' * 4); //Converts to numbers.
console.log('24' / 2); // converts to numbers.

//Truthy & Falsy
console.log(Boolean(0)); //falsy
console.log(Boolean('test')); //truthy
console.log(Boolean({})); //empty object - returns true

const money = 0;
if (money) {
    console.log(`Don't spend it all.`);
} else {
    console.log(`You should get a job.`);
}

//Input
const favorite = Number(prompt(`What's your favorite number?`));
console.log(Number(favorite));

if (favorite === 23) // '23' is = 23
{
    console.log(`Cool! 23 is an amazing number`)
} else if (favorite === 7) {
    console.log(`7 is cool too.`)
} else { console.log(`Not a great number choice...`) }

//Boolean Logic
const hasDL = true;
const hasGoodVision = true;

console.log(hasDL && hasGoodVision);//Returns True
console.log(hasDL || hasGoodVision);//Returns True
console.log(!hasDL);//Returns Falso

const shouldDrive = hasDL && hasGoodVision;

if (hasDL && hasGoodVision) {
    console.log(`She is able to drive.`);
} else {
    console.log(`Someone else should drive...`);
}

const isTired = true; // C
console.log(hasDL && hasGoodVision && isTired)

if (hasDL && hasGoodVision && !isTired) {
    console.log(`She is able to drive.`);
} else {
    console.log(`Someone else should drive...`);
}

