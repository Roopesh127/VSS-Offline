// css specificity :- css specificity is used where two or more css are used and which css specificity is greater then it's win.

// there is special rule table for css specifity:-

// p (tag) = 1
// . (class) = 10 (each class)
// # (id) = 100 (each identifier)
// inline css = 1000

// example :-

//p1.class1.class2 = 1 + 10 + 10 => 21
//p.test = 1 + 10 => 11
//#navbar p #demo = 100 + 1 + 100 => 201

// #####################################

// There is exception in css , if we are using (!important) , then it's override all css value.

// ex:-

// #myid {
//   background-color: blue;
// }

// .myclass {
//   background-color: gray;
// }

// p {
//   background-color: red !important;
// }

//#######################################################

// we never used <title></title> tag inside body.
