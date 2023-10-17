import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";
import "bootstrap/dist/css/bootstrap.css";

export default combineReducers({
  // REDUCERS
  userReducer,
  postReducer,
});
