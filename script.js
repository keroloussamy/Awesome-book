//window.onload = () => {
  
  class Book {
    static books = [];
    
    constructor(title, author){
      this.title = title;
      this.author = author;
    }

    addBook(){
      Book.books.push(this);
      console.log(Book.books);
      this.store(Book.books);
    };

    store(books){
      localStorage.setItem('books', JSON.stringify(books));
    };

  }

  let book = new Book('t1', 'a1');
  let book1 = new Book('t2', 'a2');

  book.addBook();
  book1.addBook();

  // const addBooksButton = document.querySelector('#add-book');
  // const bookTitle = document.querySelector('#book-title');
  // const bookAuthor = document.querySelector('#book-author');

  // const store = (books) => {
  //   localStorage.setItem('books', JSON.stringify(books));
  // };

  // const displayBooks = () => {
  //   const booksLocalStorage = JSON.parse(localStorage.getItem('books'));
  //   books = booksLocalStorage;
  //   let html = '';
  //   booksLocalStorage.forEach((book, index) => {
  //     html += `<div class="book">
  //               <h4>${book.title}</h4>
  //               <p>${book.author}</p>
  //               <button type="button" class="removeBtn" id="${index}">Remove</button>
  //               <hr />
  //             </div>`;
  //   });
  //   document.querySelector('#books-container').innerHTML = html;

  //   const removeBook = document.querySelectorAll('.removeBtn');

  //   [...removeBook].forEach((button) => {
  //     button.addEventListener('click', (e) => {
  //       books.splice(e.target.id, 1);
  //       store(books);
  //       displayBooks();
  //     });
  //   });
  // };

  // addBooksButton.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   addBook(bookTitle.value, bookAuthor.value);
  //   displayBooks();
  // });

  // displayBooks();
//};
