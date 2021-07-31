import { makeStyles } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlbumIcon from '@material-ui/icons/Album';

import selectors from '../../store/selectors';
import actions from '../../store/actions';
import AlbumHighlight from '../album/AlbumHighlight';
// import actions from '../../store/actions';

const LikedAlbumsPreview = () => {
  // const friends = [];

  const albums = useSelector(selectors.data.albums).slice(0, 20);

  const dispatch = useDispatch();

  const likedAlbumsClicked = () =>
    dispatch(
      actions.centerContent.setCurrentPage({
        type: 'liked_albums',
      }),
    );

  const classes = useStyles();

  const renderHighlights = () =>
    albums.map((album) => <AlbumHighlight album={album} />);

  return (
    <div className={classes.root}>
      <div className={classes.header} onClick={likedAlbumsClicked}>
        <AlbumIcon id="liked_albums_icon" className={classes.icon} />
        <h2 className={classes.titleText}>Liked Albums</h2>
      </div>
      <div className={classes.highlights}>{renderHighlights()}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.palette.border.radius[5],
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.font.size[6],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: 16,
    paddingBottom: 0,
    cursor: 'pointer',
    '&:hover > $titleText': {
      color: theme.font.color[1],
    },
    '&:hover > $icon': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  titleText: {
    flexShrink: 0,
    fontSize: theme.font.size[6],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
  },
  icon: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s',
  },
  highlights: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflowX: 'auto',
    gap: 16,
    margin: 16,
  },
}));

export default LikedAlbumsPreview;
