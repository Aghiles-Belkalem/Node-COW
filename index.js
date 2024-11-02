require('dotenv').config();
const cowsay = require("cowsay");
const name = process.env.NAME;
const compus = process.env.MY_CAMPUS;
console.log(cowsay.say({
    text : `Bonjour je m'appelle ${name} et je suis du compus ${compus}!`,
    e : "oO",
    T : "U "
}));