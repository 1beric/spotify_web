import { makeStyles } from '@material-ui/core';
import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks, onTrackClicked }) => {
  const classes = useStyles();

  const trackElements = tracks.map((track) => (
    <TrackItem track={track} onTrackClicked={onTrackClicked} />
  ));

  return <div className={classes.root}>{trackElements}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default TrackList;
