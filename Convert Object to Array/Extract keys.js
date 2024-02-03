// ---> 1. By for in loop

// let obj = {
//     firstname : "Subham",
//     lastname : "Mishra",
//     city : "Tikamgarh",
//     compony : {
//         first : "qualtech",
//         second : "infozeck",
//         third : "tcs",
//         fourth : "infobeans"
//     }
// }
// let arr = [];
// for(let value in obj){
//     arr.push(value)
// }
// console.log(arr)

// ---> 2. By object keys

// let obj = {
//     firstname : "Subham",
//     lastname : "Mishra",
//     city : "Tikamgarh",
//     compony : {
//         first : "qualtech",
//         second : "infozeck",
//         third : "tcs",
//         fourth : "infobeans"
//     }
// }
// let mykey = Object.keys(obj);
// console.log(mykey)

// ---> 3. By value

// let obj = {
//     firstname : "Subham",
//     lastname : "Mishra",
//     city : "Tikamgarh",
//     compony : {
//         first : "qualtech",
//         second : "infozeck",
//         third : "tcs",
//         fourth : "infobeans"
//     }
// }
// let arr = Object.values(obj)
// console.log(arr)

//---> By entries 

let obj = {
    firstname : "Shubham",
    lastname : "Mishra",
    city : "Tikamgarh",
    compony : {
        first : "qualtech",
        second : "infozeck",
        third : "tcs",
        fourth : "infobeans"
    }
}
let arr = Object.entries(obj)

let final = [];
arr.forEach(([key,value])=>{
    final.push(key);
    final.push(value)
});
console.log(final)