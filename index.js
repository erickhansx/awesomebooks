import Del from './DelClass.js';
import Book from './BookClass.js';
import Page from './PageClass.js';

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');
const booksDiv = document.querySelector('.booksDiv');
const listLink = document.querySelector('.nav__link--1');
const addBookLink = document.querySelector('.nav__link--2');
const contactPageLink = document.querySelector('.nav__link--3');

let books = [];

// Class: UI -- To handle UI tasks
class UI {
  static addBook(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const title = inputTitle.value;
      const author = inputAuthor.value;
      const book = new Book(title, author);
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      inputAuthor.value = '';
      inputTitle.value = '';
    }
  }

  static renderBooks() {
    booksDiv.innerHTML = '';
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <p id= "Ptitle">"${book.title}" by <span id="Pauthor">${book.author}</span></p>
        <button class="remove-btn">Remove</button>
      `;
      booksDiv.appendChild(bookDiv);
      localStorage.setItem('books', JSON.stringify(books));
      if (booksDiv !== null) {
        booksDiv.classList.add('border');
      }
    });
  }

  static validateForm() {
    if (inputTitle.value === '' || inputAuthor.value === '') {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert');
      alertDiv.innerHTML = 'Please fill in all fields';
      document.body.appendChild(alertDiv);
      setTimeout(() => {
        alertDiv.remove();
      }, 2000);
      return false;
    }
    return true;
  }
}
// Event Listeners

window.addEventListener('DOMContentLoaded', () => {
  const storageBooks = JSON.parse(localStorage.getItem('books'));
  if (storageBooks) {
    books = storageBooks;
    UI.renderBooks();
  }
});

addBtn.addEventListener('click', (e) => {
  UI.addBook(e);
  UI.renderBooks();
});

booksDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
    Del.removeFromStorage(e.target.parentElement);
  }
});

listLink.addEventListener('click', () => {
  Page.allIvisible();
  Page.bookListPage();
});

addBookLink.addEventListener('click', () => {
  Page.allIvisible();
  Page.bookFormPage();
});

contactPageLink.addEventListener('click', () => {
  Page.allIvisible();
  Page.contactPage();
});
