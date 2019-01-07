import BookData from "../data/BookData";
export default function(state = BookData, action) {
    switch (action.type) {
      case "BOOKS_LIST":
        return getAllBooks(state);
      case "BOOKS_ADD":
        return addBook(state, action.payload);
      case "BOOKS_EDIT":
        return editBook(state, action.payload);
      case "BOOKS_DELETE":
        return deleteBook(state, action.payload)
    }
    return state;
}
function getAllBooks(state){
    const allBooks = [...state];
    return allBooks;
}
function addBook(state, book){

}
function editBook(state, book) {

}
function deleteBook(state, bookId){
    const books = state.filter(c => c.id != bookId);
    return books;
}