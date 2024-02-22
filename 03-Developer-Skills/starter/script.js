// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1997));

//PROBLEM

//We work for a company building a smart home thermometer. Our most recent task is this: Given an array of temps for one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1.) Understanding the problem.

// What is a temperature amplitude? difference between the highest and lowest temperatures.
// How to compute the max temp.
// What does a sensor error look like? What do we do when they occur?

//2.) Breaking up into sub-problems
// How to ignore sensor errors.
//Find min/max value in temperature array.
//Subtract min from the max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2
//The function should now recieve 2 new arrays of temperature.
//1.) Understanding the problem.
// With 2 arrays, should we implement functionality twice? NO! Just merge the 2 arrays.

//2.) Breaking into sub-problems
//How to merge two arrays.

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude2 = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

//Using a Debugger
