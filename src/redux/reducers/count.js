import { DECREMENT, INCREMENT } from "../constanst";

const initState = 0;
export default function countRedux(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return prevState + data;
    case DECREMENT:
      return prevState - data;
    default:
      return prevState;
  }
}
