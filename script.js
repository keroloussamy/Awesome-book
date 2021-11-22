let books = [];

// // const addBooksButton = document.querySelector('#add-book');
// // const bookTitle = document.querySelector('#book-title');
// // const bookAuthor = document.querySelector('#book-author');

// // addBooksButton.addEventListener('click', () => {
// //   addBook;
// // });

const addBook = (title, author) => {
  let newBook = {
    title: title,
    author: author,
  };
  books.push(newBook);
};

addBook('book1', 'author1');
addBook('book2', 'author2');
addBook('book3', 'author3');
console.log(books);
