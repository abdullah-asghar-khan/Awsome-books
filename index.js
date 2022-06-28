import Book from './modules/book.js';
import BookCollection from './modules/bookCollection.js';
import { addBookToLS, removeBookLS } from './modules/localStorage.js';
import handleLinkClick from './modules/navbarLinks.js';
import clearFormFields from './modules/clearForm.js';
import getDate from './modules/date.js';

window.addEventListener('DOMContentLoaded', BookCollection.bookDisplay);

const formEl = document.querySelector('#book-form');
formEl.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#book-author').value;

  if (title !== '' && author !== '') {
    if (e.target.classList.contains('addButton')) {
      const newBook = new Book(title, author);
      newBook.id = BookCollection.list.length + 1;
      BookCollection.addBookUI(newBook);
      addBookToLS(newBook);
      clearFormFields();
      formEl.submit();
    }
  }
});

const bookContainer = document.querySelector('.booksContainer');
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const bookId = e.target.parentElement.id;
    BookCollection.removeBook(bookId);
    removeBookLS(bookId);
    e.target.parentElement.remove();
  }
});

document.getElementById('nav-links').addEventListener('click', handleLinkClick);
document.getElementById('defaultOpen').click(); 

const navbar = document.querySelector('header');
const dateEl = document.createElement('p');
dateEl.classList.add('date');
dateEl.innerHTML = getDate();
navbar.appendChild(dateEl);
