import { makeStyles } from '@material-ui/core';
import React from 'react';
import ListTab from '../listTab/ListTab';
import ListTabItem from '../listTab/ListTabItem';
import AlbumHeader from './AlbumHeader';
import TrackItem from './TrackItem';

const Album = ({ album }) => {
  const classes = useStyles();

  if (!album) return <div className={classes.root} />;

  return (
    <div className={classes.root}>
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <AlbumHeader album={album} />
        {Object.keys(album).map((key) => {
          const value =
            typeof album[key] === 'object'
              ? JSON.stringify(album[key])
              : album[key];
          const title = `${key}: ${value}`;
          return <ListTabItem item={{ name: title }} />;
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
  },
}));

export default Album;
