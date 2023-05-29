import { ADD_FAV, DELETE_FAV } from "../actions-types/action-types";

const initialState = {
  favs: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, payload],
      };

    case DELETE_FAV:
      return {
        ...state,
        favs: state.favs.filter((val) => val.id !== payload),
      };

    default:
      return {
        ...state,
      };
  }
}
