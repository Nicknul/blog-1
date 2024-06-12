const string = require('./string.js');

const mainAdd = (array) => {
  return string.main.replace('<div id="root"></div>', `<div id="root">목록 : ${array.join('')}</div>`);
};

module.exports = mainAdd;
