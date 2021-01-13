import { Reducer } from "redux";
import { JokeState, JokeTypes } from "./Joke.types";

const INITIAL_STATE: JokeState = {
  data:    [],
  loading: false,
  error:   false
};

const reducer: Reducer<JokeState> = (state = INITIAL_STATE, action) => {
  switch( action.type ) {
    case JokeTypes.LOAD_JOKE_REQUEST:
      return { ...state, loading: true };

    case JokeTypes.LOAD_JOKE_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };

    case JokeTypes.LOAD_JOKE_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
}

export default reducer;
