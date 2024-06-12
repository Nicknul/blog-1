const string = {
  main: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>MAIN</title>
  </head>
  <body>
    <div id="root"></div>
    <form action="/submit" method="post">
      <label for="title">제목</label><br />
      <input type="text" name="title" id="title" /><br /><br />
      <label for="content">내용</label><br />
      <input type="text" name="content" id="content" /><br /><br />
      <input type="submit" value="포스팅 하기" />
    </form>
  </body>
</html>
`,
  create: (title, content) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <a href="/">HOME</a>
    <h1>${title}</h1>
    <div>${content}</div>
  </body>
</html>`;
  },
};

module.exports = string;
