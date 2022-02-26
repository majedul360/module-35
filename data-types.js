/* 
Javascript data types muloto 2 dhoroner 
1. primitive
2. non-primitive

*primitive:
1. String
2. Number
3. Boolean
4. Undifiend
5. Null
6. symbol

* Non-primitive
1. Object
*/

// example of primitive
let a = 5;
let b = a;
console.log(a, b);
a = 10;
console.log(a, b);

// example of non-primitive
let x = { name: "majedul" };
let y = x;
console.log(x, y);
x.name = "islam";
console.log(x, y);
