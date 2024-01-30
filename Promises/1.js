// console.log("start");

// const myPromises = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//    //  resolve("hello Roopesh");
//     reject("there is some issue")
//    },3000)
// });
// myPromises.then((result)=>{
//    console.log(result);
// }).catch((error)=>{
//    console.log(error);
// });


// console.log("end")
  

const myPromises = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("hello I am ready");
      reject("Hello I am rejected");
   })
})
myPromises.then((result)=>{
   console.log(result);
}).catch((error)=>{
   console.log(error)
})