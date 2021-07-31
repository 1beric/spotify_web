import React from 'react';
import { useSelector } from 'react-redux';
import Album from './Album';
import selectors from '../../store/selectors';

const TrackToAlbum = ({ track }) => {
  const albums = useSelector(selectors.data.albums);
  const albumId = track.album.id;
  const album = albums.find((album) => albumId === album.id) || track.album;
  return <Album album={album} selected={track} />;
};

export default TrackToAlbum;
