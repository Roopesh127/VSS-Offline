// let profile = {
//     name : "Akshat",
//     work : {
//         professional : "Abhi to MR ban kar ghoom raha",
//         personal : "Har time jhut bolna",
//     },
//     education : {
//         school : "nachiketa",
//         college : {
//             degree : "SRIT",
//             bakchodi : "bakchod logo ki sangati"
//         }
//     }
// };

// # 2nd level destructuring

// const {education : {school}} = profile;
// console.log(school)   // nachiketa



// # 3rd level destructuring

// const{education : {college : {bakchodi}}} = profile ;
// console.log(bakchodi);  // bakchod logo ki sangati









// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };

//   let {size : { width , height} , items : [item1 , item2] , title = "menu"} = options;
  
//   console.log(width);
//   console.log(item1);
//   console.log(title);