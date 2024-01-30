// function* generateSequence(){
//     yield 1;
//     yield 2;
//     return 3;
// }
// const output = generateSequence();

// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);


// function* generatorfunction(){
//     yield {name : "roopesh"};
//     yield {age : 22};
// }
// const iterator = generatorfunction();
// console.log(iterator.next().value.name);
// console.log(iterator.next().value.age);



function* generateSquares() {
    let i = 1;
    while (true) {
      yield i * i;
      i++;
    }
  }
  
  const iterator = generateSquares();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);