const profile = {
  school: {
    name: "roopesh",
    age: "18 yr",
    city: "gotegaon",
    school: "dmd",
    duration: "14 yr",
  },
  college: {
    z: 1,
    collegeName: "SRIT",
    city: "jabalpur",
    branch: "Electrical",
    duration: "4 year",
    extraCurriculam: {
      sports: {
        types: "Ateletics",
        strategy: "top leading",
        working: "hard",
      },
      NCC: {
        unit: "4MPCTR",
        rank: "UO",
        duration: "3 year",
      },
    },
  },
};
// 4. --->
// for changing key name
// Change the property name from NCC to personal
profile.college.sakha = profile.college.branch;
delete profile.college.branch;
console.log(profile);

//3. --->
// for changing value of unit
// profile.college.extraCurriculam.NCC.unit="1 mp";
// console.log(profile.college.extraCurriculam.NCC.unit)

// 2.-->
// for finding value of any key
// const output = profile.college.extraCurriculam.NCC.unit;
// console.log(output)

// 1. --->
// for keys finding
// const output = Object.keys(profile.college.extraCurriculam.NCC);
// console.log(output)

// const orders = [
//     { userId: 1, "id": 101, "name": "Product A", "price": 10 },
//     { userId: 1, "id": 102, "name": "Product B", "price": 20 },
//     { userId: 2, "id": 103, "name": "Product C", "price": 15 }
//   ]

//   const mergedResponse = [
//     {
//       "userId": 1,
//       "orders": [
//         { "orderId": 101, "name": "Product A", "price": 10 },
//         { "orderId": 102, "name": "Product B", "price": 20 }
//       ]
//     },
//     {
//       "userId": 2,
//       "userName": "Bob",
//       "orders": [
//         { "orderId": 103, "name": "Product C", "price": 15 }
//       ]
//     },
//     {
//       "userId": 3,
//       "userName": "Charlie",
//       "orders": []
//     }
//   ]


