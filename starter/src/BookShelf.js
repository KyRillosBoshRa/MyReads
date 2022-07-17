
import BookView from "./BookView";
const BookShelf = ({title, shelf, books, onUpdateShelf}) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.filter((book) => book.shelf === shelf).map((book) => (
              <BookView
                book={book}
                onUpdateShelf={onUpdateShelf}
                key={book.id}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
