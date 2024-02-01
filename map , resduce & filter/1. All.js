// map method 

// --> iterated over aray , applied on array one by one , return always new array

// let arr = [1,2,3,4,5,6,7,8,9]
// const x = arr.map((r)=>r)
// console.log(x)
// console.log(arr)


// filter method

// let arr = [1,2,3,4,5,6,7]
// let x = arr.filter((x)=>x>3)
// console.log(x)

// reduce method 

let arr = [1,2,3,4,5,6]
let x = arr.reduce((acc,item)=>(acc + item)/item)
console.log(x)