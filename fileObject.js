const fs = require('fs');

const fileObject = {
  read: (path) => {
    return fs.readFileSync(`./${path}`, 'utf-8');
  },
  write: (path, data) => {
    return fs.writeFileSync(`./${path}`, data, 'utf-8');
  },
  readdir: (path) => {
    return fs.readdirSync(`./${path}`, 'utf-8');
  },
};

module.exports = fileObject;
