// export function resetCounter(counters) {
//   console.log("counters: ", counters);
// }
export const resetCounter = counters => {
  return {
    type: "COUNTER_RESET",
    payload: counters
  };
};
export const incrementCounter = counter => {
  return {
    type: "COUNTER_INCREMENT",
    payload: counter
  };
};
export const deleteCounter = counterId => {
  return {
    type: "COUNTER_DELETE",
    payload: counterId
  };
};
export const onDelete = bookId =>{
  return {
    type: "BOOKS_DELETE",
    payload: bookId
  }
}
export const onEdit = book =>{

}
