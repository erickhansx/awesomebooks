let books = JSON.parse(localStorage.getItem('books'));
const booksDiv = document.querySelector('.booksDiv');

export default class Del {
  static removeFromStorage(book) {
    const bookTitle = book.querySelector('#Ptitle').textContent;
    const bookAuthor = book.querySelector('#Pauthor').textContent;
    books = books.filter(
      (book) => book.title !== bookTitle && book.author !== bookAuthor,
    );
    localStorage.setItem('books', JSON.stringify(books));
    if (booksDiv.innerHTML === '') {
      booksDiv.classList.remove('border');
    }
  }
}
