/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */
import horoscope from "horoscope";

const userMonth = Number(process.argv[2]);
const userDay = Number(process.argv[3]);
const userYear = Number(process.argv[4]);

const userSign = horoscope.getSign({month: userMonth, day: userDay});
const userZodiac = horoscope.getZodiac(userYear);

const userSigns = (sign, zodiac) => {console.log(`Your astrological sign is ${sign} and your zodiac sign is ${zodiac}.`);}

userSigns(userSign, userZodiac);