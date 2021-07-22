import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
const ArtistIcon = ({ artist, first }) => {
  const image = artist.images[0];

  const dispatch = useDispatch();

  const goToArtist = () =>
    dispatch(actions.centerContent.setCurrentPage(artist));

  const jssProps = {
    first: first,
  };
  const classes = useStyles(jssProps);

  return (
    <div className={classes.root} onClick={goToArtist}>
      {image && (
        <img className={classes.img} src={image.url} alt={artist.name} />
      )}
      <p className={classes.text}>{artist.name}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    alignItems: 'center',
    backgroundColor: theme.palette.background[3],
    borderRadius: theme.palette.border.radius[4],
    marginLeft: ({ first }) => (first ? 0 : 8),
    cursor: 'pointer',
    '&:hover > p': {
      color: theme.font.color[1],
    },
    '&:hover > img': {
      //   border: `${theme.palette.border.width[1]} solid ${theme.palette.border.color[7]}`,
    },
  },
  img: {
    flexShrink: 0,
    height: 32,
    width: 32,
    filter: 'blur(0px)',
    transition: 'height 1s, opacity 1s, filter 1s',
  },
  text: {
    flexShrink: 0,
    display: 'block',
    fontSize: theme.font.size[2],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    wordWrap: 'wrap',
    color: theme.font.color[4],
    padding: 8,
    transition: 'transform 1s, width 1s',
  },
}));

export default ArtistIcon;
