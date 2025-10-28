const aaa = "aaa";
const bbb = 123;
const hours = 2;

console.log(hours * 60);
const hours1 = 2.5;
console.log(hours1 * 60);
const hours2 = 12;
console.log(hours2 * 60);

const two = 2;
console.log(20 % 2 === 0 && "even");
console.log(17 % 2 === 1 && "odd");

const seven = 7;
console.log(21 % 7 === 0 && "even1");
console.log(29 % 7 === 1 && "odd1");

const one = 1;
console.log(11 % 1 === 0 && "even2");
console.log(1 % 2 === 1 && "odd2");

let a = 1,
  b = 8,
  c = 3;
console.log(a < b && b > c && b);
console.log(b < c && c < a && a);
console.log(a < b && b < c && c);

let x = 9,
  y = 4,
  z = 3;
console.log(x > y && y > z && x);

let q = 1,
  w = 7,
  e = 5;
console.log(q < e && e < w && w, e, q);

const t1 = 9,
  t2 = 3,
  t3 = 8;
console.log(t1 + t2 + t3);

// #2
const niilber = [1, 3, 5, 7, 8.7];
console.log(1 + 3 + 5 + 7 + 8.7);
// #3
const seconds = 98;
const minutes = Math.floor(seconds / 60);
const sec = seconds % 60;
console.log(minutes + "minute" + sec + "second");
// #4
const totalsecond = 1297;
const totalhours = Math.floor(totalsecond / 3600);
const tminutes = Math.floor((totalsecond % 3600) / 60);
const tsec = totalsecond % 60;
console.log(totalhours + "hour" + tminutes + "minutes" + tsec + "seconds");
// #5
