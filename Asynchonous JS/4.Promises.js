// ***** #PROMISES *****

//  It is the way to handle asynchronous task in javascript. Promises is the object which is represent 
//   eventually completion or failure of task. These have 3 steps. 

//  - pending.
//  - fullfilled.
//  - reject.


// function getBook(name1){
//     return new Promise((resolve,reject)=>{
//         // let name1 = "sachin";
//         if(name1 == "Roopesh"){
//             resolve("Roopesh is Available")
//         }else{
//             reject("koi roopesh nahi hai yaha")
//         }
//     });
// }
// getBook("Roopesh").then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })


// # use of finally()

// let promiseFinally = new Promise((resolve,reject)=>{
//     // resolve("I am resolve")
//     reject("I am reject")
// }).then((success)=>{
//     console.log(success)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("mai to permnent chalunga")
// })




// let promise1 = new Promise((resolve,reject)=>{
//     const num = Math.random();
//     if(num >= 0.5){
//         resolve("promise is resolved");
//     }
//     else{
//         reject("promise is rejected");
//     }
// }).then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })