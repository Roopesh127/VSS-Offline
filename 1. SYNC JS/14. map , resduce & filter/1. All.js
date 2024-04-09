// map method

// --> iterated over aray , applied on array one by one , return always new array

// let arr = [1,2,3,4,5,6,7,8,9]
// const x = arr.map((r)=>r)
// console.log(x)
// console.log(arr)

// filter method : - filter method is always return a new array , it's iterate with all element in array but return only satisfied value only.

// let arr = [1,2,3,4,5,6,7]
// let x = arr.filter((x)=>x>3)
// console.log(x)

// reduce method :- We we have required to colled one value of multi value array then we are using reduce method and it's always rotate on each element of an array and return one value. It's take one accumulator value , if we are not provide accumulator then it's by default use first value as a accumulator.

let arr = [1, 2, 3, 4, 5, 6];
let x = arr.reduce((acc, item) => (acc + item) / item);
console.log(x);
