const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');
const booksDiv = document.querySelector('.booksDiv');

let books = [];

const renderBooks = () => {
  booksDiv.innerHTML = '';
  books.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button class="remove-btn">Remove</button>
    `;
    booksDiv.appendChild(bookDiv);
    localStorage.setItem('books', JSON.stringify(books));
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const storageBooks = JSON.parse(localStorage.getItem('books'));
  if (storageBooks) {
    books = storageBooks;
    renderBooks();
  }
});

const validateForm = () => {
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
};

const addBook = (e) => {
  e.preventDefault();
  if (validateForm()) {
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
};

addBtn.addEventListener('click', (e) => {
  addBook(e);
  renderBooks();
});

const removeFromStorage = (book) => {
  const bookTitle = book.querySelector('h3').textContent;
  const bookAuthor = book.querySelector('p').textContent;
  books = books.filter(
    (book) => book.title !== bookTitle && book.author !== bookAuthor,
  );
  localStorage.setItem('books', JSON.stringify(books));
};

booksDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
    removeFromStorage(e.target.parentElement);
  }
});
