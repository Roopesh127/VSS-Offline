// # call , bind & apply all are function borrowing technique in javascript.
// if we want to use one fuction method or variable in other then we are using it.



// let obj = {
//     fname : "Roopesh",
//     lastname : "Vishwakarma",
// }
// function fullname (){
//     return this.fname + this.lastname
// }
// console.log(fullname.call(obj))



    // function greeting(greet){
    //     return greet + " " + this.name1;
    // }
    // let user = {
    //     name1 : "Sachin",
    // }
    // console.log(greeting.call(user,"Hello"));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// call , bind & Apply by Roadsidecoder



// for without parameter

// var obj = {
//     name1 : "piyush"
// }
// function sayHello(){
//     return "Hello" +" " + this.name1;
// }
// console.log(sayHello.call(obj))




// for giving extra argument

// let obj ={
//     name1 : "piyush",
// }
// function sayHello(age){
//     return "hello" + " " + this.name1 + " " + "is" + " " + age;
// }
// console.log(sayHello.call(obj,24));


// for multiple argument 

// let obj = {
//     name1 : "Piyush",
// }
// function sayHello(age,city){
//     return "Hello" + " " + this.name1 + " " + "is" + " "+ age + " from " + " " + city;
// }
// console.log(sayHello.call(obj ,22,"jabalpur"));



