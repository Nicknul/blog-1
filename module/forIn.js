const forIn = (array, list) => {
  for (let element in list) {
    array.push(`<div><a href="${list[element]}">${list[element]}</a></div>`);
  }
};

module.exports = forIn;
