import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ArtistIcon from '../artist/ArtistIcon';
import selectors from '../../store/selectors';

const AlbumHeader = ({ album }) => {
  const albumArtists = album ? album.artists : [];

  const allArtists = useSelector(selectors.data.artists);
  const artists = albumArtists.map(
    (artist) => allArtists.find((value) => artist.id === value.id) || artist,
  );
  // allArtists.slice(artistIndexStart, artistIndexStart + artistIndexOffset);
  // console.log('albumArtists', albumArtists);
  // console.log('artists', artists);

  const jssProps = { cover: album ? `url(${album.images[0].url})` : '' };
  const classes = useStyles(jssProps);

  if (!album) return <div className={classes.root} />;

  const subtitle = [album.album_type.toUpperCase(), album.release_date].join(
    ' | ',
  );

  return (
    <div className={classes.root}>
      <img
        src={album.images[0].url}
        alt={album.name}
        className={classes.image}
      />
      <div className={classes.textStack}>
        <h4 className={classes.subtitle}>{subtitle}</h4>
        <h1 className={classes.albumTitle}>{album.name}</h1>
        <div className={classes.subsection}>
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
  subsection: {
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
  subtitle: {
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
