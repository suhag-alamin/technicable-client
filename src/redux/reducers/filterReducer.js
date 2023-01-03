import { CLEAR_TAG_FILTER, TOGGLE_FILTER } from "../actionTypes/actionTypes";

const initialState = {
  uploadFilter: "all",
  tagFilter: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        uploadFilter: action.payload,
      };
    case "TOGGLE_TAG_FILTER":
      return {
        ...state,
        tagFilter: action.payload,
      };
    case CLEAR_TAG_FILTER:
      return {
        ...state,
        tagFilter: "",
      };
    default:
      return state;
  }
};

export default filterReducer;
