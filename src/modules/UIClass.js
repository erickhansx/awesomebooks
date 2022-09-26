/* eslint-disable import/extensions */
// import { books } from '../../index.js';
import Book from './BookClass.js';
import { DateTime } from './luxon.js';

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const booksDiv = document.querySelector('.booksDiv');

let books = [];
export default class UI {
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
    books = JSON.parse(localStorage.getItem('books'));
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

  static setDate() {
    const date = document.createElement('span');
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    date.innerHTML = DateTime.now().toString();
    dateDiv.appendChild(date);
    const awesomeBooks = document.querySelector('.awesome-books');
    const booksContainer = document.querySelector('.books-container');
    awesomeBooks.insertBefore(dateDiv, booksContainer);
  }
}
