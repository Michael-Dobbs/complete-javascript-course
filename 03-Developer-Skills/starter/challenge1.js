///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const tempArray = [17, 21, 23];
const tempArray2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let forecast = `... `;
  for (let i = 0; i < arr.length; i++) {
    const addDay = `${arr[i]}ºC in ${i + 1} days ... `;
    forecast += addDay;
  }
  console.log(forecast);
  return forecast;
}
printForecast(tempArray);
printForecast(tempArray2);

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
