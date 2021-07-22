import centerContent from './centerContent';
import data from './data';
import library from './library';
import media from './media';
import settings from './settings';
import social from './social';

import actionTypes from '../actionTypes';
import initialState from '../initialState';

const reducer = (state = initialState, action) => {
  console.log(action);

  const centerContentActionTypes = Object.values(actionTypes.centerContent);
  if (centerContentActionTypes.includes(action.type)) {
    return centerContent(state, action);
  }

  const dataActionTypes = Object.values(actionTypes.data);
  if (dataActionTypes.includes(action.type)) {
    return data(state, action);
  }

  const libraryActionTypes = Object.values(actionTypes.library);
  if (libraryActionTypes.includes(action.type)) {
    return library(state, action);
  }

  const mediaActionTypes = Object.values(actionTypes.media);
  if (mediaActionTypes.includes(action.type)) {
    return media(state, action);
  }

  const settingsActionTypes = Object.values(actionTypes.settings);
  if (settingsActionTypes.includes(action.type)) {
    return settings(state, action);
  }

  const socialActionTypes = Object.values(actionTypes.social);
  if (socialActionTypes.includes(action.type)) {
    return social(state, action);
  }

  return state;
};

export default reducer;
