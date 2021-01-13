import { action } from 'typesafe-actions';
import { CategoriesTypes } from "./Categories.types";

export const loadRequest = () => action(CategoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: string[]) => action(CategoriesTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(CategoriesTypes.LOAD_FAILURE);
