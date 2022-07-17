import defaultBookCover from './photos/default_book_cover.jpg';
const BookView = ({ book, onUpdateShelf }) => {
  function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes[0].nodeValue;
  }
  if(!book.imageLinks)
    book.imageLinks = {'thumbnail': defaultBookCover};
  if(!book.imageLinks.thumbnail)
    book.imageLinks.thumbnail = defaultBookCover;
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundSize: 'cover',
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
