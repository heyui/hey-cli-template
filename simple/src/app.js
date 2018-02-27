require("./css/index.less");
require("./css/index.scss");
const a = 1;
const b = 2;
const c = ['a', 'b', 'c'];
const d = [];
for(let i of c) {
  d.push(i);
}
const e = c.map(item => item + item);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

export default {}