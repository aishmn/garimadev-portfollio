import {
  GET_ALL_JOBS,
  UPDATE_JOB,
  UPDATE_INFO,
  GET_INFO,
} from "../action/types";

const initialState = {
  jobs: null,
  loading: true,
  job: null,
  info: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_JOBS:
      return { ...state, jobs: payload };
    case UPDATE_JOB:
      return { ...state };
    case UPDATE_INFO:
    case GET_INFO:
      return { ...state, info: payload, loading: false };

    default:
      return state;
  }
}
