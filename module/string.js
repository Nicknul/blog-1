const string = {
  main: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css" />
    <title>MAIN</title>
  </head>
  <body>
    <div id="top"></div>
    <div id="root"></div>
    <form action="/submit" method="post">
      <label for="title">제목</label><br />
      <input type="text" name="title" id="title" placeholder="제목을 적어주세요."/><br /><br />
      <label for="content">내용</label><br />
      <textarea name="content" id="content" placeholder="내용을 적어주세요."></textarea><br /><br />
      <input type="submit" value="포스팅 하기" id="submit"/>
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
