// ## The range of function or varible where we can access it .

var x= 5;
function a(){
   var y = 10;
  function b(){
    var z = 15;
 
   console.log(x);
   console.log(y);
   console.log(z);
}
b();
}
a();