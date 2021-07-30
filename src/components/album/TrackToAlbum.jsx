import React from 'react';
import { useSelector } from 'react-redux';
import Album from './Album';
import selectors from '../../store/selectors';

const TrackToAlbum = ({ track }) => {
  console.log(track);
  const albums = useSelector(selectors.data.albums);
  const albumId = track.album.id;
  const album = albums.find((album) => albumId === album.id);
  return <Album album={album} />;
};

export default TrackToAlbum;
