import BookData from "../data/BookData";

export default function (state = BookData, action) {
  switch (action.type) {
    case "BOOKS_LIST":
      return getAllBooks(state);
    case "BOOKS_ADD_EDIT":
      return addOrEditBook(state, action.payload, action.modalIsOpen);
    case "BOOKS_EDIT":
      return editBook(state, action.payload);
    case "BOOKS_SEARCH":
      return searchBooks(BookData, action.payload, action.colName)
    case "BOOKS_DELETE":
      return deleteBook(state, action.payload)
  }
  return state;
}

function getAllBooks(state, initialState = BookData ) {
  const allBooks = {...initialState,...state};
  return allBooks;
}
function searchBooks(state, searchKey, colName){
  let inBooks = [...state.books];
  // let inBooks = getAllBooks(state).books;
  let books = inBooks.filter(book=>book[colName].toLowerCase().includes(searchKey))
  return {books: books}
}

function addOrEditBook(state, book) {
  let books = [...state.books];
  const indexOfBook = books.findIndex(x=>x.id==book.id)
  if (indexOfBook >= 0) {
    books[indexOfBook] = { ...book
    }
    return {
      books: books,
    }
  } else {
    let lastBookId = books.length!=0? books.slice(-1)[0].id : 0
    book.id = lastBookId + 1
    books.push({ ...book
    });
    return {
      books: books,
    }
  }
}

function addBook(state, book) {

}

function editBook(state, book) {

}

function deleteBook(state, bookId) {
  const books = state.books.filter(c => c.id != bookId);
  return {
    books: books
  };
}