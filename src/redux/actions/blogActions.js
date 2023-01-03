import { GET_CONTENT } from "../actionTypes/actionTypes";

export const getBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
