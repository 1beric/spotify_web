import { createSelector } from 'reselect';

export const settings = createSelector(
  (state) => state.settings,
  (settings) => settings,
);

export const collapsedPaneWidth = createSelector(
  [(state) => state.settings.collapsedPaneWidth],
  (collapsedWidth) => collapsedWidth,
);

export const isDarkTheme = createSelector(
  (state) => state.settings.isDarkTheme,
  (isDarkTheme) => isDarkTheme,
);

export const screenSize = createSelector(
  (state) => state.settings.screenSize,
  (screenSize) => screenSize,
);

export const screenWidth = createSelector(
  (state) => state.settings.screenSize.width,
  (screenWidth) => screenWidth,
);

export const screenHeight = createSelector(
  (state) => state.settings.screenSize.height,
  (screenHeight) => screenHeight,
);
