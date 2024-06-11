const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
const string = require('./string.js');
const filePath = require('./filePath.js');
const fileObject = require('./fileObject.js');

const server = http.createServer((req, res) => {
  console.log('유효성 검사:', req.url);
  req.url = decodeURI(req.url);

  let link = [];
  let arr = [];
  let list = fileObject.readdir(filePath.list);

  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;

      fileObject.write(`${filePath.folder(title)}.html`, string.create(title, content));

      let list = fileObject.readdir(filePath.list);

      for (let element in list) {
        arr.push(`<li><a href="${list[element]}">${list[element]}</a></li>`);
      }

      let mainAdd = string.main.replace(
        '</form>',
        `</form>
        <ul>${arr.join('')}</ul>`
      );

      fileObject.write(filePath.main, mainAdd);
      let second = fileObject.read(filePath.main);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(second);
    });
  }
  if (req.method === 'GET' && req.url === '/') {
    for (let element in list) {
      arr.push(`<li><a href="${list[element]}">${list[element]}</a></li>`);
      link.push(list[element]);
    }

    let mainAdd = string.main.replace(
      '</form>',
      `</form>
      <ul>${arr.join('')}</ul>`
    );

    fileObject.write(filePath.main, mainAdd);
    let data = fileObject.read(filePath.main);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
  for (let element in list) {
    if (req.method === 'GET' && req.url === `/${list[element]}`) {
      let data = fileObject.read(filePath.folder(list[element]));

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
