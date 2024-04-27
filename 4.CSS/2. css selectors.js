// Selectors :- Css selector select the HTML element which we want to style.

const { useSelector } = require("react-redux");

// types:-

//      1. simple selectors :-
//        ex:- p {
//                text-align: center;
//                color: red;
//               }

//       2.  combinator selectors :-

//         ex:-  div p {
//                        background-color: yellow;
//                      }

//       3.  psuedo class selectors :-
//            used to :-

//                - when mouse is hover.
//                - style an element when gets it's focus.
//                - psuedo class is denoted by " : " (by single colon).

//         ex:- div :hover p {
//                              display : block;
//                            }

//       4.  psuedo element selectors :-
//             used to :-

//               -> psuedo element selector is used to style specified part of element.
//                 - Style first letter or line of element.
//                 - Insert content before or after of a element.
//                 - psuedo element is denoted by "::" (double colon).

//          ex:- div ::first-line{
//                                  color : "black";
//                                }

//       5.  Attribute selectors :-

//               -> css attribute selector is used to select element of specified attributes.

//          ex:- a[target] {
//                          background-color: yellow;
//                         }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//# By the content of Odin Project :-

// 1.universal useSelector :- select all content of web page

// 2.type selector :- select all content of same type

// 3.class selector :- select all element of same class

// 4.id selector :- select element from unique id

// 5.group selector :- if two class have demand same class then we applied group selector.
// //ex:-

// .read{
//    background-color : "red";
//    font-size : "25px"
// }
// .learn{
//    background-color : "red";
//    font-size : "25px"
// }

//there are two class and applying same css , in place of we can easily use group selector for this.

// .read,.learn{
//  background-color : "red";
//    font-size : "25px"
// }
