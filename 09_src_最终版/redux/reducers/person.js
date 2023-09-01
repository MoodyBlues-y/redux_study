import { ADD_PERSON } from "../constanst";

const initState = [{ id: "001", name: "tom", age: 18 }];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // console.log(preState);
      // return preState.unshift(data);
      return [data, ...preState];
    default:
      return preState;
  }
}
