import { ADD_FAV, DELETE_FAV } from "../actions-types/action-types";

export function addFav(data) {
  return {
    type: ADD_FAV,
    payload: data,
  };
}

export function deleteFav(id) {
  return {
    type: DELETE_FAV,
    payload: Number(id),
  };
}
