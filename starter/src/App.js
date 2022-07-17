import "./App.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import * as api from "./BooksAPI";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect (() => {
    const fetchBooks = async () => {
      const books = await api.getAll();
      setBooks(books);
    }
    fetchBooks();
  }, []);
  
  const handleSearch = async (query) => {
    setSearchResults([]);
    if(query === "") return;
    const books = await api.search(query, 20);
    if(books.length > 0)
      setSearchResults(books);
  }
  const handleUpdateShelf = async (book, shelf) => {
    await api.update(book, shelf);
    const newBook = book;
    newBook.shelf = shelf;
    if (shelf === 'none') 
      setBooks(books.filter(b => b.id !== book.id));
    else if(!books.includes(book))
      setBooks([...books, newBook]);
    else
      setBooks(books.map(b => b.id === newBook.id ? newBook : b));
  }
  return (
    <Routes>
      <Route path="/" element={
        <ListBooks 
          books={books}
          onUpdateShelf={handleUpdateShelf}
        />
      }>
      </Route>
      
      <Route path="/search" element={
        <Search 
          onSearch={handleSearch}
          onUpdateShelf={handleUpdateShelf}
          searchResults={searchResults}
          books={books}
        />
      }>
      </Route>
    </Routes>
  );
}

export default App;
