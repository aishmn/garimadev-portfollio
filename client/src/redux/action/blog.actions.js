import {
  GET_ALL_BLOG,
  CREATE_BLOG,
  GET_BLOG_BY_SLUG,
  DELETE_BLOG,
  FILTER_BLOGS_BY_CATEGORY,
} from "./types";
import api from "../../utils/api";
import { setAlert } from "./alert.actions";

export const getAllBlog = () => async (dispatch) => {
  try {
    const blogs = await api.get(`/portfollio/blog`);
    dispatch({ type: GET_ALL_BLOG, payload: blogs.data.data.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const createNewBlog = (data, history) => async (dispatch) => {
  try {
    const blogs = await api.post("/portfollio/blog", data);
    dispatch({ type: CREATE_BLOG, payload: blogs.data.data.data });
    dispatch(getAllBlog());
    dispatch(setAlert("Post added succesfully, Please add another!"));
    history.push("/admin");
  } catch (err) {
    console.log(err);
    console.log(err.response);
  }
};

export const getBlogBySlug = (slug) => async (dispatch) => {
  try {
    const blog = await api.get(`/portfollio/blog/${slug}`);
    dispatch({ type: GET_BLOG_BY_SLUG, payload: blog.data.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteBlog = (id, blogs) => async (dispatch) => {
  try {
    const updatedBlogs = blogs.filter((blog) => blog._id !== id);
    await api.delete(`/portfollio/blog/${id}`);
    dispatch({ type: DELETE_BLOG, payload: updatedBlogs });
  } catch (err) {
    console.log(err.message);
  }
};

export const filterBlogByCategory = (id, blogs) => (dispatch) => {
  try {
    const filteredBlogs = blogs.filter((blog) => blog.category._id !== id);
    dispatch({
      type: FILTER_BLOGS_BY_CATEGORY,
      payload: id ? filteredBlogs : blogs,
    });
  } catch (error) {
    console.log(error);
  }
};
