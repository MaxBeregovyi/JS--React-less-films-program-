// const arr = [1, 2, 3, 4, 5];

// console.log(arr[3]);
// arr[10] = "Hello JS";
// console.log(arr[10]);
// console.log(arr);

// const obj = {
//   Anna: 500,
//   Alice: 3000,
//   Max: 300000,
//   cars: {
//     sportCar: {
//       lamba: 300,
//       porshe: 290,
//       vw: 320,
//     },
//     cupe: {
//       vw_pasat: 280,
//       porshe_cayen: 300,
//       lamba_diablo: 300,
//     },
//   },
// };
// 12;
// console.log(obj.cars.cupe.vw_pasat);
// let vwwwww = "vw_jager";
// obj.cars.sportCar[vwwwww] = 320;,
// console.log(obj);

// const qestions = +prompt("How old are you", "17");
// console.log(qestions + 5);

// const answerUser = [];

// answerUser[0] = +prompt("How old are you", "");
// answerUser[1] = prompt("What is you name?", "");
// answerUser[2] = prompt("What is your last name?", "");

// console.log(typeof answerUser);

// console.log(200 % 90);

// console.log(2 + 5 * 5 !== 27);

// let i = 0;
// while (i < 2) {
//   const a = +prompt("Which last film do you watch?", "");
//   b = +prompt("How much do you value?", "");
//   personalMovieDB.movies[a] = b;
//   i++;
// }

// const answer = +prompt("Choice numer 1-5?");
// switch (answer) {
//   case 1:
//     alert("first");
//     break;
//   case 2:
//     alert("second");
//     break;
//   case 3:
//     alert("third");
//     break;
//   case 4:
//     alert("four");
//     break;
//   case 5:
//     alert("five");
//     break;
//   default:
//     alert("not number");
//     break;
// }

// const hiWord = "Hello my friend,  1 2 4 5 65today we My learn MYMYstrmyyi it";

// const res = hiWord.replace(/[1-5]/gi, (a, b, c) => {
//   return a + "200";
// });

// console.log(res);

// let num = 55;

// // while (num < 60) {
// //   console.log(num);
// //   num++;
// // }

// do {
//   console.log("Hi");
//   num++;
// } while (num < 60);

// let rrr = 32;

// for (let i = rrr; 0 < rrr; i--) {
//   rrr--;
//   if (rrr === 20) {
//     break;
//   }
//   console.log(rrr);
// }

// for (let i = 1; i < 21; i++) {
//   if (i === 12) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 1; j < 4; j++) {
//     console.log(j);
//   }
// }

// let res = "";
// const lenght = 17;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     res += "$";
//   }
//   res += "\n";
// }
// console.log(res);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First ---- lvl:${i}`);
//   for (let j = 1; j < 5; j++) {
//     console.log(`Second lvl: ${j}`);
//     for (let k = 1; k < 5; k++) {
//       if (k === 3) break first;
//       console.log(`Third lvl:${k}`);
//     }
//   }
// }
