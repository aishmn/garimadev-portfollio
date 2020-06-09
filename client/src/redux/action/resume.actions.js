import api from "../../utils/api";
import { GET_ALL_JOBS, UPDATE_INFO, UPDATE_JOB, GET_INFO } from "./types";
import { setAlert } from "./alert.actions";

export const getAllJobs = () => async (dispatch) => {
  try {
    const res = await api.get("/portfollio/resume");
    dispatch({ type: GET_ALL_JOBS, payload: res.data.data.data });
    console.log(res.data.data);
  } catch (error) {
    console.log(error.response);
  }
};

export const updateResume = (
  { post, company, description, start_date, end_date },
  id = null
) => async (dispatch) => {
  try {
    const body = {
      post,
      company,
      description,
      start_date,
      end_date,
    };

    if (id !== null) {
      const res = await api.patch(`/portfollio/resume/${id}`, body);
      return res;
    }
    await api.post(`/portfollio/resume`, body);
    dispatch({ type: UPDATE_JOB });
    dispatch(getAllJobs());
    dispatch(setAlert("Updated or created successfully"));
  } catch (error) {
    console.log(error.response);
  }
};

export const getInfo = () => async (dispatch) => {
  try {
    const res = await api.get("/portfollio/info");
    dispatch({ type: GET_INFO, payload: res.data.data.data[0] });
  } catch (err) {
    console.log(err);
  }
};

export const createInfo = (
  { facebook, twitter, linkedin, instagram },
  id
) => async (dispatch) => {
  try {
    const body = {
      facebook,
      twitter,
      linkedin,
      instagram,
    };
    let res;
    if (id !== null) {
      res = await api.patch(`/portfollio/info/${id}`, body);
      dispatch(setAlert("Info Updated succesfully"));
      return res;
    } else {
      res = await api.post(`/portfollio/info`, body);
      dispatch(setAlert("Info created succesfully"));
    }

    dispatch({ type: UPDATE_INFO, payload: res.data.data.data });
  } catch (error) {
    console.log(error.response);
  }
};
