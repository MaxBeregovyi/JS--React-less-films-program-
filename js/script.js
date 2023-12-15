const numbersOfFilms = prompt("How many films do you watching?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let i = 0;
do {
  const a = prompt("Which last film do you watch?", "");
  b = +prompt("How much do you value?", "");

  if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
    personalMovieDB.movies[a] = b;
  } else {
    console.log("error");
    i--;
  }
  i++;
} while (i < 2);

// let i = 0;
// while (i < 2) {
//   const a = prompt("Which last film do you watch?", "");
//   b = +prompt("How much do you value?", "");

//   if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// }
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Which last film do you watch?", "");
//   b = +prompt("How much do you value?", "");

//   if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log("error");
//     i--;
//   }
// }
if (personalMovieDB.count <= 10) {
  alert("Просмотренно мало фильмов!");
} else if (personalMovieDB.count <= 30) {
  alert("Вы класический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Error");
}

console.log(personalMovieDB);
