
    // # Async Aawait is the keyword inside js which main motto is 
// to make asynchronous programming easy. Async await is syntaxical
// sugar to write promises.

// ---> Async => Async keyword is always return promises. And its always used before function. Its make sync funtion to Asynchronous.

// ---> Basic syntax => 

// async function f(){
//        return 11;
//    }

// ---> await => the keyword await makes javascript wait untill that promises settles and returns its result.


// const promisedata1 = new Promise((resolve,reject)=>{
//     resolve("bhai data aa chuka hai")
// })
// const seconddata = new Promise((chal,nichal)=>{
//     chal("matlab data ni aayega")
// })
// async function getAllData(){
//     await promisedata1;
//     console.log("1st data aa hgaya")
//     await seconddata;
//     console.log("second wala data ni aana cahiye")
// }
// getAllData()



// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("wheater data");
//             resolve("data aa gaya");
//         },2000)
//     });
// }

// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         resolve("fectched data aa  raa")
//     });
// }

// async function getwheatherdata(){
//     try{
//      const whetherdata = await api();
//      console.log("whetherdata", whetherdata)
//     }
//     catch(error){
//      console.log("error",error)
//     }
//     try{
//         const fectheddata = await fetchdata();
//         console.log("fetched",fectheddata)
//     }
//     catch(error){
//         console.log("error",error)
//     }
// }
// getwheatherdata();




// Example for fetching Api ---->

// const fetchingdata = async()=> {
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     const stringify = await response.json(); 
//     console.log(stringify)
// }
// fetchingdata();




//  --->  same inside try catch

// const fetchindata = async() =>{
//     try{
//         const response = await fetch('https://fakestoreapi.com/products/1')
//         const stringify = await response.json();
//         console.log(stringify)
//     }
//     catch(error){
//         console.log("there is some issue",error)
//     }
   
// }
// fetchindata();


// *** But every time we have required to call function , to save ourself with this problem we are using IIFE function. *** 
// IIFE is always written in without name.

// (  async()=> {
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     const stringify = await response.json(); 
//     console.log(stringify)
// })();



// Async Await with normal promises

// const promise = new Promise((resolve,reject)=>{
//     resolve("hello I am Running")
// });

// (async ()=>{
//     const data = await promise;
//     console.log(data)
// })();




// const promise = new Promise((resolve, reject) => {
//     resolve("hello I am Running");
//   });
  
//   const daaaaaata = async () => {
//     const data = await promise;
//     console.log(data);
//   }
//   daaaaaata();

  




///////////////////////////////////////////////////////////////////////////////////



// const promiiiiiiiiiiiiise = new Promise((resolve,reject)=>{
//     setTimeout(()=> reject("bhai reject ka data"),4000)
// });

// (
//     async ()=>{
//     try{
//       const resolveData = await promiiiiiiiiiiiiise;
//       console.log("yaha resolve promise ka data milta hai guru , ",resolveData);
//      }
//      catch(error){
//       console.log("bhai sidhe udta hua reject ka data directly yaha aa jayega , ", error);
//      }
//     }
// )();