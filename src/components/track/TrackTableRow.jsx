import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import TableRow from '../table/TableRow';

const TrackTableRow = ({ track, onTrackSelected, selected, albumId }) => {
  const dispatch = useDispatch();

  const setCenterPage = () => {
    dispatch(
      actions.centerContent.setCurrentPage({
        ...track,
        album: { id: albumId },
      }),
    );
  };

  const toggleTrackLiked = () => {};

  const selectTrack = () => {
    onTrackSelected((sTrack) => (sTrack.id === track.id ? {} : track));
  };

  const durationMinutes = Math.round(track.duration_ms / (1000 * 60) - 0.5);
  const durationSeconds =
    Math.round(track.duration_ms / 1000 - 0.5) - durationMinutes * 60;
  const duration = `${durationMinutes}:${
    durationSeconds < 10 ? 0 : ''
  }${durationSeconds}`;

  const classes = useStyles();

  const icons = (
    <>
      <FavoriteIcon className={classes.likedIcon} onClick={toggleTrackLiked} />
      <OpenInBrowserIcon className={classes.gotoIcon} onClick={setCenterPage} />
    </>
  );

  const values = [track.track_number, track.name, 9999999, icons, duration];

  return (
    <TableRow
      values={values}
      onSelected={selectTrack}
      hoverable
      selected={selected}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  likedIcon: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s, color .2s',
    '&:hover': {
      backgroundColor: theme.palette.background[8],
      color: theme.font.color[1],
    },
  },
  gotoIcon: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s, color .2s',
    '&:hover': {
      backgroundColor: theme.palette.background[8],
      color: theme.font.color[1],
    },
  },
}));

const propTypes = {
  track: {},
  onTrackSelected: PropTypes.func,
  selected: PropTypes.boolean,
  albumId: PropTypes.string,
};

const defaultProps = {
  track: {},
  onTrackSelected: () => {},
  selected: false,
  albumId: null,
};

TrackTableRow.propTypes = propTypes;
TrackTableRow.defaultProps = defaultProps;

export default TrackTableRow;
