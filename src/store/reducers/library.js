import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    library: {
      ...state.library,
      ...payload,
    },
  };
};

const setPlaylists = (state, { payload: { playlists } }) => {
  return {
    ...state,
    library: {
      ...state.library,
      tabs: {
        ...state.library.tabs,
        playlists: playlists,
      },
    },
  };
};

const setArtists = (state, { payload: { artists } }) => {
  return {
    ...state,
    library: {
      ...state.library,
      tabs: {
        ...state.library.tabs,
        artists: artists,
      },
    },
  };
};

const setAlbums = (state, { payload: { albums } }) => {
  return {
    ...state,
    library: {
      ...state.library,
      tabs: {
        ...state.library.tabs,
        albums: albums,
      },
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.library.SET:
      return set(state, action);

    case actionTypes.library.SET_PLAYLISTS:
      return setPlaylists(state, action);

    case actionTypes.library.SET_ARTISTS:
      return setArtists(state, action);

    case actionTypes.library.SET_ALBUMS:
      return setAlbums(state, action);

    default:
      return state;
  }
};

export default reducer;
