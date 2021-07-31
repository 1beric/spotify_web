import { createSelector } from 'reselect';

export const paneWidth = createSelector(
  [
    (state) => state.library.paneWidth,
    (state) => state.library.collapsed,
    (state) => state.social.paneWidth,
    (state) => state.social.collapsed,
    (state) => state.settings.collapsedPaneWidth,
    (state) => state.settings.screenSize.width,
  ],
  (
    libraryPaneWidth,
    libraryCollapsed,
    socialPaneWidth,
    socialCollapsed,
    collapsedWidth,
    screenWidth,
  ) => {
    const library = !libraryCollapsed ? libraryPaneWidth : collapsedWidth;
    const social = !socialCollapsed ? socialPaneWidth : collapsedWidth;
    return screenWidth - library - social;
  },
);

export const currentPage = createSelector(
  (state) => state.centerContent.currentPage,
  (currentPage) => currentPage,
);

export const history = createSelector(
  (state) => state.centerContent.history,
  (history) => history,
);

export const background = createSelector(
  (state) => state.centerContent.background,
  (background) => background,
);
