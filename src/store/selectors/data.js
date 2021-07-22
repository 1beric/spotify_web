import { createSelector } from 'reselect';

export const data = createSelector(
  (state) => state.data,
  (data) => data,
);

export const albums = createSelector(
  (state) => state.data.albums,
  (albums) => albums,
);

export const artists = createSelector(
  (state) => state.data.artists,
  (artists) => artists,
);

export const friends = createSelector(
  (state) => state.data.friends,
  (friends) => friends,
);

export const playlists = createSelector(
  (state) => state.data.playlists,
  (playlists) => playlists,
);

export const tracks = createSelector(
  (state) => state.data.tracks,
  (tracks) => tracks,
);
