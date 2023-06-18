const http = require('http');
const fs = require('fs');

const port = 5000;
http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/subfolder/big.txt');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(port);
