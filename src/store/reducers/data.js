import actionTypes from '../actionTypes';

const set = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
};

const setPlaylists = (state, { payload: { playlists } }) => {
  return {
    ...state,
    data: {
      ...state.data,
      playlists: playlists,
    },
  };
};

const setArtists = (state, { payload: { artists } }) => {
  return {
    ...state,
    data: {
      ...state.data,
      artists: artists,
    },
  };
};

const setAlbums = (state, { payload: { albums } }) => {
  return {
    ...state,
    data: {
      ...state.data,
      albums: albums,
    },
  };
};

const setTracks = (state, { payload: { tracks } }) => {
  return {
    ...state,
    data: {
      ...state.data,
      tracks: tracks,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.data.SET:
      return set(state, action);

    case actionTypes.data.SET_PLAYLISTS:
      return setPlaylists(state, action);

    case actionTypes.data.SET_ARTISTS:
      return setArtists(state, action);

    case actionTypes.data.SET_ALBUMS:
      return setAlbums(state, action);

    case actionTypes.data.SET_TRACKS:
      return setTracks(state, action);

    default:
      return state;
  }
};

export default reducer;
