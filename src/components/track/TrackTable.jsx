import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import TableRow from '../table/TableRow';
import TrackTableRow from './TrackTableRow';

const TrackTable = ({ tracks, albumId, selected }) => {
  const [selectedTrack, setSelectedTrack] = useState(selected || {});

  const classes = useStyles();

  const headerValues = ['#', 'TITLE', 'PLAYS', null, <TimerIcon />];
  const headerRootStyle = {
    marginBottom: 16,
  };
  const headerTextStyle = {
    fontWeight: 200,
  };

  const trackElements = tracks.map((track) => (
    <TrackTableRow
      key={`track_table_${track.id}`}
      track={track}
      onTrackSelected={setSelectedTrack}
      selected={selectedTrack.id === track.id}
      albumId={albumId}
    />
  ));

  return (
    <div className={classes.root}>
      <TableRow
        values={headerValues}
        onSelected={() => {}}
        hoverable={false}
        selected={false}
        rootStyle={headerRootStyle}
        textStyle={headerTextStyle}
      />
      {trackElements}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 32px',
    marginTop: 16,
  },
}));

const propTypes = {
  tracks: PropTypes.array,
  albumId: PropTypes.string,
};

const defaultProps = {
  tracks: [],
  albumId: null,
};

TrackTable.propTypes = propTypes;
TrackTable.defaultProps = defaultProps;
export default TrackTable;
