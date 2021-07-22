import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import selectors from '../../store/selectors';
import actions from '../../store/actions';
import TrackHighlight from '../track/TrackHighlight';
// import actions from '../../store/actions';

const LikedTracksPreview = () => {
  // const friends = [];

  let amt = 20;
  const tracks = useSelector(selectors.data.tracks).slice(0, amt);
  amt = tracks.length;

  const dispatch = useDispatch();

  const handleTrackClicked = (track) =>
    dispatch(actions.centerContent.setCurrentPage(track));

  const likedTracksClicked = () =>
    dispatch(
      actions.centerContent.setCurrentPage({
        type: 'liked_tracks',
      }),
    );

  const classes = useStyles();

  const highlights = [];
  for (let index = 0; index < amt / 2; index++) {
    const trackTop = tracks[index];
    const trackBot = tracks[index + amt / 2];
    highlights.push(
      <div className={classes.highlightStack}>
        <TrackHighlight
          track={trackTop}
          onTrackClicked={handleTrackClicked}
          first={index === 0}
          last={index + amt / 2 === tracks.length - 1}
          bottomMargin={true}
        />
        <TrackHighlight
          track={trackBot}
          onTrackClicked={handleTrackClicked}
          first={index === 0}
          last={index + amt / 2 === tracks.length - 1}
          bottomMargin={false}
        />
      </div>,
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.title} onClick={likedTracksClicked}>
        <FavoriteIcon className={classes.icon} />
        <h2 className={classes.titleText}>Liked Tracks</h2>
      </div>
      <div className={classes.highlights}>{highlights}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.background[3],
    borderRadius: theme.palette.border.radius[5],
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.font.size[6],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: 16,
    paddingBottom: 0,
    cursor: 'pointer',
    '&:hover > h2': {
      color: theme.font.color[1],
    },
    '&:hover > svg': {
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
    overflowX: 'auto',
    margin: 16,
  },
  highlightStack: {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
  },
}));

export default LikedTracksPreview;
