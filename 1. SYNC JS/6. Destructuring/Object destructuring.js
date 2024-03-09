// Object destructuring is the easy way to extract data from any object into a variable.
// syntax ---> let {var1,var2} = {var1:...,var2:...}

// Approch - 1

// let obj = {
//     fname : "roopesh",
//     lname : "vishwakarma",
//     school : "sdm"
// }
// let {fname,lname,school} = obj;
// console.log(fname)
// console.log(lname)
// console.log(school)

// Approach - 2

// let obj = {
//     fname : "sachin",
//     lname : "Shrivastava",
//     college : "srit",
//     city : "jabalpur"
// }

// let {fname : pehlaname ,lname : akhriname , college : mahavidhyalaya , city : sahar } = obj;
// console.log(pehlaname)
// console.log(akhriname)

// Approah --> 3 {by using of rest operator}

// let obj = {
//     fname : "sachin",
//     lname : "Shrivastava",
//     college : "srit",
//     city : "jabalpur"
// }

// let {fname,...rest} = obj;
// console.log(fname)
// console.log(rest)

// Approach --> 4 {for using of swapping value}

// let obj = {
//     fname : "sachin",
//     lname : "Shrivastava",
//     college : "srit",
//     city : "jabalpur"
// }
// let{fname : lname , lname : fname} = obj;
// console.log(fname)
// console.log(lname)

// Approach --> 5 {extracts values from properties to function parameter}

// let obj = {
//     fname : "sachin",
//     lname : "Shrivastava",
//     college : "srit",
//     city : "jabalpur"
// }

// function getUserInfo({fname,lname}){
//     console.log(`fullname =  ${fname} + ${lname} `)
// }
// getUserInfo(obj)

// 






















// ######### Object Destructuring ##########

let chutiya = {
    fname : "naam se hi chutiya",
    kaam : "chutiyapa karna",
    reason : "kyunki chutiyapa acha lagta"
}

let {fname,kaam,reason} = chutiya;
console.log(fname);
console.log(kaam);
console.log(reason);