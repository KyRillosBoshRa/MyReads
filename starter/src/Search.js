import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookView from "./BookView";
const Search = ({searchResults, onSearch, onUpdateShelf}) => {
  useEffect(() => {
    onSearch('');
  }, [])
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {
          searchResults.map((book) => (
            <BookView book={book} onUpdateShelf={onUpdateShelf} key={book.id} />
          ))
        }
        </ol>
      </div>
    </div>
  );
}

export default Search;