import api from "./../../utils/api";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
} from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get("/portfollio/category");
    dispatch({ type: GET_CATEGORIES, payload: res.data.data.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_ERROR });
  }
};

export const createCategory = (data, history) => async (dispatch) => {
  try {
    const res = await api.post("/portfollio/category", data);
    console.log(res.data);
    dispatch({ type: CREATE_CATEGORY });
    dispatch(getCategories());
    history.push("/admin/all-category");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = (id, categories) => async (dispatch) => {
  try {
    await api.delete(`/portfollio/category/${id}`);
    const fcategories = categories.filter((category) => category._id !== id);

    dispatch({ type: DELETE_CATEGORY, payload: fcategories });
  } catch (error) {
    console.log(error.response);
  }
};
