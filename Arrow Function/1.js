// Old Function

// function Add(a,b){
//    return a+b;
// }
// console.log(Add(2,3));

// Arrow Function

// const arrow = (a,b) => a+b;
// console.log(arrow(2,3))

//
// let age = prompt("what is your age",18)
// let welcome = (age>18) ?
//  ()=> console.log("Hello") :
//  ()=> console.log("bye");
// welcome();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();