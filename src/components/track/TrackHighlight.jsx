import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import HighLight from '../highlight/Highlight';

const TrackHighlight = ({ track, rootStyle }) => {
  const dispatch = useDispatch();
  const setCurrentPage = () =>
    dispatch(actions.centerContent.setCurrentPage(track));

  return (
    <HighLight
      title={track.name}
      image={track.album.images[0]}
      onClicked={setCurrentPage}
      rootStyle={rootStyle}
    />
  );
};

export default TrackHighlight;
