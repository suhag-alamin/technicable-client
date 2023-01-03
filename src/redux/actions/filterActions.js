import {
  CLEAR_TAG_FILTER,
  TOGGLE_FILTER,
  TOGGLE_TAG_FILTER,
} from "../actionTypes/actionTypes";

export const toggleFilter = (data) => {
  return {
    type: TOGGLE_FILTER,
    payload: data,
  };
};

export const toggleTagFilter = (data) => {
  return {
    type: TOGGLE_TAG_FILTER,
    payload: data,
  };
};

export const clearTagFilter = () => {
  return {
    type: CLEAR_TAG_FILTER,
  };
};
