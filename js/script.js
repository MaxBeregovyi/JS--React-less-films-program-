let numbersOfFilms;

function questionNumbFilms() {
  numbersOfFilms = prompt("How many films do you watching?", "");
  while (
    numbersOfFilms == "" ||
    numbersOfFilms == null ||
    isNaN(numbersOfFilms)
  ) {
    numbersOfFilms = prompt("How many films do you watching?", "");
  }
}
questionNumbFilms();

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function saveValueFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Which last film do you watch?", "");
    b = +prompt("How much do you value?", "");

    if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
      personalMovieDB.movies[a] = b;
    } else {
      console.log("error");
      i--;
    }
  }
}
saveValueFilms();

function detectFilmsWtachLvl() {
  if (personalMovieDB.count < 10) {
    alert("Просмотренно мало фильмов!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Error");
  }
}
detectFilmsWtachLvl();

function showMyDB(hiden) {
  if (!hiden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genresQestion = prompt(`Ваш любимый жанр под номером ${i}`);

    personalMovieDB.genres[i - 1] = genresQestion;
    // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

// let i = 0;
// do {
//   const a = prompt("Which last film do you watch?", "");
//   b = +prompt("How much do you value?", "");

//   if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// } while (i < 2);

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
