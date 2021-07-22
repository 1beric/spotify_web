import React from 'react';
import { useSelector } from 'react-redux';
import Album from './Album';
import selectors from '../../store/selectors';

const TrackToAlbum = ({ track }) => {
  const albums = useSelector(selectors.data.albums);
  const albumId = track.album.id;
  const filteredAlbums = albums.filter((album) => albumId === album.id);
  let album = null;
  if (filteredAlbums.length > 0) album = filteredAlbums[0];

  return <Album album={album} />;
};

export default TrackToAlbum;
