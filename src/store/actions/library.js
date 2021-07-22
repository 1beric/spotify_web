import actionTypes from '../actionTypes';

export const set = (properties) => ({
  type: actionTypes.library.SET,
  payload: properties,
});
