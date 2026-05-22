const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBook(id) {
  return data.find((d) => d.id === id);
}
//displaying only year using arrow function
const getYear = (date) => date.split("-")[0];

function movieInfo(bookId, extraGenres = ["Not specified"]) {
  const book = getBook(bookId);
  // const title = book.title;  OLD WAY
  const { title, author, pages, publicationDate, genres, hasMovieAdaptation,id,translations } =
    book;
  const [primaryGenre, secondGenre, ...otherGenres] = genres; //rest operator
  console.log("*".repeat(77));
  console.log(
    `Book number ${id}:\n${title} is a ${pages > 1000 ? "over a thousand" : pages}-page long book written by ${author} published in ${getYear(publicationDate)}
    book genres: ${primaryGenre + ", " + secondGenre}. The book has been ${hasMovieAdaptation ? "" : "not "}Adapted as a movie
    ${translations.polish ? "":"doesn't"} have polish translation `
    
  );

  console.log(
    `Other genres: ${otherGenres.length === 0 ? "no other genres" : otherGenres}`,
  );

  const newGenres = [...extraGenres, ...genres, "epic fantasy"]; //spread operator
  console.log(`User selected genres: ${newGenres}`);
  return { book };
}
const { book } = movieInfo(1);
const updatedBook = {
  ...book,
  moviePublicationDate: "2025-12-19",
  pages: 998,
};
const { title, pages: updatedPages, pages, moviePublicationDate } = updatedBook;

console.log(
  `Updated info: ${title} ${updatedPages}-page book with movie adaptation published in: ${getYear(moviePublicationDate)}`,
);

for (let i = 1; i <= data.length; i++) {
  movieInfo(i);
}
movieInfo(1, ["furry", "drama"]);

// SHORT CIRCUTING
// console.log(true && "yes");
// console.log(false && "yes");
// console.log("true value" && "this will display because first one is true");
// console.log(0 && "this wont display");

// console.log(true || "")
// console.log(0 || "this will display");