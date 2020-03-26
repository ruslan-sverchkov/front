// script.js

const fs = require('fs')

const test = fs.readFileSync('script.js', 'utf8');
console.log(test)