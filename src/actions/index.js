export const getListOfBooks = () =>{
  return {
    type: "BOOKS_LIST",
    paload: null
  }
}
export const onEdit = book =>{

}
export const onAdd = book=>{
  
}
export const onAddOrEditSubmit = book =>{
  return {
    type: "BOOKS_ADD_EDIT",
    payload: book
  }
}
export const onDelete = bookId=>{
  return {
    type: "BOOKS_DELETE",
    payload: bookId
  };
}