import actionTypes from '../actionTypes';

export const set = (properties) => ({
  type: actionTypes.settings.SET,
  payload: properties,
});
