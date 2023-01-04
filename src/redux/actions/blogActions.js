import {
  ADD_TO_READING_HISTORY,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

export const getBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};

export const addToReadingHistory = (blog) => {
  return {
    type: ADD_TO_READING_HISTORY,
    payload: blog,
  };
};
