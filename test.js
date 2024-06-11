const fs = require('fs');

let list = fs.readdirSync('./list');

let link = '';

for (let element in list) {
  link = list[element];
}

console.log(link);
