const fs = require('fs');

/**
 * *2024.06.12
 * * 파일 읽고 쓰기
 */
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
