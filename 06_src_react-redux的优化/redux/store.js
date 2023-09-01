import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countRedux from "./countRedux";

export default createStore(countRedux, applyMiddleware(thunk));
