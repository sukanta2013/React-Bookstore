import CounterReducer from "./reducer-counters";

export default function(state = CounterReducer(), action) {
  switch (action.type) {
    case "COUNTER_RESET":
      return resetCounter(action.payload);
    case "COUNTER_INCREMENT":
      return incrementCounter(state, action.payload);
    case "COUNTER_DELETE":
      return deleteCounter(state, action.payload);
  }
  return state;
}
function resetCounter(counters) {
  const countersReset = counters.map(c => {
    c.value = 0;
    return c;
  });
  return countersReset;
}
function incrementCounter(state, counter) {
  const counters = [...state];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value++;
  return counters;
}
function deleteCounter(state, counterId) {
  const counters = state.filter(c => c.id != counterId);
  return counters;
}
