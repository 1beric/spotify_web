import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/selectors';
import ListTab from '../listTab/ListTab';
import LikedAlbumsPreview from './LikedAlbumsPreview';
import LikedArtistsPreview from './LikedArtistsPreview';
import LikedTracksPreview from './LikedTracksPreview';
import PlaylistsPreview from './PlaylistsPreview';
// import actions from '../../store/actions';

const Home = () => {
  // const friends = [];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <h1 className={classes.title}>Good {timeText}</h1> */}
      {/* <ListTab title='HOME PAGE' selected={true} /> */}
      <PlaylistsPreview />
      <LikedTracksPreview />
      <LikedAlbumsPreview />
      <LikedArtistsPreview />
      {/* Recently played */}
      {/* Recently released tracks/albums for followed artists */}
      {/* Random selections: 
        | Top playlists
        | Top artists
        | Top tracks
        | Top albums
        | Top genres
        | Artists similar to a top artist 
        | Top artists for top genre
        | Top playlists for top genre
        | Top tracks for top genre
        | Top tracks
        */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'auto',
    height: '90%',
  },
}));

export default Home;
