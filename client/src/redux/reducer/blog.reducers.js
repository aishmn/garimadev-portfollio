import {
  GET_ALL_BLOG,
  CREATE_BLOG,
  GET_BLOG_BY_SLUG,
  DELETE_BLOG,
  FILTER_BLOGS_BY_CATEGORY,
} from "../action/types";

const initialState = {
  blogs: null,
  loading: true,
  blog: null,
  filteredBlogs: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BLOG:
    case CREATE_BLOG:
      return { ...state, blogs: payload, blog: null, loading: false };
    case GET_BLOG_BY_SLUG:
      return { ...state, blog: payload, loading: false };
    case DELETE_BLOG:
      return { ...state, blogs: payload, loading: false };
    case FILTER_BLOGS_BY_CATEGORY:
      return { ...state, filteredBlogs: payload, loading: false };
    default:
      return state;
  }
}
