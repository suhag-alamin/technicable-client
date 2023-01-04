import { ADD_TO_READING_HISTORY } from "../actionTypes/actionTypes";

const historyCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const readingHistory = state.blog.readingHistory;
  if (action.type === ADD_TO_READING_HISTORY) {
    const newAction = {
      ...action,
      payload: { ...action.payload, historyCount: readingHistory.length },
    };
    return next(newAction);
  }

  return next(action);
};

export default historyCounter;
