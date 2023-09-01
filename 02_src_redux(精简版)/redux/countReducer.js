const initState = 0;
export default function countReducer(prevState = initState, action) {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return prevState + value;
    case "decrement":
      return prevState - value;
    default:
      return prevState;
  }
}
