import { createSelector } from 'reselect';

export const social = createSelector(
  (state) => state.social,
  (social) => social,
);

export const paneWidth = createSelector(
  [
    (state) => state.social.paneWidth,
    (state) => state.social.collapsed,
    (state) => state.settings.collapsedPaneWidth,
  ],
  (paneWidth, collapsed, collapsedWidth) =>
    collapsed ? collapsedWidth : paneWidth,
);

export const collapsed = createSelector(
  (state) => state.social.collapsed,
  (collapsed) => collapsed,
);
