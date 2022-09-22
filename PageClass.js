export default class Page {
  static bookListPage() {
    const bookList = document.querySelector('.booksDiv');
    const bookListH1 = document.querySelector('.bookListH1');
    bookListH1.classList.remove('invisible');
    bookList.classList.remove('invisible');
  }

  static bookFormPage() {
    const bookForm = document.querySelector('.addBookForm');
    bookForm.classList.remove('invisible');
  }

  static contactPage() {
    const contactPageDiv = document.querySelector('.contactPage');
    contactPageDiv.innerHTML = '';
    const contactPageH1 = document.createElement('h1');
    const contactPageP = document.createElement('p');
    const contactPageUl = document.createElement('ul');
    const contactPageLi1 = document.createElement('li');
    const contactPageLi2 = document.createElement('li');
    const contactPageLi3 = document.createElement('li');
    contactPageH1.innerHTML = 'Contact Information';
    contactPageP.innerHTML = 'Do you have any questions or you just want to say "Hello"? <br> You can reach out to us!';
    contactPageLi1.innerHTML = 'Our email: <a href="mailto: mail@mail.com">';
    contactPageLi2.innerHTML = 'Our phone number: 123-456-789';
    contactPageLi3.innerHTML = 'Our address: 123 Street, City, Country';
    contactPageUl.appendChild(contactPageLi1);
    contactPageUl.appendChild(contactPageLi2);
    contactPageUl.appendChild(contactPageLi3);
    contactPageDiv.appendChild(contactPageH1);
    contactPageDiv.appendChild(contactPageP);
    contactPageDiv.appendChild(contactPageUl);
    contactPageDiv.classList.remove('invisible');
  }

  static allIvisible() {
    const bookListH1 = document.querySelector('.bookListH1');
    bookListH1.classList.add('invisible');
    const bookList = document.querySelector('.booksDiv');
    bookList.classList.add('invisible');
    const bookForm = document.querySelector('.addBookForm');
    bookForm.classList.add('invisible');
    const contactPageDiv = document.querySelector('.contactPage');
    contactPageDiv.classList.add('invisible');
  }
}
