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
12;
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

const numbersOfFilms = prompt("How many films do you watching?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = +prompt("Which last film do you watch?", "");
b = +prompt("How much do you value?", "");
c = +prompt("Which last film do you watch?", "");
d = +prompt("How much do you value?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
