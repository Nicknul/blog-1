const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
const blogStr = require('./blogStr.js');

const server = http.createServer((req, res) => {
  console.log('유효성 검사:', req.url);
  if (req.method === 'GET' && req.url === '/') {
    fs.writeFileSync('./blog.html', blogStr.main, 'utf-8');

    let data = fs.readFileSync('./blog.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;
    });
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
