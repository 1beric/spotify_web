import { createSelector } from 'reselect';

export const library = createSelector(
  (state) => state.library,
  (library) => library,
);

export const paneWidth = createSelector(
  [
    (state) => state.library.paneWidth,
    (state) => state.library.collapsed,
    (state) => state.settings.collapsedPaneWidth,
  ],
  (paneWidth, collapsed, collapsedWidth) =>
    collapsed ? collapsedWidth : paneWidth,
);

export const collapsed = createSelector(
  (state) => state.library.collapsed,
  (collapsed) => collapsed,
);
