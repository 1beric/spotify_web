import { createSelector } from 'reselect';

export const media = createSelector(
  (state) => state.media,
  (media) => media,
);

export const hasSong = createSelector(
  (state) => state.media.currentSong,
  (currentSong) => currentSong !== null,
);

export const currentSong = createSelector(
  (state) => state.media.currentSong,
  (currentSong) => currentSong,
);

export const playing = createSelector(
  (state) => state.media.playing,
  (playing) => playing,
);

export const userQueue = createSelector(
  (state) => state.media.userQueue,
  (userQueue) => userQueue,
);

export const playQueue = createSelector(
  (state) => state.media.playQueue,
  (playQueue) => playQueue,
);

export const combinedQueue = createSelector(
  [(state) => state.media.userQueue, (state) => state.media.playQueue],
  (userQueue, playQueue) => [...userQueue, ...playQueue],
);

export const history = createSelector(
  (state) => state.media.history,
  (history) => history,
);

export const volume = createSelector(
  (state) => state.media.volume,
  (volume) => volume / 100.0,
);

export const muted = createSelector(
  (state) => state.media.muted,
  (muted) => muted,
);

export const shuffling = createSelector(
  (state) => state.media.shuffling,
  (shuffling) => shuffling,
);

export const repeating = createSelector(
  (state) => state.media.repeating,
  (repeating) => repeating,
);
