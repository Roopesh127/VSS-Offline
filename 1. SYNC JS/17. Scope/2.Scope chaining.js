// function a(){
//   console.log(b)
// }
// a()  // undefined 
// var b = 10;
// a();  // 10



// function a(){
//     c();
//     function c(){
//         console.log(b);  // 10
//     }
// }
// var b = 10;
// a();




// function a(){
//     var b = 10;

//     c();
//     function c(){
//         console.log(b);  // 10  {make closure}
//     }
// }
// a();




// function a(){
//     var b = 10;
//     c();
//     function c(){
//     }
// }
// console.log(b);   // b is not defined 
// a();
