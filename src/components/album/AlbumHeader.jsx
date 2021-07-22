import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ArtistIcon from '../artist/ArtistIcon';
import ListTab from '../listTab/ListTab';
import ListTabItem from '../listTab/ListTabItem';
import TrackItem from './TrackItem';
import selectors from '../../store/selectors';
import index from '../../store/actions';

const AlbumHeader = ({ album }) => {
  const albumArtists = album.artists.map((artist) => artist.id);

  const allArtists = useSelector(selectors.data.artists);
  // .filter((artist) =>
  //   albumArtists.includes(artist.id),
  // );
  const artistIndex = Math.random() * (allArtists.length - 1);
  const artists = allArtists.slice(artistIndex, artistIndex + 5);
  console.log('albumArtists', albumArtists);
  console.log('artists', artists);

  const jssProps = { cover: `url(${album.images[0].url})` };
  const classes = useStyles(jssProps);

  if (!album) return <div className={classes.root} />;

  return (
    <div className={classes.root}>
      <img
        src={album.images[0].url}
        alt={album.name}
        className={classes.image}
      />
      <div className={classes.textStack}>
        <h4 className={classes.albumType}>{album.album_type.toUpperCase()}</h4>
        <h1 className={classes.albumTitle}>{album.name}</h1>
        <div className={classes.subtitle}>
          {artists.map((artist, index) => (
            <ArtistIcon artist={artist} first={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexShrink: 0,
    width: '100%',
    padding: '32px 0px',
    height: 256,
  },
  textStack: {
    display: 'flex',
    width: 'calc(100% - 288px)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    flexShrink: 0,
    marginLeft: 16,
    overflowX: 'auto',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
  },
  image: {
    flexShrink: 0,
    height: 256,
    filter: 'blur(0px)',
    transition: 'height 1s, opacity 1s, filter 1s',
  },
  albumTitle: {
    flexShrink: 0,
    display: 'block',
    // width: '100%',
    fontSize: theme.font.size[11],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[500],
    whiteSpace: 'nowrap',
    color: theme.font.color[4],
    padding: '8px 0px',
    transition: 'transform 1s, width 1s',
  },
  albumType: {
    flexShrink: 0,
    display: 'block',
    fontSize: theme.font.size[3],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[300],
    wordWrap: 'wrap',
    color: theme.font.color[4],
  },
}));

export default AlbumHeader;
