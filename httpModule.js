// http module
const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === '/') {
    res.end('Welcome to the programming world!');
    return;
  }
  if (req.url === '/about') {
    res.end('This is about page.');
    return;
  }
  res.end(`<h1> Oops!</h1> 
  <p> The page you are looking for is unavailable.</p>
  <a href="/"> back home</a>`);
});

server.listen(5000, () => console.log("I'am listening...."));
