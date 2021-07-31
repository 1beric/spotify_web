import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import SmallHighlight from '../highlight/SmallHighlight';
import MediumHighlight from '../highlight/MediumHighlight';
import LargeHighlight from '../highlight/LargeHighlight';

const PlaylistHighlight = ({ playlist, small, large }) => {
  const imageObj = playlist && playlist.images && playlist.images[0];
  const image = imageObj
    ? imageObj.url
    : `${process.env.PUBLIC_URL}/blankTrack.png`;

  const dispatch = useDispatch();
  const goToPlaylist = () =>
    dispatch(actions.centerContent.setCurrentPage(playlist));

  let HighlightType = MediumHighlight;
  if (small) HighlightType = SmallHighlight;
  else if (large) HighlightType = LargeHighlight;

  return (
    <HighlightType
      title={playlist.name}
      image={image}
      onClicked={goToPlaylist}
    />
  );
};

export default PlaylistHighlight;
