/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

// CommonJS Syntax
// const moment = require("moment");

// ES Module Syntax
import moment from "moment";

// declare variable for user input (year)
const userYear = process.argv[2];

// check if userYear is a leap year, will return boolean
const checkUserYear = moment([userYear]).isLeapYear();

// log a message stating if userYear is a leap year
console.log(`Is ${userYear} a leap year?`, checkUserYear);
