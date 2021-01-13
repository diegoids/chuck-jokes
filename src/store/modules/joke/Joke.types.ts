// ACTION TYPES
export enum JokeTypes {
  LOAD_JOKE_REQUEST = "LOAD_JOKE_REQUEST",
  LOAD_JOKE_SUCCESS = "LOAD_JOKE_SUCCESS",
  LOAD_JOKE_FAILURE = "LOAD_JOKE_FAILURE",
}

// DATA TYPES
export interface JokeProps {
  type: typeof JokeTypes.LOAD_JOKE_REQUEST;
  payload: string
}

// STATE TYPES
export interface JokeState {
  readonly data: string[];
  readonly loading: boolean;
  readonly error: boolean;
}