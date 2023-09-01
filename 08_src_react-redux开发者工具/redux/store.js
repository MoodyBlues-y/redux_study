import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import countRedux from "./reducers/count";
import personReducer from "./reducers/person";
import { composeWithDevTools } from "redux-devtools-extension";

const allReducers = combineReducers({
  he: countRedux,
  rens: personReducer,
});
export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
