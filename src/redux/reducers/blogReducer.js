import {
  ADD_TO_READING_HISTORY,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  readingHistory: [],
};
const blogReducer = (state = initialState, action) => {
  const readBlog = state.readingHistory.find(
    (blog) => blog._id === action.payload._id
  );
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_TO_READING_HISTORY:
      if (readBlog) {
        return state;
      }
      return {
        ...state,
        readingHistory: [...state.readingHistory, action.payload],
      };
    default:
      return state;
  }
};
export default blogReducer;
