/**
 *
 * @param {*} array
 * @param {*} list
 */
const forIn = (array, list) => {
  for (let element in list) {
    let a = list[element].split('.html');
    array.push(`<div><a href="${list[element]}">${a.join('')}</a></div>`);
  }
};

module.exports = forIn;
