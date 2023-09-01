import { DECREMENT, INCREMENT } from "./constanst";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
