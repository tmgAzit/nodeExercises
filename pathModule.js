const path = require('path'); // Accessing/ importing path module

console.log(path.sep); // Output - path seperator "/"

const filePath = path.join('/content/', 'subfolder', 'text.txt'); // Defining a filePath with path.join() method;
console.log(filePath);

const base = path.basename(filePath); // Gives an output with only basename/lastname of that filepath.
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt'); // Defining an absolute path from the main root directory to the given filepath.
console.log(absolute);
