// ACTION TYPES
export enum CategoriesTypes {
  LOAD_REQUEST = "LOAD_REQUEST",
  LOAD_SUCCESS = "LOAD_SUCCESS",
  LOAD_FAILURE = "LOAD_FAILURE",
}

// STATE TYPES
export interface CategoriesState {
  readonly data: string[];
  readonly loading: boolean;
  readonly error: boolean;
}