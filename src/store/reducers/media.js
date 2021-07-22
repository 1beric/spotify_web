import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    media: {
      ...state.media,
      ...payload,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.media.SET:
      return set(state, action);
    default:
      return state;
  }
};

export default reducer;
