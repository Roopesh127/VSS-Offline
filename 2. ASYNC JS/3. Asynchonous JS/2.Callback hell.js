// # callback hell is the problem inside asynchronous programming , there nested callback are 
  // made pyramid of Doom.

//   Example:->

//   firstfunction(function(error,script){
//     if(error){
//         console.log("error",error)
//     }
//     else{
//         secondfunction(function(error,script){
//             if(error){
//                 console.log(error,"error")
//             }
//             else{
//                 thirdfunction(function(error,script){
//                     if(error){
//                         console.log("error",error)
//                     }
//                     else{
//                         fourthfunction(function(error,resolved){
//                             if(error){
//                                 console.log("error",error)
//                             }
//                             else{

//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
//   })