// lodash example

const _ = require('lodash');

const list = [1, [2, [3, [4]]]];
const newList = _.flattenDeep(list);

console.log(newList);
