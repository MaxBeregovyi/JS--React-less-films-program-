const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = prompt("How many films do you watching?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("How many films do you watching?", "");
    }
  },
  saveValueFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Which last film do you watch?", "".trim());
      b = +prompt("How much do you value?", "");

      if (a != null && a.length < 50 && a !== "" && !isNaN(b) && b !== "") {
        personalMovieDB.movies[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectFilmsWtachLvl: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотренно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Error");
    }
  },
  showMyDB: function (hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  //   writeYourGenres: function () {
  //     for (let i = 1; i <= 3; i++) {
  //       let genresQestion = prompt(`Ваш любимый жанр под номером ${i}`);
  //       if (genresQestion === null || genresQestion === "") {
  //         console.log("NO CORRECT FORM");
  //         i--;
  //       } else {
  //         personalMovieDB.genres[i - 1] = genresQestion;
  //       }

  //       // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  //     }
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genresQestion = prompt(
        `Вашы любимые жанры через запятую`
      ).toLowerCase();

      if (genresQestion === null || genresQestion === "") {
        console.log("NO CORRECT FORM");
        i--;
      } else {
        personalMovieDB.genres = genresQestion.split(", ");
        personalMovieDB.genres.sort();
      }

      // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    personalMovieDB.genres.forEach((el, i, arr) =>
      console.log(`Любимый жанр #${i + 1} - это ${el} ===${arr}`)
    );
  },
};

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
