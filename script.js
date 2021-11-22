window.onload = () => {
  let books = [];

  const addBooksButton = document.querySelector('#add-book');
  const bookTitle = document.querySelector('#book-title');
  const bookAuthor = document.querySelector('#book-author');

  const store = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  const addBook = (title, author) => {
    const newBook = {
      title,
      author,
    };
    books.push(newBook);
    store(books);
  };

  const displayBooks = () => {
    const booksLocalStorage = JSON.parse(localStorage.getItem('books'));
    books = booksLocalStorage;
    let html = '';
    booksLocalStorage.forEach((book, index) => {
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
        books.splice(e.target.id, 1);
        store(books);
        displayBooks();
      });
    });
  };

  addBooksButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBook(bookTitle.value, bookAuthor.value);
    displayBooks();
  });

  displayBooks();
};
