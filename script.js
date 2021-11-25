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
    if (!JSON.parse(localStorage.getItem('books'))) {
      Book.books = [];
    } else {
      Book.books = JSON.parse(localStorage.getItem('books'));
    }
    let html = '<table class="">';
    if (Book.books) {
      Book.books.forEach((book, index) => {
        html += `<tr class="${index % 2 === 0 ? 'bg-green-100' : ''}">
          <td class="book-information">
            <span class="book-title break-all">${book.title}</span>
            <span class="book-author break-all"> by ${book.author}</span>
          </td>
          <td class="text-right">
            <button type="button" class="removeBtn" id="${index}">
              Remove
            </button>
          </td>
        </tr>`;
      });
      html += '</table>';
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

const addBookForm = document.querySelector('form');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (/\w/.test(bookTitle.value) && /\w/.test(bookAuthor.value)) {
    const book = new Book(bookTitle.value, bookAuthor.value);
    book.addBook();
  }
  Book.displayBooks();
});

const linkItem1 = document.querySelector('.link-Item1');
const linkItem2 = document.querySelector('.link-Item2');
const linkItem3 = document.querySelector('.link-Item3');
linkItem1.addEventListener('click', (e) => {
  e.target.classList.add('text-green-400');
  linkItem2.classList.remove('text-green-400');
  linkItem3.classList.remove('text-green-400');
});
linkItem2.addEventListener('click', (e) => {
  e.target.classList.add('text-green-400');
  linkItem1.classList.remove('text-green-400');
  linkItem3.classList.remove('text-green-400');
});
linkItem3.addEventListener('click', (e) => {
  e.target.classList.add('text-green-400');
  linkItem2.classList.remove('text-green-400');
  linkItem1.classList.remove('text-green-400');
});

window.onload = () => {
  const { DateTime } = luxon; // eslint-disable-line
  const divTime = document.querySelector('#time');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  divTime.textContent = now;

  Book.displayBooks();
};
