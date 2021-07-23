import { makeStyles } from '@material-ui/core';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';

const TrackItem = ({ track, onTrackSelected, selected }) => {
  const dispatch = useDispatch();

  const setCenterPage = (track) =>
    dispatch(actions.centerContent.setCurrentPage(track));

  const durationMinutes = Math.round(track.duration_ms / (1000 * 60) - 0.5);
  const durationSeconds =
    Math.round(track.duration_ms / 1000 - 0.5) - durationMinutes * 60;
  const duration = `${durationMinutes}:${
    durationSeconds < 10 ? 0 : ''
  }${durationSeconds}`;
  console.log(duration);

  const classes = useStyles();

  return (
    <div
      className={selected ? classes.selectedRoot : classes.root}
      onClick={() =>
        onTrackSelected((selectedTrack) =>
          selectedTrack.id === track.id ? {} : track,
        )
      }
    >
      <div className={classes.trackNumber}>
        <p className={classes.text}>{track.track_number}</p>
      </div>
      <p className={`${classes.text} ${classes.trackTitle}`}>{track.name}</p>
      <p className={`${classes.text} ${classes.trackPlays}`}>
        {Math.round(Math.random() * 1000000)}
      </p>
      <p className={`${classes.text} ${classes.trackLiked}`}>
        <FavoriteIcon className={classes.icon} />
      </p>
      <p className={`${classes.text} ${classes.trackLength}`}>{duration}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 16px)',
    padding: 8,
    borderRadius: theme.palette.border.radius[3],
    '&:hover': {
      backgroundColor: theme.palette.background[3],
    },
  },
  selectedRoot: {
    // height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 16px)',
    padding: 8,
    backgroundColor: theme.palette.background[4],
    borderRadius: theme.palette.border.radius[3],
  },
  cell: {},
  trackNumber: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '5%',
  },
  trackTitle: {
    flexShrink: 0,
    margin: '0px 8px',
    width: '50%',
    textAlign: 'center',
  },
  trackPlays: {
    flexShrink: 0,
    margin: '0px 8px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '15%',
  },
  trackLiked: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  trackLength: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  text: {
    display: 'flex',
    fontSize: theme.font.size[3],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    whiteSpace: 'nowrap',
  },
}));

export default TrackItem;
