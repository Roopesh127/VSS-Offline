// ## Immeadietly Invoked function expression
// It's immeadietly executed where it's called.

// for(let i=0;i<=5;i++){
//     (
//         function(count){
//             setTimeout(function(){
//                 console.log(`count till ${count} after ${count}`)
//             },1000 *i);
//         }
//     )(i);
// }



// for(var i=0;i<=5;i++){                    // var variable have global scope
//     setTimeout(function(){
//         console.log(`output till ${i} after ${i}`)
//     },1000*i)
// }