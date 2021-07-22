import actionTypes from '../actionTypes';

export const set = (properties) => ({
  type: actionTypes.data.SET,
  payload: properties,
});

export const setPlaylists = (playlists) => ({
  type: actionTypes.data.SET_PLAYLISTS,
  payload: { playlists: playlists },
});

export const setArtists = (artists) => ({
  type: actionTypes.data.SET_ARTISTS,
  payload: { artists: artists },
});

export const setAlbums = (albums) => ({
  type: actionTypes.data.SET_ALBUMS,
  payload: { albums: albums },
});

export const setTracks = (tracks) => ({
  type: actionTypes.data.SET_TRACKS,
  payload: { tracks: tracks },
});
