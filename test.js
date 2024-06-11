const fs = require('fs');

const list = fs.readdirSync('./list');

const link = '';

for (let element in list) {
  console.log(list[element]);
}
