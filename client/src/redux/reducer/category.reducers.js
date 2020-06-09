import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
} from "../action/types";

const initialState = {
  categories: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
    case DELETE_CATEGORY:
      return { ...state, categories: payload };

    case GET_CATEGORIES_ERROR:
      return { ...state, categories: null };

    case CREATE_CATEGORY:
      return { ...state };
    default:
      return state;
  }
}
