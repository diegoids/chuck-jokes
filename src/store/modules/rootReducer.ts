import { combineReducers } from "redux";

import categories from "./categories/Categories.reducer";
import joke       from "./joke/Joke.reducer";

export default combineReducers({
  categories,
  joke
});
