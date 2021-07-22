import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    centerContent: {
      ...state.centerContent,
      ...payload,
    },
  };
};

const setCurrentPage = (state, { payload: currentPage }) => {
  return {
    ...state,
    centerContent: {
      ...state.centerContent,
      currentPage: currentPage,
      history: {
        forward: [],
        back: [
          ...state.centerContent.history.back,
          state.centerContent.currentPage,
        ],
      },
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.centerContent.SET:
      return set(state, action);
    case actionTypes.centerContent.SET_CURRENT_PAGE:
      return setCurrentPage(state, action);
    default:
      return state;
  }
};

export default reducer;
