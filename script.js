let books = [];

const addBooksButton = document.querySelector('#add-book');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');


const addBook = (title, author) => {
  let newBook = {
    title: title,
    author: author,
  };
  books.push(newBook);
};

addBooksButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);

  let html = `<div class="book">
                <h4>${bookTitle.value}</h4>
                <p>${bookAuthor.value}</p>
                <button class="removeBtn">Remove</button>
                <hr />
              </div>`;
  let div = document.createElement('div');
  div.innerHTML = html;
  document.querySelector('#books-container').appendChild(div);
});