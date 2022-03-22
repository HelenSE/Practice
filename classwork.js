// var arr = [1,2,3,4];
// var arr1 = arr.filter(function(number) {
//     return number % 2;
//   });
//   alert( arr1 );

// const filterEvenNumber = (numberList) => {
//     return numberList.filter((number)=>number % 2 === 0)
// }

// console.log(filterEvenNumber([1,2,,3,4,5,6,7,8]));

// const sum = [1,2,3,4].reduce((result,item)=>{
//     if(item % 2 === 0){
//         result.push(item**2);
//     }
//     return result
// }, []) ;

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   console.log(capitalizeFirstLetter('hello'));

//   const capitalize =  (word) => {
//       const capitalLetter = word[0].toUpperCase();
//       const restChars =word.slice(1);
//       return `${capitalLetter}${restChars}`

//   };

// const users = [
//     {
//       name: "Alex",
//       gender: "male",
//     },
//     {
//       name: "Anastasiya",
//       gender: "female",
//     },
//     {
//       name: "Petr",
//       gender: "male",
//     },
//   ];

// const sortByGender = ((users) => {
//     const result = {
//         female : [],
//         male : []
//     };
//     users.forEach((user) => {
//         if (user.gender === 'female') {
//             result.female.push(user);
//         }
//         else {
//             result.male.push(user);
//         }
//         return result;
//     });

//   const sortByGender = (user) => {
//       return users.reduce((result, user) => {
//           const userGender = user.gender;

//           if (!result[userGender]){
//             result[userGender] = [user] ;
//           } else {
//             result[userGender].push(user);
//           }

//           return result;
//       }, {});
//     }

// const someArray = [1, "sadjaskj", true, false];
// const sortArrayValue = someArray.map(function (item, index) {
//   return {
//     value: item,
//     type: typeof item,
//     index: index,
//   };
// });

// console.log(sortArrayValue);

// const arr = [1, 2, 5, 4, 10, 9];
// function maxElement() {
//   return Math.max(...arr);//спред опреатор (открвает массив и выглядит как последовательность чисел)
// }
// console.log(maxElement());

// const numbers = [1, 1, 2, 3, 2];
// const findUnic = (numbers) => {
//   return numbers.find(
//     (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
//   );
// };
// console.log(findUnic);

// const numbers = [1, 1, 2, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
// const count = numbers.reduce(
//   (acc, number) => ((acc[number] = (acc[number] || 0) + 1), acc),
//   {}
// );
// const duplicateCount = Object.entries(count).sort(
//   (acc, number) => acc[0] - number[0]
// );
// // const duplicateCount = Object.values(count).filter(
// //   (number) => number > 1
// // ).length;

// console.log(duplicateCount);


//задача с занятия с повторяющимися числами
const numbers = [1, 1, 2, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
const count = numbers.reduce(
    (acc, number) => ((acc[number] = (acc[number] || 0) + 1), acc),
    {}
);
const duplicateCount = Object.entries(count).sort(
    (acc, number) => acc[0] - number[0]
);
const maxCount = Object.values(count).filter((number) => Math.max(number));

if(Math.max(number)){
    return number;
}

console.log(maxCount);
