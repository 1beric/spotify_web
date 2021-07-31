import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import SmallHighlight from '../highlight/SmallHighlight';
import MediumHighlight from '../highlight/MediumHighlight';
import LargeHighlight from '../highlight/LargeHighlight';

const AlbumHighlight = ({ album, small, large }) => {
  const imageObj = album && album.images && album.images[0];
  const image = imageObj
    ? imageObj.url
    : `${process.env.PUBLIC_URL}/blankTrack.png`;

  const dispatch = useDispatch();
  const goToAlbum = () => dispatch(actions.centerContent.setCurrentPage(album));

  let HighlightType = MediumHighlight;
  if (small) HighlightType = SmallHighlight;
  else if (large) HighlightType = LargeHighlight;

  return (
    <HighlightType title={album.name} image={image} onClicked={goToAlbum} />
  );
};

export default AlbumHighlight;
