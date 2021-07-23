import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import TrackItem from './TrackItem';

const TrackTable = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState({});

  const classes = useStyles();

  const trackElements = tracks.map((track) => (
    <TrackItem
      key={`track_table_${track.id}`}
      track={track}
      onTrackSelected={setSelectedTrack}
      selected={selectedTrack.id === track.id}
    />
  ));

  return <div className={classes.root}>{trackElements}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default TrackTable;
