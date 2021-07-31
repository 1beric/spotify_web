import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import SmallHighlight from '../highlight/SmallHighlight';
import MediumHighlight from '../highlight/MediumHighlight';
import LargeHighlight from '../highlight/LargeHighlight';

const ArtistHighlight = ({ artist, small, large }) => {
  const imageObj = artist && artist.images && artist.images[0];
  const image = imageObj
    ? imageObj.url
    : `${process.env.PUBLIC_URL}/blankProfile.png`;

  const dispatch = useDispatch();
  const goToArtist = () =>
    dispatch(actions.centerContent.setCurrentPage(artist));

  let HighlightType = MediumHighlight;
  if (small) HighlightType = SmallHighlight;
  else if (large) HighlightType = LargeHighlight;

  return (
    <HighlightType title={artist.name} image={image} onClicked={goToArtist} />
  );
};

export default ArtistHighlight;
