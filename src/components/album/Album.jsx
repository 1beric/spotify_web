import { makeStyles } from '@material-ui/core';
import React from 'react';
import ListTabItem from '../listTab/ListTabItem';
import AlbumHeader from './AlbumHeader';
import TrackTable from '../track/TrackTable';

const Album = ({ album }) => {
  const classes = useStyles();

  if (!album) return <div className={classes.root} />;

  return (
    <div className={classes.root}>
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <AlbumHeader album={album} />
        <TrackTable tracks={album.tracks.items} albumId={album.id} />
        {Object.keys(album).map((key) => {
          const value =
            typeof album[key] === 'object'
              ? JSON.stringify(album[key])
              : album[key];
          const title = `${key}: ${value}`;
          return <ListTabItem key={title} item={{ name: title }} />;
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    position: 'relative',
  },
}));

const propTypes = {
  album: {},
};

const defaultProps = {
  album: {},
};

Album.propTypes = propTypes;
Album.defaultProps = defaultProps;
export default Album;
