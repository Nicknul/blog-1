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
      //todo-1 POS 데이터 받기가 끝난다면 변수 title, content의 내용을 포함한 html를 만드는 작업
      fs.writeFileSync(`./list/${title}.html`, string.create(title, content), 'utf-8');

      //todo-2 readdir 선언
      let list = fs.readdirSync('./list');

      //todo-3 readdir의 목록을 for...in를 통해 html에 나타나게 하기
      let arr = [];
      for (let element in list) {
        arr.push(`<li><a href="${list[element]}">${list[element]}</a></li>`);
      }
      //todo-4 string.main에 있는 문자열을 replace를 통해 readdir 값을 넣고 조립하기
      let mainAdd = string.main.replace(
        '</form>',
        `</form>
        <ul>${arr.join('')}</ul>`
      );
      //todo-5 POST 데이터 받기가 끝나면 조립한 데이터가 들어간 main.html을 다시 만드는 작업
      fs.writeFileSync('./main.html', mainAdd, 'utf-8');
      let second = fs.readFileSync('./main.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(second);
    });
  }
});

const port = 8080;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
