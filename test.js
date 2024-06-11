const fs = require('fs');

const list = fs.readdirSync('./list');

for (let element in list) {
  console.log(list[element]);
}
