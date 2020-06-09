import { combineReducers } from "redux";
import alert from "./alert.reducers";
import auth from "./auth.reducers";
import blog from "./blog.reducers";
import category from "./category.reducers";
import resume from "./resume.reducers";
export default combineReducers({
  alert,
  auth,
  blog,
  category,
  resume,
});
