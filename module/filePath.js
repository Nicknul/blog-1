const filePath = {
  list: 'list',
  main: 'main.html',
  css: ['main.css', 'list.css'],
  folder: (title) => {
    return `list/${title}`;
  },
};

module.exports = filePath;
