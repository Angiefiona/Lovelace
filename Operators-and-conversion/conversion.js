let a = 10;
let b = "10";
// IMPLICIT coercion

let c = b + a ;
console.log({c})
let d = b*1;

console.log(d + a);
let e = +b +a;
console.log({e});

console.log({"number":Number(b)})
console.log({b})

console.log({"String":String(a)})
console.log({"array": Array(b)})