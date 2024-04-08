// Nullish Coehersion(??) :- Nullish Coehersion is a operator in js which is used to prevent null or undefined value and return a default value which is declared.

let x = null;
let y = 5;
let z = undefined;

console.log(x ?? "default value of x"); // "default value  of x"  -> because of provided value is null.
console.log(y ?? "default value of y"); // 5
console.log(z ?? "default value of z"); // "default value of z"   -> because of provided value is undefined.
