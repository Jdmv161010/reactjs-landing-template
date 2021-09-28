import { combineReducers } from "redux";
import { lenguageReducer } from "./lenguageReducer";

export const rootReducer = combineReducers({
  lenguage: lenguageReducer,
});
