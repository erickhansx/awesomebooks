/* eslint-disable import/extensions */
import Del from './src/modules/DelClass.js';
import Page from './src/modules/PageClass.js';
import UI from './src/modules/UIClass.js';

const addBtn = document.querySelector('.add-btn');
const booksDiv = document.querySelector('.booksDiv');
const listLink = document.querySelector('.nav__link--1');
const addBookLink = document.querySelector('.nav__link--2');
const contactPageLink = document.querySelector('.nav__link--3');

// Event Listeners

window.addEventListener('DOMContentLoaded', () => {
  const storageBooks = JSON.parse(localStorage.getItem('books'));
  if (storageBooks) {
    UI.renderBooks();
    UI.setDate();
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
