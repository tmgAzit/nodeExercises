const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const now = async () => {
  try {
    const first = await readFile('./content/subfolder/text.txt', 'utf-8');
    const second = await readFile('./content/subfolder/second.text', 'utf-8');

    console.log(first, second);

    await writeFile(
      './content/subfolder/newFile.txt',
      `This is cool: ${first} ${second}`,
      { flag: 'a' }
    );
  } catch (error) {
    console.log(error);
  }
};

now();

// Async promises - Method #1

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const now = async () => {
//   try {
//     const first = await getText('./content/subfolder/text.txt');
//     const second = await getText('./content/subfolder/second.text');

//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };
