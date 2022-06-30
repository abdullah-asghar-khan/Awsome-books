import { getBooks } from './localStorage.js';

export default class BookCollection {
    static list = getBooks();

    static bookCard = ({ title, author, id }) => {
      const cardHolder = document.createElement('div');
      cardHolder.classList.add('book-card');
      cardHolder.id = id; // Each book card holder assigned book id

      const displayEl = document.createElement('div');
      displayEl.textContent = `"${title}" by ${author}`;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'remove';
      removeBtn.classList.add('remove-btn');

      cardHolder.append(displayEl, removeBtn);
      return cardHolder;
    }

    static addBookUI = (book) => {
      const bookContainer = document.querySelector('.booksContainer');
      bookContainer.appendChild(BookCollection.bookCard(book));
      // Add Book to list.
      BookCollection.list = [...BookCollection.list, book];
    }

    // Display books in Booklist on page load
    static bookDisplay = () => {
      const bookContainer = document.querySelector('.booksContainer');
      BookCollection.list.forEach((book) => {
        bookContainer.appendChild(BookCollection.bookCard(book));
      });
    }

    // Remove book
    static removeBook = (id) => {
      BookCollection.list = BookCollection.list.filter((item) => (item.id).toString() !== id);
    }
}