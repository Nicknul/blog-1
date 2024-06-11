const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
const string = require('./string.js');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log('유효성 검사:', req.url);
    fs.writeFileSync('./main.html', string.main, 'utf-8');

    let data = fs.readFileSync('./main.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
  if (req.method === 'POST' && req.url === '/submit') {
    console.log('유효성 검사:', req.url);
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;

      fs.writeFileSync(`./list/${title}.html`, string.create(title, content), 'utf-8');

      let list = fs.readdirSync('./list');
      // console.log(list);

      let link = '';

      for (let element in list) {
        let data = fs.readFileSync(`./list/${list[element]}`);

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      }
    });
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
