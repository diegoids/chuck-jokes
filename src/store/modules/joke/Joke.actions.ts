import { action } from 'typesafe-actions';
import { JokeTypes } from "./Joke.types";

export const loadRequest = (category: string) => action(JokeTypes.LOAD_JOKE_REQUEST, category);

export const loadSuccess = (data: string[]) => action(JokeTypes.LOAD_JOKE_SUCCESS, data);

export const loadFailure = () => action(JokeTypes.LOAD_JOKE_FAILURE);
