const fs = require('fs');

const list = fs.readdirSync('./list');
console.log(list);

module.exports = list;
