const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log('유효성 검사:', req.url);
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
