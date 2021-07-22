import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    settings: {
      ...state.settings,
      ...payload,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.settings.SET:
      return set(state, action);
    default:
      return state;
  }
};

export default reducer;
