// FS module - file systme

// const { log } = require('console');
// const fs = require('fs');

// const first = fs.readFileSync('./content/subfolder/text.txt', 'utf-8'); // fs.readFileSync('filepath', 'encoded');
// const second = fs.readFileSync('./content/subfolder/second.text', 'utf-8');
// console.log(first, second);

// fs.writeFileSync(
//   './content/subfolder/third.txt',
//   `This is the text. ${first} ${second}`,
//   { flag: 'a' } // flag:'a' omit to override a new file, but add the line of text.
// );

const { writeFileSync } = require('fs');
for (let i = 0; i <= 100000; i++) {
  writeFileSync('./content/subfolder/big.txt', `hello world ${i}\n`, {
    flag: 'a',
  });
}
