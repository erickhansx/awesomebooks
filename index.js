const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');
const booksDiv = document.querySelector('.booksDiv');

let books = [];

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

// Class: UI -- To handle UI tasks
class UI {
  static addBook(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const title = inputTitle.value;
      const author = inputAuthor.value;
      const book = {
        title,
        author,
      };
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      inputAuthor.value = '';
      inputTitle.value = '';
    }
  }

  static renderBooks() {
    booksDiv.innerHTML = '';
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

// Class: Del -- To delete books from the local storage
class Del {
  static removeFromStorage(book) {
    const bookTitle = book.querySelector('#Ptitle').textContent;
    const bookAuthor = book.querySelector('#Pauthor').textContent;
    books = books.filter(
      (book) => book.title !== bookTitle && book.author !== bookAuthor
    );
    localStorage.setItem('books', JSON.stringify(books));
    if (booksDiv.innerHTML === '') {
      booksDiv.classList.remove('border');
    }
  }
}
