import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import SmallHighlight from '../highlight/SmallHighlight';
import MediumHighlight from '../highlight/MediumHighlight';
import LargeHighlight from '../highlight/LargeHighlight';

const TrackHighlight = ({ track, small, large }) => {
  const imageObj =
    track && track.album && track.album.images && track.album.images[0];
  const image = imageObj
    ? imageObj.url
    : `${process.env.PUBLIC_URL}/blankTrack.png`;

  const dispatch = useDispatch();
  const goToTrack = () => dispatch(actions.centerContent.setCurrentPage(track));

  let HighlightType = MediumHighlight;
  if (small) HighlightType = SmallHighlight;
  else if (large) HighlightType = LargeHighlight;

  return (
    <HighlightType title={track.name} image={image} onClicked={goToTrack} />
  );
};

export default TrackHighlight;
