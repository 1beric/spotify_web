import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FastAverageColor from 'fast-average-color';
import ArtistIcon from '../artist/ArtistIcon';
import selectors from '../../store/selectors';

const AlbumHeader = ({ album }) => {
  const albumArtists = album ? album.artists : [];

  const allArtists = useSelector(selectors.data.artists);
  const artists = albumArtists.map(
    (artist) => allArtists.find((value) => artist.id === value.id) || artist,
  );

  const [backgroundColor, setBackgroundColor] = useState(undefined);
  useEffect(() => {
    if (album) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(album.images[0].url)
        .then((response) => setBackgroundColor(response.value));
    }
  }, [album]);

  const jssProps = {
    cover: album ? `url(${album.images[0].url})` : '',
    background: backgroundColor,
  };
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
            <ArtistIcon
              key={`artist_list_${artist.id}`}
              artist={artist}
              first={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ background }) => {
      if (background) {
        return `rgba(${background[0] + 20},${background[1] + 20},${
          background[2] + 20
        }, .5)`;
      }
      return theme.palette.background[2];
    },
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexShrink: 0,
    width: '100%',
    height: 256,
    padding: 32,
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

const propTypes = {
  album: {},
};

const defaultProps = {
  album: {},
};

AlbumHeader.propTypes = propTypes;
AlbumHeader.defaultProps = defaultProps;

export default AlbumHeader;
