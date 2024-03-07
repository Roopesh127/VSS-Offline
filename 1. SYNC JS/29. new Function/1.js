// new Function ===> It is used in very specific cases, like when we receive 
                    //  code from a server, or to dynamically compile a function 
                    //  from a template, in complex web-applications.
    
//    # it's mainly to use save function from the closure property.

// ----> 1. 

// let sum = new Function("a","b","return a+b")
// console.log(sum(2,3));

// ----> 2.
// # new Function is always refer to global context not lexical.


// function getFunc() {
//     let value = "test";
  
//     let func = new Function('alert(value)');
  
//     return func;
//   }
  
//   getFunc()();



function add(){
    var x = 2;
    var y = 3;
    console.log( x+y)
}
add()

console.log(y-x)