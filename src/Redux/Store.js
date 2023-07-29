import { createStore } from "redux";
import LoginReducer from "./Reducer";

const store=createStore(LoginReducer);

export default store;