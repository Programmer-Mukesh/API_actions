import { combineReducers } from "redux";
import { userReducer } from "./index";

const rootReducer = combineReducers({
  userData: userReducer,
});

export default rootReducer;
