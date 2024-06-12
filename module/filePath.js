const filePath = {
  list: 'list',
  main: 'main.html',
  folder: (title) => {
    return `list/${title}`;
  },
};

module.exports = filePath;
