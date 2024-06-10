const http = require('http');
const fs = require('fs');
const blogStr = require('./blogStr.js');
console.log(blogStr.blog);

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log('유효성 검사:', req.url);
    fs.writeFileSync('./blog.html', blogStr.blog, 'utf-8');

    let data = fs.readFileSync('./blog.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
