const fs = require('fs');

const list = fs.readdirSync('./list');

module.exports = list;
