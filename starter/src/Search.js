import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookView from "./BookView";
const Search = ({books, searchResults, onSearch, onUpdateShelf}) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    onSearch(searchValue);
  }, [searchValue])
  const handleInBooks = (book) => {
    const newBooks = books.filter(b => b.id === book.id);
    if(newBooks.length > 0)
      return newBooks[0];
    book.shelf = 'none';
    return book;
  }
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
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {
          searchResults.map((book) => (
            book = handleInBooks(book),
            <BookView book={book} onUpdateShelf={onUpdateShelf} key={book.id} />
          ))
        }
        </ol>
      </div>
    </div>
  );
}

export default Search;