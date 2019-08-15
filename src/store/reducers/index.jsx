import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import getPostsList from "./getPostsList";
import getPostList from "./getPostList";
import user from "./user";

const rootReducer = combineReducers({
  notifications,
  isRegistered,
  user,
  getPostsList,
  getPostList
});

export default rootReducer;
