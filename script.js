class Book {
  static books = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    Book.books.push(this);
    Book.store(Book.books);
  }

  static store(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    Book.books = JSON.parse(localStorage.getItem('books'));
    let html = '';
    if (Book.books) {
      Book.books.forEach((book, index) => {
        html += `<div class="book">
                <h4>${book.title}</h4>
                <p>${book.author}</p>
                <button type="button" class="removeBtn" id="${index}">Remove</button>
                <hr />
              </div>`;
      });
      document.querySelector('#books-container').innerHTML = html;

      const removeBook = document.querySelectorAll('.removeBtn');

      [...removeBook].forEach((button) => {
        button.addEventListener('click', (e) => {
          Book.books.splice(e.target.id, 1);
          Book.store(Book.books);
          Book.displayBooks();
        });
      });
    }
  }
}

const addBooksButton = document.querySelector('#add-book');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

addBooksButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(bookTitle.value, bookAuthor.value);
  book.addBook();
  Book.displayBooks();
});

window.onload = () => {
  Book.displayBooks();
};
