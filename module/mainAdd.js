const string = require('./string.js');

const mainAdd = (array) => {
  return string.main.replace(
    '</form>',
    `</form>
    <ul>${array.join('')}</ul>`
  );
};

module.exports = mainAdd;
