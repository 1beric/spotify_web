import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/selectors';
import ListTab from '../listTab/ListTab';
import LikedTracksPreview from './LikedTracksPreview';
// import actions from '../../store/actions';

const Home = () => {
  // const friends = [];

  const timeText = 'Evening';

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <h1 className={classes.title}>Good {timeText}</h1> */}
      {/* <ListTab title='HOME PAGE' selected={true} /> */}
      <LikedTracksPreview />
      {/* Liked Songs (plus top 10 songs) */}
      {/* Recently played */}
      {/* Recently released tracks/albums for followed artists */}
      {/* Random selections 
        | top playlists
        | top artists
        | top tracks
        | top albums
        | top genres
        | artists similar to a top artist 
        | top artists for top genre
        | top playlists for top genre
        | top tracks for top genre
        | top tracks
        */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: theme.font.size[8],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: 16,
  },
}));

export default Home;
