import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    social: {
      ...state.social,
      ...payload,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.social.SET:
      return set(state, action);
    default:
      return state;
  }
};

export default reducer;
