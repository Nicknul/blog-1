const http = require('http');
const fs = require('fs');

const server = http.createServer();

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost${port}`);
});
