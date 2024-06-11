const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
const string = require('./string.js');

const a = {
  read: (path) => {
    return fs.readFileSync(`./${path}`, 'utf-8');
  },
};

const server = http.createServer((req, res) => {
  console.log('유효성 검사:', req.url);
  req.url = decodeURI(req.url);

  let link = [];
  let arr = [];
  let list = fs.readdirSync('./list', 'utf-8');

  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;

      fs.writeFileSync(`./list/${title}.html`, string.create(title, content), 'utf-8');

      let list = fs.readdirSync('./list', 'utf-8');

      for (let element in list) {
        arr.push(`<li><a href="${list[element]}">${list[element]}</a></li>`);
      }

      let mainAdd = string.main.replace(
        '</form>',
        `</form>
        <ul>${arr.join('')}</ul>`
      );

      fs.writeFileSync('./main.html', mainAdd, 'utf-8');
      let second = fs.readFileSync('./main.html', 'utf-8');
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

    fs.writeFileSync('./main.html', mainAdd, 'utf-8');

    // let data = fs.readFileSync('./main.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(a.read('main.html'));
  }
  for (let element in list) {
    if (req.method === 'GET' && req.url === `/${list[element]}`) {
      let data = fs.readFileSync(`./list/${list[element]}`, 'utf-8');

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
