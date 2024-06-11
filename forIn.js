const forIn = (array, list) => {
  for (let element in list) {
    array.push(`<li><a href="${list[element]}">${list[element]}</a></li>`);
  }
};

module.exports = forIn;
