// ## A function without name called anonymous function.

// setTimeout(()=>{
//     console.log("hello")
// },1000)


// function (){
//     console.log("hello");  // syntax Error :- Function statements require a function name
// }

// ## Annonymous function is defined by arrow function inside veriable and called variable name.

// let variable1 = function(){
//     console.log("Hello I am Annonyous function")  // Hello I am Annonyous function
// }
// variable1()




// let area = function(length,width){
//    return length*width;
// }
// let x = area(10,20)
// console.log(x)



// ## Use of Annonymous function

function greet(wish){
    console.log(wish(),"everyone!!")
}
greet(function(){
    return "Good Morning"
})
  