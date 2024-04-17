// ## Scope =>  The range of function or varible where we can access it .

// var x= 5;
// function a(){
//    var y = 10;
//   function b(){
//     var z = 15;

//    console.log(x);
//    console.log(y);
//    console.log(z);
// }
// b();
// }
// a();

// ## Scope Chain => Scope chain mean that if there is any variable is not found in his
//    own scope , then it's searching it's global scope if it's not inside i it's global then go to window
//    this hierarchy called scope chaining.

var x = 10;
function parent() {
  function child() {
    console.log(x);
  }
  child();
}
parent();
