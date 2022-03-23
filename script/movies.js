const movies = [
  {
    Title: "X-Men: Days of Future Past",

    Year: "2014",

    imdbID: "tt1877832",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (1 van 52).jpg",
  },

  {
    Title: "X-Men: First Class",

    Year: "2011",

    imdbID: "tt1270798",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (2 van 52).jpg",
  },

  {
    Title: "X-Men",

    Year: "2000",

    imdbID: "tt0120903",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (3 van 52).jpg",
   },

  {
    Title: "X2: X-Men United",

    Year: "2003",

    imdbID: "tt0290334",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (4 van 52).jpg",
  },

  {
    Title: "X-Men: The Last Stand",

    Year: "2006",

    imdbID: "tt0376994",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (5 van 52).jpg",
  },

  {
    Title: "X-Men Origins: Wolverine",

    Year: "2009",

    imdbID: "tt0458525",

    Type: "movie",

    Po "https://dykey.nl/image/300/Droombeeld (6 van 52).jpg",
  },

  {
    Title: "X-Men: Apocalypse",

    Year: "2016",

    imdbID: "tt3385516",

    Type: "movie",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (7 van 52).jpg",
  },

  {
    Title: "X-Men: The Animated Series",

    Year: "1992–1997",

    imdbID: "tt0103584",

    Type: "series",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (8 van 52).jpg",
  },

  {
    Title: "X-Men: Evolution",

    Year: "2000–2003",

    imdbID: "tt0247827",

    Type: "series",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (9 van 52).jpg",
  },

  {
    Title: "Wolverine and the X-Men",

    Year: "2008–2009",

    imdbID: "tt0772145",

    Type: "series",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (10 van 52).jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (11 van 52).jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (12 van 52).jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (13 van 52).jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (14 van 52).jpg",
  },

  {
    Title: "The Avengers",

    Year: "1998",

    imdbID: "tt0118661",

    Type: "movie",

    Poster:
     "https://dykey.nl/image/300/Droombeeld (15 van 52).jpg",
  },

  {
    Title: "The Avengers: Earth's Mightiest Heroes",

    Year: "2010–2012",

    imdbID: "tt1626038",

    Type: "series",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (16 van 52).jpg",
  },

  {
    Title: "Ultimate Avengers",

    Year: "2006",

    imdbID: "tt0491703",

    Type: "movie",

    Poster:
       "https://dykey.nl/image/300/Droombeeld (17 van 52).jpg",
  },

  {
    Title: "Ultimate Avengers II",

    Year: "2006",

    imdbID: "tt0803093",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (18 van 52).jpg",
  },

  {
    Title: "The Avengers",

    Year: "1961–1969",

    imdbID: "tt0054518",

    Type: "series",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (19 van 52).jpg",
  },

  {
    Title: "Batman Begins",

    Year: "2005",

    imdbID: "tt0372784",

    Type: "movie",

    Poster:
      "https://dykey.nl/image/300/Droombeeld (20 van 52).jpg",
  },

  {
    Title: "Batman v Superman: Dawn of Justice",

    Year: "2016",

    imdbID: "tt2975590",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },

  {
    Title: "Batman",

    Year: "1989",

    imdbID: "tt0096895",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  },

  {
    Title: "Batman Returns",

    Year: "1992",

    imdbID: "tt0103776",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  },

  {
    Title: "Batman Forever",

    Year: "1995",

    imdbID: "tt0112462",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Batman & Robin",

    Year: "1997",

    imdbID: "tt0118688",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
  },

  {
    Title: "The Lego Batman Movie",

    Year: "2017",

    imdbID: "tt4116284",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },

  {
    Title: "Batman: The Animated Series",

    Year: "1992–1995",

    imdbID: "tt0103359",

    Type: "series",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },

  {
    Title: "Batman: Under the Red Hood",

    Year: "2010",

    imdbID: "tt1569923",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Batman: The Dark Knight Returns, Part 1",

    Year: "2012",

    imdbID: "tt2313197",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
  },

  {
    Title: "The Princess Bride",

    Year: "1987",

    imdbID: "tt0093779",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
  },

  {
    Title: "Princess Mononoke",

    Year: "1997",

    imdbID: "tt0119698",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },

  {
    Title: "The Princess Diaries",

    Year: "2001",

    imdbID: "tt0247638",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },

  {
    Title: "The Princess and the Frog",

    Year: "2009",

    imdbID: "tt0780521",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg",
  },

  {
    Title: "The Princess Diaries 2: Royal Engagement",

    Year: "2004",

    imdbID: "tt0368933",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },

  {
    Title: "Xena: Warrior Princess",

    Year: "1995–2001",

    imdbID: "tt0112230",

    Type: "series",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
];
