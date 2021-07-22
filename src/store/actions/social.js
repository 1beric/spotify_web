import actionTypes from '../actionTypes';

export const set = (properties) => ({
  type: actionTypes.social.SET,
  payload: properties,
});
