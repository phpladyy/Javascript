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
    hasMovieAdaptation: false,
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

function getBooks() {
  return data;
}
const books = getBooks();
const totalReviews = (book) =>
  (book.reviews.goodreads?.reviewsCount ?? 0) +
  (book.reviews.librarything?.reviewsCount ?? 0);

const titles = books.map((book) => book.title);
console.log(`Titles list:\n${titles.join("\n")}`);

//first method
// const essentialData = books.map((el) => `Book title: ${el.title} Book author: ${el.author}`);

// second method
const essentialData = books.map((currentbook) => ({
  BookTitle: currentbook.title,
  BookAuthor: currentbook.author,
  reviewsTotal: totalReviews(currentbook),
}));
console.log("Displaying only essential data:");
console.log(essentialData);

const findByAuthor = essentialData.filter(
  (book) => book.BookAuthor === "Frank Herbert",
);
console.log(`Finding by author method:`);
console.log(findByAuthor);

const multipleFilters = books
  .filter((book) => book.pages > 500 && book.pages < 1000)
  .filter((book) => book.hasMovieAdaptation == false);
console.log("Filtering multiple factors method:");
console.log(multipleFilters);

const humorBooks = books
  .filter((book) => book.genres.includes("humor"))
  .map((book) => ({
    bookTitle: book.title,
    bookAuthor: book.author,
  }));
console.log("humor books list:");
console.log(humorBooks);

//sum holds the final value of our variable
const allPagesOfBooks = books.reduce(
  (sum, book) => sum + book.pages,
  0, //beggining value
);
console.log(`Total number of all books pages: ${allPagesOfBooks}`);

// const compareNumbers = (a,b) => a-b;
// const x = [2,4,99,100,21,5,6,3];
// const sortedx = x.slice().sort(compareNumbers); //using slice to not mutate original(x) array
// console.log(`Sorted array ${sortedx}`);
// x;

const sortedByPages = books
  .slice()
  .sort((initial, book) => book.pages - initial.pages);
console.log("Book sorted by page number:");
console.log(sortedByPages);

const newBooks = [
  {
    id: 6,
    title: "The miser",
    publicationDate: "1980-03-5",
    author: "Louis de Funès",
    pages: 348,
  },
  {
    id: 7,
    title: "Harry Potter and the Order of the Phoenix",
    publicationDate: "2003-06-21",
    author: "J. K. Rowling",
    pages: 748,
  },
];

console.log(
  "adding new book array containing previous books and a new one using spread operator(...)",
);
const booksAfterAdded = [...books, ...newBooks];
console.log(booksAfterAdded);

console.log("updating first book info using .map to override the property we want to manipulate:");
const bookUpdate = booksAfterAdded.map((book) =>
  book.id === 1 ? { ...book, pages: 1622 } : book,
);
console.log(bookUpdate[0]);

console.log(
  "Simple search engine working by Deleting objects from array using filter method:",
);
const findBookByTitle = (searchedBookTitle) =>
  bookUpdate
    .filter((book) =>
      book.title.toLowerCase().includes(searchedBookTitle.toLowerCase()),
    )
    .map((book) => ({
      "Book title": book.title,
      Author: book.author,
      Pages: book.pages,
      "Publication date": book.publicationDate,
    }));

console.log(findBookByTitle("harry"));
