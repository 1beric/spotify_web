import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FastAverageColor from 'fast-average-color';
import ArtistHighlight from '../artist/ArtistHighlight';
import selectors from '../../store/selectors';
import actions from '../../store/actions';

const AlbumHeader = ({ album }) => {
  const albumArtists = album ? album.artists : [];

  const allArtists = useSelector(selectors.data.artists);
  const artists = albumArtists.map(
    (artist) => allArtists.find((value) => artist.id === value.id) || artist,
  );

  const backgroundColor = useSelector(selectors.centerContent.background);

  const dispatch = useDispatch();

  useEffect(() => {
    if (album) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(album.images[0].url)
        .then((response) =>
          dispatch(actions.centerContent.set({ background: response.hex })),
        );
    }
  }, [album]);

  const jssProps = {
    background: backgroundColor,
  };
  const classes = useStyles(jssProps);

  if (!album) return <div className={classes.root} />;

  const imageObj = album && album.images && album.images[0];
  const image = imageObj
    ? imageObj.url
    : `${process.env.PUBLIC_URL}/blankTrack.png`;

  const subtitle = [album.album_type.toUpperCase(), album.release_date].join(
    ' | ',
  );

  return (
    <div className={classes.root}>
      <img src={image} alt={album.name} className={classes.img} />
      <div className={classes.textStack}>
        <h4 className={classes.subtitle}>{subtitle}</h4>
        <h1 className={classes.albumTitle}>{album.name}</h1>
        <div className={classes.subsection}>
          {artists.map((artist) => (
            <ArtistHighlight
              key={`artist_list_${artist.id}`}
              artist={artist}
              small
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
        return background;
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
  img: {
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
    color: theme.font.color[2],
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
    color: theme.font.color[2],
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
