/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).*/

/* Write your code below. Good luck! 🙂 */
let massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);
let markHigherBMI = true;
console.log(markHigherBMI);