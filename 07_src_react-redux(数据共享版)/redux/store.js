import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import countRedux from "./reducers/count";
import personReducer from "./reducers/person";

const allReducers = combineReducers({
  he: countRedux,
  rens: personReducer,
});
export default createStore(allReducers, applyMiddleware(thunk));
