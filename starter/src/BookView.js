const BookView = ({ book, onUpdateShelf }) => {
  function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes[0].nodeValue;
  }
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}></div>
          <div className='book-shelf-changer'>
            <select onChange={(e) => onUpdateShelf(book, e.target.value)} value={book.shelf}>
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>{book.shelf === 'currentlyReading' && htmlDecode('&#10003;')} Currently Reading</option>
              <option value='wantToRead'>{book.shelf === 'wantToRead' && htmlDecode('&#10003;')} Want to Read</option>
              <option value='read'>{book.shelf === 'read' && htmlDecode('&#10003;')} Read</option>
              <option value='none' hidden={book.shelf === 'none'}>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    </li>
  );
};
export default BookView;
