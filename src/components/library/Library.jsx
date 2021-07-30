import { makeStyles, useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ImportContacts from '@material-ui/icons/ImportContacts';

import ListTabPane from '../listTab/ListTabPane';
import Pane from '../pane/Pane';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/selectors';
import actions from '../../store/actions';

const Library = () => {
  const collapsed = useSelector(selectors.library.collapsed);
  const width = useSelector(selectors.library.paneWidth);
  const playlists = useSelector(selectors.data.playlists);
  const albums = useSelector(selectors.data.albums);
  const artists = useSelector(selectors.data.artists);
  const contentTabItems = {
    playlists: playlists,
    artists: artists,
    albums: albums,
  };

  const dispatch = useDispatch();

  const setCollapsed = (value) =>
    dispatch(actions.library.set({ collapsed: value }));

  const setWidth = (value) => {
    if (value) dispatch(actions.library.set({ paneWidth: value }));
  };

  const setCenterPage = (value) =>
    dispatch(actions.centerContent.setCurrentPage(value));

  const handleItemClick = (item) => {
    setCenterPage({
      ...item,
    });
  };

  const theme = useTheme();
  const classes = useStyles();
  return (
    <Pane
      rootStyle={{ backgroundColor: theme.palette.background[1] }}
      title='Library'
      collapseTo='left'
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      width={width}
      resize={(event, { size: { width } }) => setWidth(width)}
    >
      {/* header in pane component 10% + 16px */}
      <div
        className={classes.headerButton}
        onClick={() => setCenterPage({ type: 'home' })}
      >
        <HomeIcon className={classes.icon} /> HOME
      </div>
      <div
        className={classes.headerButton}
        onClick={() => setCenterPage({ type: 'library' })}
      >
        <ImportContacts className={classes.icon} />
        LIBRARY
      </div>
      {/* to home button 5% + 16px */}
      {/* to library button 5% + 16px */}
      <ListTabPane
        tabItems={contentTabItems}
        className={classes.listContentRoot}
        onItemClicked={handleItemClick}
      />
    </Pane>
  );
};

const useStyles = makeStyles((theme) => ({
  headerButton: {
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    // marginBottom: '16px',
    fontSize: theme.font.size[3],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    // padding: '12px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.font.color[1],
    },
  },
  icon: {
    paddingRight: '8px',
  },
  listContentRoot: {
    marginTop: '16px',
    height: 'calc(80% - 34px)',
  },
}));

export default Library;
