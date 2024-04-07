// Optional chaing is used to safely access nested object property , even if an intermediate object does not exist.

// optional chaining JavaScript mein ek feature hai jo ECMAScript 2020 (ES11) mein
// introduce hua hai. Iska istemal object properties or array elements ko access
// karte waqt kiya jata hai, taki agar koi property ya element undefined ho toh error
// na aaye aur code ka execution continue rahe.

//symbol--> .? or &&

let obj = {
  user: "roopesh",
  city: "jabalpur",
  industries: "software",

  colleege: {
    collegename: "srit",
    city: "lapataganj",
    type: {
      branch: "electrical",
      year: 2023,
    },
  },
};
// let output = obj?.college?.type?.year;  // undefined
let output = obj.college.type.year; // giving error

// let output = obj.city && obj.college && obj.college.type.year
console.log(output);
