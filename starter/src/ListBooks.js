import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const ListBooks = ({ books, onUpdateShelf }) => {
  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <BookShelf
            title='Currently Reading'
            shelf='currentlyReading'
            books={books}
            onUpdateShelf={onUpdateShelf}
          />
          <BookShelf
            title='Want to Read'
            shelf='wantToRead'
            books={books}
            onUpdateShelf={onUpdateShelf}
          />
          <BookShelf
            title='Read'
            shelf='read'
            books={books}
            onUpdateShelf={onUpdateShelf}
          />
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};
export default ListBooks;
